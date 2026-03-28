'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import SafeImage from './SafeImage';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden relative">
      {/* Rajasthani Toran (Hanging Decoration) */}
      <div className="absolute top-0 left-0 w-full h-12 pointer-events-none z-10 overflow-hidden">
        <div className="flex justify-around items-start">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex flex-col items-center -mt-2">
              <div className="w-4 h-8 bg-brand-gold/20 rounded-b-full border-x border-b border-brand-gold/30" />
              <div className="w-1 h-4 bg-brand-gold/10" />
              <div className="w-2 h-2 rounded-full bg-brand-gold/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image Column with 3D Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Background Decorative Morphing Shape */}
            <motion.div 
              animate={{ 
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-brand-gold/10 -z-10 scale-125 blur-3xl"
            />
            
            {/* Paithani Peacock Motif Animation (Maharashtrian Culture) */}
            <motion.div 
              animate={{ rotate: [0, 8, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -right-16 w-48 h-48 opacity-40 pointer-events-none z-0 hidden lg:block"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
                {/* Peacock Body */}
                <path d="M50 80 Q40 60 50 40 Q60 20 80 10" strokeWidth="2.5" /> 
                <circle cx="80" cy="10" r="4" fill="currentColor" />
                {/* Tail Feathers (Paithani Style) */}
                <path d="M50 80 Q20 70 10 40 Q10 20 30 10" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M50 80 Q30 75 20 50 Q20 30 40 20" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M50 80 Q70 75 80 50 Q80 30 60 20" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Decorative Dots */}
                <circle cx="20" cy="40" r="2" fill="currentColor" />
                <circle cx="30" cy="20" r="2" fill="currentColor" />
                <circle cx="60" cy="30" r="2" fill="currentColor" />
              </svg>
            </motion.div>

            {/* The Image Container with Morphing Border */}
            <motion.div
              animate={{ 
                borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[3/4] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-brand-peach/20 border-[12px] border-white"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full relative"
              >
                <SafeImage 
                  src="/Aruna.png" 
                  alt="Aruna - Art Instructor" 
                  fill 
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              {/* Glass Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>

            {/* Floating Founder Badge */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-8 shadow-2xl rounded-2xl md:rounded-3xl z-20 flex border border-brand-gold/10"
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Sparkles size={14} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <p className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-0.5 md:mb-1 leading-none">Founder</p>
                  <p className="font-serif text-base md:text-xl text-brand-ink leading-none whitespace-nowrap">Aruna Kangude</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Number */}
            <div className="absolute -top-16 -left-16 text-[180px] font-serif text-brand-gold/5 select-none pointer-events-none -z-20">01</div>
            
            {/* Secondary Decorative Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-12 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl z-10 hidden xl:block bg-brand-paper/40"
            >
              <SafeImage 
                src="/Image6.png" 
                alt="Artistic Detail" 
                fill 
                objectFit="contain"
              />
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4 relative">
              <span className="micro-label">About Me</span>
              <h2 className="text-brand-ink">
                Meet <span className="italic text-brand-gold">Aruna</span>
              </h2>
              {/* Decorative Brush Stroke */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-4 left-0 w-48 h-2 bg-brand-gold/20 origin-left rounded-full blur-[1px]"
              />
            </div>
            
            <div className="space-y-8">
              <p>
                I am Aruna — art instructor, wife, mother to two terrific engineers, handicrafts exponent and a small business owner. Decorating my home had always been my passion.
              </p>
              <p>
                When my kids were young, I would spend the time they went to school to learn painting, sculpting, glass etching, baking and so on and so forth. When they grew up and went on to make great careers, I decided to have one of my own! Better late than never!
              </p>
              <p>
                I teach arts and crafts in small classes. Recently I have started my own small business of selling my paintings, murals and glassware. If you are in Pune, you can see my work in one of the many art exhibitions I attend. I also undertake custom orders.
              </p>
              <p className="italic text-brand-ink font-serif text-2xl pt-4 border-t border-brand-gold/20 leading-relaxed">
                &quot;When not in my studio, I enjoy trying new recipes, watching films and talking to my kids!&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-10">
              <div>
                <div className="text-4xl font-serif text-brand-gold mb-2">25+</div>
                <div className="text-xs uppercase tracking-widest text-brand-ink/40 font-bold">Years of Mastery</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-brand-gold mb-2">500+</div>
                <div className="text-xs uppercase tracking-widest text-brand-ink/40 font-bold">Unique Creations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
