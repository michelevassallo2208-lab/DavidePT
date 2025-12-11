import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const benefits = [
    "Programmi su Misura",
    "Monitoraggio Costante",
    "Supporto 24/7",
    "Kit di Benvenuto Incluso"
  ];

  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-gold-900/20">
              {/* Using a placeholder that resembles the fit guy in the prompt */}
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                alt="Davide Carfora Training" 
                className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <p className="font-heading text-4xl text-white font-bold">NO PAIN</p>
                <p className="font-heading text-4xl text-gold-500 font-bold">NO GAIN</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold-500/30 rounded-full z-[-1]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-white/5 rounded-full z-[-1]" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-gold-500 font-heading text-lg tracking-widest uppercase mb-2">Chi Sono</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
                DAVIDE CARFORA
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Il tuo corpo è l'unico posto in cui devi vivere per sempre. Prenditene cura.
                Come Personal Trainer certificato, il mio obiettivo non è solo farti sudare, 
                ma insegnarti uno stile di vita. Ti seguirò a 360 gradi con massimo impegno 
                e professionalità, creando un percorso adatto alle tue esigenze.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-dark-800 p-4 rounded-lg border border-white/5">
                  <CheckCircle2 className="text-gold-500 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
              <p className="text-gold-400 font-semibold text-center uppercase tracking-wide">
                Prima Lezione di Prova Gratuita
              </p>
              <p className="text-gray-400 text-sm text-center mt-2">
                Include anamnesi iniziale e test motorio
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
