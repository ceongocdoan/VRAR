import React from "react";

interface Feature {
  icon: string;
  alt: string;
  text: string;
}

interface FeatureItemProps {
  features: Feature[];
}

const FeatureItem: React.FC<FeatureItemProps> = ({ features }) => {
  return (
    <div>
      <div className="flex flex-col items-start w-[181px] md:hidden">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-center mt-5 first:mt-0">
            <img
              loading="lazy"
              src={feature.icon}
              alt={feature.alt}
              className="object-contain self-stretch my-auto w-10 "
            />
            <div className="self-stretch my-auto text-xl font-medium text-black">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 min-w-full max-md:flex-col max-md:items-start max-md:w-[181px] max-md:hidden">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="flex justify-center rounded-[24px] min-w-fit p-3 flex-col max-md:flex-row gap-3 items-center max-md:first:mt-0 md:bg-[#DDE9FF]"
          >
            <img
              loading="lazy"
              src={feature.icon}
              alt={feature.alt}
              className="object-contain self-center max-md:self-stretch my-auto w-10 "
            />
            <div className="max-md:self-stretch self-center my-auto text-xl font-medium text-black">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 min-w-full max-md:flex-col max-md:items-start max-md:w-[181px] max-md:hidden">
        {features.slice(-2).map((feature, index) => (
          <div
            key={index}
            className="flex justify-center rounded-[24px] min-w-fit p-3 flex-col max-md:flex-row gap-3 items-center mt-2 max-md:first:mt-0 md:bg-[#DDE9FF]"
          >
            <img
              loading="lazy"
              src={feature.icon}
              alt={feature.alt}
              className="object-contain self-center max-md:self-stretch my-auto w-10 "
            />
            <div className="max-md:self-stretch self-center my-auto text-xl font-medium text-black">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureItem;
