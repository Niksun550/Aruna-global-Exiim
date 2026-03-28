'use client';

import React from 'react';
import { motion } from 'motion/react';

const GlobalReach = () => {
  return (
    <section id="reach" className="section-padding bg-brand-paper/30 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="micro-label">Global Presence</span>
              <h2 className="text-6xl font-serif text-brand-ink">Art That <span className="italic">Travels</span></h2>
              <p className="text-xl text-brand-ink/60 font-light leading-relaxed max-w-lg">
                While based in Pune, India, my creations have found homes in private collections across the globe. From the bustling streets of New York to the modern galleries of Dubai.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-[1px] bg-brand-gold group-hover:w-24 transition-all duration-500" />
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink">International Shipping</p>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-[1px] bg-brand-gold group-hover:w-24 transition-all duration-500" />
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink">Custom Commissions</p>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-[1px] bg-brand-gold group-hover:w-24 transition-all duration-500" />
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink">Art Exhibitions</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-brand-gold/5 rounded-full animate-pulse" />
            <div className="absolute inset-12 border border-brand-ink/5 rounded-full" />
            <div className="absolute inset-24 border border-brand-ink/10 rounded-full" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Headquarters</p>
                <p className="text-4xl font-serif text-brand-ink">Pune, India</p>
                <div className="w-1 h-20 bg-gradient-to-b from-brand-gold to-transparent mx-auto" />
              </div>
            </div>

            {/* Floating City Tags */}
            {[
              { name: 'London', top: '20%', left: '15%' },
              { name: 'Dubai', top: '45%', left: '80%' },
              { name: 'New York', top: '70%', left: '20%' },
              { name: 'Singapore', top: '15%', left: '70%' },
            ].map((city, i) => (
              <motion.div 
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className="absolute bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20"
                style={{ top: city.top, left: city.left }}
              >
                <span className="text-[9px] uppercase tracking-widest font-bold text-brand-ink">{city.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
