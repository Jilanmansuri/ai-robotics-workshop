import React from 'react';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="gradient-bg p-2 rounded-xl text-white">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                Robo<span className="text-secondary-light">Camp</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Inspiring the next generation of engineers, creators, and thinkers. Let's make this summer an unforgettable learning journey.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#details" onClick={(e) => handleLinkClick(e, '#details')} className="hover:text-white transition-colors">
                  Workshop Details
                </a>
              </li>
              <li>
                <a href="#outcomes" onClick={(e) => handleLinkClick(e, '#outcomes')} className="hover:text-white transition-colors">
                  Learning Outcomes
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-light" />
                <a href="mailto:info@robocamp.com" className="hover:text-white transition-colors">
                  info@robocamp.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary-light" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-light mt-0.5" />
                <span className="text-slate-400">
                  Sector-62, Noida,<br />
                  Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Promo */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Summer Batch</h4>
            <div className="bg-slate-800/60 border border-slate-700/50 p-4 rounded-2xl">
              <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                Registrations for the **15 July 2026** batch close on **10 July 2026**. Limited seats available!
              </p>
              <a
                href="#register"
                onClick={(e) => handleLinkClick(e, '#register')}
                className="inline-block text-xs font-bold text-primary hover:text-white transition-colors"
              >
                Enroll Online →
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {currentYear} RoboCamp. All rights reserved. Inspired by Kidrove. Made for internship assignment evaluation.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
