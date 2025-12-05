import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Offset slightly to account for the fixed header
      const scrollPosition = window.scrollY + 100;

      // Check which section is currently in view
      let currentSection = '#home';
      
      for (const link of NAVIGATION_LINKS) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = link.href;
          }
        }
      }

      // If at the very top, set to home
      if (window.scrollY < 50) {
        currentSection = '#home';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);
      
      // Smooth scroll to target
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update active state manually for immediate feedback
      setActiveSection(href);
      
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex-shrink-0 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer p-1"
              aria-label="На головну"
            >
              <Terminal className="h-8 w-8" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? 'text-cyan-400 bg-slate-900/50 shadow-[0_0_10px_rgba(34,211,238,0.1)] border border-slate-800/50' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Відкрити меню</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAVIGATION_LINKS.map((link) => {
             const isActive = activeSection === link.href;
             return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-400 bg-slate-800 border-l-4 border-cyan-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800 border-l-4 border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};