'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const JaaliReveal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, delay: 0.5 }
          }}
          className="fixed inset-0 z-[100] bg-brand-cream flex items-center justify-center overflow-hidden"
        >
          {/* Left Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '-100%',
              transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-brand-ink flex items-center justify-end overflow-hidden"
          >
            {/* Jaali Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" className="text-brand-gold">
                <pattern id="jaali-left" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#jaali-left)" />
              </svg>
            </div>
            
            <div className="relative pr-8 text-right">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white font-serif text-5xl md:text-7xl italic"
              >
                Global
              </motion.h2>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '100%',
              transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
            }}
            className="absolute inset-y-0 right-0 w-1/2 bg-brand-ink flex items-center justify-start overflow-hidden border-l border-brand-gold/20"
          >
            {/* Jaali Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" className="text-brand-gold">
                <pattern id="jaali-right" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#jaali-right)" />
              </svg>
            </div>

            <div className="relative pl-8">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-brand-gold font-serif text-5xl md:text-7xl"
              >
                Exiim
              </motion.h2>
            </div>
          </motion.div>

          {/* Center Decorative Mandala with Lotus Motif */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ 
              scale: 2, 
              opacity: 0,
              transition: { duration: 0.8 }
            }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-brand-gold rounded-full flex items-center justify-center shadow-2xl"
          >
            <div className="absolute inset-2 border-2 border-white/20 rounded-full" />
            <div className="absolute inset-4 border border-white/10 rounded-full border-dashed" />
            <svg width="70%" height="70%" viewBox="0 0 100 100" fill="none" stroke="white" className="opacity-90">
              {/* Lotus Petals */}
              {[...Array(8)].map((_, i) => (
                <path
                  key={i}
                  d="M50 50 Q65 30 50 10 Q35 30 50 50"
                  transform={`rotate(${i * 45} 50 50)`}
                  strokeWidth="1.5"
                  fill="white"
                  fillOpacity="0.1"
                />
              ))}
              <circle cx="50" cy="50" r="12" fill="white" fillOpacity="0.3" />
              <circle cx="50" cy="50" r="6" fill="white" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JaaliReveal;
