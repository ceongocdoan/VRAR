import React from "react";

interface ProductCardProps {
  imageSrc: string;
  logoSrc: string;
  altText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  logoSrc,
  altText,
}) => {
  return (
    <div className="flex relative flex-col flex-1 shrink justify-center items-center self-stretch px-2.5 py-32 my-auto basis-0 h-[300px] max-md:h-[200px] min-w-[240px] rounded-[36px] overflow-hidden bg-[#DEF3FF] max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="opacity-65 !absolute bg-gradient-to-b from-[#020318] to-[#020318] size-full inset-0"></div>

      <div className="flex relative flex-col justify-center items-center max-w-full w-[349px]">
        <img
          loading="lazy"
          src={logoSrc}
          alt={`${altText} logo`}
          className="object-contain w-full aspect-[5.81]"
        />
      </div>
    </div>
  );
};

export default ProductCard;
