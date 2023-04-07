import React from 'react';
import './ResumePage.css';

function ResumePage() {
  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-layout">
        {/* Resume sections like education, experience, etc. */}
      </div>

      {/* HTML Download button with a link to resume in public/docs folder */}
      <a className="download-button" href="/docs/Alexander_Richards_Resume.pdf" download>
        Download Resume
      </a>

      <div className="skills-section">
        <h3 className="section-subtitle">Skills</h3>
        {/* List of skills with progress bars or charts */}
      </div>
    </section>
  );
}

export default ResumePage;