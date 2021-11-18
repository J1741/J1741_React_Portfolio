import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutMe.css';
import headShot from '../media/head_shot_square_close.png';

export default function AboutMe() {
  return (
    <div className="container d-flex about-me">
      <img className="logo-image" src={headShot}/>
      <h1>Hello There!</h1>
    </div>
  )
}