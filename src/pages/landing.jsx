import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 pt-10">
        <div className="absolute inset-0 dot-grid opacity-30"></div>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight">
            <span className="block text-white">You picked your subjects.</span>
            <span className="block text-amber-500">Find out what you can actually do.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between your academic choices and professional reality with our curated career data engine.
          </p>
          
          <Link 
            to="/explore" 
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transform hover:-translate-y-1"
          >
            Start Exploring
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-navy-900 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-navy-800">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-amber-500 mb-2">35+</div>
              <div className="text-sm uppercase tracking-wider font-semibold text-slate-400">Combinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-amber-500 mb-2">3</div>
              <div className="text-sm uppercase tracking-wider font-semibold text-slate-400">Levels</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-amber-500 mb-2">150+</div>
              <div className="text-sm uppercase tracking-wider font-semibold text-slate-400">Careers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-amber-500 mb-2">Offline</div>
              <div className="text-sm uppercase tracking-wider font-semibold text-slate-400">Works Everywhere</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white inline-block relative">
              How it works
              <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-amber-500 rounded-full"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card p-8 border-navy-800 hover:border-amber-500/50 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <span className="text-amber-500 text-2xl font-display font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Select Subjects</h3>
              <p className="text-slate-400">Input your current or planned academic subjects from school through post-grad.</p>
            </div>

            {/* Step 2 */}
            <div className="card p-8 border-navy-800 hover:border-amber-500/50 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <span className="text-amber-500 text-2xl font-display font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analyze Pathways</h3>
              <p className="text-slate-400">Our engine calculates the strongest career and higher education matches for your specific combo.</p>
            </div>

            {/* Step 3 */}
            <div className="card p-8 border-navy-800 hover:border-amber-500/50 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <span className="text-amber-500 text-2xl font-display font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Take Action</h3>
              <p className="text-slate-400">Save your favorite combinations, compare options, and plan your exact next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Curated Data Split Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Why curated data?</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Generic AI often hallucinates career paths or gives vague advice. We use a strictly curated dataset based on real Indian education paradigms, ensuring every recommendation is practical and actionable.
              </p>
              
              <ul className="space-y-5">
                {[
                  "Verified higher education pathways in India",
                  "Accurate entrance exam requirements (JEE, NEET, CUET)",
                  "Realistic salary expectations based on market data"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              {/* Abstract UI Graphic */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-950 border border-navy-700 shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="h-4 w-1/3 bg-slate-700 rounded mb-8"></div>
                  
                  <div className="bg-navy-800 p-4 rounded-lg border border-navy-700 flex gap-4 items-center">
                    <div className="w-10 h-10 rounded bg-indigo-500/20 flex-shrink-0"></div>
                    <div className="w-full">
                      <div className="h-3 w-1/2 bg-slate-600 rounded mb-2"></div>
                      <div className="h-2 w-1/3 bg-slate-700 rounded"></div>
                    </div>
                    <div className="w-16 h-6 rounded-full bg-amber-500/20 flex-shrink-0"></div>
                  </div>
                  
                  <div className="bg-navy-800 p-4 rounded-lg border border-navy-700 flex gap-4 items-center">
                    <div className="w-10 h-10 rounded bg-emerald-500/20 flex-shrink-0"></div>
                    <div className="w-full">
                      <div className="h-3 w-2/3 bg-slate-600 rounded mb-2"></div>
                      <div className="h-2 w-1/4 bg-slate-700 rounded"></div>
                    </div>
                    <div className="w-16 h-6 rounded-full bg-slate-700 flex-shrink-0"></div>
                  </div>
                  
                  <div className="bg-navy-800 p-4 rounded-lg border border-navy-700 flex gap-4 items-center">
                    <div className="w-10 h-10 rounded bg-rose-500/20 flex-shrink-0"></div>
                    <div className="w-full">
                      <div className="h-3 w-1/2 bg-slate-600 rounded mb-2"></div>
                      <div className="h-2 w-2/5 bg-slate-700 rounded"></div>
                    </div>
                    <div className="w-16 h-6 rounded-full bg-slate-700 flex-shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
