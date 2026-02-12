
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/919747799111"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[90] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us
      </span>
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppIcon;
