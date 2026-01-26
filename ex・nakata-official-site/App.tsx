
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Works from './pages/Works';
import Company from './pages/Company';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setCurrentPage={setCurrentPage} />;
      case Page.SERVICES:
        return <Services />;
      case Page.WORKS:
        return <Works />;
      case Page.COMPANY:
        return <Company />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
