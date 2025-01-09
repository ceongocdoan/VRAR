import React from "react";
import { Link } from "gatsby";
import CourseCardIcon from "./CourseCardIcon";
import Button from "../UI/UI/Buttons";

interface CourseCardProps {
  isSlider?: boolean;
  title: string;
  deviceIcon: "mobile" | "desktop";
  description: string;
  features: string[];
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  isSlider,
  title,
  deviceIcon,
  description,
  features,
  link,
}) => {
  const className = isSlider
    ? "w-[336px] max-sm:w-[320px]"
    : "w-[378px] max-sm:w-full";

  return (
    <article
      className={`flex flex-col min-h-[430px] max-md:min-h-[400px] p-6 rounded-3xl outline outline-1 -outline-offset-1 outline-solid outline-[#98A2B3] group transition-colors duration-300 max-sm:gap-4 ${className}`}
    >
      <div className="grow flex flex-col justify-between gap-6 size-full">
        <div className="flex flex-col w-full">
          <div>
            <CourseCardIcon device={deviceIcon} />
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="flex-1 shrink self-stretch w-full text-2xl font-bold leading-8 uppercase text-[#344054] max-sm:text-[#1C1C1C] transition-all duration-300 max-sm:text-xl max-sm:leading-[150%]">
                {title}
              </h3>
              <p className="text-base leading-5 text-[#344054]">
                {description}
              </p>
            </div>
            <ul className="flex flex-col mt-6 w-full text-sm font-normal leading-relaxed text-[#475467] max-sm:text-[#3D3D3D] max-sm:mt-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-1.5 items-start py-1 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3695_46387)">
                      <path
                        d="M6.00065 7.99967L7.33398 9.33301L10.334 6.33301M11.9348 3.33201C12.072 3.66403 12.3356 3.92794 12.6674 4.06572L13.8308 4.54766C14.1628 4.6852 14.4266 4.949 14.5642 5.28105C14.7017 5.61309 14.7017 5.98617 14.5642 6.31821L14.0826 7.48088C13.945 7.81307 13.9448 8.18652 14.083 8.51855L14.5638 9.68087C14.6319 9.84533 14.6671 10.0216 14.6671 10.1996C14.6671 10.3777 14.6321 10.554 14.5639 10.7184C14.4958 10.8829 14.3959 11.0324 14.27 11.1582C14.1441 11.2841 13.9947 11.3839 13.8302 11.452L12.6676 11.9336C12.3355 12.0709 12.0716 12.3344 11.9339 12.6662L11.4519 13.8297C11.3144 14.1617 11.0506 14.4255 10.7186 14.5631C10.3866 14.7006 10.0135 14.7006 9.68146 14.5631L8.51884 14.0815C8.1868 13.9443 7.81387 13.9446 7.48203 14.0823L6.31858 14.5635C5.98673 14.7007 5.61399 14.7006 5.28223 14.5632C4.95047 14.4258 4.68682 14.1623 4.54919 13.8306L4.06713 12.6667C3.92985 12.3347 3.66635 12.0708 3.33455 11.933L2.17109 11.4511C1.83921 11.3136 1.57549 11.05 1.43791 10.7181C1.30032 10.3863 1.30014 10.0134 1.43739 9.68137L1.91896 8.51871C2.05615 8.18666 2.05587 7.81371 1.91818 7.48186L1.4373 6.31753C1.36912 6.15307 1.33401 5.97679 1.33398 5.79876C1.33396 5.62073 1.36901 5.44444 1.43713 5.27996C1.50526 5.11548 1.60513 4.96604 1.73103 4.84018C1.85693 4.71431 2.0064 4.61449 2.17089 4.54641L3.33352 4.06482C3.66523 3.92766 3.92897 3.66447 4.06685 3.33305L4.54877 2.16955C4.6863 1.8375 4.9501 1.5737 5.28213 1.43616C5.61416 1.29862 5.98723 1.29862 6.31926 1.43616L7.48188 1.91775C7.81392 2.05495 8.18685 2.05467 8.51869 1.91697L9.68263 1.43691C10.0146 1.29945 10.3876 1.29948 10.7196 1.43699C11.0515 1.5745 11.3153 1.83823 11.4529 2.17018L11.9349 3.33403L11.9348 3.33201Z"
                        stroke="#475467"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3695_46387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="flex-1 shrink self-stretch my-auto basis-0">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <Button variant="tertiary">
          Tìm hiểu thêm
        </Button> */}
      </div>
    </article>
  );
};

export default CourseCard;
