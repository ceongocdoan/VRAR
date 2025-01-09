import * as React from "react";
import { BenefitCard } from "./BenefitCard";

interface Benefit {
  icon: string;
  title: string;
  subTitle?: string;
  description?: string;
}

interface BenefitsListProps {
  benefits: Benefit[]; 
}

export const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <div className="w-screen px-32 pb-16 pt-6 max-md:px-4 max-md:pb-6">
      <section className="max-w-[1184px] mx-auto flex max-md:flex-col gap-6 max-md:gap-4">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            subTitle={benefit.subTitle}
            description={benefit.description}
          />
        ))}
      </section>
    </div>
  );
};
