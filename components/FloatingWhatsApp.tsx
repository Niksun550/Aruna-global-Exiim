'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/918087010632" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] flex items-center justify-center"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
