import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import gitHubLogo from '../media/github_logo_white.png';
import linkedInLogo from '../media/linkedin_logo_white.png';
import stackOverflowLogo from '../media/stackoverflow_logo_white.png';

export default function Footer() {
  return (
    <div className="footer-area d-flex">

      <ul className="icon-set d-flex">
        {/* Github */}
        <li><a href="https://github.com/j1741" target="_blank" rel="noreferrer"><img className="icon-image" src={gitHubLogo} alt="GitHub" title="GitHub"/></a></li>

        {/* LinkedIn */}
        <li><a href="https://www.linkedin.com/in/kira-griffitt-7232b56b" target="_blank" rel="noreferrer"><img className="icon-image" src={linkedInLogo} alt="LinkedIn" title="LinkedIn"/></a></li>

        {/* Stack Overflow */}
        <li><a href="https://stackoverflow.com/users/16043908/a2277" target="_blank" rel="noreferrer"><img className="icon-image" src={stackOverflowLogo} alt="Stack Overflow" title="Stack Overflow"/></a></li>
      </ul>

    </div>
  )
}