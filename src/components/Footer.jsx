const Footer = () => {
  return (
    <footer className="border-t border-navy-700 bg-navy-950 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0 text-slate-400">
            <span className="font-display font-bold text-white mr-2">WhatNext?</span>
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-slate-500">
            <span>35+ combinations</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>3 education levels</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>150+ career paths</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Works offline</span>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4 text-slate-400">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
