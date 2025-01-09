import React from 'react';

const ViewAllButton: React.FC = () => {
  return (
    <button className="flex items-center p-1 mt-12 border border-blue-600 border-solid min-h-[56px] rounded-[32px] max-md:mt-10">
      <span className="gap-2.5 self-stretch px-4 my-auto text-xl font-medium leading-8 text-blue-600">
        Xem tất cả
      </span>
      <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-2 my-auto w-12 h-12 rounded-3xl bg-neutral-50 min-h-[48px] rotate-[6.123234262925839e-17rad]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15fcc09d426a8b0b2b0a80b7a1be2c711a421cb16e0acc7fe5ec8bf9f35a8da4?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" className="object-contain self-stretch my-auto aspect-square w-[22px]" alt="" />
      </div>
    </button>
  );
};

export default ViewAllButton;