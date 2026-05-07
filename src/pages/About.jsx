import React from 'react';


const techCards = [
  { icon: '⚛️', name: 'React 18', desc: 'Declarative functional components and state-based navigation for a fast, modern user experience.' },
  { icon: '⚡', name: 'Vite', desc: 'Ultra-fast frontend tooling and build optimization ensuring near-instantaneous page transitions.' },
  { icon: '🎨', name: 'Vanilla CSS', desc: 'Custom-crafted, lightweight design system built from scratch without external CSS dependencies.' },
  { icon: '🧠', name: 'Data Logic', desc: 'Intelligent matching algorithm processing 500+ career combinations for precise pathway mapping.' },
];

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="hero-title">
          About WhatNext<span className="text-primary">?</span>
        </h1>
        <p className="about-subtitle premium-subtitle">
          WhatNext? is a specialized career navigator designed to help students visualize their future pathways. By mapping academic interests to real-world career trajectories, we provide clarity in an increasingly complex educational landscape.
        </p>
      </div>

      <div className="tech-stack-premium">
        <h2 className="about-section-header">Tech Stack</h2>
        <div className="tech-grid premium">
          {techCards.map((card) => (
            <div key={card.name} className="tech-card premium">
              <span className="tech-icon premium">{card.icon}</span>
              <h4 className="tech-name premium">{card.name}</h4>
              <p className="tech-desc premium">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
