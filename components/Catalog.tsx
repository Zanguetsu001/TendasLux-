
import React, { useState, useEffect, useRef } from 'react';
import { TentProduct } from '../types';
import { Users, Ruler, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const Catalog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const tents: (TentProduct & { img: string })[] = [
    { 
      id: 1, 
      name: 'Tenda Sanfonada 3x3', 
      size: '3.0m x 3.0m', 
      capacity: 'Até 12 pessoas', 
      description: 'Modelo articulado de montagem ultra rápida (menos de 2 minutos). Ideal para PDVs, eventos promocionais e recepções externas.',
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      id: 2, 
      name: 'Tenda Piramidal 5x5', 
      size: '5.0m x 5.0m', 
      capacity: 'Até 30 pessoas', 
      description: 'Estrutura robusta em aço galvanizado. Ideal para grandes áreas de cobertura, festas de médio porte e proteção permanente.',
      img: "https://images.unsplash.com/photo-1549412100-348270830491?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      id: 3, 
      name: 'Gazebo Luxo Eventos', 
      size: '3.0m x 4.0m', 
      capacity: 'Até 15 pessoas', 
      description: 'Design elegante com acabamento superior. Perfeito para casamentos, buffets e eventos que exigem estética refinada.',
      img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      id: 4, 
      name: 'Tenda 4x4 Reforçada', 
      size: '4.0m x 4.0m', 
      capacity: 'Até 20 pessoas', 
      description: 'Máxima estabilidade com pés reforçados e lona de alta gramatura. Indicada para feiras livres e eventos gastronômicos.',
      img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200"
    },
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setCurrentIndex((prev) => (prev === tents.length - 1 ? 0 : prev + 1)),
      6000
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === tents.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? tents.length - 1 : prev - 1));

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Galeria de Locação</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6">Nossos Principais Modelos</h3>
        <p className="text-gray-600 text-base md:text-lg">
          Trabalhamos com estruturas novas, limpas e prontas para uso. Navegue pelo nosso carrossel e escolha o tamanho ideal para você.
        </p>
      </div>

      <div className="relative group max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-3xl md:rounded-[3rem] shadow-2xl bg-white border border-gray-100">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {tents.map((tent) => (
              <div key={tent.id} className="w-full flex-shrink-0 grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto h-64 md:h-96 lg:h-full relative overflow-hidden">
                  <img 
                    src={tent.img} 
                    alt={tent.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {tent.size}
                  </div>
                </div>

                <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center bg-white">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{tent.name}</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-8 leading-relaxed">
                    {tent.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest">Dimensões</span>
                      <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm md:text-base">
                        <Ruler size={18} className="text-emerald-500" />
                        <span>{tent.size}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest">Ocupação</span>
                      <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm md:text-base">
                        <Users size={18} className="text-emerald-500" />
                        <span>{tent.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-700 font-bold mb-8 text-sm">
                    <Zap size={18} className="fill-emerald-500 text-emerald-500" />
                    <span>Montagem Incluída para São Paulo Capital</span>
                  </div>

                  <button 
                    className="w-full lg:w-max px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-xl active:scale-95"
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Alugar este Modelo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles do Carrossel */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-emerald-900 shadow-2xl hover:bg-emerald-600 hover:text-white transition-all z-10 border border-gray-100"
          aria-label="Slide Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-emerald-900 shadow-2xl hover:bg-emerald-600 hover:text-white transition-all z-10 border border-gray-100"
          aria-label="Próximo Slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-3 mt-8">
          {tents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-10 bg-emerald-600' : 'w-2 bg-emerald-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
