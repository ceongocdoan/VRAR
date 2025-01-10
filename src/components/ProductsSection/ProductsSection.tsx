import React from "react";
import ProductCard from "./ProductCard";
import Uni from "../../assets/images/OnschoolEcosystems/Uni.svg";
import Bootcamp from "../../assets/images/OnschoolEcosystems/Bootcamp.svg";
import Skill from "../../assets/images/OnschoolEcosystems/Skill.svg";
import Onk12 from "../../assets/images/OnschoolEcosystems/Onk12.svg";
import UniWhite from "../../assets/images/OnschoolEcosystems/UniMono.svg";
import BootcampWhite from "../../assets/images/OnschoolEcosystems/BootcampMono.svg";
import SkillWhite from "../../assets/images/OnschoolEcosystems/SkillMono.svg";
import Onk12White from "../../assets/images/OnschoolEcosystems/Onk12Mono.svg";

// import ons from "../../assets/images/OnshoolProducts/ons.jpeg";
import skill from "../../assets/images/OnshoolProducts/skill.png";
import boot from "../../assets/images/OnshoolProducts/boot.jpg";
import k12 from "../../assets/images/OnshoolProducts/k12.jpeg";
import SkillBanner from "../../assets/images/Banner/SkillBanner.png";
interface ProductData {
  logo?: string;
  hoverLogo?: string;
  title?: string;
  description: string;
  image: string;
  buttonText: string;
  imageFirst: boolean;
  link: string;
}

const productData: ProductData[] = [
  {
    logo: Skill,
    hoverLogo: SkillWhite,
    title: "Cơ chế\nhoạt động",
    description:
      "Trái tim là một cơ quan quan trọng trong cơ thể con người, có nhiệm vụ bơm máu đi nuôi cơ thể. Bài tập này sẽ giúp học sinh hiểu về các bộ phận của trái tim và chức năng của chúng.",
    image: SkillBanner,
    buttonText: "Xem thêm",
    imageFirst: false,
    link: "/san-pham-uni",
  },
  {
    // logo: Bootcamp,
    hoverLogo: BootcampWhite,
    title: "Khám phá\nHệ tuần hoàn",
    description:
      "Quan sát mô phỏng cấu trúc của trái tim và các mạch máu. Chỉ ra các phần chính của trái tim (như tâm nhĩ, tâm thất, van tim, v.v.) và giải thích chức năng của từng phần.",
    image: boot,
    buttonText: "Xem thêm",
    imageFirst: true,
    link: "/san-pham-bootcamp",
  },
  {
    logo: Uni,
    hoverLogo: UniWhite,
    title: "Các yếu tố ảnh hưởng\nđến sức khỏe tim mạch",
    description:
      " Giới thiệu các yếu tố tác động đến sức khỏe trái tim, như chế độ ăn uống, tập thể dục, và các bệnh lý như cao huyết áp, đột quỵ, nhồi máu cơ tim...",
    image: skill,
    buttonText: "Xem thêm",
    imageFirst: false,
    link: "/san-pham-skill",
  },
  {
    logo: Onk12,
    hoverLogo: Onk12White,
    title: "Mô phỏng\nphân tích bệnh lý tim mạch",
    description:
      "Học sinh sẽ nghiên cứu các bệnh lý nghiêm trọng về tim mạch và cách các bệnh này ảnh hưởng đến cấu trúc và chức năng của trái tim.",
    image: k12,
    buttonText: "Xem thêm",
    imageFirst: true,
    link: "/san-pham-onk12",
  },
];

const ProductSection: React.FC = () => {
  return (
    <div className="w-screen px-32 py-16 max-md:px-4 max-md:py-6">
      <section className="max-w-[1184px] mx-auto flex flex-col">
        <h1 className="self-center text-5xl font-bold tracking-tight leading-[60px] text-slate-700 max-md:max-w-full max-md:text-2xl">
          Nội dung bài học
        </h1>
        <div className="">
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
