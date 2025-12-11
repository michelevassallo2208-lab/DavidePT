import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-gold-500/50 rounded-full text-gold-400 text-sm font-bold tracking-widest uppercase mb-6 bg-black/50 backdrop-blur-sm">
            Personal Trainer a Battipaglia
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-4 leading-tight">
            DAVIDE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">
              CARFORA
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Trasforma il tuo corpo e la tua mente. 
            Programmi personalizzati, supporto costante e risultati garantiti.
            Prima lezione di prova <span className="text-white font-semibold underline decoration-gold-500">gratuita</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="bg-gold-500 text-black px-8 py-4 rounded-lg font-heading font-bold text-lg uppercase tracking-wider hover:bg-gold-400 transition-all hover:scale-105 flex items-center gap-2 group"
            >
              Scopri i Prezzi
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg font-heading font-bold text-lg uppercase tracking-wider text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contattami
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
