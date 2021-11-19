import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

export default function Navigation({currentPage, handlePageChange}) {
  return (
    <nav className="nav nav-pills">

      {/* AboutMe navlink */}
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={`about-me-link ${currentPage === 'AboutMe' ? 'nav-link-active' : 'nav-link'}`}
          >
            About Me
          </a>
      </li>

      {/* Portfolio navlink */}
      <li className="nav-item">
        <a
          className="nav-link portfolio-link"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          >
            Portfolio
          </a>
      </li>

      {/* Contact navlink */}
      <li className="nav-item">
        <a
          className="nav-link contact-link"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
      </li>

      {/* Resume navlink */}
      <li className="nav-item">
        <a
          className="nav-link resume-link"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          >
            Resume
        </a>
      </li>

    </nav>
  );
}