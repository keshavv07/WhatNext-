import React from 'react';



function Navbar({ currentPage, setCurrentPage, isDarkMode, toggleDarkMode }) {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">

        <div className="logo" onClick={() => setCurrentPage('home')}>
          <span className="logo-text">What</span>
          <span className="text-primary">Next?</span>
        </div>

        <div className="nav-links">
          <a onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'nav-link-active' : 'nav-link'}>Home</a>
          <a onClick={() => setCurrentPage('explore')} className={currentPage === 'explore' ? 'nav-link-active' : 'nav-link'}>Explore</a>
          <a onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'nav-link-active' : 'nav-link'}>About</a>
        </div>

        <div className="nav-actions">
          <button
            className={`theme-toggle-btn ${isDarkMode ? 'active' : ''}`}
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            <span className="moon-icon"></span>
          </button>
          <div className="profile-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=WhatNext" alt="Profile" />
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
