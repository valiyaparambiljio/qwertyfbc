
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, X } from 'lucide-react';
import { SERVICES, COUNTRY_CONTACTS } from '../constants';
import { CountryContact } from '../types';

const Footer: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryContact | null>(null);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded p-1">
              <img src="https://i.ibb.co/VYvG7Y8G/fb-logo.png" alt="FB Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-white">Fraternal</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Providing exceptional business care since 2017. We empower businesses globally through professional expertise in accounting, audit, and strategic consultancy.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link to="/services" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <span className="text-sm">Ayyanthole, Thrissur, Kerala IN 680003</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span className="text-sm">+91 97477 99111</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <span className="text-sm">info@fbiz.co.in</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with our latest insights and news.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-800 border-none rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-opacity-90 transition-all">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Country List Bar */}
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
            <span className="text-gray-500 uppercase text-xs tracking-widest mr-2">Countries Served:</span>
            {COUNTRY_CONTACTS.map((item, index) => (
              <React.Fragment key={item.country}>
                <button 
                  onClick={() => setSelectedCountry(item)}
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {item.country}
                </button>
                {index < COUNTRY_CONTACTS.length - 1 && <span className="text-gray-700">|</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Fraternal Business Care. All rights reserved.
          </p>
        </div>
      </div>

      {/* Country Info Popup */}
      {selectedCountry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-scale-up text-gray-900">
            <button 
              onClick={() => setSelectedCountry(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-secondary rounded-full inline-block"></span>
              {selectedCountry.country} Office
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                <p className="text-sm font-medium">{selectedCountry.address}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Mobile</p>
                <p className="text-sm font-medium">{selectedCountry.mobile}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-sm font-medium text-primary">{selectedCountry.email}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Website</p>
                <p className="text-sm font-medium hover:underline cursor-pointer">{selectedCountry.website}</p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedCountry(null)}
              className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
