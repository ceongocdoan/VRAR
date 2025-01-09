import * as React from "react";
import { Typography } from "./Typography";
import { Description } from "./Description";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface HeroSectionProps {
  logoSrc: string;
  headings: string[];
  description: string;
  limitDescription?: boolean;
  backgroundImageSrc: IGatsbyImageData;
}

export function ProductsHero({
  logoSrc,
  headings,
  description,
  limitDescription = false,
  backgroundImageSrc,
}: HeroSectionProps) {
  return (
    <div className="w-full pt-40 px-32 max-md:px-4 max-md:pt-24">
      <section className="max-w-[1184px] items-start justify-end mx-auto overflow-hidden flex relative flex-col px-12 pt-52 pb-12 rounded-3xl min-h-[600px] max-md:px-5 max-md:pt-24">
        <GatsbyImage
          loading="lazy"
          image={backgroundImageSrc}
          alt="Onschool product banner"
          title="Onschool product banner"
          className="bg-[#75DCFF] object-cover !absolute inset-0 size-full"

        />
        <div className="opacity-90 !absolute bg-gradient-to-b from-transparent to-[#000941] size-full inset-0"></div>
        <div className="h-full relative max-md:w-full">
          <header className="flex flex-col items-start">
            <img
              loading="lazy"
              src={logoSrc}
              alt="Onschool Logo"
              title="Onschool Logo"
              className="object-contain h-[48px]"
            />
          </header>
          <main className="flex flex-col mt-6">
            <div className="flex flex-col w-full text-7xl font-bold tracking-tight max-md:tracking-normal text-white whitespace-nowrap max-md:whitespace-normal leading-[90px] max-md:max-w-full">
              {headings.map((heading, index) => (
                <Typography key={index} text={heading} />
              ))}
            </div>
            <Description text={description} limitDescription={limitDescription} />
          </main>
        </div>
      </section>
    </div>
  );
}
