import React from 'react';

interface LearningStepProps {
  imageUrl: string;
  title: string;
  description: string;
}

const LearningStep: React.FC<LearningStepProps> = ({ imageUrl, title, description }) => {
  return (
    <article className="flex flex-col max-md:flex-row flex-1 shrink self-stretch p-6 my-auto bg-gray-50 rounded-3xl basis-0 min-w-[220px]">
      <img 
        loading="lazy" 
        src={imageUrl} 
        alt={`Icon for ${title}`} 
        className="object-contain self-center h-16 rounded-xl aspect-square" 
      />
      <div className="flex flex-col items-center mt-4 w-full">
        <h2 className="text-xl font-bold leading-8 text-slate-700">
          {title}
        </h2>
        <p className="mt-1 text-sm font-medium leading-5 text-gray-500">
          {description}
        </p>
      </div>
    </article>
  );
};

export default LearningStep;