'use client';

import React from 'react';
import { motion } from 'motion/react';
import SafeImage from './SafeImage';

const Features = () => {
  const items = [
    { title: 'Artisanal Integrity', desc: 'No mass production. Every piece is a unique dialogue between the artist and the medium.', img: '/Image2.png' },
    { title: 'Bespoke Curation', desc: 'Tailored specifically for your space, your occasion, and your emotional resonance.', img: '/Image4.png' },
    { title: 'Timeless Quality', desc: 'Using museum-grade materials to ensure your treasures endure for generations.', img: '/Image6.png' },
  ];

  return (
    <section id="process" className="section-padding bg-brand-ink text-white relative overflow-hidden">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="features-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#features-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-8"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 group">
                <SafeImage 
                  src={item.img}
                  alt={item.title}
                  fill
                  className="group-hover:scale-110 transition-transform duration-1000"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-brand-gold font-serif text-6xl">0{i+1}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-white">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
