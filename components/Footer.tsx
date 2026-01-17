
import React from 'react';
import { Section } from '../types';
import { Tent, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-20 pb-10 border-t border-emerald-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <Tent className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight">
                TENDA<span className="text-emerald-500">LUX</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Sua parceira de confiança para locação de estruturas de cobertura em São Paulo e região. Estética e proteção andam juntas aqui.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-6 text-emerald-400">Navegação</h4>
            <ul className="space-y-4">
              {[
                { label: 'Início', id: 'inicio' as Section },
                { label: 'Sobre Nós', id: 'sobre' as Section },
                { label: 'Nossas Tendas', id: 'tendas' as Section },
                { label: 'Contato', id: 'contato' as Section }
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-6 text-emerald-400">Locação</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Tendas Piramidais</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Tendas Sanfonadas</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Gazebos para Lazer</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Montagem de Eventos</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-6 text-emerald-400">Fale Conosco</h4>
            <p className="text-gray-400 mb-4">(11) 91234-5678</p>
            <p className="text-gray-400 mb-6">contato@tendalux-alugueis.com.br</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="bg-gray-800 border-none rounded-lg px-4 py-3 w-full focus:ring-1 focus:ring-emerald-500 text-sm"
              />
              <button className="bg-emerald-600 hover:bg-emerald-500 py-3 rounded-lg transition-colors font-bold text-sm">
                Assinar Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs text-center md:text-left">
          <p>© 2025 TendaLux Aluguéis de Estruturas. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
