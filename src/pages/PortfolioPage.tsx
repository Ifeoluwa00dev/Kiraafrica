import React from 'react';
import Portfolio from '../components/Portfolio';
import PageTransition from '../components/PageTransition';

const PortfolioPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Portfolio />
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
