import React, { useEffect, useRef, useState } from "react";
import PartnerLogo from "./PartnerLogo";
import Slider from "react-slick";
import SliderNavigate from "../UI/SliderNavigate";

import TVU from "../../assets/images/University/tvu.png";
import TMU from "../../assets/images/University/tmu.png";
import FTU from "../../assets/images/University/ftu.png";
import UNETI from "../../assets/images/University/uneti.png";
import HAUI from "../../assets/images/University/haui.png";
import NAUE from "../../assets/images/University/naue.png";
import HUCE from "../../assets/images/University/huce.png";
import HNU from "../../assets/images/University/hnu.png";
import PTIT from "../../assets/images/University/ptit.png";
import ECOUNI from "../../assets/images/University/ecouni.png";
import img from "../../assets/images/Partner/7a4c31c91c27b0c898a09dad27eeac93.png";
import evotek from "../../assets/images/Partner/evotek.png";
import fpt from "../../assets/images/Partner/fpt.png";
import its from "../../assets/images/Partner/its.png";
import lifesup from "../../assets/images/Partner/lifesup.png";
import migi from "../../assets/images/Partner/migi.png";
import toprate from "../../assets/images/Partner/toprate.png";
import xanhhouse from "../../assets/images/Partner/xanhhouse.png";

interface Partner {
  src: string;
  alt: string;
  className: string;
}

const partners: Partner[] = [
  {
    src: TVU,
    alt: "Partner 1 logo",
    className: "rounded-[84px] w-[70px]",
  },
  {
    src: TMU,
    alt: "Partner 2 logo",
    className: "rounded-[230px] w-[70px]",
  },
  {
    src: FTU,
    alt: "Partner 3 logo",
    className: "w-[70px]",
  },
  {
    src: UNETI,
    alt: "Partner 4 logo",
    className: "aspect-[0.77] w-[69px]",
  },
  {
    src: HAUI,
    alt: "Partner 5 logo",
    className: "w-[70px]",
  },
  {
    src: NAUE,
    alt: "Partner 6 logo",
    className: "w-[70px]",
  },
  {
    src: HUCE,
    alt: "Partner 7 logo",
    className: "aspect-[1.01] w-[71px]",
  },
  {
    src: HNU,
    alt: "Partner 8 logo",
    className: "aspect-[0.97] w-[68px]",
  },
  {
    src: PTIT,
    alt: "Partner 9 logo",
    className: "w-[70px]",
  },
  {
    src: ECOUNI,
    alt: "Partner 10 logo",
    className: "h-[70px] !aspect-auto",
  },
  {
    src: img,
    alt: "Partner 11 logo",
    className: "aspect-[1.3] w-[79px]",
  },
  {
    src: toprate,
    alt: "Partner 12 logo",
    className: "aspect-[1.32] w-[110px]",
  },
  {
    src: migi,
    alt: "Partner 13 logo",
    className: "aspect-[3.69] w-[133px]",
  },
  {
    src: xanhhouse,
    alt: "Partner 14 logo",
    className: "aspect-[2.11] w-[97px]",
  },
  {
    src: fpt,
    alt: "Partner 15 logo",
    className: "w-20 aspect-[1.31]",
  },
  {
    src: evotek,
    alt: "Partner 16 logo",
    className: "aspect-[2.48] w-[124px]",
  },
  {
    src: its,
    alt: "Partner 17 logo",
    className: "aspect-[2.35] w-[113px]",
  },
  {
    src: lifesup,
    alt: "Partner 18 logo",
    className: "aspect-[2.09] w-[94px]",
  },
];

const PartnerSection: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
    afterChange: (current: number) => {
      setProgress((100 / (2-1)) * current);
    },
  };

  useEffect(() => {
    setProgress(100 / (2-1));
  }, []);
  return (
    <div className="w-screen px-32 py-16 max-md:px-4 max-md:py-6 overflow-hidden ">
      <section className="max-w-[1184px] mx-auto flex flex-col rounded-3xl">
        <h2 className="self-center text-5xl font-bold tracking-tighter leading-[60px] text-slate-700 max-md:text-2xl">
          Đối tác
        </h2>
        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full max-md:hidden">
          <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
            {partners.slice(0, 10).map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            {partners.slice(10).map((partner, index) => (
              <PartnerLogo key={index + 10} {...partner} />
            ))}
          </div>
        </div>
        <div className="relative w-[1184px] mx-auto max-sm:w-full md:hidden">
          <Slider ref={sliderRef} {...settings} className="mt-4">
            <div>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-9 w-full max-md:max-w-full">
                {partners.slice(0, 10).map((partner, index) => (
                  <PartnerLogo key={index} {...partner} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-9 w-full max-md:max-w-full">
                {partners.slice(10).map((partner, index) => (
                  <PartnerLogo key={index + 10} {...partner} />
                ))}
              </div>
            </div>
          </Slider>
          <SliderNavigate progress={progress} sliderRef={sliderRef} />
        </div>
      </section>
    </div>
  );
};

export default PartnerSection;
