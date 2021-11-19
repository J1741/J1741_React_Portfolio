import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css';
// const placeholderGif = 'https://i.pinimg.com/originals/6f/da/0a/6fda0a15c880a2c0094d63e99402d405.gif';
// const placeholderAppUrl = 'https://en.wikipedia.org/wiki/Obi-Wan_Kenobi';
// const placeholderAppTitle = 'Obi-Wan Kenobi';
// const placeholderRepoUrl = 'https://en.wikipedia.org/wiki/Alec_Guinness';

export default function Project (props) {
  console.log(props);
  return (
    <>
    
     {/* App-X */}
     <div className="col">
        <div className="card featured-app">
          {/* pass app image src from props */}
          <img
            src={props.appImage}
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              {/* pass deployed url and app title from props */}
              <a href={props.appUrl}>{props.appTitle}</a>
            </h5>
            {/* pass github repo url from props */}
            <p className="card-text"><a href={props.appRepo}>GitHub</a></p>
          </div>
        </div>
      </div> 

    </>
  );
}