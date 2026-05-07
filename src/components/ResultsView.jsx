import React from 'react';
import Footer from './Footer';

function ResultsView({ selectedSubjects, matchedResults, onBack }) {
  return (
    <>
      <div className="results-container">
        <div className="back-link" onClick={onBack}>
          ← Back to Selection
        </div>

        <div className="results-top">
          <div>
            <div className="selected-subject-chips">
              {selectedSubjects.map((s, i) => (
                <span key={i} className="subject-chip-sm">{s.name}</span>
              ))}
            </div>
            <h1 className="hero-title" style={{ textAlign: 'left', marginBottom: 0 }}>Future Career Pathways</h1>
          </div>
          <div className="match-badge">
            Partial Match / {matchedResults[0]?.confidence || 0}% Confidence
          </div>
        </div>

        <div className="results-section-title">
          <h2>Recommended Roles</h2>
        </div>

        {matchedResults.map((res, i) => (
          <div key={i} className="result-card">
            <div className="result-card-header">
              <h3 className="result-main-title">{res.label}</h3>
              <p className="result-main-note">{res.note}</p>
              <div className="result-combo-chips">
                {res.subjects.map((sId, idx) => (
                  <span key={idx} className="combo-pill">{sId}</span>
                ))}
              </div>
            </div>

            <div className="result-tabs">
              <div className="result-tab">{res.careers[0]?.title}</div>
            </div>

            <div className="role-content">
              <div className="role-header-row">
                <div className="role-icon">💼</div>
                <div>
                  <p className="role-desc">{res.careers[0]?.description}</p>
                  <div className="industry-chips">
                    {res.careers[0]?.industries.map((ind, idx) => (
                      <span key={idx} className="industry-tag">{ind}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="metrics-container">
                <div className="metric-box">
                  <label>Est. Salary</label>
                  <span className="salary-val">{res.careers[0]?.salary}</span>
                </div>
                <div className="metric-box">
                  <label>Required Exams</label>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {res.careers[0]?.exams.map((exam, idx) => (
                      <span key={idx} className="exam-pill">{exam}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ResultsView;
