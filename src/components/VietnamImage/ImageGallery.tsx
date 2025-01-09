import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const ImageGallery: React.FC = () => {
  return (
    <section className="self-stretch w-full xl:max-w-[602px] max-xl:h-[311px] rounded-[60px] max-md:rounded-[24px] bg-[#ECF3FF]">
      <StaticImage
        src="../../assets/images/OnschoolCulture/onschoolCulture.png"
        alt="Hợp tác với hơn 10 trường Đại học uy tín trên toàn quốc"
        className="h-full"
      />
    </section>
  );
};
