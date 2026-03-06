import React from 'react';
import Brands from '../components/Brands';
import PageTransition from '../components/PageTransition';

const BrandsPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Brands />
      </div>
    </PageTransition>
  );
};

export default BrandsPage;
