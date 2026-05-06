const About = () => {
  return (
    <div className="animate-fade-in pb-24">
      {/* Header */}
      <div className="text-center pt-16 pb-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          About WhatNext<span className="text-amber-500">?</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          We built this engine because the Indian education system forces students to make definitive career choices at age 15 without revealing the long-term consequences of those choices.
        </p>
      </div>

      {/* Hero Banner (CSS Pattern) */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden bg-navy-950 border-y border-navy-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-950"></div>
        {/* Silhouette/Abstract representations */}
        <div className="absolute bottom-0 left-1/4 w-32 h-48 bg-navy-800 rounded-t-lg opacity-50 transform skew-x-12"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-64 bg-navy-800 rounded-t-lg opacity-40 transform -skew-x-6"></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-56 bg-navy-700 rounded-t-xl opacity-60 -translate-x-1/2"></div>
        
        {/* Light beam */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0 transform rotate-45 origin-top blur-sm"></div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-2">The Mission</div>
            <div className="text-2xl font-display font-bold text-white opacity-80 mix-blend-overlay">Illuminate the blind spots of education.</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
            The Visionaries
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-amber-500 rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="card p-6 border-navy-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-500 text-navy-950 flex items-center justify-center text-2xl font-display font-bold mb-4 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                AR
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Aditya Rao</h3>
              <div className="inline-block px-2 py-0.5 border border-navy-600 rounded text-xs font-bold text-slate-400 mb-4 tracking-wider">
                LEAD ARCHITECT
              </div>
              <p className="text-sm text-slate-500">Designed the Jaccard similarity matching engine and core data structures for combinatorial career mapping.</p>
            </div>

            {/* Member 2 */}
            <div className="card p-6 border-navy-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-display font-bold mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                SK
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Sneha Kapoor</h3>
              <div className="inline-block px-2 py-0.5 border border-navy-600 rounded text-xs font-bold text-slate-400 mb-4 tracking-wider">
                DATA CURATOR
              </div>
              <p className="text-sm text-slate-500">Researched and validated all 150+ career paths, ensuring Indian exam prerequisites and salary bands are highly accurate.</p>
            </div>

            {/* Member 3 */}
            <div className="card p-6 border-navy-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-display font-bold mb-4 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                MJ
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Mohit Jain</h3>
              <div className="inline-block px-2 py-0.5 border border-navy-600 rounded text-xs font-bold text-slate-400 mb-4 tracking-wider">
                UX DESIGNER
              </div>
              <p className="text-sm text-slate-500">Crafted the dark-mode primary interface, focusing on readability, micro-animations, and reducing cognitive load.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
            Our Core Engine
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-amber-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-navy-900 border border-navy-800 rounded-xl p-5 hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.955 2.5a1.18 1.18 0 00-.5.122A133.565 133.565 0 00.5 8.358c-.332.22-.5.594-.5 1v5.284c0 .406.168.78.5 1a133.565 133.565 0 0010.955 5.736c.306.152.694.152 1 0a133.565 133.565 0 0010.955-5.736c.332-.22.5-.594.5-1V9.358c0-.406-.168-.78-.5-1a133.565 133.565 0 00-10.955-5.736 1.18 1.18 0 00-.5-.122zM12 4.41l9.5 4.97-9.5 4.97-9.5-4.97L12 4.41zm0 11.23l8.03-4.2 1.47.77-9.5 4.97-9.5-4.97 1.47-.77L12 15.64zm0 3.32l8.03-4.2 1.47.77-9.5 4.97-9.5-4.97 1.47-.77L12 18.96z"/>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-1">React 18</h4>
              <p className="text-xs text-slate-500">Virtual DOM rendering and state management.</p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-xl p-5 hover:border-purple-500/50 transition-colors">
              <div className="text-purple-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.956 5.86l-10.464-5.69c-.313-.17-.687-.17-1 0L1.028 5.86a.998.998 0 00-.528.88v10.52c0 .363.197.697.528.88l10.464 5.69c.313.17.687.17 1 0l10.464-5.69a.998.998 0 00.528-.88V6.74a.998.998 0 00-.528-.88zM11.5 21.61L2.5 16.73V7.27l9 4.88v9.46zm1-14.34L3.5 2.39l9-4.88 9 4.88-9 4.88zm9 9.46l-9 4.88v-9.46l9-4.88v9.46z"/>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-1">Vite</h4>
              <p className="text-xs text-slate-500">Next-generation frontend tooling and HMR.</p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-xl p-5 hover:border-sky-500/50 transition-colors">
              <div className="text-sky-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-1">Tailwind CSS</h4>
              <p className="text-xs text-slate-500">Utility-first styling with custom design tokens.</p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 mb-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-1">localStorage</h4>
              <p className="text-xs text-slate-500">Zero-backend persistence for offline capability.</p>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            What WhatNext? doesn't do (yet)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-slate-400">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-slate-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>We don't guarantee college admissions or rank predictions.</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-slate-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>We don't cover highly niche arts or vocational degrees.</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-slate-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>We don't connect you to actual counselors (dummy data).</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-slate-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>We don't have international study data integrated yet.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
