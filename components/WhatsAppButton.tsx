'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = '', 
  message = 'Hi, I would like to learn more about your homecare services.' 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    // Use environment variable or fallback
    const number = phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
    
    if (!number) {
      console.error('WhatsApp number not configured');
      return;
    }
    
    // Clean the number
    const cleanNumber = number.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float no-print"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" fill="white" />
    </button>
  );
}
