import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import PathwayTimeline from '../components/PathwayTimeline';
import EmptyState from '../components/EmptyState';
import SwapPanel from '../components/SwapPanel';
import SubjectTag from '../components/SubjectTag';
import { useSavedCombinations } from '../hooks/useSavedCombinations';
import { getConfidenceLabel, getConfidenceColor } from '../utils/helpers';
import { computeResults } from '../utils/matchEngine';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { saveCombo, isAlreadySaved } = useSavedCombinations();
  
  const state = location.state;
  
  const [level, setLevel] = useState(state?.level || '');
  const [subjects, setSubjects] = useState(state?.subjects || []);
  const [results, setResults] = useState(state?.results || []);
  
  const [swapMode, setSwapMode] = useState(false);
  const [diffResults, setDiffResults] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Redirect if no state
  useEffect(() => {
    if (!state || !state.subjects || state.subjects.length === 0) {
      navigate('/explore');
    }
  }, [state, navigate]);

  // Check if saved
  useEffect(() => {
    if (level && subjects.length > 0) {
      setIsSaved(isAlreadySaved(level, subjects));
    }
  }, [level, subjects, isAlreadySaved]);

  const handleSave = () => {
    if (!isSaved && results.length > 0) {
      saveCombo(level, subjects, results);
      setIsSaved(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleSwap = async (oldSubjectId, newSubject) => {
    setSwapMode(false);
    const newSubjects = subjects.filter(s => s.id !== oldSubjectId);
    newSubjects.push(newSubject);
    
    // In a real app, we'd show a loading state here
    const newResults = await computeResults(newSubjects, level);
    
    // Compare old vs new results to set diffType
    const enhancedNewResults = newResults.map(newRes => {
      const existedInOld = results.find(r => r.id === newRes.id);
      return {
        ...newRes,
        diffType: existedInOld ? null : 'gained'
      };
    });

    // Find lost results
    const lostResults = results.filter(oldRes => !newResults.find(r => r.id === oldRes.id))
      .map(res => ({ ...res, diffType: 'lost' }));
      
    // Combine for diff view
    setDiffResults([...enhancedNewResults, ...lostResults].sort((a, b) => {
      if (a.diffType === 'gained') return -1;
      if (b.diffType === 'gained') return 1;
      return 0;
    }));
    
    // Update main state
    setSubjects(newSubjects);
    setResults(newResults);
  };

  const displayResults = diffResults ? diffResults : [...results].sort((a, b) => b.score - a.score);

  if (!state || !state.subjects || state.subjects.length === 0) return null;

  const topScore = displayResults[0]?.score || 0;
  const confidenceLabel = getConfidenceLabel(topScore);
  const confidenceColor = getConfidenceColor(confidenceLabel);

  return (
    <div className="bg-navy-950 min-h-screen pb-24">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-navy-900 border-b border-navy-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Breadcrumb */}
            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase flex items-center flex-wrap gap-2">
              <Link to="/explore" className="hover:text-white transition-colors">EXPLORE</Link>
              <span>&gt;</span>
              <span className="text-white">RESULTS</span>
              <span>&gt;</span>
              <span className="text-amber-500">{level}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSwapMode(true)}
                className="btn-ghost py-2 text-sm flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Swap a Subject
              </button>
              <button 
                onClick={handleSave}
                disabled={isSaved}
                className={`py-2 px-4 rounded-lg font-bold text-sm flex items-center transition-all ${
                  isSaved 
                    ? 'bg-slate-800 text-amber-500 border border-amber-500/30' 
                    : 'bg-amber-500 text-navy-950 hover:bg-amber-400'
                }`}
              >
                {isSaved ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                    Saved
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save Pathway
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Results */}
          <div className="lg:w-2/3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {subjects.map(sub => (
                  <SubjectTag key={sub.id} subject={sub} />
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white">Future Career Pathways</h1>
                {results.length > 0 && (
                  <div className={`px-3 py-1 rounded text-sm whitespace-nowrap ${confidenceColor}`}>
                    {confidenceLabel} / {Math.round(topScore * 100)}% Confidence
                  </div>
                )}
              </div>
            </div>

            {/* Results List */}
            {displayResults.length === 0 ? (
              <EmptyState 
                title="No Direct Pathways Found"
                message="This specific combination is highly unusual. Try swapping a subject to see established career paths."
                action={
                  <button onClick={() => setSwapMode(true)} className="btn-primary mt-4">
                    Swap Subject
                  </button>
                }
              />
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-navy-800 pb-2 mb-4">
                  <h3 className="text-lg font-bold text-slate-300">Recommended Roles</h3>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Sorted by Match Score</span>
                </div>
                
                {displayResults.map((combo, idx) => (
                  <ResultCard key={idx} combo={combo} diffType={combo.diffType} />
                ))}

                {/* Info Cards (Bottom of left col) */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl">
                    <h4 className="font-bold text-white mb-2">Industry Growth</h4>
                    <p className="text-sm text-slate-400 mb-4">Tech and Analytics sectors show the highest growth for your combination.</p>
                    <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-green-500 w-[85%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>Current</span>
                      <span>Projected (+85%)</span>
                    </div>
                  </div>
                  
                  <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl flex items-center">
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-navy-800 stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-amber-500 stroke-current" strokeDasharray="24, 100" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">24%</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Skill Gap Analysis</h4>
                      <p className="text-xs text-slate-400">You are 24% away from optimal cross-disciplinary readiness. Consider adding an Arts subject.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-40">
              {displayResults.length > 0 && displayResults[0].higherEducation && (
                <PathwayTimeline higherEducation={displayResults[0].higherEducation} />
              )}
            </div>
          </div>
          
          {/* Mobile Sidebar (Shows at bottom) */}
          <div className="lg:hidden mt-8">
            {displayResults.length > 0 && displayResults[0].higherEducation && (
              <PathwayTimeline higherEducation={displayResults[0].higherEducation} />
            )}
          </div>
        </div>
      </div>

      {/* Overlays */}
      {swapMode && (
        <>
          <div 
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40"
            onClick={() => setSwapMode(false)}
          ></div>
          <SwapPanel 
            currentSubjects={subjects} 
            level={level} 
            onSwap={handleSwap} 
            onClose={() => setSwapMode(false)} 
          />
        </>
      )}

      {/* Toast Notification */}
      <div className={`fixed bottom-4 right-4 bg-green-500 text-navy-950 font-bold px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 z-50 flex items-center ${showToast ? 'translate-y-0' : 'translate-y-24'}`}>
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Pathway Saved!
      </div>
    </div>
  );
};

export default Results;
