import React from "react";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface SliderNavigateProps {
  progress: number;
  sliderRef: React.RefObject<any>;
}

const SliderNavigate: React.FC<SliderNavigateProps> = ({
  progress,
  sliderRef,
}) => {
  return (
    <div className="w-full max-md:px-0">
      <div className="max-w-[1184px] mx-auto max-sm:w-full">
        <div className="relative h-2.5 mt-6 bg-[#D0D5DD] rounded-[5px] w-full max-sm:h-1 max-sm:rounded-sm">
          <div
            className="bg-[#2A33D8] !absolute h-full transition-all duration-500 rounded-[5px]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-end gap-6 mt-3 max-sm:hidden">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
    </div>
  );
};

export default SliderNavigate;
