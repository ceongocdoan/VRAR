import { Link } from "gatsby";
import React from "react";

interface SocialIconProps {
  src: string;
  alt: string;
  link: string
}

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, link }) => (
  <Link to={link} target="_blank">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
    />
  </Link>
);
