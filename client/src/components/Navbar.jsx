import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { smoothScrollTo } from '../utils/scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    smoothScrollTo(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'glassmorphism dark:glassmorphism-dark shadow-md py-3'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, '#home')}>
            <div className="gradient-bg p-2 rounded-xl text-white shadow-md shadow-primary/20">
              <Cpu className="h-6 w-6 animate-pulse" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-800 dark:text-slate-100 font-display">
              Robo<span className="gradient-text">Camp</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              className="gradient-bg text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle Button outside drawer */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 glassmorphism shadow-lg border-t border-slate-200/50 dark:border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block font-medium text-slate-600 dark:text-slate-300 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all"
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
