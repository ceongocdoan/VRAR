import React from 'react';

const FilterTabs: React.FC = () => {
  return (
    <nav className="flex gap-1.5 justify-center items-center p-3 text-base font-medium text-center whitespace-nowrap rounded-3xl border border-[#3644F5] border-solid shadow-lg bg-neutral-100 text-zinc-700">
      <button className="self-stretch px-4 py-2 my-auto font-bold bg-[#3644F5] rounded-xl text-neutral-50 w-[53px]">
        All
      </button>
      <button className="self-stretch px-4 py-1 my-auto rounded-xl w-[68px]">
        Yếu tố di truyền
      </button>
      <button className="self-stretch px-4 py-1 my-auto rounded-xl w-[85px]">
        Yếu tố bệnh lý
      </button>
      <button className="self-stretch px-4 py-1 my-auto rounded-xl w-[95px]">
        Yếu tố dinh dưỡng
      </button>
      <button className="self-stretch px-4 py-1 my-auto rounded-xl w-[95px]">
        Yếu tố lối sống
      </button>
      <button className="self-stretch px-4 py-1 my-auto rounded-xl w-[95px]">
        Yếu tố thói quen
      </button>
    </nav>
  );
};

export default FilterTabs;