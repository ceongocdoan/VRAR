import React from "react";
import ProductCard from "./ProductCard";
import Button from "../UI/UI/Buttons";
import ons from "../../assets/images/OnshoolProducts/ons.jpeg";
import skill from "../../assets/images/OnshoolProducts/skill.png";
import bootcamp from "../../assets/images/OnshoolProducts/bootcamp.jpeg";
import k12 from "../../assets/images/OnshoolProducts/k12.jpeg";
import { Link } from "gatsby";

// Cập nhật kiểu dữ liệu cho Product để chứa text thay vì logoSrc
interface Product {
  imageSrc: string;
  text: string; // Thay logoSrc bằng text
  altText: string;
}

const products: Product[] = [
  {
    imageSrc: ons,
    text: "Onschool", // Thay bằng text cho sản phẩm
    altText: "Product 1",
  },
  {
    imageSrc: bootcamp,
    text: "Bootcamp", // Thay bằng text cho sản phẩm
    altText: "Product 2",
  },
  {
    imageSrc: skill,
    text: "Skill", // Thay bằng text cho sản phẩm
    altText: "Product 3",
  },
  {
    imageSrc: k12,
    text: "K12", // Thay bằng text cho sản phẩm
    altText: "Product 4",
  },
];

const ProductsHomeSection: React.FC = () => {
  return (
    <div className="w-full px-32 py-16 max-md:px-4 max-md:py-6">
      <section className="max-w-[1184px] mx-auto flex flex-col items-center gap-12 max-md:gap-6 justify-center bg-white">
        <h2 className="text-5xl font-bold tracking-tighter text-center leading-[60px] max-w-[1184px] text-slate-700 w-[1184px] max-md:max-w-full max-md:text-3xl max-md:text-start">
          Nội dung bài học
        </h2>
        <div className="flex flex-col max-w-full w-[1184px]">
          <div className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full">
            {products.slice(0, 2).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6 items-center mt-6 w-full max-md:max-w-full">
            {products.slice(2).map((product, index) => (
              <ProductCard key={index + 2} {...product} />
            ))}
          </div>
        </div>
        <Link to="/product" className="max-md:w-full">
          <Button variant="tertiary" className="max-md:w-full max-md:h-[56px]">
            Xem thêm
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default ProductsHomeSection;
