import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import SliderNavigate from "../UI/SliderNavigate";

interface Course {
  title: string;
  deviceIcon: "mobile" | "desktop";
  description: string;
  features: string[];
  link: string;
}

export const courses: Course[] = [
  {
    title: "Java Full stack web developer",
    deviceIcon: "desktop",
    description: "Chương trình đào tạo Lập trình Web fullstack ngôn ngữ Java",
    features: [
      "Ứng dụng rộng rãi trong phát triển web",
      "Phù hợp các dự án quy mô lớn",
      "Nhu cầu tuyển dụng cao và cơ hội hấp dẫn",
    ],
    link: "/fullstack-java-web-developer",
  },
  {
    title: "Fullstack Python web developer",
    deviceIcon: "desktop",
    description:
      "Chương trình đào tạo Lập trình Web fullstack ngôn ngữ Reactjs và Nodejs",
    features: [
      "Dễ học với người mới",
      "Ứng dụng rộng rãi trong nhiều lĩnh vực",
      "Cơ hội việc làm đa dạng",
    ],
    link: "/fullstack-python-web-developer",
  },
  {
    title: "Fullstack PHP web developer",
    deviceIcon: "desktop",
    description: "Chương trình đào tạo Lập trình Web fullstack ngôn ngữ PHP",
    features: [
      "Tương đối dễ học và dễ ứng dụng",
      "Ứng dụng rộng rãi trong các dự án nhỏ và vừa",
      "Nhu cầu tuyển dụng cao",
    ],
    link: "/fullstack-php-web-developer",
  },
  {
    title: "Fullstack Javascript (Nodejs & Reactjs) web developer",
    deviceIcon: "desktop",
    description:
      "Chương trình đào tạo Lập trình Web fullstack ngôn ngữ Reactjs và Nodejs",
    features: [
      "Cú pháp đơn giản, dễ đọc và dễ học",
      "Ứng dụng trong phát triển web tập trung tương tác",
      "Thị trường việc làm rộng mở",
    ],
    link: "/fullstack-javascript-web-developer",
  },
  {
    title: "Cross-Platform Mobile App Development",
    deviceIcon: "mobile",
    description:
      "Chương trình đào tạo Lập trình Hybrid/ cross platform (Mobile)",
    features: [
      "Trở thành lập trình viên ứng dụng di động",
      "Tương đối dễ học",
      "Nhu cầu tuyển dụng ngày càng tăng",
    ],
    link: "/cross-platform-mobile-app-development",
  },
];

const CoursePreviewSlick: React.FC = () => {
  const [progress, setProgress] = useState((1 / courses.length) * 100);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dot: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 0.8,
    slidesToScrool: 1,
    variableWidth: true,
    className: "custom-slick-slider",
    beforeChange: (current: number, next: number) => {
      setProgress(((next + 1) / courses.length) * 100);
    },
  };

  return (
    <div className="w-full px-4 md:px-32 py-16 max-md:py-6 overflow-hidden">
      <div>
        <h1 className="max-w-[1184px] mx-auto mb-6 font-bold text-4xl leading-display-md text-[#344054] max-md:text-2xl">
          Các khoá học tại Onschool Bootcamp
        </h1>
        <Slider ref={sliderRef} {...settings}>
          {courses.map((item, index) => (
            <div className="!inline-flex flex-col pr-6 h-full" key={index}>
              <CourseCard {...item} isSlider />
            </div>
          ))}
        </Slider>
        <div className="px-28 max-md:px-0">
          <SliderNavigate progress={progress} sliderRef={sliderRef} />
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewSlick;
