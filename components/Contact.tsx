'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-cream relative overflow-hidden">
      {/* Sanskar Bharti Rangoli Animation (Maharashtrian Culture) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] opacity-[0.06] pointer-events-none z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-brand-gold">
            <circle cx="50" cy="50" r="45" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="35" strokeWidth="0.4" strokeDasharray="2 4" />
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                <path d="M50 15 Q60 25 50 35 Q40 25 50 15" strokeWidth="0.4" />
                <circle cx="50" cy="10" r="1.5" fill="currentColor" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-16 lg:p-24 space-y-12">
            <div>
              <span className="micro-label mb-6 block">Concierge</span>
              <h2 className="text-brand-ink mb-8">Let&apos;s Create <br /> <span className="italic">Together</span></h2>
              <p className="max-w-md">
                Whether it&apos;s a custom gift or a statement piece for your home, we are here to bring your vision to life.
              </p>
            </div>

            <div className="space-y-10">
              <a href="tel:+918087010632" className="flex items-center space-x-8 group">
                <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-white transition-all duration-500">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="micro-label">Direct Line</p>
                  <p className="text-2xl font-serif text-brand-ink">+91 80870 10632</p>
                </div>
              </a>
              <a href="https://wa.me/918087010632" className="flex items-center space-x-8 group">
                <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                  <MessageCircle size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="micro-label">WhatsApp</p>
                  <p className="text-2xl font-serif text-brand-ink">Chat with Aruna</p>
                </div>
              </a>
              <div className="flex items-center space-x-8 group">
                <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="micro-label">Boutique Address</p>
                  <p className="text-2xl font-serif text-brand-ink">S. B. Road, Pune</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-black/5 flex gap-8">
              <a href="https://www.facebook.com/Arunasart/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-ink hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-ink hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 min-h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1539230558124!2d73.8298744751917!3d18.5220039825732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf90f3c00001%3A0x7d6b389f4b1070!2sPride%20Panorama!5e0!3m2!1sen!2sin!4v1711310000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-60 hover:opacity-100 transition-opacity duration-1000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
