import { useState } from 'react';
import SubjectPicker from './SubjectPicker';
import SubjectTag from './SubjectTag';

const SwapPanel = ({ currentSubjects, level, onSwap, onClose }) => {
  const [subjectToReplace, setSubjectToReplace] = useState(null);
  const [replacementSubject, setReplacementSubject] = useState(null);

  const handleApply = () => {
    if (subjectToReplace && replacementSubject) {
      onSwap(subjectToReplace.id, replacementSubject);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-navy-900 shadow-2xl border-l border-navy-700 z-50 animate-fade-in flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-navy-700 flex justify-between items-center bg-navy-950">
        <div>
          <h2 className="text-xl font-display font-bold text-white">Swap a Subject</h2>
          <p className="text-sm text-slate-400">See how changing one subject alters your path</p>
        </div>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {/* Step A: Select subject to replace */}
        <div className="mb-8">
          <h3 className="section-label">1. Select subject to replace</h3>
          <div className="flex flex-wrap gap-2">
            {currentSubjects.map(sub => (
              <button
                key={sub.id}
                onClick={() => {
                  setSubjectToReplace(sub);
                  setReplacementSubject(null);
                }}
                className={`text-left transition-all ${
                  subjectToReplace?.id === sub.id 
                    ? 'ring-2 ring-red-500 scale-105 opacity-100' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <SubjectTag subject={sub} />
              </button>
            ))}
          </div>
        </div>

        {/* Step B: Select new subject */}
        {subjectToReplace && (
          <div className="animate-slide-up">
            <h3 className="section-label">2. Select replacement</h3>
            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block mb-1">Replacing</span>
                <span className="text-red-400 font-medium line-through decoration-red-500/50">{subjectToReplace.name}</span>
              </div>
              <div className="text-slate-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block mb-1">With</span>
                {replacementSubject ? (
                  <span className="text-green-400 font-medium">{replacementSubject.name}</span>
                ) : (
                  <span className="text-slate-600 italic">Select below</span>
                )}
              </div>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
              <SubjectPicker 
                level={level}
                selectedSubjects={replacementSubject ? [replacementSubject] : []}
                onAdd={(sub) => setReplacementSubject(sub)}
                onRemove={() => setReplacementSubject(null)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-navy-700 bg-navy-950">
        <div className="flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 btn-ghost"
          >
            Cancel
          </button>
          <button 
            onClick={handleApply}
            disabled={!subjectToReplace || !replacementSubject}
            className={`flex-1 btn-primary ${(!subjectToReplace || !replacementSubject) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Apply Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapPanel;
