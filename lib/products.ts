export interface Product {
  id: number;
  name: string;
  category: string;
  img: string;
  description: string;
  details?: string[];
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Brush Less Art', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image17.png',
    description: 'A unique technique where art is created without traditional brushes, resulting in organic textures and ethereal flows.',
    details: ['Handcrafted in Pune', 'Museum-grade canvas', 'UV protected finish']
  },
  { 
    id: 2, 
    name: 'Artisan Handicrafts', 
    category: 'HANDICRAFTS', 
    img: '/Image3.png',
    description: 'Exquisite handcrafted items that showcase the rich heritage of Indian artisans with a modern twist.',
    details: ['Sustainably sourced materials', 'Intricate detailing', 'Perfect for luxury gifting']
  },
  { 
    id: 4, 
    name: 'Architectural Murals', 
    category: 'MURALS', 
    img: '/Image14.png',
    description: 'Large-scale artistic installations that transform spaces into immersive storytelling environments.',
    details: ['Custom site-specific designs', 'Weather-resistant options', 'Collaborative design process']
  },
  { 
    id: 5, 
    name: 'Bespoke Castings', 
    category: 'CASTINGS', 
    img: '/Image19.png',
    description: 'Capturing moments in time through high-precision casting techniques that preserve every detail.',
    details: ['Skin-safe materials', 'Cold-cast bronze or marble finishes', 'Lifetime durability']
  },
  { 
    id: 6, 
    name: 'Designer Diya Collection', 
    category: 'Designer Diya', 
    img: '/Image16.png',
    description: 'Traditional lighting reimagined as contemporary art pieces, blending spiritual significance with modern design.',
    details: ['Hand-painted accents', 'Heat-resistant coating', 'Limited edition designs']
  },
  { 
    id: 7, 
    name: 'Ethereal Fluid Art', 
    category: 'Brush Less PAINTINGS', 
    img: '/Image18.png',
    description: 'Dynamic compositions created through the controlled flow of pigments, capturing the beauty of movement.',
    details: ['Unique one-of-a-kind piece', 'High-gloss resin finish', 'Vibrant color palettes']
  },
  { 
    id: 8, 
    name: 'Terracotta Treasures', 
    category: 'HANDICRAFTS', 
    img: '/Image15.png',
    description: 'Earth-born creations that celebrate the raw beauty of clay, shaped by hand and fired to perfection.',
    details: ['Traditional firing techniques', 'Eco-friendly pigments', 'Organic textures']
  },
];
