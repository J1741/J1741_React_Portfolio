import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

// renders portfolio container
export default function PortfolioContainer() {

  // set AboutMe as default value of currentPage
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // return component based on value of currentPage
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }

    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }

    if (currentPage === 'Contact') {
      return <Contact />;
    }

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