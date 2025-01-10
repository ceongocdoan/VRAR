import * as React from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  subTitle?: string;
  description?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  
  subTitle,
  description,
}) => {
  const title = [
    " AR/VR"
  ];
  return (
    <article className="flex flex-col max-md:flex-row max-md:items-center  flex-1 shrink p-6 bg-gray-50 basis-0 rounded-[36px] max-md:p-4 max-md:gap-4">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain aspect-square w-[54px] max-md:w-[48px]"
      />
      <div className="flex flex-col max-md:justify-center max-h-fit">
        <h3 className="mt-6 w-full text-2xl font-bold leading-8 text-slate-600 max-md:text-xl max-md:mt-0">
          {title}
        </h3>
        <h4 className="w-full text-sm font-bold leading-8 text-slate-600">
          {subTitle}
        </h4>
        <p className={`text-[#667085] text-base font-medium mt-2 max-md:mt-0 ${description&&"max-md:mt-2"}`}>{description}</p>
      </div>
    </article>
  );
};
