import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LevelCard from '../components/LevelCard';
import SubjectPicker from '../components/SubjectPicker';
import { computeResults, reverseLookup } from '../utils/matchEngine';
import { combinations } from '../data/combinations';
import { getSubjectsByLevel } from '../data/subjects';

const Explore = () => {
  const navigate = useNavigate();
  
  // State
  const [level, setLevel] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isReverseMode, setIsReverseMode] = useState(false);
  const [reverseQuery, setReverseQuery] = useState('');
  const [reverseResults, setReverseResults] = useState([]);

  // Handlers
  const handleLevelSelect = (selectedLevel) => {
    if (level !== selectedLevel) {
      setLevel(selectedLevel);
      setSelectedSubjects([]); // Reset subjects on level change
      setReverseResults([]);
    }
  };

  const handleAddSubject = (subject) => {
    setSelectedSubjects(prev => [...prev, subject]);
  };

  const handleRemoveSubject = (subjectId) => {
    setSelectedSubjects(prev => prev.filter(s => s.id !== subjectId));
  };

  const handleReverseSearch = (e) => {
    e.preventDefault();
    if (!level || !reverseQuery.trim()) return;
    
    const results = reverseLookup(reverseQuery, level, combinations);
    setReverseResults(results);
  };

  const handleExplore = async () => {
    if (!level || selectedSubjects.length === 0) return;
    
    setLoading(true);
    try {
      const results = await computeResults(selectedSubjects, level);
      
      // Navigate to results page passing state
      navigate('/results', { 
        state: { 
          level, 
          subjects: selectedSubjects, 
          results 
        } 
      });
    } catch (error) {
      console.error("Exploration failed", error);
      setLoading(false);
    }
  };

  // Determine current step for UI
  let currentStep = 1;
  if (level) currentStep = 2;
  if (level && (selectedSubjects.length > 0 || isReverseMode)) currentStep = 3;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Chart Your Path</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Follow our guided navigator to discover the subjects and careers that align with your future goals.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="mb-12 relative max-w-3xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-navy-800 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-amber-500 -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
          style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
        ></div>
        
        <div className="relative z-10 flex justify-between">
          {[
            { num: 1, label: 'LEVEL' },
            { num: 2, label: 'SUBJECTS' },
            { num: 3, label: 'RESULTS' }
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center bg-navy-950 px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition-colors duration-300
                ${currentStep >= step.num 
                  ? 'bg-amber-500 text-navy-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
                  : 'bg-navy-800 text-slate-500 border border-navy-700'}`}
              >
                {step.num}
              </div>
              <span className={`text-xs font-bold tracking-wider ${currentStep >= step.num ? 'text-white' : 'text-slate-500'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Level Selection */}
      <div className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
          <span className="w-1.5 h-8 bg-amber-500 rounded-full mr-3"></span>
          Step 1: Where are you now?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <LevelCard 
            level="school" 
            label="School" 
            isActive={level === 'school'} 
            onClick={handleLevelSelect} 
          />
          <LevelCard 
            level="undergraduate" 
            label="Junior College" 
            isActive={level === 'undergraduate'} 
            onClick={handleLevelSelect} 
          />
          <LevelCard 
            level="postgraduate" 
            label="Graduate" 
            isActive={level === 'postgraduate'} 
            onClick={handleLevelSelect} 
          />
        </div>
      </div>

      {/* Step 2: Subject Selection */}
      <div className={`transition-all duration-500 ${level ? 'opacity-100 translate-y-0' : 'opacity-50 pointer-events-none translate-y-4'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-bold text-white flex items-center">
            <span className={`w-1.5 h-8 rounded-full mr-3 ${level ? 'bg-amber-500' : 'bg-navy-700'}`}></span>
            Step 2: {isReverseMode ? 'Find by Career' : 'Pick your interests'}
          </h2>
          
          {level && (
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-sm text-slate-400 mr-3">Find subjects for a career instead</span>
              <button 
                onClick={() => setIsReverseMode(!isReverseMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isReverseMode ? 'bg-amber-500' : 'bg-navy-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isReverseMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          )}
        </div>

        {level && (
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 shadow-xl">
            {isReverseMode ? (
              <div className="animate-fade-in">
                <form onSubmit={handleReverseSearch} className="mb-8">
                  <label className="block text-sm font-medium text-slate-400 mb-2">What career do you want?</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={reverseQuery}
                      onChange={(e) => setReverseQuery(e.target.value)}
                      placeholder="e.g., Data Scientist, Architect, Therapist..."
                      className="flex-1 bg-navy-950 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button type="submit" className="btn-primary whitespace-nowrap">
                      Search
                    </button>
                  </div>
                </form>

                {reverseResults.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Recommended Subject Combinations</h4>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {reverseResults.map(combo => (
                        <div key={combo.id} className="bg-navy-950 border border-navy-800 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-amber-500/50 transition-colors">
                          <div>
                            <div className="font-bold text-white mb-2">{combo.label}</div>
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {combo.subjects.map(subId => (
                                <span key={subId} className="text-xs bg-navy-800 text-slate-300 px-2 py-1 rounded">
                                  {subId.replace(/-/g, ' ')}
                                </span>
                              ))}
                            </div>
                            <div className="text-xs text-amber-500">
                              Matches: {combo.matchedCareers.map(c => c.title).join(', ')}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setIsReverseMode(false);
                              const allSubs = getSubjectsByLevel(level);
                              const toSelect = allSubs.filter(s => combo.subjects.includes(s.id));
                              setSelectedSubjects(toSelect);
                            }}
                            className="btn-ghost text-sm py-2 px-4 whitespace-nowrap"
                          >
                            Use This Combo
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {reverseQuery && reverseResults.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    No exact matches found. Try broadening your search.
                  </div>
                )}
              </div>
            ) : (
              <SubjectPicker 
                level={level}
                selectedSubjects={selectedSubjects}
                onAdd={handleAddSubject}
                onRemove={handleRemoveSubject}
              />
            )}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className={`mt-12 flex justify-end transition-all duration-500 ${currentStep === 3 && !isReverseMode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none hidden'}`}>
        <button 
          onClick={handleExplore}
          disabled={loading || selectedSubjects.length === 0}
          className={`btn-primary flex items-center text-lg px-8 ${loading ? 'opacity-70 cursor-wait' : ''}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Data...
            </>
          ) : (
            <>
              See What's Possible
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Bottom Hero / Trust section */}
      {!level && (
        <div className="mt-24 pt-16 border-t border-navy-800 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 bg-navy-900 rounded-full mb-6">
            <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Join 50,000+ explorers</h3>
          <p className="text-slate-400 mb-4">Discovering data-backed career trajectories.</p>
          <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 font-bold px-4 py-1.5 rounded-full text-sm">
            98% SUCCESS RATE
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
