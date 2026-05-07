import React from 'react';

function Home({ setCurrentPage }) {
  return (
    <>
      <h1 className="hero-title">
        <div className="hero-title-dark">
          <div>You picked</div>
          <div>your subjects.</div>
        </div>
        <div className="text-primary">
          <div>Find out what</div>
          <div>you can</div>
          <div>actually do.</div>
        </div>
      </h1>

      <p className="hero-subtitle">
        Bridge the gap between your academic choices and professional reality with our curated career data engine.
      </p>

      <button className="primary-btn-lg" onClick={() => setCurrentPage('explore')}>
        <span>Start Exploring</span>
        <span className="font-black">→</span>
      </button>
    </>
  );
}

export default Home;