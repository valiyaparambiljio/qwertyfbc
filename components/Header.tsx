
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                 <img src="https://i.ibb.co/VYvG7Y8G/fb-logo.png" alt="FB Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary block leading-none">FRATERNAL</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Business Care</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-lg animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent hover:border-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 mt-4">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full block text-center bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
