import React, { useEffect, useState } from "react";
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from "../components/Footer";
import Header from "./Header";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if(currentPage === 'Resume'){
      return <Resume />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Header receives currentPage state and handlePageChange function to update page state within Navtabs */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Body */}
      {renderPage()}
      {/* Footer */}
      <Footer />
    </div>
  );
}
