
import React, { useState, useEffect } from 'react';
import { Section } from '../types';
import { Menu, X, Tent } from 'lucide-react';

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Section }[] = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Nossas Tendas', id: 'tendas' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('inicio')}
        >
          <Tent className={`w-8 h-8 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
            TENDA<span className="text-emerald-500">LUX</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                activeSection === item.id 
                  ? 'text-emerald-500 underline underline-offset-4' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contato')}
            className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Peça um Orçamento
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-emerald-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-emerald-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-gray-100 py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
              }}
              className={`text-left text-lg font-medium px-4 py-2 rounded-lg ${
                activeSection === item.id ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigate('contato');
              setIsMenuOpen(false);
            }}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-md"
          >
            Orçamento Rápido
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
