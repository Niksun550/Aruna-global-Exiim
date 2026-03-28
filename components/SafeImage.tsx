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
        src={error ? fallback : src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        // Removed unoptimized={isLocal} to allow Next.js to optimize local images
        className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          objectFit === "cover" ? "object-cover" : "object-contain"
        } ${loaded || priority ? "opacity-100 blur-0" : "opacity-0 blur-2xl"} ${imageClassName}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        referrerPolicy="no-referrer"
      />
      {!loaded && (
        <div className="absolute inset-0 bg-brand-ink/5 animate-pulse" />
      )}
    </div>
  );
};

export default SafeImage;
