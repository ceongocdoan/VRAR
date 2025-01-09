import React from "react";
import BackgroundImage from "./BackgroundImage";
import TextContent from "./TextContent";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface HomeBannerProps {
  backgroundImageSrc: IGatsbyImageData;
  title1: string;
  title2: string;
}

const HomeBanner: React.FC<HomeBannerProps> = ({
  backgroundImageSrc,
  title1,
  title2,
}) => {
  return (
    <section className="relative h-[950px] max-md:h-[600px] pt-[620px] pb-52 px-40 max-md:px-4 max-md:py-8">
  <BackgroundImage src={backgroundImageSrc} />
  <div className="opacity-90 !absolute bg-gradient-to-b from-transparent to-black size-full inset-0"></div>
  <TextContent title1={title1} title2={title2} />
</section>

  );
};

export default HomeBanner;
