import React from 'react';

export interface ImageItemProps {
  src: string;
  alt: string;
  className: string;
}

export const ImageItem: React.FC<ImageItemProps> = ({ src, alt, className }) => {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt} 
      className={className} 
    />
  );
};