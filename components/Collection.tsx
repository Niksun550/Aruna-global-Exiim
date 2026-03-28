'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SafeImage from './SafeImage';
import { products } from '@/lib/products';

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Brush Less PAINTINGS', 'HANDICRAFTS', 'MURALS', 'CASTINGS', 'Designer Diya'];

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <section id="collection" className="section-padding bg-brand-cream relative overflow-hidden">
      {/* Traditional Border Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold/10 z-10">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <pattern id="collection-border" x="0" y="0" width="40" height="4" patternUnits="userSpaceOnUse">
              <path d="M0 2 Q10 0 20 2 Q30 4 40 2" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#collection-border)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="micro-label mb-6 block">The Portfolio</span>
            <h2 className="text-brand-ink">Curated <span className="italic">Excellence</span></h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full transition-all ${activeCategory === cat ? 'bg-brand-ink text-white' : 'bg-white text-brand-ink/40 hover:text-brand-ink'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, idx) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  y: { duration: 0.4, ease: "easeOut" },
                  scale: { duration: 0.4, ease: "easeOut" }
                }}
                className="group cursor-pointer transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-2"
              >
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden mb-6 bg-brand-paper/20 border border-brand-ink/5">
                  <SafeImage 
                    src={product.img} 
                    alt={product.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    imageClassName="group-hover:scale-110 transition-transform duration-1000 p-8"
                    objectFit="contain"
                  />
                  <div className="absolute inset-0 bg-brand-ink/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/10 border border-white/20 backdrop-blur-md p-1 rounded-full mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white text-brand-ink px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold">
                        View Details
                      </div>
                    </div>
                    <Link 
                      href={`/collection/${product.id}`}
                      className="absolute inset-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div className="space-y-1">
                    <p className="micro-label !text-brand-ink/40">{product.category}</p>
                    <h3 className="text-2xl font-serif text-brand-ink">{product.name || 'Masterpiece'}</h3>
                  </div>
                  <Link href={`/collection/${product.id}`} className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-ink/20 group-hover:text-brand-gold group-hover:border-brand-gold transition-colors">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Collection;
