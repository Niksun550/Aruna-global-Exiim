'use client';

import React from 'react';
import { motion } from 'motion/react';
import SafeImage from './SafeImage';

const Footer = () => {
  return (
    <footer className="bg-white py-24 border-t border-black/5 relative overflow-hidden">
      {/* Warli Sun Background Animation (Maharashtrian Culture) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            <circle cx="50" cy="50" r="10" strokeWidth="1" />
            {[...Array(24)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 15} 50 50)`}>
                <path d="M50 35 L50 10" strokeWidth="1" />
                <path d="M50 30 L45 25 L55 25 Z" fill="currentColor" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Warli Tree of Life (Subtle Background) */}
      <div className="absolute bottom-0 left-10 w-48 h-48 opacity-[0.03] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: 'bottom' }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            <path d="M50 90 L50 40" strokeWidth="1" />
            {[...Array(6)].map((_, i) => (
              <g key={i} transform={`translate(50, ${80 - i * 12})`}>
                <path d={`M0 0 L${12 - i} -8`} strokeWidth="0.8" />
                <path d={`M0 0 L-${12 - i} -8`} strokeWidth="0.8" />
                <path d={`M${12 - i} -8 L${14 - i} -10 L${10 - i} -10 Z`} fill="currentColor" />
                <path d={`M-${12 - i} -8 L-${14 - i} -10 L-${10 - i} -10 Z`} fill="currentColor" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Rajasthani Mandana Floor Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="mandana-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
            <path d="M50 10 L90 50 L50 90 L100 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
            <path d="M50 10 L10 50 L50 90 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
            <circle cx="50" cy="50" r="5" fill="currentColor" className="text-brand-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mandana-pattern)" />
        </svg>
      </div>

      {/* Decorative Mandala */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
          <circle cx="50" cy="50" r="45" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="25" strokeWidth="0.1" />
          {[...Array(24)].map((_, i) => (
            <path key={i} d="M50 5 L50 95" transform={`rotate(${i * 7.5} 50 50)`} strokeWidth="0.05" />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Animated Warli Procession in Footer */}
        <div className="mb-12 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex space-x-16 items-end"
          >
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-end space-x-10">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" className="text-brand-gold">
                  <circle cx="12" cy="8" r="4" strokeWidth="2" />
                  <path d="M12 12 L4 24 L20 24 L12 12 Z" strokeWidth="2" />
                  <path d="M12 24 L4 36 L20 36 L12 24 Z" strokeWidth="2" />
                  <path d="M12 18 L2 14 M12 18 L22 14" strokeWidth="2" />
                </svg>
                <svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="currentColor" className="text-brand-gold">
                  <circle cx="10" cy="8" r="4" strokeWidth="2" />
                  <path d="M10 12 L2 24 L18 24 L10 12 Z" strokeWidth="2" />
                  <path d="M10 24 L2 36 L18 36 L10 24 Z" strokeWidth="2" />
                  <path d="M10 16 Q25 10 28 20" strokeWidth="2" />
                </svg>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center space-y-12">
          <a href="#" className="flex flex-col items-center" aria-label="Go to top of page">
            <div className="relative w-48 h-24 mb-4">
              <SafeImage 
                src="/Logo_Aruna.png" 
                alt="Aruna Global Exiim Logo" 
                fill 
                sizes="192px"
                className="object-contain"
                imageClassName="object-contain"
                priority
                objectFit="contain"
              />
            </div>
          </a>
          <p className="text-brand-ink/40 max-w-xl">
            Exporters of unique handmade treasures and artistic excellence since 2009.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {['Home', 'About', 'Collection', 'Gallery', 'Process', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="micro-label !text-brand-ink/60 hover:!text-brand-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-12 border-t border-black/5 w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="micro-label !text-brand-ink/30">&copy; {new Date().getFullYear()} Aruna Global Exiim. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
