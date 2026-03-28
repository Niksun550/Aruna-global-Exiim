export interface Product {
  id: number;
  name: string;
  category: string;
  img: string;
  description: string;
  details?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Ethereal Flow', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image1.png',
    description: 'A mesmerizing display of organic textures and fluid movements, created without traditional tools.',
    details: ['Hand-poured pigments', 'High-gloss finish', 'Canvas on wood frame'],
    featured: true
  },
  { 
    id: 2, 
    name: 'Traditional Motif', 
    category: 'HANDICRAFTS', 
    img: '/Image2.png',
    description: 'Intricate handcrafted patterns that celebrate the heritage of Indian craftsmanship.',
    details: ['Eco-friendly materials', 'Hand-painted details', 'Cultural significance']
  },
  { 
    id: 3, 
    name: 'Artisan Handicrafts', 
    category: 'HANDICRAFTS', 
    img: '/Image3.png',
    description: 'Exquisite handcrafted items that showcase the rich heritage of Indian artisans with a modern twist.',
    details: ['Sustainably sourced materials', 'Intricate detailing', 'Perfect for luxury gifting']
  },
  { 
    id: 4, 
    name: 'Golden Harmony', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image4.png',
    description: 'A radiant composition blending gold leaf accents with deep, textured pigments.',
    details: ['24K Gold leaf accents', 'Textured surface', 'Museum-grade canvas'],
    featured: true
  },
  { 
    id: 5, 
    name: 'Rustic Charm', 
    category: 'HANDICRAFTS', 
    img: '/Image5.png',
    description: 'Hand-carved wooden elements that bring a touch of nature and tradition to any space.',
    details: ['Reclaimed teak wood', 'Natural oil finish', 'Hand-carved']
  },
  { 
    id: 6, 
    name: 'Floral Symphony', 
    category: 'MURALS', 
    img: '/Image6.png',
    description: 'A large-scale mural capturing the delicate beauty of blooming flora in vibrant colors.',
    details: ['Customizable size', 'UV resistant pigments', 'Indoor/Outdoor options'],
    featured: true
  },
  { 
    id: 7, 
    name: 'Abstract Depth', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image7.png',
    description: 'Layers of translucent color create a sense of infinite depth and mystery.',
    details: ['Multi-layered technique', 'Satin finish', 'Contemporary style']
  },
  { 
    id: 8, 
    name: 'Heritage Vessel', 
    category: 'HANDICRAFTS', 
    img: '/Image8.png',
    description: 'A beautifully crafted vessel inspired by ancient Indian pottery techniques.',
    details: ['Hand-thrown clay', 'Traditional kiln-fired', 'Decorative use']
  },
  { 
    id: 9, 
    name: 'Sacred Flame', 
    category: 'Designer Diya', 
    img: '/Image9.png',
    description: 'A designer diya that combines spiritual light with contemporary sculptural form.',
    details: ['Brass construction', 'Hand-polished', 'Modern silhouette'],
    featured: true
  },
  { 
    id: 10, 
    name: 'Fluid Art Masterpiece', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image10.png',
    description: 'Dynamic compositions created through the controlled flow of pigments.',
    details: ['Unique one-of-a-kind piece', 'High-gloss resin finish', 'Vibrant color palettes']
  },
  { 
    id: 11, 
    name: 'Bespoke Casting', 
    category: 'CASTINGS', 
    img: '/Image11.png',
    description: 'Capturing moments in time through high-precision casting techniques.',
    details: ['Skin-safe materials', 'Cold-cast bronze', 'Lifetime durability'],
    featured: true
  },
  { 
    id: 12, 
    name: 'Royal Diya', 
    category: 'Designer Diya', 
    img: '/Image12.png',
    description: 'Traditional lighting reimagined as contemporary art pieces.',
    details: ['Hand-painted accents', 'Heat-resistant coating', 'Limited edition']
  },
  { 
    id: 13, 
    name: 'Architectural Mural', 
    category: 'MURALS', 
    img: '/Image13.png',
    description: 'Large-scale artistic installations that transform spaces.',
    details: ['Custom site-specific', 'Weather-resistant', 'Collaborative design'],
    featured: true
  },
  { 
    id: 14, 
    name: 'Modern Mural', 
    category: 'MURALS', 
    img: '/Image14.png',
    description: 'Contemporary mural designs for modern living spaces.',
    details: ['Minimalist aesthetic', 'Textured finish', 'Eco-friendly paints']
  },
  { 
    id: 15, 
    name: 'Terracotta Treasure', 
    category: 'HANDICRAFTS', 
    img: '/Image15.png',
    description: 'Earth-born creations that celebrate the raw beauty of clay.',
    details: ['Traditional firing', 'Eco-friendly pigments', 'Organic textures']
  },
  { 
    id: 16, 
    name: 'Designer Diya Collection', 
    category: 'Designer Diya', 
    img: '/Image16.png',
    description: 'A collection of designer diyas for festive elegance.',
    details: ['Set of 4', 'Gift boxed', 'Hand-finished'],
    featured: true
  },
  { 
    id: 17, 
    name: 'Brush Less Art', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image17.png',
    description: 'A unique technique where art is created without traditional brushes.',
    details: ['Handcrafted in Pune', 'Museum-grade canvas', 'UV protected']
  },
  { 
    id: 18, 
    name: 'Ethereal Fluid Art', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image18.png',
    description: 'Capturing the beauty of movement through fluid pigments.',
    details: ['Resin coated', 'Vibrant colors', 'Ready to hang'],
    featured: true
  },
  { 
    id: 19, 
    name: 'Bespoke Castings', 
    category: 'CASTINGS', 
    img: '/Image19.png',
    description: 'High-precision casting that preserves every detail.',
    details: ['Marble finish', 'Custom orders', 'Artistic quality']
  },
];
