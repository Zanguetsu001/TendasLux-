
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('inicio');

  const navigateTo = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header activeSection={activeSection} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero onQuoteClick={() => navigateTo('contato')} />
        </section>

        <section id="sobre" className="py-20 bg-white">
          <About />
        </section>

        <section id="tendas" className="py-20 bg-gray-50">
          <Catalog />
        </section>

        <section id="contato" className="py-20 bg-emerald-900 text-white">
          <ContactForm />
        </section>
      </main>

      <Footer onNavigate={navigateTo} />
      
      {/* Botão Flutuante */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
