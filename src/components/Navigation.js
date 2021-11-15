import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link about-me-link" href="#">About Me</a>
      </li>
    </nav>
  );
}