const PathwayTimeline = ({ higherEducation }) => {
  if (!higherEducation || higherEducation.length === 0) return null;

  return (
    <div className="card p-6 border-navy-700">
      <h3 className="text-lg font-display font-bold text-white mb-6">Where can you study next?</h3>
      
      <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-700 before:to-transparent">
        
        {/* Stage 01 */}
        <div className="relative">
          <div className="absolute left-[-24px] top-1 mt-1 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 border-2 border-navy-950"></div>
          <div>
            <div className="text-xs font-bold tracking-wider text-amber-500 mb-1">STAGE 01 &bull; IMMEDIATE</div>
            {higherEducation[0] && (
              <div className="bg-navy-900 rounded-lg p-3 border border-navy-700 hover:border-amber-500/50 transition-colors">
                <div className="font-bold text-white mb-1">{higherEducation[0].degree}</div>
                <div className="text-sm text-slate-400 mb-2">{higherEducation[0].where}</div>
                <div className="flex gap-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    Exam: {higherEducation[0].exam}
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    Duration: 3-4 Years
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stage 02 */}
        <div className="relative">
          <div className="absolute left-[-24px] top-1 mt-1 w-3 h-3 bg-slate-600 rounded-full z-10 border-2 border-navy-950"></div>
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-500 mb-1">STAGE 02 &bull; POST-GRAD</div>
            {higherEducation[1] ? (
              <div className="bg-navy-900 rounded-lg p-3 border border-navy-800 opacity-80">
                <div className="font-bold text-slate-300 mb-1">{higherEducation[1].degree}</div>
                <div className="text-sm text-slate-400 mb-2">{higherEducation[1].where}</div>
                <div className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded inline-block">
                  Exam: {higherEducation[1].exam}
                </div>
              </div>
            ) : (
              <div className="bg-navy-900/50 rounded-lg p-3 border border-navy-800 border-dashed text-slate-500 text-sm">
                Optional Master's Degree depending on specialization required.
              </div>
            )}
          </div>
        </div>

        {/* Stage 03 */}
        <div className="relative">
          <div className="absolute left-[-24px] top-1 mt-1 w-3 h-3 bg-slate-700 rounded-full z-10 border-2 border-navy-950"></div>
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-600 mb-1">STAGE 03 &bull; PROFESSIONAL</div>
            <div className="bg-navy-900/30 rounded-lg p-3 border border-navy-800 opacity-60">
              <div className="font-bold text-slate-400 mb-1">Industry Certification</div>
              <div className="text-sm text-slate-500">Continuous learning path</div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Ready to apply promo */}
      <div className="mt-8 rounded-xl overflow-hidden relative">
        {/* CSS Art Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        
        <div className="relative p-5 text-center">
          <h4 className="font-bold text-white mb-2">Ready to apply?</h4>
          <p className="text-xs text-slate-400 mb-4">Connect with admission counselors to start your journey.</p>
          <button className="w-full py-2 bg-white text-navy-950 font-bold rounded hover:bg-slate-200 transition-colors text-sm">
            Speak to an Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default PathwayTimeline;
