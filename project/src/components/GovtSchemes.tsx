import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const GovtSchemes = () => {
  const schemes = [
    {
      title: 'PM-KISAN',
      description: 'Direct income support of ₹6000 per year to farmer families',
      link: '#'
    },
    {
      title: 'Kisan Credit Card',
      description: 'Easy credit access for farmers at lower interest rates',
      link: '#'
    },
    {
      title: 'Soil Health Card Scheme',
      description: 'Detailed report of soil nutrition status and recommendations',
      link: '#'
    },
    {
      title: 'PMFBY',
      description: 'Crop insurance scheme to protect against natural calamities',
      link: '#'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
        <FileText className="h-6 w-6" />
        Government Schemes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schemes.map((scheme) => (
          <div key={scheme.title} className="border p-4 rounded-lg hover:bg-green-50 transition-colors">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{scheme.title}</h3>
              <a href={scheme.link} className="text-green-600 hover:text-green-800">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-600 mt-2">{scheme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovtSchemes;