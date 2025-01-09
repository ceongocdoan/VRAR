import * as React from "react";
import { AskCard } from "./AskCard";
import A from "../../assets/images/ASKChart/A.png";
import S from "../../assets/images/ASKChart/S.png";
import K from "../../assets/images/ASKChart/K.png";
import ASKChart from "../../assets/images/ASKChart/ASKChart.png";
import ASKChartMobile from "../../assets/images/ASKChart/ASKChartMobile.svg";

interface CardProps {
  bgColor: string;
  image: string;
  title: string;
  description: string[];
}

const cardData: CardProps[] = [
  {
    bgColor: "bg-[#ECF3FF]",
    image: A,
    title: "Bước 1",
    description: [
      "Đăng nhập Playcanvas bằng tài khoản Github của bạn",
      "->",
    ],
  },
  {
    bgColor: "bg-[#EFFAFF]",
    image: S,
    title: "Bước 2",
    description: [
      "Chọn quét bằng Camera",
      "->",
    ],
  },
  {
    bgColor: "bg-[#ECF3FF]",
    image: K,
    title: "Bước 3",
    description: [
      "Quét hình ảnh và trải nghiệm",
      "->",
    ],
  },
];

export const OnschoolAsk: React.FC = () => {
  return (
    <div className="w-screen px-32 py-16 max-md:px-4 max-md:py-6">
      <section id="onschool-ask" className="max-w-[1184px] mx-auto flex flex-col items-center bg-white">
        <div className="flex flex-col items-center max-md:items-start w-full text-base font-bold  text-neutral-700 max-md:max-w-full">
          <span className="p-2 tracking-wide bg-yellow-400 rounded">
            Hình ảnh demo
          </span>
          <h1 className="mt-3 text-4xl  max-md:max-w-full">
            Trải nghiệm mô hình
          </h1>
          <p className=" mt-3 text-center max-md:text-start self-center max-w-full mb-12 leading-6 max-md:max-w-full font-normal text-base whitespace-pre-line">
          {`Bật camera điện thoại lên \nTrải nghiệm mô hình 3D \nTrong thực tế ảo`}
          </p>
        </div>
        <div className="max-md:hidden">
          <img
            src={ASKChart}
            alt="ASK Chart"
            title="ASK Chart"
            
          />
        </div>
        <div className="md:hidden">
          <img
            src={ASKChartMobile}
            alt="ASK Chart"
            title="ASK Chart"
          />
        </div>
        <div className="flex flex-wrap gap-6 mt-12 w-full max-w-[1184px] max-md:mt-10 max-md:max-w-full">
          {cardData.map((card, index) => (
            <AskCard key={index} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};
