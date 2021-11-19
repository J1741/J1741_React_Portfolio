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
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={`portfolio-link ${currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}`}
          >
            Portfolio
          </a>
      </li>

      {/* Contact navlink */}
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={`contact-link ${currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}`}
          >
            Contact
          </a>
      </li>

      {/* Resume navlink */}
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={`resume-link ${currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}`}
          >
            Resume
        </a>
      </li>

    </nav>
  );
}