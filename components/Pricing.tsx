import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_DATA } from '../constants';
import { Check, Info, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PRICING_DATA[0].id);

  return (
    <section id="pricing" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-heading text-lg tracking-widest uppercase mb-2">Investi su te stesso</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white font-heading">LISTINO PREZZI</h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-dark-900 p-1 rounded-xl border border-white/10 overflow-x-auto max-w-full">
            {PRICING_DATA.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-heading uppercase text-sm tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gold-500 text-black font-bold shadow-lg shadow-gold-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            >
              {PRICING_DATA.find((c) => c.id === activeTab)?.items.map((item, index) => (
                <div
                  key={index}
                  className={`relative group bg-dark-900 rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                    item.highlight
                      ? 'border-gold-500 shadow-2xl shadow-gold-900/20 scale-105 z-10'
                      : 'border-white/10 hover:border-white/30 hover:shadow-xl'
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
                      <Star size={12} fill="black" /> Consigliato
                    </div>
                  )}

                  <h3 className="text-xl font-heading text-white uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gold-500">{item.price}</span>
                    {item.subtitle && <span className="text-gray-500 ml-2 text-sm">{item.subtitle}</span>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <Check className="text-gold-500 w-5 h-5 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full py-3 rounded-lg text-center font-heading uppercase text-sm font-bold transition-all ${
                      item.highlight
                        ? 'bg-gold-500 text-black hover:bg-gold-400'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    Scegli Piano
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Freebies Banner */}
        <div className="mt-16 bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
             <div>
                <h4 className="text-2xl font-heading text-white font-bold mb-2">KIT DI BENVENUTO INCLUSO</h4>
                <p className="text-gray-400">
                  Iscriviti e ricevi in omaggio la <span className="text-gold-500">Maglietta DC</span>, 
                  l'<span className="text-gold-500">Asciugamano</span> e il <span className="text-gold-500">Portachiavi</span> ufficiale.
                </p>
             </div>
             <div className="flex gap-4">
                <div className="bg-white/5 p-3 rounded-full border border-white/10">
                  <span className="text-2xl">👕</span>
                </div>
                <div className="bg-white/5 p-3 rounded-full border border-white/10">
                   <span className="text-2xl">🧣</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
