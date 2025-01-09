import * as React from "react";
import { HeroHeading } from "./HeroHeading";
import Button from "../UI/Button";
import { StaticImage } from "gatsby-plugin-image";

export const CareerHero: React.FC = () => {
  const scrollToJobOppotunities = () => {
    const formElement = document.getElementById("job-opportunities");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex relative flex-col items-center px-32 pt-40 pb-12 max-h-[726px] max-md:max-h-[552px] max-md:px-5 max-md:pt-24">
      <StaticImage
        src="../../assets/images/Banner/CareerBanner.jpeg"
        alt="Onschool activities"
        title="Onschool activities"
        className="object-cover !absolute inset-0 size-full"
      />
      <div className=" opacity-75 !absolute bg-gradient-to-b from-black to-black size-full inset-0"></div>
      <section className="flex relative max-md:flex-wrap-reverse justify-between items-center w-full max-w-[1184px] max-md:max-w-full max-md:h-full">
  <div className="mt-60 flex flex-col flex-1 gap-12 max-md:gap-6 shrink items-start self-stretch my-auto basis-0 max-w-[1184px] min-w-[320px] max-md:max-w-full max-md:mt-40">
    <HeroHeading />
    <div onClick={scrollToJobOppotunities}>
      <Button name="Bắt đầu quét" variant="secondary" size="desktop" />
    </div>
  </div>
</section>

    </main>
  );
};
