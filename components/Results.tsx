import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Quote } from 'lucide-react';

export const Results: React.FC = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      achievement: "-18 Kg in 6 Mesi",
      description: "Ricostruzione Corporea",
      quote: "Credevo fosse impossibile tornare in forma a 40 anni. Davide non mi ha dato solo esercizi, ma un nuovo stile di vita.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Giulia Bianchi",
      achievement: "+5 Kg Massa Magra",
      description: "Tonificazione Glutei",
      quote: "Ho sempre avuto paura dei pesi. Grazie al percorso personalizzato ho scolpito il mio corpo come non avrei mai immaginato.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Alessandro Verdi",
      achievement: "Postura Corretta",
      description: "Risoluzione Mal di Schiena",
      quote: "Il dolore lombare mi bloccava. Con la ginnastica posturale e il rinforzo mirato sono tornato a giocare a calcetto.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="results" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold-500 font-heading text-lg tracking-widest uppercase mb-2">Storie di Successo</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-heading">
              RISULTATI REALI
            </h3>
            <p className="text-gray-400 mt-4 text-lg">
              Nessuna magia, solo scienza, sudore e costanza. Ecco cosa succede quando ti affidi a un professionista.
            </p>
          </div>
          <div className="bg-gold-500/10 px-6 py-4 rounded-xl border border-gold-500/20">
             <div className="flex items-center gap-3">
                <TrendingUp className="text-gold-500 w-8 h-8" />
                <div>
                   <p className="text-3xl font-bold text-white font-heading">100+</p>
                   <p className="text-xs text-gold-400 uppercase tracking-wider">Clienti Soddisfatti</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image Background */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded w-fit mb-4 uppercase tracking-wider">
                    {item.description}
                  </div>
                  
                  <h4 className="text-3xl font-heading font-bold text-white mb-1">{item.achievement}</h4>
                  <p className="text-gold-400 font-heading uppercase tracking-wide text-sm mb-6">{item.name}</p>
                  
                  <div className="border-l-2 border-gold-500 pl-4">
                    <Quote className="text-gray-500 w-6 h-6 mb-2 rotate-180" />
                    <p className="text-gray-300 italic text-sm leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};