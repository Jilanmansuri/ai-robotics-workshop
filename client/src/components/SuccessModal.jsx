import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Check, Calendar, Mail, Phone, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, formData }) => {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti explosion!
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Confetti from two sides
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      // Disable body scrolling
      document.body.style.overflow = 'hidden';

      return () => {
        clearInterval(interval);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden z-10 transform scale-100 transition-all p-8 flex flex-col items-center text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Checkmark Circle */}
        <div className="gradient-bg text-white p-4 rounded-full shadow-lg shadow-primary/20 mb-6 animate-bounce">
          <Check className="h-10 w-10 stroke-[3]" />
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-snug mb-3 font-display">
          Registration Successful!
        </h3>
        
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          Congratulations! You have reserved a spot for the <span className="font-bold text-slate-800">AI & Robotics Summer Workshop</span>. Here are your details:
        </p>

        {/* Summary Card */}
        <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-5 w-full text-left space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 text-primary rounded-lg">
              <Check className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Student Name</p>
              <p className="text-sm font-bold text-slate-700">{formData?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 text-secondary rounded-lg">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Address</p>
              <p className="text-sm font-bold text-slate-700">{formData?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 text-primary rounded-lg">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Number</p>
              <p className="text-sm font-bold text-slate-700">{formData?.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-slate-200/50 pt-3 mt-1">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Workshop Starts</p>
              <p className="text-sm font-bold text-slate-700">15 July 2026</p>
            </div>
          </div>
        </div>

        {/* Closing Notice */}
        <p className="text-[11px] sm:text-xs text-slate-500 leading-normal mb-6">
          A confirmation email has been sent. Our workshop coordinator will reach out to you within 24 hours with details on batch timings and link access.
        </p>

        {/* CTA Button */}
        <button
          onClick={onClose}
          className="w-full gradient-bg text-white py-3.5 rounded-2xl font-bold shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Explore Dashboard
        </button>

      </div>
    </div>
  );
};

export default SuccessModal;
