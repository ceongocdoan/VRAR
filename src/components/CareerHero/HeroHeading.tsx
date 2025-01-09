import * as React from "react";

export const HeroHeading: React.FC = () => {
  return (
    <div className="flex flex-col max-w-full font-bold w-[501px] max-md:w-[350px]">
      <h2 className="text-base font-medium text-blue-50 uppercase">
        Let explore!
      </h2>
      <div className="flex items-center w-full max-md:flex-col max-md:items-start">
  <h1 className="text-7xl tracking-tighter text-white leading-[90px] max-md:text-5xl max-md:leading-[72px]">
    Trải nghiệm
  </h1>
  <span className="px-2 md:ml-4 text-7xl tracking-tighter text-white bg-blue-500 rounded max-md:text-5xl max-md:px-3 max-md:ml-0">
    Hình ảnh 3D trái tim
  </span>
</div>



    </div>

  );
};

