import * as React from 'react';

interface CardProps {
    bgColor: string;
    image: string;
    title: string;
    description: string[];
  }

export const AskCard: React.FC<CardProps> = ({ image, title, description, bgColor }) => {
  return (
    <article  className="flex flex-col flex-1 shrink p-8 bg-gray-50 basis-0 min-w-[240px] rounded-[36px] max-md:rounded-[24px]">
      <img 
        loading="lazy" 
        src={image} 
        alt={`Illustration for ${title}`}
        className={`object-cover w-full rounded max-md:rounded-lg aspect-[1.05] h-[300px] ${bgColor}`}
      />
      <div className="flex flex-col mt-12 w-full max-md:mt-10">
        <h3 className="self-start text-2xl font-bold leading-8 text-slate-700">
          {title}
        </h3>
        <div className="mt-6 w-full text-base leading-6 text-gray-500">
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br /><br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};