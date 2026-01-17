
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5511912345678"; // Número fictício atualizado
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para aluguel de tendas.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-800 text-xs font-bold py-2 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Fale conosco agora!
      </div>
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;
