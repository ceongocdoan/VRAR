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
      title: "Immersive heart anatomy",
      description:
        "Với công nghệ AR/VR, học viên sẽ được trải nghiệm một mô hình tim mạch sống động, trực quan và chi tiết. Qua việc khám phá 3D của các bộ phận trong hệ tuần hoàn, người học có thể hiểu rõ hơn về cấu trúc và chức năng của tim, mạch máu và các cơ quan liên quan.",
    },
    {
      title: "Interactive blood flow simulation",
      description:
        "Học viên sẽ trực tiếp tương tác với các mô phỏng dòng máu qua các mạch máu trong cơ thể. Thực hành này giúp người học nắm bắt được quy trình tuần hoàn máu và ảnh hưởng của các yếu tố như áp suất máu, tốc độ tuần hoàn và các yếu tố khác lên sức khỏe hệ tim mạch.",
    },
    {
      title: "Heart rate visualization",
      description:
        "Thông qua các công cụ AR/VR, học viên có thể quan sát và phân tích sự thay đổi của nhịp tim trong các tình huống khác nhau, từ trạng thái nghỉ ngơi đến khi vận động mạnh. Việc này giúp học viên dễ dàng nhận diện các tín hiệu về sức khỏe tim mạch và cách thức tác động lên nhịp tim.",
    },
    {
      title: "Real-time feedback and analysis",
      description:
        "Hệ thống AR/VR sẽ cung cấp phản hồi ngay lập tức về hiệu quả của các thao tác hoặc quyết định học viên đưa ra trong mô phỏng. Phản hồi sẽ bao gồm các chỉ số về sức khỏe tim mạch như lưu lượng máu, nhịp tim và huyết áp, từ đó giúp người học phát triển các kỹ năng cần thiết để chăm sóc hệ tim mạch tốt hơn.",
    },
  ];
  
  
  const methodCards = [
    {
      title: "Immersive heart anatomy",
      description:
        "Với công nghệ AR/VR, học viên sẽ được trải nghiệm một mô hình tim mạch sống động, trực quan và chi tiết. Qua việc khám phá 3D của các bộ phận trong hệ tuần hoàn, người học có thể hiểu rõ hơn về cấu trúc và chức năng của tim, mạch máu và các cơ quan liên quan.",
    },
    {
      title: "Interactive blood flow simulation",
      description:
        "Học viên sẽ trực tiếp tương tác với các mô phỏng dòng máu qua các mạch máu trong cơ thể. Thực hành này giúp người học nắm bắt được quy trình tuần hoàn máu và ảnh hưởng của các yếu tố như áp suất máu, tốc độ tuần hoàn và các yếu tố khác lên sức khỏe hệ tim mạch.",
    },
    {
      title: "Heart rate visualization",
      description:
        "Thông qua các công cụ AR/VR, học viên có thể quan sát và phân tích sự thay đổi của nhịp tim trong các tình huống khác nhau, từ trạng thái nghỉ ngơi đến khi vận động mạnh. Việc này giúp học viên dễ dàng nhận diện các tín hiệu về sức khỏe tim mạch và cách thức tác động lên nhịp tim.",
    },
    {
      title: "Real-time feedback and analysis",
      description:
        "Hệ thống AR/VR sẽ cung cấp phản hồi ngay lập tức về hiệu quả của các thao tác hoặc quyết định học viên đưa ra trong mô phỏng. Phản hồi sẽ bao gồm các chỉ số về sức khỏe tim mạch như lưu lượng máu, nhịp tim và huyết áp, từ đó giúp người học phát triển các kỹ năng cần thiết để chăm sóc hệ tim mạch tốt hơn.",
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
