import { useState } from 'react';
import { getConfidenceColor } from '../utils/helpers';

const ResultCard = ({ combo, diffType }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeCareerIndex, setActiveCareerIndex] = useState(0);

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  let borderColor = 'border-navy-700';
  let opacityClass = 'opacity-100';
  
  if (diffType === 'gained') {
    borderColor = 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]';
  } else if (diffType === 'lost') {
    borderColor = 'border-red-500/30';
    opacityClass = 'opacity-60 grayscale-[50%] hover:grayscale-0 hover:opacity-100 transition-all';
  }

  const activeCareer = combo.careers[activeCareerIndex];

  return (
    <div className={`card ${borderColor} ${opacityClass} mb-4`}>
      {/* Header */}
      <div className="p-5 flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold font-display text-white">{combo.label}</h3>
            {diffType && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide
                ${diffType === 'gained' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
              >
                {diffType === 'gained' ? '+ Gained' : '− Lost'}
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm mb-3 line-clamp-2">{combo.note}</p>
          <div className="flex flex-wrap gap-1.5">
            {combo.subjects.map((sub, i) => (
              <span key={i} className="text-xs bg-navy-900 text-slate-300 px-2 py-1 rounded border border-navy-700">
                {sub.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="border-t border-navy-700 bg-navy-900/50">
        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-navy-700">
          {combo.careers.map((career, index) => (
            <button
              key={index}
              onClick={() => setActiveCareerIndex(index)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors border-b-2 
                ${index === activeCareerIndex 
                  ? 'text-amber-500 border-amber-500 bg-amber-500/5' 
                  : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-navy-800'}`}
            >
              {career.title}
            </button>
          ))}
        </div>

        {/* Active Career Detail */}
        {activeCareer && (
          <div className="p-5">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-navy-800 p-2 rounded-lg text-slate-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-slate-300 text-sm mb-3">{activeCareer.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {activeCareer.industries.map((ind, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                      {ind}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 bg-navy-950 p-3 rounded-lg border border-navy-800">
                  <div>
                    <span className="block text-xs text-slate-500 mb-1">Est. Salary</span>
                    <span className="font-semibold text-amber-500">{activeCareer.salary}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-1">Required Exams</span>
                    <div className="flex flex-wrap gap-1">
                      {activeCareer.exams.map((exam, i) => (
                        <span key={i} className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Higher Ed */}
            <div className="mt-2">
              <button 
                onClick={toggleExpand}
                className="flex items-center justify-between w-full text-sm text-slate-400 hover:text-white transition-colors py-2 border-t border-navy-800 mt-2"
              >
                <span>View Higher Education Options</span>
                <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expanded && (
                <div className="pt-3 pb-1 space-y-3 animate-fade-in">
                  {combo.higherEducation.map((edu, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-navy-800 p-3 rounded border border-navy-700">
                      <div>
                        <div className="font-medium text-slate-200">{edu.degree}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{edu.where}</div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        Exam: {edu.exam}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
