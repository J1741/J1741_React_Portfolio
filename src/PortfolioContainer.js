import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PortfolioContainer.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';

// renders portfolio container
export default function PortfolioContainer() {

  // set AboutMe as default value of currentPage
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // render page based on value of currentPage
  const renderPage = () => {
    // ** if currentPage is AboutMe, return AboutMe
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    // ** if currentPage is Portfolio, return ??Project component for each project??
    if (currentPage === 'Portfolio') {
      return <Project />;
    }
    // ** if currentPage is Contact, return Contact
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    // ** if currentPage is Resume, return Resume
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    // otherwise, return AboutMe
    return <AboutMe />;
  }

  // handle page change by changing currentPage state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}