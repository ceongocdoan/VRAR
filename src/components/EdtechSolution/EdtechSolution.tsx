import React from "react";
import FeatureItem from "./FeatureItem";
import { StaticImage } from "gatsby-plugin-image";
import S from "../../assets/images/EdtechSolution/S.svg";
import T from "../../assets/images/EdtechSolution/T.svg";
import E from "../../assets/images/EdtechSolution/E.svg";
import C from "../../assets/images/EdtechSolution/C.svg";
import G from "../../assets/images/EdtechSolution/G.svg";

interface OnschoolEdtechProps {}

const featureData = [
  [
    {
      icon: S,
      alt: "Solution icon",
      text: "Solution",
    },
    {
      icon: G,
      alt: "Technology icon",
      text: "Technology",
    },
    {
      icon: T,
      alt: "Effectiveness icon",
      text: "Effectiveness",
    },
    {
      icon: E,
      alt: "Career icon",
      text: "Career",
    },
    {
      icon: C,
      alt: "Global icon",
      text: "Global",
    },
  ],
];
const EdtechSolution: React.FC<OnschoolEdtechProps> = () => {
  return (
    <div className="w-screen max-md:px-4 max-md:py-6 py-16 px-32">
      <section className="max-w-[1184px] mx-auto gap-12 max-md:gap-6 flex flex-col">
        <h1 className="text-5xl font-bold text-center text-neutral-700 max-md:max-w-full max-md:text-2xl">
          Cơ quan tuần hoàn
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 w-full max-md:max-w-full">
          <article className="flex items-center justify-center place-self-stretch xl:px-12 xl:py-12 bg-neutral-100 rounded-[36px] max-w-[580px] p-6 max-md:max-w-full">
            <StaticImage
              src="../../assets/images/EdtechSolution/Layer_1.png"
              alt="Onschool Edtech Solution visual representation"
              width={418}
              height={418}
            />
          </article>
          <article className="flex flex-col grow max-md:aspect-auto shrink justify-center self-stretch xl:px-12 xl:py-12 my-auto bg-neutral-100 rounded-[36px] max-w-[580px] aspect-square p-6 max-md:max-w-full">
            <div className="flex flex-col justify-between h-full items-center  max-md:gap-6 w-full max-md:max-w-full">
              <h2 className="text-2xl font-medium text-neutral-700">
                Tim là bộ phận vô cùng quan trọng trong cơ quan tuần hoàn, tim đập khoảng 100000 lần mỗi ng
              </h2>
              <div className="flex flex-col gap-6 mt-3">
                <StaticImage
                  src="../../assets/images/EdtechSolution/STECG.png"
                  alt="Onschool product development mission"
                  title="Onschool product development mission"
                />
                {/* <div className="flex gap-10 flex-col max-md:gap-5 justify-between items-start w-full max-md:px-5 max-md:max-w-full">
                  {featureData.map((feature, index) => (
                    <FeatureItem key={index} features={feature} />
                  ))}
                </div> */}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default EdtechSolution;
