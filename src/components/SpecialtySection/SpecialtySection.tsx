import React from "react";
import SpecialtyCard from "./SpecialtyCard";
import Button from "../UI/Button";
import { Link } from "gatsby";
import QTKD from "../../assets/images/SpecialtySection/briefcase-02.svg";
import KT from "../../assets/images/SpecialtySection/cryptocurrency-02.svg";
import TC_NH from "../../assets/images/SpecialtySection/bank.svg";
import TMDT from "../../assets/images/SpecialtySection/shopping-bag-01.svg";
import NNA from "../../assets/images/SpecialtySection/globe-02.svg";
import CNTT from "../../assets/images/SpecialtySection/data.svg";
import LAW from "../../assets/images/SpecialtySection/scales-02.svg";

interface Specialty {
  imageSrc: string;
  title: string;
}

const specialties: Specialty[] = [
  {
    imageSrc: QTKD,
    title: "Đi bộ nhanh",
  },
  {
    imageSrc: KT,
    title: "Chạy bộ hoặc chạy chậm",
  },
  {
    imageSrc: TC_NH,
    title: "Bơi lội",
  },
  {
    imageSrc: TMDT,
    title: "Yoga hoặc Pilates",
  },
  {
    imageSrc: NNA,
    title: "Tập cường độ cao ngắt quãng (HIIT)",
  },
  {
    imageSrc: CNTT,
    title: "Tập luyện sức mạnh (Gym)",
  },
  {
    imageSrc: LAW,
    title: "Đạp xe",
  },
];

interface SpecialtySectionProps {
  type?: boolean;
}

const SpecialtySection: React.FC<SpecialtySectionProps> = ({ type }) => {
  return (
    <div className="w-screen px-32 max-md:px-4 py-16 max-md:py-6">
      <section className="max-w-[1184px] gap-12 max-md:gap-4 mx-auto flex flex-col items-center">
        {type ? (
          <h2 className="px-5 text-3xl font-semibold leading-10 bg-blue-200 rounded text-slate-600 max-md:max-w-full">
            7 bài tập để có trái tim khỏe mạnh
          </h2>
        ) : (
          <h2 className="text-5xl font-bold text-center text-neutral-700 max-md:max-w-full max-md:text-3xl mb-6">
            Theo đuổi một trái tim khỏe mạnh
          </h2>
        )}
        <div className="flex flex-col self-stretch w-full text-xl font-medium leading-8 text-center text-slate-600 max-md:max-w-full">
          <div className="flex flex-col justify-center w-full min-h-[216px] max-md:max-w-full">
            <div className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full max-md:gap-4">
              {specialties.slice(0, 4).map((specialty, index) => (
                <SpecialtyCard
                  key={index}
                  imageSrc={specialty.imageSrc}
                  title={specialty.title}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center mt-5 w-full max-md:max-w-full max-md:gap-4">
              {specialties.slice(4).map((specialty, index) => (
                <SpecialtyCard
                  key={index + 4}
                  imageSrc={specialty.imageSrc}
                  title={specialty.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialtySection;
