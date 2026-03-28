'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import SafeImage from './SafeImage';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-black/5' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center max-w-7xl">
        <a href="#home" className="flex items-center group">
          <div className="relative w-32 h-12 group-hover:scale-105 transition-transform">
            <SafeImage 
              src="/Logo_Aruna.png" 
              alt="Aruna Global Exiim Logo" 
              fill 
              sizes="128px"
              className="object-contain"
              priority
              objectFit="contain"
            />
          </div>
        </a>

        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-ink/60 hover:text-brand-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="https://wa.me/918087010632" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-ink text-white px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all shadow-xl hover:shadow-brand-gold/20"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-ink" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-10"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} strokeWidth={1} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-4xl font-serif hover:italic transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/918087010632"
              className="bg-brand-ink text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
