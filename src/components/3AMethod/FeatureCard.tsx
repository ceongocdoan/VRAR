import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold leading-7 text-neutral-700 max-md:text-xl">{title}</h2>
        <p className="mt-3 text-base leading-6 text-zinc-700">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;