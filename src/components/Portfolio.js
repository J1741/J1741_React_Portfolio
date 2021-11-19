import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Portfolio.css';
import Project from './Project';
const apps = require('../data/app_info.js')

export default function Portfolio() {
  return(
    <>
    <h3 className="portfolio-heading">Portfolio</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4 app-gallery">

      {/* Beverage Viber */}
      <Project 
        appImage={apps[0].appImage}
        appUrl={apps[0].appUrl}
        appTitle={apps[0].appTitle}
        appRepo={apps[0].appRepo}
      />

      {/* Vibe Cloud */}
      <Project 
        appImage={apps[1].appImage}
        appUrl={apps[1].appUrl}
        appTitle={apps[1].appTitle}
        appRepo={apps[1].appRepo}
      />

      {/* E-Commerce Backend */}
      <Project 
        appImage={apps[2].appImage}
        appUrl={apps[2].appUrl}
        appTitle={apps[2].appTitle}
        appRepo={apps[2].appRepo}
      />

      {/* Team Profile Generator */}
      <Project 
        appImage={apps[3].appImage}
        appUrl={apps[3].appUrl}
        appTitle={apps[3].appTitle}
        appRepo={apps[3].appRepo}
      />

      {/* Password Generator */}
      <Project 
        appImage={apps[4].appImage}
        appUrl={apps[4].appUrl}
        appTitle={apps[4].appTitle}
        appRepo={apps[4].appRepo}
      />

      {/* Weather Dashboard */}
      <Project 
        appImage={apps[5].appImage}
        appUrl={apps[5].appUrl}
        appTitle={apps[5].appTitle}
        appRepo={apps[5].appRepo}
      />

    </div>
    </>
  )
} 