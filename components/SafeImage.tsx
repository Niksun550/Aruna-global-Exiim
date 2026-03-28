'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
}

const SafeImage = ({ 
  src, 
  alt, 
  fill, 
  className, 
  imageClassName, 
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", 
  priority, 
  objectFit = "cover" 
}: SafeImageProps) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(alt)}/1200/1600`;

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`transition-opacity duration-500 ${
          objectFit === "cover" ? "object-cover" : "object-contain"
        } ${imageClassName}`}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          console.error(`Failed to load image: ${src}`, e);
          setError(true);
        }}
      />
      {!loaded && !priority && (
        <div className="absolute inset-0 bg-brand-ink/5 animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-ink/5 text-[10px] text-brand-ink/40 p-2 text-center">
          Image not found: {src}
        </div>
      )}
    </div>
  );
};

export default SafeImage;
