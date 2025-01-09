import React from "react";
import Divider from "./Divider";

interface StatisticsItemProps {
  title: string;
  value: string;
  description: string;
  divider?: boolean;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({
  value,
  description,
  divider,
  title,
}) => (
  <div className="flex gap-6 max-sm:flex-col max-sm:w-full">
    <div className="flex flex-col gap-6 shrink w-[260px] font-medium max-sm:w-full">
      <p className=" text-xl leading-text-xl text-[#D9D6FE]">{title}</p>

      <h3 className="text-6xl font-bold leading-display-xl -tracking-[1.2px]">{value}</h3>
      <p className="text-xl leading-text-xl text-[#D9D6FE] whitespace-pre-line">{description}</p>
    </div>
    {divider && <Divider />}
  </div>
);

export default StatisticsItem;
