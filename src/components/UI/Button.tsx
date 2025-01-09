import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite.svg";
import { text } from "stream/consumers";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "desktop" | "mobile";
  name: string;
  position?: "self-start" | "self-center" | "self-end";
  contact?: boolean;
  classname?: string;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  name,
  position = "self-start",
  contact,
  classname,
  text,
}) => {
  const buttonClasses = twMerge(
    `flex justify-center items-center p-1 rounded-[32px] transition-all duration-200 ease-in-out group ${
      classname ? classname : ""
    }`,
    clsx(position, size === "desktop" ? "min-h-[56px]" : "min-h-[48px]", {
      "bg-[#4460FF] hover:bg-blue-800 active:bg-blue-950":
        variant === "primary",
      "bg-gray-100 hover:bg-blue-600 active:bg-blue-800":
        variant === "secondary",
      "border border-blue-600 hover:white active:bg-blue-700":
        variant === "tertiary",
    })
  );

  const textClasses = twMerge(
    `gap-2.5 self-stretch px-4 my-auto text-xl font-medium leading-8 whitespace-nowrap transition-all duration-200 ${
      text ? text : ""
    }`,
    clsx({
      "text-white group-hover:text-white group-active:text-blue-100":
        variant === "primary",
      "text-blue-600 group-hover:text-white group-active:text-blue-200":
        variant === "secondary",
      "text-blue-600  group-active:text-blue-200 ": variant === "tertiary",
    })
  );

  const iconContainerClasses = twMerge(
    "flex overflow-hidden gap-4 justify-center rounded-full items-center self-stretch px-2 my-auto transition-all duration-200 ease-in-out",
    size === "desktop" ? "w-12 h-12 min-h-[48px]" : "w-10 h-10 min-h-[40px]",
    clsx({
      "bg-[#4460FF] group-hover:bg-white group-active:bg-white":
        variant === "secondary",
      "bg-white group-hover:bg-[#4460FF] group-active:bg-white":
        variant === "tertiary",
      "bg-neutral-50": variant === "primary",
    })
  );

  const getIconSrc = () => {
    if (variant === "secondary") {
      return (
        <img
          loading="lazy"
          src={ArrowRightWhite}
          className={clsx(
            "object-contain self-stretch my-auto aspect-square w-[22px] rounded-full",
            "group-hover:hidden group-active:hidden"
          )}
          alt=""
        />
      );
    }
    if (variant === "tertiary") {
      return (
        <img
          loading="lazy"
          src={ArrowRight}
          className={clsx(
            "object-contain self-stretch my-auto aspect-square w-[22px] rounded-full",
            "group-hover:hidden group-active:block"
          )}
          alt=""
        />
      );
    }
    return (
      <img
        loading="lazy"
        src={ArrowRight}
        className="object-contain self-stretch my-auto aspect-square w-[22px] rounded-full"
        alt=""
      />
    );
  };

  const getIconSrcOnHover = () => {
    if (variant === "secondary") {
      return (
        <img
          loading="lazy"
          src={ArrowRight}
          className={clsx(
            "object-contain self-stretch my-auto aspect-square w-[22px] rounded-full",
            "group-hover:block group-active:block hidden"
          )}
          alt=""
        />
      );
    }
    if (variant === "tertiary") {
      return (
        <img
          loading="lazy"
          src={ArrowRightWhite}
          className={clsx(
            "object-contain self-stretch my-auto aspect-square w-[22px]",
            "group-hover:block group-active:hidden hidden"
          )}
          alt=""
        />
      );
    }
    return null;
  };

  const getMailIcon = () => {
    return (
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:hidden transition-all"
      >
        <path
          id="Icon"
          d="M1.5 5.75L11.7061 12.8943C12.5326 13.4728 12.9458 13.7621 13.3953 13.8741C13.7924 13.9731 14.2076 13.9731 14.6047 13.8741C15.0542 13.7621 15.4674 13.4728 16.2938 12.8943L26.5 5.75M7.5 22H20.5C22.6002 22 23.6503 22 24.4525 21.5913C25.1581 21.2317 25.7317 20.6581 26.0913 19.9525C26.5 19.1503 26.5 18.1002 26.5 16V8C26.5 5.8998 26.5 4.8497 26.0913 4.04754C25.7317 3.34193 25.1581 2.76825 24.4525 2.40873C23.6503 2 22.6002 2 20.5 2L7.5 2C5.3998 2 4.3497 2 3.54754 2.40873C2.84193 2.76825 2.26825 3.34193 1.90873 4.04754C1.5 4.8497 1.5 5.8998 1.5 8L1.5 16C1.5 18.1002 1.5 19.1503 1.90873 19.9525C2.26825 20.6581 2.84193 21.2317 3.54754 21.5913C4.3497 22 5.3998 22 7.5 22Z"
          stroke="#FAFAFA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const getMailIconHover = () => {
    return (
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden group-hover:block transition-all"
      >
        <path
          id="Icon"
          d="M1.5 5.75L11.7061 12.8943C12.5326 13.4728 12.9458 13.7621 13.3953 13.8741C13.7924 13.9731 14.2076 13.9731 14.6047 13.8741C15.0542 13.7621 15.4674 13.4728 16.2938 12.8943L26.5 5.75M7.5 22H20.5C22.6002 22 23.6503 22 24.4525 21.5913C25.1581 21.2317 25.7317 20.6581 26.0913 19.9525C26.5 19.1503 26.5 18.1002 26.5 16V8C26.5 5.8998 26.5 4.8497 26.0913 4.04754C25.7317 3.34193 25.1581 2.76825 24.4525 2.40873C23.6503 2 22.6002 2 20.5 2L7.5 2C5.3998 2 4.3497 2 3.54754 2.40873C2.84193 2.76825 2.26825 3.34193 1.90873 4.04754C1.5 4.8497 1.5 5.8998 1.5 8L1.5 16C1.5 18.1002 1.5 19.1503 1.90873 19.9525C2.26825 20.6581 2.84193 21.2317 3.54754 21.5913C4.3497 22 5.3998 22 7.5 22Z"
          stroke="#4460FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <button className={buttonClasses}>
      <span className={textClasses}>{name}</span>
      {contact ? (
        <div className={iconContainerClasses}>
          {getMailIcon()}
          {getMailIconHover()}
        </div>
      ) : (
        <div className={iconContainerClasses}>
          {getIconSrc()}
          {getIconSrcOnHover()}
        </div>
      )}
    </button>
  );
};

export default Button;
