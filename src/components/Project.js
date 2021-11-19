import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css';

export default function Project (props) {
  return (
    <>
    
     {/* App-X */}
     <div className="col">
        <div className="card featured-app">
          {/* pass app image src from props */}
          <img
            src={}
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              {/* pass deployed url and app title from props */}
              <a href={}>{}</a>
            </h5>
            {/* pass github repo url from props */}
            <p className="card-text"><a href={}>GitHub</a></p>
          </div>
        </div>
      </div> 

    </>
  );
}