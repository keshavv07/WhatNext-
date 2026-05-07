import React, { useState } from 'react';
import { subjectsData as subjects } from '../data/subjects';
import { combinations } from '../data/combinations';
import Footer from '../components/Footer';
import ResultsView from '../components/ResultsView';

const levelCards = [
  { id: 'school',        icon: '🎓', title: 'School',        subtitle: '11th & 12th Grade',  desc: 'Planning for college degrees.' },
  { id: 'undergraduate', icon: '🏢', title: 'Junior College', subtitle: 'Bachelors Degree',   desc: 'Specializing for careers.' },
  { id: 'postgraduate',  icon: '🛡️', title: 'Graduate',       subtitle: 'Masters / PhD',      desc: 'Advanced specializations.' },
];

function Explore() {
  const [view, setView] = useState('explore');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [matchedResults, setMatchedResults] = useState([]);

  function toggleSubject(subject) {
    const alreadySelected = selectedSubjects.some(s => s.id === subject.id);
    if (alreadySelected) {
      setSelectedSubjects(selectedSubjects.filter(s => s.id !== subject.id));
    } else if (selectedSubjects.length < 6) {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  }

  function handleLevelChange(level) {
    setSelectedLevel(level);
    setSelectedSubjects([]);
  }

  function handleSeePossible() {
    const selectedIds = selectedSubjects.map(s => s.id);

    const results = combinations
      .filter(combo => combo.level === selectedLevel)
      .map(combo => {
        const matchCount = combo.subjects.filter(id => selectedIds.includes(id)).length;
        const confidence = Math.round((matchCount / combo.subjects.length) * 100);
        return { ...combo, confidence };
      })
      .filter(combo => combo.confidence > 0)
      .sort((a, b) => b.confidence - a.confidence);

    setMatchedResults(results);
    setView('results');
  }

  if (view === 'results') {
    return (
      <ResultsView
        selectedSubjects={selectedSubjects}
        matchedResults={matchedResults}
        onBack={() => setView('explore')}
      />
    );
  }

  return (
    <>
      <div className="explore-container">

        {/* Title */}
        <div className="explore-header">
          <h1 className="hero-title">Chart Your Path</h1>
          <p className="premium-subtitle" style={{ maxWidth: '600px' }}>
            Follow our guided navigator to discover the subjects and careers that align with your future goals.
          </p>
        </div>

        {/* Step 1: Level Selection */}
        <div className="step-container">
          <div className="step-heading-wrapper">
            <div className="accent-bar orange"></div>
            <h2 className="step-heading">Step 1: Where are you now?</h2>
          </div>

          <div className="step-grid">
            {levelCards.map((card) => (
              <div
                key={card.id}
                className={`step-card ${selectedLevel === card.id ? 'selected' : ''}`}
                onClick={() => handleLevelChange(card.id)}
              >
                <div className="card-icon-box">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
                <p className="card-desc">{card.desc}</p>
                {selectedLevel === card.id && <div className="check-badge">✓</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Subject Selection */}
        <div className="step-2-wrapper">
          <div className="step-heading-wrapper" style={{ marginBottom: '20px' }}>
            <div className="accent-bar orange"></div>
            <h2 className="step-heading">Step 2: Pick your interests</h2>
          </div>

          {selectedLevel ? (
            <>
              <div className="step-2-card">
                <div className="step-2-header">
                  <h3 className="step-2-title">Step 2: Pick your interests</h3>
                  <span className="selection-count">{selectedSubjects.length}/6 selected</span>
                </div>

                <div className="selected-pool" style={{ marginBottom: '30px' }}>
                  {selectedSubjects.length > 0 ? (
                    selectedSubjects.map((subject, i) => (
                      <div key={i} className={`selected-pill sub-${subject.type}`}>
                        {subject.name}
                        <span className="remove-icon" onClick={() => toggleSubject(subject)}>✕</span>
                      </div>
                    ))
                  ) : (
                    <p style={{ color: '#94a3b8', fontSize: '13px', fontStyle: 'italic' }}>No subjects selected yet.</p>
                  )}
                </div>

                <div className="subject-grid">
                  {subjects[selectedLevel].map((subject, i) => (
                    <div
                      key={i}
                      className={`subject-item sub-${subject.type} ${selectedSubjects.some(s => s.id === subject.id) ? 'selected-in-grid' : ''}`}
                      onClick={() => toggleSubject(subject)}
                    >
                      {subject.name}
                    </div>
                  ))}
                </div>
              </div>

              {selectedSubjects.length > 0 && (
                <div className="action-footer">
                  <button className="primary-btn-lg" style={{ minWidth: '240px' }} onClick={handleSeePossible}>
                    <span>See What's Possible</span>
                    <span className="font-black">→</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ opacity: 0.3, pointerEvents: 'none' }}>
              <div className="step-2-card" style={{ background: '#f8fafc' }}>
                <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', padding: '40px' }}>
                  Please select your current level to continue
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Explore;
