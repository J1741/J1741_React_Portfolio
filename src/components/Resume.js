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
      <h3 className="resume-heading">Resume</h3>
      <p>
        Download my resume <a className="resume-link" target="blank" href={resume}>here</a>.
      </p>

      {/* proficiencies */}
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>responsive design</li>
        <li>Bootstrap, Materialize, React Bootstrap</li>
        <li>React</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>

    </div>
  );
}

