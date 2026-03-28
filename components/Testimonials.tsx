'use client';

import React from 'react';
import { motion } from 'motion/react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label mb-8 block">The Experience</span>
          <div className="relative">
            <div className="absolute -top-10 left-0 text-9xl font-serif text-brand-peach/20 select-none">&ldquo;</div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-brand-ink leading-tight italic"
            >
              Aruna&apos;s attention to detail is unmatched. Her festive collections are my go-to every year. They bring so much warmth and elegance to our celebrations.
            </motion.p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-gold p-1">
              <div className="w-full h-full rounded-full bg-brand-peach/30 flex items-center justify-center font-bold">SK</div>
            </div>
            <h5 className="font-bold text-brand-ink uppercase tracking-widest text-xs">Sneha Kulkarni</h5>
            <p className="text-brand-gold micro-label mt-1">Art Collector</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
