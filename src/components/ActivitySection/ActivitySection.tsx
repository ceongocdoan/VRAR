import * as React from "react";
import { ActivityCard, ActivityCardProps } from "./ActivityCard";
import Main from "../../assets/images/ActivityCard/Main.svg"
import PT30 from "../../assets/images/ActivityCard/PT30.svg"
import PT10 from "../../assets/images/ActivityCard/PT10.svg"
import PreDev from "../../assets/images/ActivityCard/PreDev.svg"
import MyCamp from "../../assets/images/ActivityCard/MyCamp.svg"

const activities: ActivityCardProps[] = [
  {
    icon: Main,
    title: "Tâm nhĩ trái",
    description: "Tâm nhĩ trái nhận máu từ phổi và đẩy vào tâm thất trái để cung cấp máu cho toàn cơ thể.",
    iconAspect: "2.32"
  },
  {
    icon: PT30,
    title: "Tâm Nhĩ Phải",
    description: "Tâm nhĩ phải nhận máu từ cơ thể và chuyển vào tâm thất phải để bơm máu đến phổi.",
    iconAspect: "2"
  },
  {
    icon: PT10,
    title: "Tâm Thất Phải",
    description: "Tâm thất phải bơm máu vào động mạch phổi để cung cấp máu oxy cho phổi.",
    iconAspect: "1.81"
  },
  {
    icon: PreDev,
    title: "Tâm Thất Trái",
    description: "Tâm thất trái bơm máu vào động mạch chủ và phân phối đến toàn bộ cơ thể.",
    iconAspect: "3.25"
  },
  
];

export function ActivitySection() {
  return (
    <section className="flex flex-col items-center px-32 py-16 bg-white max-md:px-4 max-md:py-6">
      <div className="flex flex-wrap gap-10 max-md:gap-2 justify-between items-center w-full max-w-[1184px] max-md:max-w-full max-md:flex-col">
        <header className="flex flex-col justify-center self-stretch my-auto text-4xl max-md:text-2xl font-semibold tracking-tighter leading-10 min-w-[240px] text-zinc-700 max-md:max-w-full">
          <h2>Cấu trúc của hệ tuần hoàn</h2>
          {/* <p className="px-1 mt-3 max-md:mt-1  font-bold bg-[#00ADEE] rounded text-neutral-50 max-md:max-w-full">
            học tập chính thức và bổ trợ
          </p>
          <p className="mt-3 max-md:mt-1">tại Onschool Bootcamp</p> */}
        </header>
        <p className="flex-1 shrink self-stretch my-auto text-xl max-md:text-base leading-8 basis-0 text-[#525252] max-w-[469px] max-md:max-w-full">
          Hệ tuần hoàn gồm bốn tâm: tâm thất phải, tâm thất trái, tâm nhĩ phải, tâm nhĩ trái.
        </p>
      </div>
      <div className="flex flex-col items-start mt-12 w-full max-w-[1184px] min-w-[320px] max-md:mt-6 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 max-md:gap-4 justify-center items-stretch max-w-full">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-6 justify-center items-start mt-6 max-w-full w-[1120px]">
          {activities.slice(3).map((activity, index) => (
            <ActivityCard key={index + 3} {...activity} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

