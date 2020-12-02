import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour } from '../Services/Data';

function Products() {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
