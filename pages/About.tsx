
import React from 'react';
import { CheckCircle2, Building, Users2, Award, FileText } from 'lucide-react';
import { TEAM, COUNTRY_CONTACTS } from '../constants';
import TestimonialCarousel from '../components/TestimonialCarousel';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Fraternal Business Care</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A heritage of trust and expertise since 2017.
          </p>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey & Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Founded in 2017, Fraternal Business Care has quickly grown into a leading business consultancy firm. Our core philosophy is "Fraternal Care" – treating every client's business with the same dedication and meticulous attention we would our own.
              </p>
              <div className="space-y-4">
                {[
                  "Unwavering commitment to financial integrity",
                  "Global perspective with local expertise",
                  "Technology-driven accounting solutions",
                  "Dedicated team of expert professionals"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
               <h3 className="text-xl font-bold text-gray-900 mb-4">International Presence</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 With strategically located offices across major global financial hubs, we provide local expertise with a global perspective. Our reach allows us to serve clients across diverse regulatory environments with ease.
               </p>
               {/* Countries in one line */}
               <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest">
                  {COUNTRY_CONTACTS.map((c, i) => (
                    <React.Fragment key={c.country}>
                      <span>{c.country}</span>
                      {i < COUNTRY_CONTACTS.length - 1 && <span className="text-gray-300">|</span>}
                    </React.Fragment>
                  ))}
               </div>
            </div>
          </div>

          {/* Statistics Section in Single Line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-lg hover:scale-[1.02] transition-transform">
              <Building className="mx-auto mb-4 opacity-80" size={40} />
              <h4 className="text-4xl font-extrabold mb-1">300+</h4>
              <p className="text-white/80 font-bold uppercase tracking-wider text-sm">Entities</p>
            </div>
            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-lg hover:scale-[1.02] transition-transform">
              <Users2 className="mx-auto mb-4 opacity-80" size={40} />
              <h4 className="text-4xl font-extrabold mb-1">1200+</h4>
              <p className="text-white/80 font-bold uppercase tracking-wider text-sm">Individuals</p>
            </div>
            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-lg hover:scale-[1.02] transition-transform">
              <Award className="mx-auto mb-4 opacity-80" size={40} />
              <h4 className="text-4xl font-extrabold mb-1">40+</h4>
              <p className="text-white/80 font-bold uppercase tracking-wider text-sm">Professionals</p>
            </div>
            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-lg hover:scale-[1.02] transition-transform">
              <FileText className="mx-auto mb-4 opacity-80" size={40} />
              <h4 className="text-4xl font-extrabold mb-1">5000+</h4>
              <p className="text-white/80 font-bold uppercase tracking-wider text-sm">ITRs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Now Four Cells */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine technical excellence with personal attention to deliver results that matter.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center group hover:bg-primary transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl group-hover:bg-white group-hover:text-primary">1</div>
              <h4 className="font-bold text-xl mb-4 group-hover:text-white">Global Reach</h4>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">Offices across {COUNTRY_CONTACTS.map(c => c.country).join(", ")} for seamless cross-border support.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center group hover:bg-primary transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl group-hover:bg-white group-hover:text-primary">2</div>
              <h4 className="font-bold text-xl mb-4 group-hover:text-white">Experienced Team</h4>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">Our 40+ expert professionals bring decades of industry-specific global expertise.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center group hover:bg-primary transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl group-hover:bg-white group-hover:text-primary">3</div>
              <h4 className="font-bold text-xl mb-4 group-hover:text-white">Tailored Solutions</h4>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">We provide bespoke, data-driven strategies that align with your unique goals.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center group hover:bg-primary transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl group-hover:bg-white group-hover:text-primary">4</div>
              <h4 className="font-bold text-xl mb-4 group-hover:text-white">Integrity & Trust</h4>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">A heritage of transparency and fraternal care in every partnership since 2017.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">The expert minds driving Fraternal Business Care with professionalism and integrity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[4/5] bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm px-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Trusted by hundreds of businesses and individuals globally.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
};

export default About;
