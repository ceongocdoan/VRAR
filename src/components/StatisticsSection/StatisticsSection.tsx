import React from "react";
import StatisticsItem from "./StatisticsItem";

interface StatisticsData {
  title:string;
  value: string;
  description: string;
}

const statisticsData: StatisticsData[] = [
  { title:"Đập", value: "4.800+ lần", description: "Đập mỗi giờ để duy trì sự sống" },
  {title:"Bơm", value: "5-6 \nlít", description: "Máu được bơm qua hệ tuần hoàn mỗi phút" },
  { title:"Độ dài",value: "100.000 km", description: "Độ dài mạng lưới mạch máu trong cơ thể" },
  { title:"Trung bình",value: "70-100 nhịp", description: "Số lần đập trung bình mỗi phút \ncủa một trái tim khỏe mạnh" },
];

const StatisticsSection: React.FC = () => (
  <div className="w-screen px-32 py-16 max-md:px-4 max-md:py-6 bg-[#3644F5]">
    <section className="max-w-[1184px] mx-auto grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-6 justify-center font-medium text-center text-white max-md:w-full">
      {statisticsData.map((item, index) => (
        <React.Fragment key={index}>
          <StatisticsItem title={item.title} value={item.value} description={item.description} divider={index < statisticsData.length - 1} />
        </React.Fragment>
      ))}
    </section>
  </div>
);

export default StatisticsSection;
