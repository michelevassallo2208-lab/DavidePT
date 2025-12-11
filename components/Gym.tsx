import React from 'react';
import { motion } from 'framer-motion';

export const Gym: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      title: "Sala Pesi",
      desc: "Attrezzatura Technogym"
    },
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
      title: "Area Funzionale",
      desc: "Kettlebell & TRX"
    },
    {
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
      title: "Area Cardio",
      desc: "Tapis Roulant & Vogatori"
    },
    {
      url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
      title: "Zona Personal",
      desc: "Privacy Totale"
    }
  ];

  return (
    <section id="gym" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-gold-500 font-heading text-lg tracking-widest uppercase mb-2">Lo Studio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-heading">
            DOVE CI ALLENIAMO
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Uno spazio esclusivo, pulito e dotato delle migliori attrezzature per garantirti il massimo comfort durante i tuoi allenamenti.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative group overflow-hidden rounded-xl border border-white/5 h-80 ${index === 0 ? 'md:col-span-2 md:h-96' : ''}`}
            >
                <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6">
                <h4 className="text-2xl font-heading font-bold text-white">{img.title}</h4>
                <p className="text-gold-500 font-mono text-sm uppercase tracking-wider">{img.desc}</p>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};