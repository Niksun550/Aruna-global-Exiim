import React from 'react';
import { products } from '@/lib/products';

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    "name": "Aruna Global Exiim",
    "alternateName": "Aruna Art Gallery",
    "description": "Exporters of unique handmade treasures and artistic excellence since 2009. Discover museum-grade murals, paintings, and handicrafts from Pune to the world.",
    "url": "https://arunaglobalexiim.com",
    "logo": "https://arunaglobalexiim.com/Aruna.png",
    "image": "https://arunaglobalexiim.com/Aruna.png",
    "founder": {
      "@type": "Person",
      "name": "Aruna Kangude",
      "jobTitle": "Founder & Lead Artist"
    },
    "foundingDate": "2009",
    "areaServed": "Worldwide",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8087010632",
      "contactType": "Sales and Private Enquiry",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "sameAs": [
      "https://wa.me/918087010632"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Art Collection",
      "itemListElement": products.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "image": p.img,
          "category": p.category
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
