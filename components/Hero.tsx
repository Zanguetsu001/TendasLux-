
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  // Imagem estática de alta qualidade de uma tenda gazebo em gramado
  const heroImage = "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1920";

  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background com Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tenda Gazebo Branca" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white max-w-xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Tendas Práticas e Gazebos para seu Evento
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tendas <span className="text-emerald-400">Práticas</span> para qualquer lugar.
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
            Aluguel de tendas sanfonadas e piramidais de 3x3m até 5x5m. Ideais para feiras, jardins, lazer e eventos rápidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onQuoteClick}
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl transition-all transform hover:-translate-y-1"
            >
              Pedir agora <ArrowRight size={20} />
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              onClick={() => {
                const el = document.getElementById('tendas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Catálogo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-400" />
              <span className="text-sm font-medium text-emerald-200">Montagem em 2 min</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-400" />
              <span className="text-sm font-medium text-emerald-200">Leves e Resistentes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-400" />
              <span className="text-sm font-medium text-emerald-200">3x3, 4x4 e 5x5m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
