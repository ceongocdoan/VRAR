
import * as React from "react";

export interface ActivityCardProps {
  icon: string;
  title: string;
  description: string;
  iconAspect: string;
}

export function ActivityCard({ icon, title, description, iconAspect }: ActivityCardProps) {
  return (
    <article className="flex flex-col flex-1 shrink px-12 py-12 rounded-3xl border border-solid basis-0 border-[#BDBDBD] max-w-[378px] min-h-[361px] max-md:min-h-fit min-w-[300px] max-md:p-6 max-md:max-w-full">
      <div className="flex flex-col items-start max-w-full w-[123px]">
        <img 
          loading="lazy" 
          src={icon} 
          alt={`${title} icon`}
          className={`object-cover max-w-fit h-[53px]`} 
        />
      </div>
      <div className="flex flex-col mt-12 w-full text-[#344054] max-md:mt-10">
        <h3 className="text-2xl font-bold leading-8">{title}</h3>
        <p className="mt-1.5 text-base leading-6">{description}</p>
      </div>
    </article>
  );
}
