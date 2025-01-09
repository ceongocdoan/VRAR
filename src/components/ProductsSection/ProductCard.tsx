import React from "react";
import Button from "../UI/Button";
import { Link } from "gatsby";

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

const ProductCard: React.FC<ProductData> = ({
  logo,
  hoverLogo,
  title,
  description,
  image,
  buttonText,
  imageFirst,
  link,
}) => {
  const contentSection = (
    <div
      className={`flex flex-col flex-1 shrink justify-between items-start py-10 pl-6 my-auto basis-0 min-h-[480px] min-w-[240px] max-md:max-w-full `}
    >
      <img
        loading="lazy"
        src={logo}
        alt=""
        className="object-contain self-start max-w-full aspect-auto h-[60px] group-hover/card:hidden"
      />
      <img
        loading="lazy"
        src={hoverLogo}
        alt=""
        className="object-contain max-w-full self-start aspect-auto h-[60px] hidden group-hover/card:block"
      />
      {title && (
        <h2 className="flex flex-col w-full text-3xl font-bold leading-10 text-slate-700 group-hover/card:text-white transition-all max-md:max-w-full">
          {title.split("\n").map((line, index) => (
            <div key={index} className="max-md:max-w-full">
              {line}
            </div>
          ))}
        </h2>
      )}
      <p className="self-stretch mt-3 w-full text-xl font-medium leading-8 text-gray-500 group-hover/card:text-[#ffffff] transition-all max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
      <Link to={link}>
        <Button
          variant="tertiary"
          size="desktop"
          name={buttonText}
          classname="group-hover/card:hidden"
        />
        <div className="group-hover/card:block hidden">
          <Button variant="secondary" size="desktop" name={buttonText} />
        </div>
      </Link>
    </div>
  );

  const imageSection = (
    <img
      loading="lazy"
      src={image}
      alt=""
      className="object-cover rounded-[36px] max-md:rounded-xl size-full max-h-[480px] max-md:max-h-[183px] max-md:max-w-full bg-[#DEF3FF]"
    />
  );

  return (
    <div>
      <article
        className={`grid grid-cols-2 place-content-stretch max-md:hidden flex-wrap transition-all group/card hover:shadow-xl gap-8 p-6 mt-5 max-md:mt-0 w-full bg-gray-50 min-h-[480px] rounded-[48px] max-md:px-4 max-md:max-w-full ${
          link === "/san-pham-uni" ? "hover:bg-[#3644F5]" : ""
        } ${link === "/san-pham-bootcamp" ? "hover:bg-[#37278E]" : ""} ${
          link === "/san-pham-skill" ? "hover:bg-[#0071BB]" : ""
        } ${link === "/san-pham-onk12" ? "hover:bg-[#DC50F4]" : ""}`}
      >
        {imageFirst ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </article>
      <article className="md:hidden flex flex-wrap  gap-8 mt-4 w-full bg-gray-50 min-h-[480px] rounded-[36px] max-md:max-w-full">
        <div className="flex flex-col flex-1 gap-6 shrink justify-between p-6 items-start my-auto basis-0 min-h-[480px] min-w-[200px] max-md:max-w-full">
          {logo && (
            <img
              loading="lazy"
              src={logo}
              alt=""
              className="object-contain self-start max-w-full h-[40px]"
            />
          )}
          {imageSection}
          {title && (
            <h2 className="flex flex-col w-full text-2xl font-bold leading-10 text-slate-700 max-md:max-w-full">
              {title.split("\n").map((line, index) => (
                <div key={index} className="max-md:max-w-full">
                  {line}
                </div>
              ))}
            </h2>
          )}
          <p className="self-stretch w-full text-base font-normal leading-7 text-gray-500  max-md:max-w-full">
            {description}
          </p>
          <Link to={link} className="w-full">
            <Button
              variant="tertiary"
              size="mobile"
              name={buttonText}
              classname="!w-full justify-between"
            />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
