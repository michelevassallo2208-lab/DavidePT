import { Dumbbell, Users, ClipboardList, Clock, Zap, Award } from 'lucide-react';
import { PricingCategory, Service } from './types';

export const CONTACT_INFO = {
  address: "Via Etruria, 4, 84091 Battipaglia SA",
  phone: "334 746 6610",
  whatsapp: "https://wa.me/393347466610",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Via+Etruria+4+Battipaglia+SA"
};

export const SERVICES: Service[] = [
  {
    title: "Personal Training",
    description: "Allenamenti 1-on-1 personalizzati per raggiungere i tuoi obiettivi specifici.",
    icon: Dumbbell
  },
  {
    title: "Small Group / Coppia",
    description: "Allenati con un partner o un amico per motivarvi a vicenda.",
    icon: Users
  },
  {
    title: "Consulenza Nutrizionale",
    description: "Consigli alimentari e integrazione per massimizzare i risultati.",
    icon: ClipboardList
  },
  {
    title: "Ginnastica Posturale",
    description: "Migliora la postura e riduci i dolori con esercizi mirati.",
    icon: ActivityIcon
  }
];

// Helper icon component for use in this file only
function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export const PRICING_DATA: PricingCategory[] = [
  {
    id: 'packages',
    name: 'Pacchetti Lezioni',
    items: [
      {
        title: "Lezione Singola",
        price: "€30",
        features: ["1 ora one-on-one", "Focus tecnica", "Analisi immediata"],
        highlight: false
      },
      {
        title: "Pacchetto 10",
        price: "€250",
        features: ["€25 a lezione", "Scadenza trimestrale", "Piano personalizzato"],
        highlight: false
      },
      {
        title: "Pacchetto 15",
        price: "€340",
        features: ["€22.60 a lezione", "Scadenza trimestrale", "Monitoraggio costante", "Best Seller"],
        highlight: true
      },
      {
        title: "Pacchetto 20",
        price: "€400",
        features: ["€20 a lezione", "Scadenza trimestrale", "Massimo risultato"],
        highlight: false
      },
       {
        title: "Lezione di Coppia",
        price: "€50",
        features: ["Prezzo totale per 2 persone", "Divertimento condiviso", "Risparmio"],
        highlight: false
      }
    ]
  },
  {
    id: 'monthly',
    name: 'Abbonamenti Mensili',
    items: [
      {
        title: "Base 1x",
        price: "€80",
        subtitle: "/ mese",
        features: ["1 lezione a settimana", "4 lezioni totali", "Scheda inclusa"],
        highlight: false
      },
      {
        title: "Pro 2x",
        price: "€120",
        subtitle: "/ mese",
        features: ["2 lezioni a settimana", "8 lezioni totali", "€15 a lezione", "Consigli alimentari"],
        highlight: true
      },
      {
        title: "Elite 3x",
        price: "€140",
        subtitle: "/ mese",
        features: ["3 lezioni a settimana", "12 lezioni totali", "€11.66 a lezione", "Supporto 24/7"],
        highlight: false
      }
    ]
  },
  {
    id: 'services',
    name: 'Servizi Extra',
    items: [
      {
        title: "Scheda Allenamento",
        price: "€70",
        features: ["Programma personalizzato", "Video spiegazione", "Valida 6-8 settimane"],
        highlight: false
      },
      {
        title: "Consigli Alimentari",
        price: "Incluso",
        features: ["Per i clienti attivi", "Linee guida integrazione"],
        highlight: false
      },
      {
        title: "Lezioni Fit Boxe",
        price: "€30",
        features: ["Alta intensità", "Tecniche base boxe", "Brucia grassi"],
        highlight: false
      },
       {
        title: "Ginnastica Posturale",
        price: "€30",
        features: ["Rieducazione motoria", "Benessere schiena"],
        highlight: false
      }
    ]
  }
];
