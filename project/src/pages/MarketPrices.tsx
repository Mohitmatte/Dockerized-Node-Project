import React from 'react';
import CropPriceSection from '../components/CropPriceSection';

const MarketPrices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Market Prices</h1>
      <CropPriceSection />
    </div>
  );
};

export default MarketPrices;