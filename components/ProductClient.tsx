'use client';

import { Product } from '@/lib/products';
import { ArrowLeft, MessageCircle, Sparkles, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function ProductClient({ product }: { product: Product }) {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-peach selection:text-brand-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl py-6 border-b border-black/5">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-brand-ink/60 hover:text-brand-ink transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Back to Gallery</span>
          </Link>
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">
            Aruna Global Exiim
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-brand-paper/20 border border-brand-ink/5 shadow-2xl"
            >
              <Image 
                src={product.img} 
                alt={product.name} 
                fill
                className="w-full h-full object-contain p-12"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                <span className="text-[9px] uppercase tracking-widest font-bold text-brand-ink">{product.category}</span>
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-[1px] w-12 bg-brand-gold" />
                  <span className="micro-label">Masterpiece Detail</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-serif text-brand-ink leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-brand-ink/60 font-light leading-relaxed max-w-xl">
                  {product.description}
                </p>
              </motion.div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.details?.map((detail, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <p className="text-sm text-brand-ink/70 font-medium pt-2">{detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-12 border-t border-black/5 grid grid-cols-2 gap-8"
              >
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="text-brand-gold" size={24} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink">Quality Assured</p>
                    <p className="text-[9px] text-brand-ink/40">Museum-grade materials</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="text-brand-gold" size={24} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink">Global Shipping</p>
                    <p className="text-[9px] text-brand-ink/40">Secure international transit</p>
                  </div>
                </div>
              </motion.div>

              {/* Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="pt-8"
              >
                <a 
                  href={`https://wa.me/918087010632?text=Enquiry: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 bg-brand-ink text-white px-12 py-5 rounded-full hover:bg-brand-gold transition-all shadow-2xl hover:shadow-brand-gold/20 group"
                >
                  <MessageCircle size={20} />
                  <span className="font-bold uppercase tracking-widest text-xs">Enquire for Purchase</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 bg-white/50">
        <div className="container mx-auto px-8 text-center">
          <p className="text-[10px] uppercase tracking-widest text-brand-ink/30">
            &copy; {new Date().getFullYear()} Aruna Global Exiim. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
