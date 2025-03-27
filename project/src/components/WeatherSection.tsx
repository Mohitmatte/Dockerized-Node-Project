import React from 'react';
import { Cloud, Droplets, Sun, ThermometerSun } from 'lucide-react';

const WeatherSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
        <Cloud className="h-6 w-6" />
        Weather Forecast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((day) => (
          <div key={day} className="bg-green-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Day {day}</span>
              <Sun className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ThermometerSun className="h-4 w-4" />
                <span>28°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                <span>65% Humidity</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSection;