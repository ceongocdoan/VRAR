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
    title: "Lớp học chính",
    description: "Là lớp học chính thức 120 Ngày của Lộ trình đào tạo Bootcamp.",
    iconAspect: "2.32"
  },
  {
    icon: PT30,
    title: "Lớp personal training 30",
    description: "Phụ đạo học viên những vấn đề vướng mắc cá nhân, hỗ trợ tăng năng lực code trong một kỹ năng cụ thể.",
    iconAspect: "2"
  },
  {
    icon: PT10,
    title: "Lớp personal training 10",
    description: "Học viên muốn tăng cường kỹ năng, muốn giải quyết vấn đề khó. Như muốn code một dự án mới ngoài chương trình hoặc cài đặt một Webserver mở rộng.",
    iconAspect: "1.81"
  },
  {
    icon: PreDev,
    title: "Lớp nhập môn",
    description: "Lớp tiền Khai giảng, giúp học viên làm quen với code thông qua những task nhỏ, cũng như làm quen với môi trường LAB ONLINE tại Onschool Bootcamp.",
    iconAspect: "3.25"
  },
  {
    icon: MyCamp,
    title: "Lớp VIP",
    description: "Lớp học theo lộ trình cá nhân riêng, 1-1, theo nhu cầu học viên (bận, muốn học nhanh/chậm,...)",
    iconAspect: "4.02"
  }
];

export function ActivitySection() {
  return (
    <section className="flex flex-col items-center px-32 py-16 bg-white max-md:px-4 max-md:py-6">
      <div className="flex flex-wrap gap-10 max-md:gap-2 justify-between items-center w-full max-w-[1184px] max-md:max-w-full max-md:flex-col">
        <header className="flex flex-col justify-center self-stretch my-auto text-4xl max-md:text-2xl font-semibold tracking-tighter leading-10 min-w-[240px] text-zinc-700 max-md:max-w-full">
          <h2>Các hoạt động</h2>
          <p className="px-1 mt-3 max-md:mt-1  font-bold bg-[#00ADEE] rounded text-neutral-50 max-md:max-w-full">
            học tập chính thức và bổ trợ
          </p>
          <p className="mt-3 max-md:mt-1">tại Onschool Bootcamp</p>
        </header>
        <p className="flex-1 shrink self-stretch my-auto text-xl max-md:text-base leading-8 basis-0 text-[#525252] max-w-[469px] max-md:max-w-full">
          Ngoài lớp học chính thức, Onschool Bootcamp còn có các hoạt động ngoài ca để hỗ trợ cho học viên theo nhu cầu, đảm bảo học viên học tập và đạt hiệu quả tối ưu nhất.
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