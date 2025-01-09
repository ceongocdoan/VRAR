import React from "react";
import { ImageGallery } from "./ImageGallery";
import UniversityList from "./UniversityList";

const VietnamImage: React.FC = () => {
  return (
    <main className="w-full px-4 md:px-12 lg:px-32 py-16 max-md:py-6">
      <div className="w-full max-w-[1184px] mx-auto">
        <h3 className="mx-auto md:text-center max-w-[800px] mb-6 md:mb-12 text-5xl leading-[125%] font-bold md:tracking-[-0.96px] text-[#344054] max-md:text-2xl">
          Bài tập <br className="max-md:hidden" /> Trái tim
        </h3>
        <div className="flex max-xl:flex-col gap-4 w-full mx-auto">
          <ImageGallery />
          <UniversityList />
        </div>
      </div>
    </main>
  );
};

export default VietnamImage;
