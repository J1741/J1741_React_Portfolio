import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Portfolio.css';
import Project from './Project';
// TESTING 
import beverageViberGif from '../media/beverage_viber.gif'
const placeholderAppImg = 'https://i.pinimg.com/originals/6f/da/0a/6fda0a15c880a2c0094d63e99402d405.gif';
const placeholderAppUrl = 'https://en.wikipedia.org/wiki/Obi-Wan_Kenobi';
const placeholderAppTitle = 'Obi-Wan Kenobi';
const placeholderAppRepo = 'https://en.wikipedia.org/wiki/Alec_Guinness';
const apps = require('../data/app_info.js')

// TESTING apps data
console.log("*** APPS!! ***", apps);

export default function Portfolio() {
  return(
    <>
    <h3 className="portfolio-heading">Portfolio</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4 app-gallery">


      {/* Beverage Viber */}
      
      {/* <div className="col">
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
      </div> */}

      {/* TESTING: Beverage Viber */}
      <Project 
        // appImage={apps[0].appImage}
        appImage={apps[0].appImage}
        appUrl={apps[0].appUrl}
        appTitle={apps[0].appTitle}
        appRepo={apps[0].appRepo}
        />

      {/* Vibe Cloud */}
      <Project 
        appImage={placeholderAppImg}
        appUrl={placeholderAppUrl}
        appTitle={placeholderAppTitle}
        appRepo={placeholderAppRepo}
        />
      {/* E-Commerce Backend */}
      {/* Team Profile Generator */}
      {/* Password Generator */}
      {/* Weather Dashboard */}
    </div>
    </>
  )
} 