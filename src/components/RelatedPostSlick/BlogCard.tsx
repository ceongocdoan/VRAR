import { Link } from "gatsby";
import React from "react";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  chipText: string;
  buttonText: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description,
  chipText,
  buttonText,
  slug,
}) => {
  return (
    <Link  to={`/${slug}`} className="flex flex-col justify-between p-4 bg-[#F9FAFB] min-h-[490px] max-md:min-h-[500px] rounded-3xl max-w-[368px] max-md:w-[320px] ">
      <div className="">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-contain w-full rounded-lg aspect-[1.54]"
        />
        <header className="flex flex-col mt-8 w-full">
          <h2 className="text-2xl font-bold leading-8 text-slate-700 line-clamp-3">
            {title}
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-500 text-ellipsis line-clamp-2">
            {description}
          </p>
        </header>
      </div>
      <div className="">
        <span className="self-start px-2 py-1 mt-8 text-base leading-6 whitespace-nowrap bg-[#ECF3FF] rounded-[10px] text-slate-700">
          {chipText}
        </span>
        {/* <Link
          to={`/${slug}`}
          className="flex justify-center items-center mt-2 w-full text-xl font-medium leading-8 text-blue-600 border border-blue-600 border-solid h-[56px] max-md:h-[48px] rounded-full"
        >
          <span className="gap-2.5 self-stretch px-4 my-auto mx-auto">
            {buttonText}
          </span>
        </Link> */}
      </div>
    </Link>
  );
};

export default BlogCard;
