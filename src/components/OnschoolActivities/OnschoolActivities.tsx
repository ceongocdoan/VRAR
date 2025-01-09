import React, { useEffect, useRef, useState } from "react";
import ActivityCard from "./ActivityCard";
import Slider from "react-slick";
import SliderNavigate from "../UI/SliderNavigate";
import { graphql, useStaticQuery } from "gatsby";

interface Activity {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
}

const OnschoolActivities: React.FC = () => {
  const imageData = useStaticQuery(graphql`{
    imageData: allFile(
      filter: {relativeDirectory: {eq: "images/OnschoolActivities"}}
    ) {
      images: nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }`);
  const activityImages = imageData.imageData.images;

  const [progress, setProgress] = useState<number>(
    (1 / activityImages.length) * 100
  );
  const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 0.75,
    slidesToScrool: 1,
    variableWidth: true,
    className: "custom-slick-slider",
    beforeChange: (current: number, next: number) => {
      setProgress(((next + 1) / activityImages.length) * 100);
    },
  };
  return (
    <section className="w-full py-6 md:py-16 px-4 md:px-32 overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-12 w-full max-w-[1184px] mx-auto">
        <h1 className="text-2xl md:text-5xl leading-[125%] font-bold  text-[#475467] xl:text-[#344054]">
          Các hoạt động của Onser
        </h1>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {activityImages.map((activity: any, index: number) => (
              <div className="pr-3 md:pr-6" key={index}>
                <ActivityCard
                  image={activity.childImageSharp.gatsbyImageData}
                  key={activity.id}
                />
              </div>
            ))}
          </Slider>
          <SliderNavigate progress={progress} sliderRef={sliderRef} />
        </div>
      </div>
    </section>
  );
};

export default OnschoolActivities;
