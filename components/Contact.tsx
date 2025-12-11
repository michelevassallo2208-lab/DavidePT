import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-dark-900 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-gold-500 font-heading text-lg tracking-widest uppercase mb-2">Contatti</h2>
              <h3 className="text-4xl font-bold text-white font-heading mb-6">INIZIA IL TUO PERCORSO</h3>
              <p className="text-gray-400 text-lg">
                Non aspettare il momento perfetto, prendilo e rendilo perfetto. 
                Contattami per prenotare la tua prima lezione gratuita.
              </p>
            </div>

            <div className="space-y-6">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-gold-500/50">
                <div className="bg-gold-500/20 p-3 rounded-lg group-hover:bg-gold-500 transition-colors">
                  <Phone className="text-gold-500 group-hover:text-black w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold font-heading uppercase">Telefono / Whatsapp</p>
                  <p className="text-gray-400">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-gold-500/50">
                <div className="bg-gold-500/20 p-3 rounded-lg group-hover:bg-gold-500 transition-colors">
                  <MapPin className="text-gold-500 group-hover:text-black w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold font-heading uppercase">Dove Siamo</p>
                  <p className="text-gray-400">{CONTACT_INFO.address}</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="bg-gold-500/20 p-3 rounded-lg">
                  <Clock className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold font-heading uppercase">Orari</p>
                  <p className="text-gray-400">Lun - Sab: 07:00 - 22:00</p>
                  <p className="text-gray-500 text-sm italic">Su appuntamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.658661601684!2d14.9818823!3d40.6180738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133be0c644c688d9%3A0x6b6d5107e3a6c5f!2sVia%20Etruria%2C%204%2C%2084091%20Battipaglia%20SA!5e0!3m2!1sit!2sit!4v1714856000000!5m2!1sit!2sit" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
          <div className="flex items-center gap-3">
             {/* Logo Footer - Strategic Placement */}
             <div className="w-10 h-10 rounded-full bg-white border border-gold-500 overflow-hidden">
                <img 
                  src="./logo.png" 
                  alt="DC Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                      e.currentTarget.style.display = 'none';
                  }}
                />
             </div>
             <p className="font-heading text-lg text-white">Davide Carfora <span className="text-gold-500">PT</span></p>
          </div>
          
          <p className="font-heading">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
          
          <div className="flex space-x-6">
             <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};