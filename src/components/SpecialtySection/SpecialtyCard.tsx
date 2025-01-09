import React from 'react';

interface SpecialtyCardProps {
  imageSrc: string;
  title: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch justify-center items-center bg-gray-100 border border-gray-100 gap-4 transition-all rounded-3xl basis-0 min-w-[148px] h-[198px] max-md:px-5 md:hover:border-[#3644F5] md:hover:shadow-xl cursor-pointer">
      <img loading="lazy" src={imageSrc} alt={`${title} icon`} className="object-contain self-center aspect-square w-[60px]" />
      <h3 className="">{title}</h3>
    </div>
  );
};

export default SpecialtyCard;