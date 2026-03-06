import React from 'react';
import Services from '../components/Services';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Services />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
