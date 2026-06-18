import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Workshop', href: '#details' },
    { name: 'Outcomes', href: '#outcomes' },
    { name: 'FAQs', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80; // height of the navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glassmorphism shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, '#home')}>
            <div className="gradient-bg p-2 rounded-xl text-white shadow-md shadow-primary/20">
              <Cpu className="h-6 w-6 animate-pulse" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-800 font-display">
              Robo<span className="gradient-text">Camp</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-medium text-slate-600 hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              className="gradient-bg text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 right-0 glassmorphism shadow-lg border-t border-slate-200/50 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block font-medium text-slate-600 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-100/50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleLinkClick(e, '#register')}
            className="block text-center gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
