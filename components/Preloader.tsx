'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SafeImage from './SafeImage';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] bg-brand-cream flex items-center justify-center overflow-hidden"
        >
          {/* Rotating Mandala Background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute opacity-[0.03] pointer-events-none"
          >
            <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-ink">
              <circle cx="50" cy="50" r="48" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="40" strokeWidth="0.1" strokeDasharray="1 2" />
              {[...Array(24)].map((_, i) => (
                <path
                  key={i}
                  d="M50 50 L50 2"
                  transform={`rotate(${i * 15} 50 50)`}
                  strokeWidth="0.05"
                />
              ))}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx="50"
                  cy="15"
                  r="3"
                  transform={`rotate(${i * 30} 50 50)`}
                  strokeWidth="0.1"
                />
              ))}
            </svg>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-48 h-24 mb-8"
            >
              <SafeImage 
                src="/Logo_Aruna.png" 
                alt="Aruna Global Exiim" 
                fill 
                priority
                objectFit="contain"
              />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-40 h-[1px] bg-brand-ink/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-brand-gold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold"
            >
              Where Tradition Meets Timeless Artistry
            </motion.p>
          </div>

          {/* Artistic Brush Stroke Overlays */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-full h-1 bg-brand-gold/20 origin-left"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute bottom-0 right-0 w-full h-1 bg-brand-gold/20 origin-right"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
