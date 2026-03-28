'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SafeImage from './SafeImage';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-40 lg:pt-48 overflow-hidden bg-brand-cream">
      {/* Rajasthani Mandana Corner Decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 opacity-10 pointer-events-none z-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
          <path d="M0 0 L100 0 L0 100 Z" fill="currentColor" fillOpacity="0.05" />
          <circle cx="15" cy="15" r="10" strokeWidth="0.5" />
          <circle cx="15" cy="15" r="5" strokeWidth="0.5" />
          <path d="M15 5 L15 25 M5 15 L25 15" strokeWidth="0.5" />
          <path d="M0 40 Q20 40 40 0" strokeWidth="0.5" />
          <path d="M0 60 Q40 60 60 0" strokeWidth="0.5" />
          <path d="M0 80 Q60 80 80 0" strokeWidth="0.5" />
          {[...Array(8)].map((_, i) => (
            <circle key={i} cx={5 + i * 10} cy={5 + i * 10} r="1" fill="currentColor" />
          ))}
        </svg>
      </div>

      {/* Traditional Border Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold/20 z-20">
        <div className="absolute inset-0 opacity-40">
          <svg width="100%" height="100%">
            <pattern id="border-pattern" x="0" y="0" width="20" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-brand-gold" />
              <circle cx="10" cy="2" r="1" fill="currentColor" className="text-brand-gold" />
              <circle cx="18" cy="2" r="1" fill="currentColor" className="text-brand-gold" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#border-pattern)" />
          </svg>
        </div>
      </div>

      {/* Rajasthani Elephant Motif (Subtle Background) */}
      <div className="absolute bottom-1/4 left-10 w-32 h-32 opacity-[0.03] pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-brand-ink">
          <path d="M20 80 Q20 40 50 40 Q80 40 80 80 L70 80 Q70 60 50 60 Q30 60 30 80 Z" />
          <circle cx="40" cy="50" r="2" />
          <path d="M80 80 L90 70 L85 65 L75 75 Z" />
          <path d="M20 80 L10 70 L15 65 L25 75 Z" />
        </svg>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.02] z-0">
        <span className="text-[40vw] font-serif font-black leading-none">ARUNA</span>
      </div>

      {/* Rotating Mandala Decorative Element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] opacity-[0.03] pointer-events-none z-0"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-ink w-full h-full">
          <circle cx="50" cy="50" r="48" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.1" strokeDasharray="1 2" />
          {[...Array(36)].map((_, i) => (
            <path
              key={i}
              d="M50 50 L50 2"
              transform={`rotate(${i * 10} 50 50)`}
              strokeWidth="0.05"
            />
          ))}
          {[...Array(18)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="10"
              r="4"
              transform={`rotate(${i * 20} 50 50)`}
              strokeWidth="0.1"
            />
          ))}
        </svg>
      </motion.div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex-shrink-0 w-8 md:w-10 h-[1px] bg-brand-gold/40" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold/80">ESTABLISHED 2009</span>
                
                {/* Maharashtrian Tutari Animation */}
                <motion.div 
                  initial={{ rotate: -15 }}
                  animate={{ rotate: [ -15, 10, -15 ] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 text-brand-gold opacity-100 hidden md:block"
                >
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 30 Q25 10 35 25" /> {/* Main Curve */}
                    <circle cx="35" cy="25" r="4" fill="currentColor" /> {/* Bell */}
                    <path d="M10 30 L5 35" /> {/* Mouthpiece */}
                  </svg>
                </motion.div>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-xl md:text-2xl font-serif italic text-brand-gold/80 mb-4 tracking-wide"
              >
                Where Tradition Meets Timeless Artistry
              </motion.p>
              
              <h1 className="text-[12vw] lg:text-[7.5vw] text-display mb-8 text-brand-ink leading-[1.1]">
                Global <br />
                <span className="italic text-brand-gold">Exiim</span>
              </h1>
              
              <p className="mb-12 max-w-xl">
                Aruna Global Exiim bridges the gap between traditional Indian craftsmanship and modern global aesthetics. We curate museum-grade masterpieces for the discerning collector.
              </p>

              <div className="flex flex-wrap gap-6">
                <a 
                  href="#collection" 
                  className="bg-brand-ink text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all shadow-2xl hover:shadow-brand-gold/20"
                >
                  Explore Collection
                </a>
                <a 
                  href="https://wa.me/918087010632" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-brand-ink/20 text-brand-ink px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-ink hover:text-white transition-all"
                  aria-label="Send a private enquiry via WhatsApp"
                >
                  Private Enquiry
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: y1 }}
              className="relative z-10 aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-brand-paper/20 border border-white/20"
            >
              <SafeImage 
                src="/Image1.png" 
                alt="Featured Art" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-20 -left-20 w-72 aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 hidden lg:block bg-brand-paper/30 border border-white/20 backdrop-blur-sm"
            >
              <SafeImage 
                src="/Image5.png" 
                alt="Detail" 
                fill
                sizes="256px"
                objectFit="contain"
                className="p-8"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-peach/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
      {/* Traditional Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold/20 z-20">
        <div className="absolute inset-0 opacity-40">
          <svg width="100%" height="100%">
            <use href="#border-pattern" />
            <rect width="100%" height="100%" fill="url(#border-pattern)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
