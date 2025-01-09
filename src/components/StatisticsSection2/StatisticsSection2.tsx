import React from "react";
import StatisticsItem from "./StatisticsItem";

interface StatisticsData {
  title: string;
  value: string;
  description: string;
}

interface StatisticsSection2Props {
  statisticsData: StatisticsData[];
  bgColor: string
}
const StatisticsSection2: React.FC<StatisticsSection2Props> = ({ statisticsData, bgColor }) => (
  <div className={`w-screen px-32 py-16 max-md:px-4 max-md:py-6 bg-[#3644F5] ${bgColor}`}>
    <section className="max-w-[1184px] mx-auto grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-6 justify-center font-medium text-center text-white max-md:w-full">
      {statisticsData.map((item, index) => (
        <React.Fragment key={index}>
          <StatisticsItem title={item.title} value={item.value} description={item.description} divider={index < statisticsData.length - 1} />
        </React.Fragment>
      ))}
    </section>
  </div>
);

export default StatisticsSection2;
