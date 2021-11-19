import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css';

export default function Project () {
  return (
    <>
    {/* TESTING - MOVE?? */}
    <h3 className="portfolio-heading">Portfolio</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4 app-gallery">

      {/* TESTING App-1 */}
      <div className="col">
        <div className="card featured-app">
          <img
            src="https://placekitten.com/g/500/300"
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://placekitten.com/g/500/300">Card title</a>
            </h5>
            <p className="card-text"><a href="http://www.npr.org">GitHub</a></p>
          </div>
        </div>
      </div>

      {/* TESTING App-2 */}
      <div className="col">
        <div className="card featured-app">
          <img
            src="https://placekitten.com/g/500/300"
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://placekitten.com/g/500/300">Card title</a>
            </h5>
            <p className="card-text"><a href="http://www.npr.org">GitHub</a></p>
          </div>
        </div>
      </div>

      {/* TESTING App-3 */}
      <div className="col">
        <div className="card featured-app">
          <img
            src="https://placekitten.com/g/500/300"
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://placekitten.com/g/500/300">Card title</a>
            </h5>
            <p className="card-text"><a href="http://www.npr.org">GitHub</a></p>
          </div>
        </div>
      </div>

      {/* TESTING App-4 */}
      <div className="col">
        <div className="card featured-app">
          <img
            src="https://placekitten.com/g/500/300"
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://placekitten.com/g/500/300">Card title</a>
            </h5>
            <p className="card-text"><a href="http://www.npr.org">GitHub</a></p>
          </div>
        </div>
      </div>

      {/* TESTING App-5 */}
      <div className="col">
        <div className="card featured-app">
          <img
            src="https://placekitten.com/g/500/300"
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://placekitten.com/g/500/300">Card title</a>
            </h5>
            <p className="card-text"><a href="http://www.npr.org">GitHub</a></p>
          </div>
        </div>
      </div>

      {/* TESTING App-6 */}
      <div className="col">
        <div className="card featured-app">
          <img
            src="https://placekitten.com/g/500/300"
            className="card-img"
          />
          <div className="app-overlay">
            <h5 className="card-title">
              <a href="https://placekitten.com/g/500/300">Card title</a>
            </h5>
            <p className="card-text"><a href="http://www.npr.org">GitHub</a></p>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}