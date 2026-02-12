
import React from 'react';
import { Calculator, Building2, ShieldCheck, FileText, Users, Cog, Gavel } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'accounting': return <Calculator size={36} />;
      case 'incorporation': return <Building2 size={36} />;
      case 'audit': return <ShieldCheck size={36} />;
      case 'taxation': return <FileText size={36} />;
      case 'hr-legal': return <Users size={36} />;
      default: return <Cog size={36} />;
    }
  };

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Professional Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">Expertise you can count on. Strategic guidance for global success.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img src={`https://picsum.photos/800/600?random=${index + 20}`} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="text-white">
                       {getIcon(service.id)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Service Area</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description} Our professional approach ensures that your {service.title.toLowerCase()} requirements are met with the highest standards of accuracy and efficiency.
                </p>
                
                {service.id === 'hr-legal' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                       <Users className="text-primary mb-2" />
                       <span className="font-bold text-sm">HR Management</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                       <Cog className="text-primary mb-2" />
                       <span className="font-bold text-sm">Software (ERP)</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                       <Gavel className="text-primary mb-2" />
                       <span className="font-bold text-sm">Legal Advisory</span>
                    </div>
                  </div>
                ) : (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Expert Advisory", "Timely Filing", "Regulatory Compliance", "Secure Data Handling"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium text-gray-700">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a custom service package?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">We understand every business is unique. Contact us today for a tailored quote that fits your specific needs and budget.</p>
          <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-xl">
            Get a Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
