import React from "react";

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex overflow-hidden gap-5 justify-center items-center px-2.5 bg-[#9CBBFF] hover:bg-[#2A33D8] h-[60px] rotate-[-1.6081230200044232e-16rad] rounded-[30px] w-[60px] cursor-pointer transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <path
          d="M15 30.3999L25 20.3999L15 10.3999"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default NextArrow;
