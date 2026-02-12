
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Map as MapIcon } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Our Team</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">We're here to help you grow. Reach out for consultations or support.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Corporate Headquarters</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Primary Address</h4>
                    <p className="text-gray-600">Ayyanthole, Thrissur, Kerala IN 680003</p>
                  </div>
                </div>

                {/* Local Branches - Side by Side */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-full">
                    <h4 className="font-bold text-primary mb-2">Thrissur Branch</h4>
                    <p className="text-gray-600 mb-1 text-sm">Kokkalai, Thrissur -1</p>
                    <p className="text-sm font-bold text-gray-700">Phone: +91 97477 99111</p>
                    <p className="text-sm text-primary">Email: thrissur@fbiz.co.in</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-full">
                    <h4 className="font-bold text-primary mb-2">Kunnamkulam Branch</h4>
                    <p className="text-gray-600 mb-1 text-sm">Pannithadam, Kunnamkulam</p>
                    <p className="text-sm font-bold text-gray-700">Phone: +91 980 931 2333</p>
                    <p className="text-sm text-primary">Email: kkm@fbiz.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Corporate Line</h4>
                    <p className="text-gray-600">+91 97477 99111</p>
                    <p className="text-sm text-gray-400">Support Line (Available Business Hours)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Support</h4>
                    <p className="text-gray-600">info@fbiz.co.in</p>
                    <p className="text-gray-600">consultancy@fbiz.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Hours</h4>
                    <div className="text-gray-600 grid grid-cols-2 gap-x-8 gap-y-1">
                      <p>Mon - Friday</p>
                      <p>9.30 AM to 5.30 PM</p>
                      <p>Saturday</p>
                      <p>9.30 AM to 2.00 PM</p>
                      <p className="text-red-500 font-bold">Sunday</p>
                      <p className="text-red-500 font-bold">Holiday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-80 relative bg-gray-200">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Interactive Google Map Integration</p>
                  </div>
               </div>
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.564560126759!2d76.1895741!3d10.534882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee02b0c36099%3A0xc6a87c14a42b10a2!2sAyyanthole%2C%20Thrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <p className="text-gray-500 mb-8">Our advisors will get back to you within 24 business hours.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-black" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-black" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                <input type="text" placeholder="Your Business Ltd." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-black" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white text-black font-medium">
                  <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                  <option value="Audit & Assurance">Audit & Assurance</option>
                  <option value="Incorporation Services">Incorporation Services</option>
                  <option value="Taxation & Planning">Taxation & Planning</option>
                  <option value="HR & Legal">HR & Legal</option>
                  <option value="General Consultancy">General Consultancy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={5} placeholder="How can we help your business today?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-black"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
