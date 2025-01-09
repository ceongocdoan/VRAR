import React from 'react';

interface MethodCardProps {
  title: string;
  description: string;
}

const MethodCard: React.FC<MethodCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-between self-stretch min-w-[240px] w-[250px] max-lg:w-full">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold leading-8 text-slate-600">{title}</h2>
        <p className="mt-3 text-base leading-6 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default MethodCard;