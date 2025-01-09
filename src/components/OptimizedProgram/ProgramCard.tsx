import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

export interface ProgramCardProps {
  imageUrl: string;
  percentage: string;
  description: string;
}

export function ProgramCard({ imageUrl, percentage, description }: ProgramCardProps) {
  return (
    <article className="flex overflow-hidden max-md:justify-end md:hover:opacity-50 transition-all rounded-[36px] relative flex-col flex-1 shrink gap-1 p-9 pt-96 shadow-xl basis-0 min-h-[564px] min-w-[240px] max-md:p-5 max-md:pt-24 max-md:max-w-full">
      <img 
        loading="lazy" 
        src={imageUrl} 
        alt="Program illustration" 
        className="object-cover !absolute inset-0 size-full"
      />
      <div className="flex max-md:flex-col self-end relative flex-wrap gap-4 justify-center items-center p-4 w-full rounded-3xl shadow-xl bg-white bg-opacity-90 max-md:max-w-full">
        <p className="self-stretch my-auto text-6xl font-bold tracking-tighter text-fuchsia-500 leading-[72px] max-md:text-5xl">
          {percentage}
        </p>
        <p className="flex-1 shrink self-stretch my-auto text-xl font-medium leading-8 basis-0 text-slate-700 max-md:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}