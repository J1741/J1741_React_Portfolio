import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Resume.css';
// import resume
import resume from '../media/Kira_Griffitt_resume_20211031_v3.pdf';

// return JSX for resume
export default function Resume() {
  return (
    // resume section
    <div className="container resume-section">

      {/* resume */}
      <h2 className="resume-heading">Resume</h2>
      <p>
        Download my resume <a className="resume-link" target="blank" href={resume}>here</a>.
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

