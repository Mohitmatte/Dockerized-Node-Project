import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Schemes from './pages/Schemes';
import MarketPrices from './pages/MarketPrices';
import CropGuide from './pages/CropGuide';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/crop-guide" element={<CropGuide />} />
      </Routes>
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                Empowering farmers with technology and knowledge to enhance agricultural productivity and profitability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-green-300">Home</a></li>
                <li><a href="/weather" className="hover:text-green-300">Weather</a></li>
                <li><a href="/schemes" className="hover:text-green-300">Schemes</a></li>
                <li><a href="/market-prices" className="hover:text-green-300">Market Prices</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/faqs" className="hover:text-green-300">FAQs</a></li>
                <li><a href="/contact" className="hover:text-green-300">Contact Us</a></li>
                <li><a href="/why-us" className="hover:text-green-300">Why Choose Us</a></li>
                <li><a href="/mission" className="hover:text-green-300">Our Mission</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Download Our App</h3>
              <a
                href="#"
                className="inline-block bg-black text-white rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
              >
                <div className="px-4 py-2 flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M17.9 5c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-xl font-semibold font-sans -mt-1">Play Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>© 2025 Farmer's Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;