import React from 'react';

interface PartnerLogoProps {
  src: string;
  alt: string;
  className: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 self-stretch my-auto grayscale hover:grayscale-0 transition-all h-[70px] aspect-auto ${className}`}
    />
  );
};

export default PartnerLogo;