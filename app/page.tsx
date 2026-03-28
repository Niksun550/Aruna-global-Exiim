'use client';

import React, { Suspense, useEffect } from 'react';
import StructuredData from '@/components/StructuredData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ThreeDCarousel from '@/components/ThreeDCarousel';
import About from '@/components/About';
import GlobalReach from '@/components/GlobalReach';
import Collection from '@/components/Collection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JaaliReveal from '@/components/JaaliReveal';

export default function HomePage() {
  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0);
    
    // Some browsers might need a small timeout or handle it via history
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen bg-brand-paper selection:bg-brand-gold selection:text-white">
      <JaaliReveal />
      <StructuredData />
      <Navbar />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Hero />
        <Stats />
        <ThreeDCarousel />
        <About />
        <GlobalReach />
        <Collection />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>

      <FloatingWhatsApp />
    </main>
  );
}
