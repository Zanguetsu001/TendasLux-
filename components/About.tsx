
import React, { useState, useEffect } from 'react';
import { Shield, Clock, Award, Move } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Move className="text-emerald-600" />, title: 'Leveza e Praticidade', desc: 'Tendas articuladas de fácil montagem por qualquer pessoa.' },
    { icon: <Clock className="text-emerald-600" />, title: 'Entrega Ágil', desc: 'Logística eficiente para que sua tenda chegue sempre no horário.' },
    { icon: <Shield className="text-emerald-600" />, title: 'Lona Durável', desc: 'Material com proteção solar 100% impermeável e antichamas.' },
    { icon: <Award className="text-emerald-600" />, title: 'Qualidade Premium', desc: 'Estruturas novas e higienizadas para garantir a estética do seu evento.' },
  ];

  // Imagens reais de tendas focadas em eventos e estruturas profissionais
  const tentImages = [
    "https://images.unsplash.com/photo-1549412100-348270830491?auto=format&fit=crop&q=80&w=1200", // Pirâmide branca real
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200", // Tenda grande montada
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200", // Gazebo estruturado
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200", // Tenda de festa
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200", // Estrutura metálica
  ];

  const [slot1, setSlot1] = useState(0);
  const [slot2, setSlot2] = useState(1);
  const [slot3, setSlot3] = useState(2);

  useEffect(() => {
    const timer1 = setInterval(() => setSlot1(prev => (prev + 1) % tentImages.length), 5500);
    const timer2 = setInterval(() => setSlot2(prev => (prev + 1) % tentImages.length), 7500);
    const timer3 = setInterval(() => setSlot3(prev => (prev + 1) % tentImages.length), 9500);
    
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 text-center lg:text-left">Sobre a TendaLux</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
            Cobertura <span className="text-emerald-600">profissional</span> para cada necessidade.
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed text-center lg:text-left">
            Especialistas em locação de tendas para pequenos, médios e grandes projetos. Nossa missão é oferecer segurança e conforto climático com estruturas impecáveis e atendimento consultivo.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {stat.icon}
                </div>
                <h4 className="font-bold text-gray-800">{stat.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-left">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          {/* Colagem Dinâmica Responsiva */}
          <div className="grid grid-cols-12 grid-rows-6 gap-2 md:gap-3 aspect-square max-w-[500px] lg:max-w-none mx-auto">
            
            <div className="col-span-8 row-span-6 relative overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-xl bg-gray-100 border border-gray-100">
              {tentImages.map((img, i) => (
                <img 
                  key={`s1-${i}`}
                  src={img}
                  alt="Tenda Galeria Principal"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === slot1 ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                />
              ))}
            </div>

            <div className="col-span-4 row-span-3 relative overflow-hidden rounded-xl md:rounded-[2rem] shadow-lg bg-gray-100 border border-gray-100">
              {tentImages.map((img, i) => (
                <img 
                  key={`s2-${i}`}
                  src={img}
                  alt="Tenda Galeria Detalhe"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === slot2 ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
                />
              ))}
            </div>

            <div className="col-span-4 row-span-3 relative overflow-hidden rounded-xl md:rounded-[2rem] shadow-lg bg-gray-100 border border-gray-100">
              {tentImages.map((img, i) => (
                <img 
                  key={`s3-${i}`}
                  src={img}
                  alt="Tenda Galeria Ambiente"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === slot3 ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-4 bg-emerald-600 p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl text-white z-20 transform hover:scale-105 transition-transform border-4 border-white">
            <div className="text-2xl md:text-4xl font-bold mb-1">100%</div>
            <div className="text-emerald-100 text-[10px] md:text-xs font-bold uppercase tracking-widest">Segurança</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
