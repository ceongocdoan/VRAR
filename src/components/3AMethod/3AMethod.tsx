import React from "react";
import FeatureCard from "./FeatureCard";
import SkillTag from "./SkillTag";
import LIPE from "../../assets/images/PedagogicalMethods/LIPE.svg";
import FMGEWhite from "../../assets/images/PedagogicalMethods/FMGE.svg";
import THREEAWhite from "../../assets/images/PedagogicalMethods/3A.svg";
import Image3A from '../../assets/images/PedagogicalMethods/3A Breakdown.svg';
import MethodButton from "../PedagogicalMethods/MethodButton";

const methodButtons = [
  {
    imageUrl: LIPE,
    altText: "Active method LIPE",
    isActive: false,
    link: "lipe"
  },
  {
    imageUrl: FMGEWhite,
    altText: "Inactive method FMGE",
    isActive: false,
    link: "fmge"
  },
  {
    imageUrl: THREEAWhite,
    altText: "Inactive method 3A",
    isActive: true,
    link: "3a"
  },
];

interface Method3AProps {}

const Method3A: React.FC<Method3AProps> = () => {

  const skills = [
    "Full Demonstration",
    "Micro-coaching",
    "Guided Self-practice",
    "Evalution 360",
  ];

  const features = [
    {
      title: "Advanced Coaching",
      description:
        "Huấn luyện thực chiến, kỹ càng, chuyên sâu, đảm bảo học viên thành thạo theo từng nhiệm vụ học tập. Cơ chế khuyến khích học lại ngay từng Module nhỏ nếu chưa thành thạo.",
    },
    {
      title: "Accelerated Progress",
      description:
        "Thời gian ngắn, tập trung cao, chỉ tập trung vào kỹ năng căn bản thiết yếu, nhiều hoạt động hỗ trợ, nhiều hoạt động review-hackathon tập trung.",
    },
    {
      title: "Adaptive Bootcamp Experience",
      description:
        "Phương pháp và trải nghiệm học tập phải đáp ứng được tính cá nhân hóa của từng học viên, phù hợp cho người đi làm, phù hợp cho người muốn học nhanh, muốn học bình thường hay muốn học chậm.",
    },
  ];

  return (
    <div id="3a"  className="w-full max-md:mt-0 px-32 max-md:px-4">
      <main className="max-w-[1184px] mx-auto flex flex-col pb-[60px] max-md:pb-6">
        <section className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-center self-center max-w-full w-[800px] justify-center">
            {methodButtons.map((button, index) => (
              <MethodButton key={index} {...button} />
            ))}
          </div>
          <div className="flex flex-col p-6 mt-6 w-full border border-solid border-neutral-300 rounded-[36px] max-md:p-4 max-md:max-w-full">
            <div className="flex flex-col justify-center self-center py-6 max-w-full text-base font-medium leading-tight max-md:p-4 max-md:py-0 text-zinc-700 w-[627px]">
              <img
                loading="lazy"
                src={Image3A}
                alt="Learning process diagram"
                className="object-contain self-center w-full aspect-[5.13]"
              />
              <div className="flex flex-wrap gap-1.5 justify-start items-start mt-3 w-full rounded-lg max-md:max-w-full">
                {skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-9 max-md:gap-4 items-start px-4 mt-12 w-full max-md:px-5 max-md:mt-6 max-md:max-w-full">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <p className="flex-1 shrink gap-6 p-6 mt-12 w-full text-lg font-medium leading-7 rounded-3xl bg-neutral-100 text-zinc-700 max-md:px-4 max-md:mt-6 max-md:max-w-full list-disc">
              <ul className="pl-6 list-disc">
                <li>
                  Onschool ứng dụng mô hình 3A trong Huấn luyện nghề chuyên sâu, đáp
                  ứng nhu cầu cho người học cần chuyển việc, chuyển ngành nhanh.
                </li>
              </ul>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Method3A;
