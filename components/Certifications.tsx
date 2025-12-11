import React from 'react';
import { motion } from 'framer-motion';
import { Award, Scroll, GraduationCap, Medal } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Personal Trainer Elite",
      issuer: "FIPE - Federazione Italiana Pesistica",
      year: "2020",
      icon: Medal,
      description: "Certificazione di massimo livello per l'insegnamento della cultura fisica."
    },
    {
      title: "Specialista in Nutrizione Sportiva",
      issuer: "ISSA Europe",
      year: "2021",
      icon: Scroll,
      description: "Approfondimento su strategie alimentari per la performance e ricomposizione corporea."
    },
    {
      title: "Recupero Funzionale & Posturale",
      issuer: "CONI",
      year: "2022",
      icon: GraduationCap,
      description: "Protocolli avanzati per il trattamento di paramorfismi e riabilitazione motoria."
    },
    {
      title: "Strength & Conditioning Coach",
      issuer: "NSCA",
      year: "2023",
      icon: Award,
      description: "Preparazione atletica specifica per sport di potenza e resistenza."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-800 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-heading text-lg tracking-widest uppercase mb-2">Qualifiche</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-heading">CERTIFICAZIONI UFFICIALI</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-900 p-6 rounded-xl border border-white/10 hover:border-gold-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors">
                <cert.icon className="text-gold-500 group-hover:text-black w-6 h-6 transition-colors" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-bold font-heading text-lg leading-tight">{cert.title}</h4>
                <span className="text-xs font-mono text-gold-500 border border-gold-500/30 px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
              <p className="text-sm text-gold-400 mb-3 font-semibold">{cert.issuer}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};