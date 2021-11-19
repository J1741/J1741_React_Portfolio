import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Resume.css';
// import resume

// return JSX for resume
export default function Resume() {
  return (
    // resume section
    <div className="container resume-section">

      {/* resume */}
      <h2 className="resume-heading">Resume</h2>
      <p>
        Download my resume <a>here</a>.
      </p>

      {/* proficiencies */}
      <h2>Front-end Proficiencies</h2>
        <ul>
          <li>tbd</li>
          <li>tbd</li>
          <li>tbd</li>
          <li>tbd</li>
        </ul>

      <h2>Back-end</h2>
        <ul>
          <li>tbd</li>
          <li>tbd</li>
          <li>tbd</li>
          <li>tbd</li>
        </ul>

    </div>
  );
}

