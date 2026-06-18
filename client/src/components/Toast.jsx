import React, { useEffect } from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeConfig = {
    success: {
      bg: 'bg-emerald-500',
      icon: <CheckCircle className="h-5 w-5 text-white" />,
    },
    error: {
      bg: 'bg-rose-500',
      icon: <AlertTriangle className="h-5 w-5 text-white" />,
    },
  };

  return (
    <div className={`fixed top-24 right-5 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-white font-medium border border-white/10 transition-all duration-300 transform translate-x-0 ${typeConfig[type].bg}`}>
      {typeConfig[type].icon}
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="p-1 rounded-lg hover:bg-white/20 transition-colors ml-2"
        aria-label="Dismiss toast"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;
