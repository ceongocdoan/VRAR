import React from 'react';

interface MethodologyFeatureProps {
  title: string;
  description: string;
}

const MethodologyFeature: React.FC<MethodologyFeatureProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-between self-stretch min-w-[240px] w-[250px]">
      <div className="flex flex-col w-full">
        <h3 className="text-2xl font-bold tracking-wider uppercase text-neutral-700">
          {title}
        </h3>
        <p className="mt-6 text-base leading-6 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MethodologyFeature;