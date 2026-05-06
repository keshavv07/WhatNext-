const LevelCard = ({ level, label, isActive, onClick }) => {
  const levelMeta = {
    school: {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      subtitle: "11th & 12th Grade",
      desc: "Planning for college degrees."
    },
    undergraduate: {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      subtitle: "Bachelors Degree",
      desc: "Specializing for careers."
    },
    postgraduate: {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      subtitle: "Masters / PhD",
      desc: "Advanced specializations."
    }
  };

  const meta = levelMeta[level];

  return (
    <button
      onClick={() => onClick(level)}
      className={`relative text-left p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
        isActive 
          ? 'bg-navy-800 border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
          : 'bg-navy-900 border-2 border-navy-700 hover:border-slate-500 hover:bg-navy-800'
      }`}
    >
      {isActive && (
        <div className="absolute top-4 right-4 text-amber-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      <div className={`mb-4 inline-flex p-3 rounded-lg ${isActive ? 'bg-amber-500/10 text-amber-500' : 'bg-navy-800 text-slate-400'}`}>
        {meta.icon}
      </div>
      
      <h4 className="text-xl font-bold font-display mb-1 text-white">{label}</h4>
      <div className="text-sm font-semibold text-slate-300 mb-2">{meta.subtitle}</div>
      <p className="text-sm text-slate-500 leading-relaxed">{meta.desc}</p>
    </button>
  );
};

export default LevelCard;
