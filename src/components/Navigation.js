import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link about-me-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link portfolio-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link contact-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link resume-link" href="#">Resume</a>
      </li>
    </nav>
  );
}