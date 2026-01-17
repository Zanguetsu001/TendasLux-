
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    tentType: 'Pirâmide Clássica',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        tentType: 'Pirâmide Clássica',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8">Vamos planejar seu próximo evento?</h3>
          <p className="text-emerald-100/70 text-lg mb-12">
            Nossa equipe está pronta para te ajudar a escolher a melhor estrutura para o seu projeto. Preencha o formulário ou use um dos nossos canais diretos.
          </p>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Telefone & WhatsApp</h4>
                <p className="text-emerald-100/60">(11) 91234-5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">E-mail</h4>
                <p className="text-emerald-100/60">contato@tendalux-alugueis.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Escritório Central</h4>
                <p className="text-emerald-100/60">Av. Paulista, 1000 - Bela Vista, São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 bg-white rounded-3xl p-6 md:p-12 text-gray-900 shadow-2xl relative overflow-hidden">
          {isSuccess && (
            <div className="absolute inset-0 bg-emerald-600 flex flex-col items-center justify-center text-white z-20 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Check size={40} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Mensagem Enviada!</h4>
              <p className="text-emerald-100 text-center px-8">
                Recebemos seu interesse. Nossa equipe entrará em contato em até 24h.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">E-mail</label>
                <input 
                  type="email" 
                  required
                  placeholder="joao@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Data do Evento</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Tipo de Tenda</label>
              <select 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.tentType}
                onChange={e => setFormData({...formData, tentType: e.target.value})}
              >
                <option>Pirâmide Clássica</option>
                <option>Tenda Sanfonada</option>
                <option>Gazebo Luxo</option>
                <option>Tenda Cristal (Transparente)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Mensagem</label>
              <textarea 
                rows={3}
                placeholder="Detalhes adicionais..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Enviar Solicitação <Send size={20} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
