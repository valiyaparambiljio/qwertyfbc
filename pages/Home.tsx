
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users, Globe2, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
            alt="Business Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wider mb-6 animate-slide-up">
              ESTABLISHED 2017
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Strategic Care for Your <span className="text-primary italic">Business Growth</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Fraternal Business Care provides expert accountancy, consultancy, and business advisory services globally. We turn financial data into growth engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/services" className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-center hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                Our Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-center hover:bg-gray-100 transition-all">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Empowering Your Business with <br />
                <span className="text-primary">Professional Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We offer a comprehensive suite of financial and advisory services designed to help you navigate complex global markets.
              </p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 group mb-2">
              View All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  {idx === 0 ? <BarChart3 size={32} /> : idx === 1 ? <Globe2 size={32} /> : <ShieldCheck size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="font-bold text-sm text-primary flex items-center gap-2 uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
