import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-white font-body selection:bg-gold-500 selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default App;
