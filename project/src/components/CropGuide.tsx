import React from 'react';
import { Sprout, Calendar, Droplets, Sun } from 'lucide-react';

const CropGuide = () => {
  const crops = [
    {
      name: 'Wheat',
      season: 'Rabi Season (Winter)',
      water: 'Moderate',
      sunlight: 'Full Sun',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400'
    },
    {
      name: 'Rice',
      season: 'Kharif Season (Monsoon)',
      water: 'High',
      sunlight: 'Full Sun',
      image: 'https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?auto=format&fit=crop&w=400'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
        <Sprout className="h-6 w-6" />
        Crop Growing Guide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crops.map((crop) => (
          <div key={crop.name} className="border rounded-lg overflow-hidden">
            <img src={crop.image} alt={crop.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{crop.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span>{crop.season}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-600" />
                  <span>Water Requirement: {crop.water}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-yellow-600" />
                  <span>Sunlight: {crop.sunlight}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropGuide;