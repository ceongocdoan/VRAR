import React from 'react';

interface MissionCardProps {
  icon: string;
  title: string;
  description: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col max-md:flex-row max-md:py-4 max-md:gap-3 max-md:px-8 shrink justify-center max-md:justify-start items-center self-stretch px-1 pt-12 pb-6 my-auto basis-0 bg-neutral-100 border border-solid border-neutral-100 rounded-[36px] outline-transparent hover:outline-[#3D25AE] hover:border-[#3D25AE] hover:shadow-xl transition-all duration-300">
      <div className="flex gap-2.5 justify-center items-center min-w-[100px] max-md:min-w-[75px] ">
        <img loading="lazy" src={icon} alt={`${title} icon`} className="object-contain self-stretch my-auto h-[100px] max-md:h-[75px]" />
      </div>
      <div className="flex flex-col px-2 mt-12 max-md:mt-0 max-md:my-auto max-md:min-h-full max-md:self-center max-w-full text-center  max-md:text-start min-h-[90px] ">
        <h2 className="text-2xl font-bold leading-8 text-slate-700">{title}</h2>
        <p className="mt-2 text-base leading-6 text-gray-500 xl:whitespace-pre-line">{description}</p>
      </div>
    </article>
  );
};

export default MissionCard;