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
    "Immersive heart anatomy",
    "Interactive blood flow simulation",
    "Heart rate visualization",
    "Real-time feedback and analysis",
  ];

  const features = [
    {
      title: "Augmented Reality Training (AR/VR)",
      description:
        "Phương pháp học sử dụng AR/VR giúp học viên thực hành trong môi trường mô phỏng sống động, từ đó tăng cường khả năng tiếp thu và luyện tập các kỹ năng trong các tình huống thực tế. Các mô-đun học tập được tối ưu hóa để học viên có thể quay lại và luyện tập lại những phần chưa thành thạo.",
    },
    {
      title: "Accelerated Learning with AR/VR",
      description:
        "Với sự hỗ trợ của AR/VR, học viên có thể trải nghiệm các bài học trong môi trường thực tế ảo, giúp gia tăng tốc độ học tập mà vẫn đảm bảo kỹ năng được hình thành vững chắc. Phương pháp này giúp học viên tập trung vào các kỹ năng cơ bản và tham gia các hoạt động hỗ trợ, đánh giá tiến độ thường xuyên qua các thử thách trong môi trường mô phỏng.",
    },
    {
      title: "Adaptive Learning Experience with AR/VR",
      description:
        "Phương pháp học AR/VR mang lại trải nghiệm học tập cá nhân hóa, đáp ứng nhu cầu học của từng người học: phù hợp cho người đi làm, người muốn học nhanh hay học từ từ. Các bài học được thiết kế linh hoạt, cho phép học viên tùy chỉnh tốc độ và phong cách học của mình, giúp tối đa hóa hiệu quả học tập.",
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
                  Edtech Hust ứng dụng mô hình AR VR trong giảng dạy bộ môn khoa học tự nhiên cho
                  học sinh tiểu học mang lại trải nghiệm thực tế ảo, thực tế tăng cường giúp học sinh
                  nhanh chóng tiếp thu kiến thức mới.
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
