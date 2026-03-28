import React from 'react';
import { products } from '@/lib/products';

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    "name": "Aruna Global Exiim",
    "description": "Exporters of unique handmade treasures and artistic excellence since 2009. Discover museum-grade murals, paintings, and handicrafts from Pune to the world.",
    "url": "https://arunaglobalexiim.com",
    "logo": "https://arunaglobalexiim.com/Logo_Aruna.png",
    "founder": {
      "@type": "Person",
      "name": "Aruna Kangude"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
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
