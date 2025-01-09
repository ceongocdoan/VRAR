import { Link } from "gatsby";
import React from "react";

interface SocialIconsProps {
  links: {
    icon: string;
    link: string;
  }[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  return (
    <div className="flex gap-5 items-start self-start py-1 mt-6">
      {links.map((link, index) => (
        <Link key={index} to={link.link} target="_blank">
          <img
            loading="lazy"
            src={link.icon}
            alt={`Social icon ${index + 1}`}
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
