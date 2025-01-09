import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface CultureValueProps {
  id: number;
  title: string;
  description: string;
  details: string[];
}

const cultureValues: CultureValueProps[] = [
  {
    id: 1,
    title: "Tâm nhĩ và tâm thất:",
    description:
      "Tim có 4 ngăn gồm 2 tâm nhĩ trên (trái, phải) và 2 tâm thất dưới (trái, phải), hoạt động như các khoang bơm máu.",
    details: [],
  },
  {
    id: 2,
    title: "Hệ thống van tim:",
    description:
      "Bao gồm van hai lá, van ba lá, van động mạch phổi, và van động mạch chủ. Các van này đảm bảo máu lưu thông một chiều.",
    details: [],
  },
  {
    id: 3,
    title: "Mạch máu:",
    description:
      "Tim kết nối với hệ tuần hoàn thông qua động mạch chủ, động mạch phổi, tĩnh mạch chủ và tĩnh mạch phổi, giúp vận chuyển máu giàu oxy và máu nghèo oxy.",
    details: [],
  },
  {
    id: 4,
    title: "Hệ mạch máu",
    description:
      "Hệ mạch máu bao gồm mạch động, mạch tĩnh, mạch nhỏ, mạch lớn, mạch ngoại vi, mạch nội tạng, mạch cơ, mạch não, mạch phổi, mạch thận, mạch gan, mạch tim, v.v.",
    details: [],
  },
  {
    id: 5,
    title: "Cơ tim",
    description:
      "Cơ tim là một loại cơ bắp đặc biệt, hoạt động liên tục mà không mệt mỏi, giúp bơm máu đi khắp cơ thể.",
    details: [],
  },
];

const OnschoolCulture: React.FC = () => {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className="w-screen px-32 py-16 max-md:px-4 max-md:py-6">
      <section id="van-hoa" className="max-w-[1184px] mx-auto flex flex-col">
        <header className="flex flex-col w-full font-bold text-slate-700 max-md:max-w-full">
          <span className="self-center max-md:self-start px-2 py-1 text-base font-normal leading-6 bg-[#ECF3FF] rounded-[10px]">
            Hiểu hơn về trái tim
          </span>
          <h1 className="mt-3 text-center max-md:text-start w-full text-5xl tracking-tighter leading-[60px] max-md:max-w-full max-md:text-4xl">
          Cấu tạo quả tim
          </h1>
        </header>
        <div className="flex gap-4 mt-6 w-full max-md:max-w-full items-start">
          <div className="flex flex-col px-8 bg-gray-50 rounded-3xl min-w-[240px] w-[776px] max-md:px-5 max-md:max-w-full">
            {cultureValues.map((item) => (
              <div
                key={item.id}
                className={`${item.id !== 1 ? "border-t" : ""} py-6 max-md:py-5`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`self-stretch my-auto text-xl font-medium leading-8 w-fit p-1 rounded-sm max-md:max-w-full transition ${
                      expandedItemId === item.id
                        ? "bg-[#4460FF] text-white"
                        : "text-zinc-700"
                    }`}
                  >
                    {item.title}
                  </span>
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="text-blue-500 hover:underline"
                  >
                    <div
                      className={`rounded-full p-2 ${
                        expandedItemId === item.id ? "bg-[#4460FF]" : "bg-white"
                      }`}
                    >
                      <svg
                        width="30"
                        height="29"
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          expandedItemId === item.id ? "rotate-180 !text-white" : ""
                        } text-[#4460FF] transition-transform duration-300`}
                      >
                        <path
                          d="M5.66675 11.2888L15.4445 21.0666L25.2223 11.2888"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedItemId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="my-3 text-base font-medium leading-6 max-w-[623px] text-neutral-800">
                    {item.description}
                  </div>
                  <ul>
                    {item.details.map((data, index) => (
                      <li
                        className="list-disc text-sm leading-5 ml-3 text-zinc-700"
                        key={index}
                      >
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="max-md:hidden rounded-3xl overflow-hidden w-[400px]">
            <StaticImage
              loading="lazy"
              src="../../assets/images/OnschoolCulture/onschoolCulture.png"
              alt="Onschool culture illustration"
              title="Onschool culture illustration"
              className="bg-[#F4F8FF] object-cover h-[546px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnschoolCulture;
