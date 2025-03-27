import React from 'react';
import CropGuideSection from '../components/CropGuide';

const CropGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Crop Growing Guide</h1>
      <CropGuideSection />
    </div>
  );
};

export default CropGuide;