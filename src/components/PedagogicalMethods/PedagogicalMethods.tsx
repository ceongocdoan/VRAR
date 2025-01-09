import React from "react";
import MethodButton from "./MethodButton";
import LearningStep from "./LearningStep";
import LIPE from "../../assets/images/PedagogicalMethods/LIPEWhite.svg";
import FMGEWhite from "../../assets/images/PedagogicalMethods/FMGE.svg";
import THREEAWhite from "../../assets/images/PedagogicalMethods/3AWhite.svg";
import L from "../../assets/images/PedagogicalMethods/L.svg";
import I from "../../assets/images/PedagogicalMethods/I.svg";
import P from "../../assets/images/PedagogicalMethods/P.svg";
import E from "../../assets/images/PedagogicalMethods/E.svg";

const methodButtons = [
  {
    imageUrl: LIPE,
    altText: "Active method LIPE",
    isActive: true,
    link: "lipe",
  },
  {
    imageUrl: FMGEWhite,
    altText: "Inactive method FMGE",
    isActive: false,
    link: "fmge",
  },
  {
    imageUrl: THREEAWhite,
    altText: "Inactive method 3A",
    isActive: false,
    link: "3a",
  },
];
const learningSteps = [
  {
    imageUrl: L,
    title: "LECTURE",
    description: "Bài giảng lý thuyết",
  },
  {
    imageUrl: I,
    title: "INTERACTION",
    description: "Trao đổi thảo luận",
  },
  {
    imageUrl: P,
    title: "PRACTICE",
    description: "Làm luyện tập",
  },
  {
    imageUrl: E,
    title: "EVALUTION",
    description: "Kiểm tra đánh giá",
  },
];
const PedagogicalMethods: React.FC = () => {
  return (
    <div className="w-screen max-md:px-4 max-md:py-6 px-32 pt-12">
      <section className="max-w-[1184px] mx-auto flex flex-col">
        <h1
          id="lipe"
          className="self-center text-5xl font-bold text-center text-neutral-700 w-[888px] max-md:max-w-full max-md:text-2xl"
        >
         Cơ quan tuần hoàn có những chức năng gì?
        </h1>
        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-center self-center max-w-full w-[800px] justify-center">
            {methodButtons.map((button, index) => (
              <MethodButton key={index} {...button} />
            ))}
          </div>
          <div className="flex flex-col p-4 mt-6 w-full border border-solid border-neutral-300 rounded-[48px] max-md:px-4 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-center w-full text-center rounded-3xl  max-md:max-w-full">
              {learningSteps.map((step, index) => (
                <LearningStep key={index} {...step} />
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-4 p-3 text-xl leading-8 border border-gray-300 border-solid rounded-[36px] text-slate-600">
            <div className="flex-1 shrink gap-2.5 self-stretch p-9 w-full bg-sky-50 rounded-[36px] max-md:px-5 max-md:max-w-full">
            Vận chuyển các chất dinh dưỡng và oxy cho tế bào.
Vận chuyển các chất là sản phẩm bài tiết ra khỏi tế bào.
Vai trò trong hệ miễn dịch giúp cơ thể chống lại các bệnh lý nhiễm khuẩn.
Vận chuyển hormon tới cơ quan đích.
            </div>
            <div className="flex flex-wrap gap-3 mt-3 w-full max-md:max-w-full">
              <div className="flex-1 shrink p-6 bg-gray-50 rounded-3xl min-w-[240px] max-md:px-5">
                Phương pháp phù hợp cho người đi làm có thể chủ động được kế
                hoạch học tập mọi lúc mọi nơi.
              </div>
              <div className="flex-1 shrink p-6 bg-gray-50 rounded-3xl min-w-[240px] max-md:px-5">
                Chủ động hoàn thành được chương trình Cử nhân bậc Đại học trong
                thời gian tối ưu nhất.
              </div>
              <div className="flex-1 shrink p-6 bg-gray-50 rounded-3xl min-w-[240px] max-md:px-5">
                Tự tin chinh phục những đỉnh cao mới trong sự nghiệp thông qua
                trang bị từng điểm kiến thức.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PedagogicalMethods;
