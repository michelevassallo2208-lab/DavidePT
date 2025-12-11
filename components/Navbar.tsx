import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chi Sono', href: '#about' },
    { name: 'Risultati', href: '#results' },
    { name: 'Studio', href: '#gym' },
    { name: 'Prezzi', href: '#pricing' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Zone - Strategic Placement */}
          <div className="flex items-center">
             <a href="#home" className="flex items-center gap-3 group">
                <div className="relative overflow-hidden rounded-full border-2 border-gold-500 w-12 h-12 bg-white">
                  <img 
                    src="./logo.png" 
                    alt="Davide Carfora Logo" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="flex items-center justify-center w-full h-full font-bold text-black">DC</span>';
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-bold text-white tracking-widest leading-none">
                    DAVIDE <span className="text-gold-500">CARFORA</span>
                  </span>
                  <span className="text-[0.65rem] text-gray-400 tracking-[0.2em] uppercase hidden sm:block">
                    Personal Trainer
                  </span>
                </div>
             </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 font-heading tracking-wide uppercase text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-600 text-black px-5 py-2 rounded-full font-bold font-heading uppercase text-sm transition-transform transform hover:scale-105"
            >
              Prenota Ora
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-dark-900 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white font-heading uppercase tracking-widest hover:text-gold-500"
            >
              {link.name}
            </a>
          ))}
           <a
              href="tel:+393347466610"
              className="flex items-center justify-center gap-2 text-gold-500 text-xl font-bold mt-8"
            >
              <Phone size={20} />
              334 746 6610
            </a>
        </div>
      </div>
    </nav>
  );
};