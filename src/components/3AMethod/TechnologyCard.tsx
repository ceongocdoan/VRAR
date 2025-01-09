import React from "react";

interface TechnologyCardProps {
  src: string;
  alt: string;
  isHighlighted?: boolean;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ src, alt, isHighlighted = false }) => {
  const baseClasses = "flex flex-col flex-1 shrink justify-center items-center self-stretch px-14 py-5 my-auto basis-0 min-w-[240px] rounded-[48px] max-md:px-5";
  const highlightedClasses = isHighlighted ? "bg-blue-600 shadow-lg" : "bg-neutral-100";

  return (
    <div className={`${baseClasses} ${highlightedClasses}`}>
      <img loading="lazy" src={src} alt={alt} className="object-contain max-w-full aspect-[3.45] w-[138px]" />
    </div>
  );
};

export default TechnologyCard;