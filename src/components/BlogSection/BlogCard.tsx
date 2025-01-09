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
    <Link
      to={`/${slug}`}
      className="flex self-stretch flex-col max-md:flex-row p-4 max-md:gap-4 bg-[#F9FAFB] rounded-3xl max-w-[368px] max-md:max-w-full "
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full rounded-lg aspect-[1.54] max-md:h-[120px] max-md:w-[120px] max-md:object-cover"
      />
      <div className="flex flex-col h-full md:justify-between">
        <header className="flex flex-col mt-8 max-md:mt-2 w-full">
          <h2 className="text-2xl font-bold leading-8 text-slate-700 line-clamp-3 max-md:text-base max-md:line-clamp-4">
            {title}
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-500 text-ellipsis line-clamp-2">
            {description}
          </p>
        </header>
        <span className="self-start max-md:order-first px-2 py-1 mt-8 max-md:mt-0 text-base max-md:text-sm leading-6 whitespace-nowrap bg-[#ECF3FF] rounded-[10px] text-slate-700">
          {chipText}
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
