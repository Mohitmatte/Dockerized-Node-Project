import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const CropPriceSection = () => {
  const crops = [
    { name: 'Wheat', currentPrice: '2000', lastWeekPrice: '1900', trend: 'up' },
    { name: 'Rice', currentPrice: '2500', lastWeekPrice: '2600', trend: 'down' },
    { name: 'Corn', currentPrice: '1800', lastWeekPrice: '1700', trend: 'up' },
    { name: 'Soybeans', currentPrice: '3000', lastWeekPrice: '2900', trend: 'up' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
        <DollarSign className="h-6 w-6" />
        Market Prices
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-green-50">
              <th className="px-4 py-2 text-left">Crop</th>
              <th className="px-4 py-2 text-left">Current Price (₹/quintal)</th>
              <th className="px-4 py-2 text-left">Last Week</th>
              <th className="px-4 py-2 text-left">Trend</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => (
              <tr key={crop.name} className="border-b">
                <td className="px-4 py-2">{crop.name}</td>
                <td className="px-4 py-2">₹{crop.currentPrice}</td>
                <td className="px-4 py-2">₹{crop.lastWeekPrice}</td>
                <td className="px-4 py-2">
                  <TrendingUp className={`h-4 w-4 ${crop.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CropPriceSection;