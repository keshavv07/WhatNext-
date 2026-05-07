import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main className={`main-content ${currentPage === 'explore' ? 'scrollable' : ''}`}>
        {currentPage === 'explore' && <Explore />}
        {currentPage === 'about' && <About />}
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      </main>
    </div>
  );
}

export default App;
