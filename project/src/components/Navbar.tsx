import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tractor, Cloud, FileText, DollarSign, Sprout, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/weather', icon: Cloud, label: 'Weather' },
    { to: '/schemes', icon: FileText, label: 'Schemes' },
    { to: '/market-prices', icon: DollarSign, label: 'Market Prices' },
    { to: '/crop-guide', icon: Sprout, label: 'Crop Guide' },
    { to: '/shop', icon: ShoppingCart, label: 'Shop' },
  ];

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
            <Tractor className="h-8 w-8" />
            <span>Farmer's Assistant</span>
          </NavLink>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive ? 'bg-green-600' : 'hover:bg-green-600'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;