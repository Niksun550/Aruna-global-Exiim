'use client';

import React from 'react';
import { motion } from 'motion/react';

const Stats = () => {
  const stats = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Countries Exported', value: '20+' },
    { label: 'Unique Designs', value: '500+' },
    { label: 'Happy Clients', value: '1000+' },
  ];

  return (
    <section id="stats" className="py-20 bg-brand-ink border-y border-white/5 relative overflow-hidden">
      {/* Warli Sun Background Animation (Maharashtrian Culture) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            <circle cx="50" cy="50" r="10" strokeWidth="1" />
            {[...Array(24)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 15} 50 50)`}>
                <path d="M50 35 L50 10" strokeWidth="1" />
                <path d="M50 30 L45 25 L55 25 Z" fill="currentColor" /> {/* Warli Triangle Ray */}
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Warli Tarpa Dance Circle (Maharashtrian Culture) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] opacity-[0.04] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            {[...Array(16)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5} 50 50)`}>
                {/* Warli Human Figure in Circle */}
                <circle cx="50" cy="15" r="2" strokeWidth="0.5" />
                <path d="M50 17 L46 23 L54 23 L50 17 Z" strokeWidth="0.5" />
                <path d="M50 23 L46 29 L54 29 L50 23 Z" strokeWidth="0.5" />
                <path d="M50 20 L42 18 M50 20 L58 18" strokeWidth="0.5" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Warli Sun Background Animation (Maharashtrian Culture) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            <circle cx="50" cy="50" r="10" strokeWidth="1" />
            {[...Array(24)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 15} 50 50)`}>
                <path d="M50 35 L50 10" strokeWidth="1" />
                <path d="M50 30 L45 25 L55 25 Z" fill="currentColor" /> {/* Warli Triangle Ray */}
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Warli Tree of Life (Subtle Background) */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-[0.03] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: 'bottom' }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            <path d="M50 90 L50 40" strokeWidth="1" /> {/* Trunk */}
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`translate(50, ${80 - i * 10})`}>
                <path d={`M0 0 L${15 - i} -10`} strokeWidth="0.8" />
                <path d={`M0 0 L-${15 - i} -10`} strokeWidth="0.8" />
                {/* Leaves/Triangles */}
                <path d={`M${15 - i} -10 L${18 - i} -13 L${12 - i} -13 Z`} fill="currentColor" />
                <path d={`M-${15 - i} -10 L-${18 - i} -13 L-${12 - i} -13 Z`} fill="currentColor" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="stats-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#stats-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <p className="text-4xl md:text-6xl font-serif text-brand-gold leading-none">{stat.value}</p>
              <p className="micro-label !text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Warli Tarpa Dance Circle (Maharashtrian Culture) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] opacity-[0.04] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            {[...Array(16)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5} 50 50)`}>
                {/* Warli Human Figure in Circle */}
                <circle cx="50" cy="15" r="2" strokeWidth="0.5" />
                <path d="M50 17 L46 23 L54 23 L50 17 Z" strokeWidth="0.5" />
                <path d="M50 23 L46 29 L54 29 L50 23 Z" strokeWidth="0.5" />
                <path d="M50 20 L42 18 M50 20 L58 18" strokeWidth="0.5" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Animated Warli Procession */}
      <div className="absolute bottom-4 left-0 w-full overflow-hidden whitespace-nowrap opacity-30 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 items-end"
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-end space-x-8">
              {/* Warli Human Figure */}
              <svg width="32" height="50" viewBox="0 0 24 40" fill="none" stroke="currentColor" className="text-brand-gold">
                <circle cx="12" cy="8" r="4" strokeWidth="2" />
                <path d="M12 12 L4 24 L20 24 L12 12 Z" strokeWidth="2" />
                <path d="M12 24 L4 36 L20 36 L12 24 Z" strokeWidth="2" />
                <path d="M12 18 L2 14 M12 18 L22 14" strokeWidth="2" />
              </svg>
              {/* Warli Musician with Tutari/Trumpet */}
              <svg width="40" height="50" viewBox="0 0 30 40" fill="none" stroke="currentColor" className="text-brand-gold">
                <circle cx="10" cy="8" r="4" strokeWidth="2" />
                <path d="M10 12 L2 24 L18 24 L10 12 Z" strokeWidth="2" />
                <path d="M10 24 L2 36 L18 36 L10 24 Z" strokeWidth="2" />
                <path d="M10 16 Q25 10 28 20" strokeWidth="2" /> {/* Tutari */}
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
