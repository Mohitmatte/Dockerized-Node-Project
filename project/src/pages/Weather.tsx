import React from 'react';
import WeatherSection from '../components/WeatherSection';

const Weather = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Weather Forecast</h1>
      <WeatherSection />
    </div>
  );
};

export default Weather;