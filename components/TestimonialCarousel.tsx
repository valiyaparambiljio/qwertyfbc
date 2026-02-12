
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 2 >= TESTIMONIALS.length ? 0 : prev + 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, TESTIMONIALS.length - 2) : prev - 2));
  };

  const visibleTestimonials = TESTIMONIALS.slice(currentIndex, currentIndex + 2);

  return (
    <div className="relative overflow-hidden px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleTestimonials.map((t) => (
          <div key={t.id} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative transition-all animate-fade-in">
            <div className="flex text-secondary mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <h5 className="font-bold text-gray-900">{t.name}</h5>
              <p className="text-primary text-sm font-medium">{t.company}</p>
            </div>
            <div className="absolute top-6 right-6 opacity-10">
              <img src="https://i.ibb.co/VYvG7Y8G/fb-logo.png" alt="logo" className="w-10 h-10 grayscale" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 gap-3">
        <button 
          onClick={prev} 
          className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} />
        </button>
        <button 
          onClick={next} 
          className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
