import React from "react";
import FMGEDescription from "./FMGEDescription";
import LIPE from "../../assets/images/PedagogicalMethods/LIPE.svg";
import FMGEImage from '../../assets/images/PedagogicalMethods/Modal FMGE.svg';
import FMGEWhite from "../../assets/images/PedagogicalMethods/FMGEWhite.svg";
import THREEAWhite from "../../assets/images/PedagogicalMethods/3AWhite.svg";
import MethodButton from "../PedagogicalMethods/MethodButton";
import MethodCard from "./MethodCard";

interface FMGEMethodProps {}

const FMGEMethod: React.FC<FMGEMethodProps> = () => {
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
      isActive: true,
      link: "fmge"
    },
    {
      imageUrl: THREEAWhite,
      altText: "Inactive method 3A",
      isActive: false,
      link: "3a"
    },
  ];

  const methodCardsMobile = [
    {
      title: "Full Demonstration",
      description:
        "Để học viên thực sự có trải nghiệm Learning-By-Doing, tất cả kỹ năng đều được làm mẫu nhiều chiều trước khi chuyển sang thực hành. Demo theo nhiều cách: giảng viên thực hành trực tiếp, Guided-Hand-On Video, S10Team theo Peer Programming.",
    },
    {
      title: "Micro Coaching",
      description:
        "Micro learning by doing - Hướng dẫn trực tiếp trên từng Task công việc đủ nhỏ. Giúp người học có thể hiểu sâu, đa chiều và tự chọn cách làm mà mình thấy phù hợp. Hình thức bao gồm: Mentor 1-1, AI TechLead, Peer Programming, Pie Step-By-Step Coach.",
    },
    {
      title: "Guided Self-Practice",
      description:
        "Guided Self-Practice là học tập chủ động và tự do, đáp ứng linh hoạt cho người đi làm, nhưng có hướng dẫn và có áp lực tiến độ với học viên bằng sự hướng dẫn và hỗ trợ của TechLead, công cụ AI và Camp Team.",
    },
    {
      title: "Evaluation 360",
      description:
        "Evaluation 360 là hình thức đánh giá toàn diện và liên tục. Với Micro Learning-By-Doing, Evaluation 360 được thực hiện thông qua các hoạt động sau: Test 360, MiniTask, Weekly Project, Milestone Exam, Milestone Project, Review Hackathon.",
    },
  ];
  
  const methodCards = [
    {
      title: "Full Demonstration",
      description:
        "Để học viên thực sự có trải nghiệm Learning-By-Doing, tất cả kỹ năng đều được làm mẫu nhiều chiều trước khi chuyển sang thực hành. Demo theo nhiều cách: giảng viên thực hành trực tiếp, Guided-Hand-On Video, S10Team theo Peer Programming.",
    },
    {
      title: "Evaluation 360",
      description:
        "Evaluation 360 là hình thức đánh giá toàn diện và liên tục. Với Micro Learning-By-Doing, Evaluation 360 được thực hiện thông qua các hoạt động sau: Test 360, MiniTask, Weekly Project, Milestone Exam, Milestone Project, Review Hackathon.",
    },
    {
      title: "Micro Coaching",
      description:
        "Micro learning by doing - Hướng dẫn trực tiếp trên từng Task công việc đủ nhỏ. Giúp người học có thể hiểu sâu, đa chiều và tự chọn cách làm mà mình thấy phù hợp. Hình thức bao gồm: Mentor 1-1, AI TechLead, Peer Programming, Pie Step-By-Step Coach.",
    },
    {
      title: "Guided Self-Practice",
      description:
        "Guided Self-Practice là học tập chủ động và tự do, đáp ứng linh hoạt cho người đi làm, nhưng có hướng dẫn và có áp lực tiến độ với học viên bằng sự hướng dẫn và hỗ trợ của TechLead, công cụ AI và Camp Team.",
    },
  ];

  return (
    <div className="w-full max-md:px-4 max-md:py-6 max-md:pt-0 px-32 py-12">
      <section className="max-w-[1184px] mx-auto flex flex-col items-center">
        <div id="fmge" className="flex flex-wrap gap-6 items-center max-w-full w-[800px] justify-center">
          {methodButtons.map((card, index) => (
            <MethodButton key={index} {...card} />
          ))}
        </div>
        <div className="flex flex-col p-6 mt-6 w-full border border-solid border-neutral-300 rounded-[36px] max-md:px-4 max-md:max-w-full">
          <div className="flex flex-col w-full p-6 rounded-[36px] max-md:px-4 max-md:py-0 max-md:max-w-full">
            <div className="flex flex-wrap gap-7 justify-between items-center w-full rounded-3xl max-md:max-w-full">
            <img
                loading="lazy"
                src={FMGEImage}
                className="object-contain self-stretch my-auto aspect-square min-w-[200px] w-[360px] max-md:max-w-[70%] max-lg:mx-auto md:hidden"
                alt="FMGE Method Illustration"
              />
              <div className="flex flex-col gap-32 max-lg:gap-4 lg:hidden">
                {methodCardsMobile.slice(0, 2).map((card, index) => (
                  <MethodCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              <div className="max-lg:hidden flex flex-col gap-32 max-lg:gap-4">
                {methodCards.slice(0, 2).map((card, index) => (
                  <MethodCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              <img
                loading="lazy"
                src={FMGEImage}
                className="object-contain self-stretch my-auto aspect-square min-w-[200px] w-[360px] max-md:max-w-[70%] max-lg:mx-auto max-md:hidden"
                alt="FMGE Method Illustration"
              />
              <div className="flex flex-col gap-32 max-lg:gap-4 lg:hidden">
                {methodCardsMobile.slice(-2).map((card, index) => (
                  <MethodCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              <div className="max-lg:hidden flex flex-col gap-32 max-lg:gap-4">
                {methodCards.slice(-2).map((card, index) => (
                  <MethodCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <FMGEDescription />
        </div>
      </section>
    </div>
  );
};

export default FMGEMethod;
