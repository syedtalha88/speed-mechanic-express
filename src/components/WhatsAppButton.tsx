import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%20MotoFix%2C%20I%20need%20a%20bike%20service"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 left-6 z-50 group"
  >
    <div className="relative">
      {/* Pulse ring */}
      <div className="absolute inset-0 bg-[#25D366] animate-ping opacity-30" style={{ clipPath: 'polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)' }} />
      
      {/* Button */}
      <div
        className="relative flex items-center gap-2 bg-[#25D366] text-white font-heading font-bold text-sm uppercase px-5 py-3.5 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
        style={{ clipPath: 'polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)' }}
      >
        <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
        <span className="hidden sm:inline">Chat Now</span>
      </div>
    </div>
  </a>
);

export default WhatsAppButton;
