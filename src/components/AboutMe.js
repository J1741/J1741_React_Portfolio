import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutMe.css';
import headShot from '../media/head_shot_square_close.png';

export default function AboutMe() {
  return (
    <div className="container d-flex about-me">
      <img className="head-shot" src={headShot}/>
      <p className="container bio-text">
        Hello there! I'm <a className="bio-link" target="blank" href="https://github.com/J1741">J1741</a>, a full stack web developer with a strong sense of design, a love for <a className="hidden-link" target="blank" href="https://gist.github.com/J1741/f1d71d52a92d725a70aa0af62df21555">technical detail</a>. 
        <br /><br />
        I enjoy full stack development because it allows me to exercise my creative as well as analytical skill sets. While I excel at front end development, I am always deepening my back end development skills, and particularly enjoy the challenges of scripting and database design.
        <br /><br />
        In addition to my development skills, I have a background in the field of linguistics and work in linguistics industry.
      </p>
      
    </div>
  )
}