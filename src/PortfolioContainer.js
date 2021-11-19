import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PortfolioContainer.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';

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
    // ** if currentPage is Portfolio, return Portfolio
    // ** if currentPage is Contact, return Contact
    // ** if currentPage is Resume, return Resume
    // otherwise, return AboutMe
    return <AboutMe />;
  }

  // handle page change by changing currentPage state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      {renderPage()}      
      <Footer />
    </>
  );
}