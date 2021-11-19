import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      {/* <Resume /> */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;
