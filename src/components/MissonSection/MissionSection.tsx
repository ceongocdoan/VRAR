import React from "react";
import MissionCard from "./MisstionCard";
import S from "../../assets/images/MissionSection/S.svg";
import T from "../../assets/images/MissionSection/T.svg";
import E from "../../assets/images/MissionSection/E.svg";
import C from "../../assets/images/MissionSection/C.svg";
import G from "../../assets/images/MissionSection/G.svg";

interface MissionData {
  icon: string;
  title: string;
  description: string;
}

const missionData: MissionData[] = [
  {
    icon: S,
    title: "Virtual",
    description: "Thực tại",
  },
  {
    icon: T,
    title: "reality",
    description: "Ảo",
  },
  {
    icon: E,
    
  },
  {
    icon: C,
    title: "reality",
    description: "tăng cường",
  },
  {
    icon: G,
    title: "Augmented",
    description: "Thực tại",
  },
];

const MissionSection: React.FC = () => {
  return (
    <div className="w-screen  px-32 py-16 max-md:px-4 max-md:py-6">
      <section className="max-w-[1184px] mx-auto flex flex-col">
        <h1 className="self-center text-5xl font-bold tracking-tighter leading-[60px] text-slate-700 max-md:max-w-full max-md:text-3xl">
          Sản phẩm mô phỏng trái tim con người
        </h1>
        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-3 items-center mt-12 w-full max-md:mt-6 max-md:max-w-full">
          {missionData.map((mission, index) => (
            <MissionCard
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MissionSection;
