'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage';

const ThreeDCarousel = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, img: '/Image18.png', title: 'Brush Less Art' },
    { id: 2, img: '/Image4.png', title: 'Handicrafts' },
    { id: 3, img: '/Image13.png', title: 'Murals' },
    { id: 4, img: '/Image11.png', title: 'Castings' },
    { id: 5, img: '/Image12.png', title: 'Designer Diya' },
    { id: 6, img: '/Image10.png', title: 'Fluid Art' },
    { id: 7, img: '/Image15.png', title: 'Terracotta' },
    { id: 8, img: '/Image7.png', title: 'Details' },
  ];

  const radius = 500; // Increased radius for larger cards
  const angleStep = 360 / items.length;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => prev + deltaX * 0.2);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Auto-rotate
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.1);
    }, 16);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section id="gallery" className="py-32 bg-brand-ink overflow-hidden perspective-2000">
      <div className="container mx-auto px-8 mb-20 text-center">
        <span className="micro-label text-brand-gold mb-6 block">Featured Showcase</span>
        <h2 className="text-6xl font-serif text-white">3D <span className="italic text-brand-gold">Gallery</span></h2>
      </div>

      <div 
        className="relative h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div 
          className="relative w-full h-full preserve-3d"
          animate={{ rotateY: rotation }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 1 }}
        >
          {items.map((item, i) => {
            const angle = i * angleStep;
            // Calculate dynamic shading based on rotation
            const relativeRotation = (rotation + angle) % 360;
            const normalizedRotation = Math.cos((relativeRotation * Math.PI) / 180);
            const opacity = (normalizedRotation + 1) / 2; // 0 to 1

            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[350px] h-[350px] md:h-[450px] preserve-3d backface-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-md group transition-all duration-500">
                  {/* Dynamic Shading Overlay */}
                  <div 
                    className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
                    style={{ 
                      backgroundColor: 'black',
                      opacity: Math.max(0, 0.6 - opacity * 0.6) 
                    }}
                  />

                  {/* Specular Highlight / Shine */}
                  <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <SafeImage 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="p-6 z-10"
                    imageClassName="group-hover:scale-110 transition-transform duration-1000"
                    objectFit="contain"
                  />

                  {/* Ambient Light Rim */}
                  <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl z-40 pointer-events-none" />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-50">
                    <p className="text-brand-gold micro-label mb-2">{item.title}</p>
                    <h3 className="text-white font-serif text-2xl">Exquisite Piece</h3>
                  </div>
                </div>

                {/* Reflection / Shadow on "floor" */}
                <div 
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-xl rounded-full -z-10"
                  style={{ opacity: opacity * 0.5 }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <button 
          onClick={() => setRotation(prev => prev + angleStep)}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-ink transition-all"
        >
          <ArrowRight className="rotate-180" size={20} />
        </button>
        <button 
          onClick={() => setRotation(prev => prev - angleStep)}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-ink transition-all"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ThreeDCarousel;
