import React from "react";

interface TextContentProps {
  title1: string;
  title2: string;
}

const TextContent: React.FC<TextContentProps> = ({ title1, title2 }) => {
  return (
    <div className="max-w-[1184px] mx-auto w-full max-md:px-4 max-md:h-full">
  <div className="relative justify-end flex flex-col w-fit text-7xl font-bold tracking-tight text-white leading-[100px] h-full">
    {/* Tiêu đề */}
    <h1 className="mt-20 w-fit max-md:max-w-full max-md:text-5xl md:w-auto md:whitespace-nowrap md:text-6xl md:leading-[80px] lg:text-7xl lg:leading-[100px]">
      {title1}
    </h1>
    {/* Hộp tiêu đề phụ */}
    <div className="max-w-full px-2 bg-sky-400 w-fit rounded max-md:max-w-full max-md:leading-[60px] max-md:text-5xl max-md:mt-3 md:w-auto md:whitespace-nowrap md:text-6xl md:leading-[80px] lg:text-7xl lg:leading-[100px]">
      {title2}
    </div>
  </div>
</div>

  );
};

export default TextContent;
