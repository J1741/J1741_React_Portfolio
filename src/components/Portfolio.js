import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Portfolio.css';
import Project from './Project';
import beverageViberGif from '../media/beverage_viber.gif'

export default function Portfolio() {
  return(
    <>
    <h3 className="portfolio-heading">Portfolio</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4 app-gallery"></div>

      {/* Beverage Viber */}
      <div className="col">
        <div className="card featured-app">
          <img
            src={beverageViberGif}
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://guarded-meadow-10732.herokuapp.com/">The Beverage Viber</a>
            </h5>
            <p className="card-text"><a href="https://github.com/shobes572/The_Beverage_Viber">GitHub</a></p>
          </div>
        </div>
      </div>

      {/* Vibe Cloud */}
      {/* E-Commerce Backend */}
      {/* Team Profile Generator */}
      {/* Password Generator */}
      {/* Weather Dashboard */}
    </>
  )
} 