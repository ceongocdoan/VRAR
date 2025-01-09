import React from "react";
import { Link } from "gatsby";
import Button from "../UI/UI/Buttons";

export interface JobCardProps {
  onschool_locations: {
    name: string;
  }[];
  title: string;
  slug: string;
  quantity: number;
  expiredDate: string;
}

const JobCard: React.FC<JobCardProps> = ({
  onschool_locations,
  title,
  slug,
  quantity,
  expiredDate,
}) => {
  return (
    <article className="flex gap-12 justify-between items-center p-9 mt-6 w-full bg-gray-50 rounded-[36px] max-md:max-w-full max-md:flex-col max-md:gap-3">
      <div className="flex flex-col gap-3 self-stretch my-auto min-w-[200px] w-[676px] max-md:max-w-full">
        <div className="flex gap-3 items-start self-start text-sm font-bold leading-5 text-slate-700">
          {onschool_locations.map((location, index) => (
            <span
              key={index}
              className="self-stretch px-3 py-1 bg-gray-200 rounded-full"
            >
              {location.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col w-full max-md:max-w-full max-md:gap-12">
          <h2 className="text-3xl max-md:text-2xl font-semibold leading-10 text-slate-700 max-md:max-w-full">
            {title}
          </h2>
          <div className="flex gap-10 items-start self-start mt-3 text-base leading-6 max-md:justify-between max-md:w-full">
            <div className="flex gap-3 items-center whitespace-nowrap max-md:flex-col">
              <span className="self-stretch my-auto font-medium text-gray-500">
                Thời gian: 60p
              </span>
              <span className="self-stretch my-auto font-bold text-slate-600">
                {quantity}
              </span>
            </div>
            <div className="flex gap-3 items-center max-md:flex-col">
              <span className="self-stretch my-auto font-medium text-gray-500">
                Nộp bài tập trước
              </span>
              <span className="self-stretch my-auto font-bold text-slate-600">
                {expiredDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/${slug}`} className="max-md:w-full">
        <Button variant="tertiary" className="max-md:w-full">Trải nghiệm ngay</Button>
      </Link>
    </article>
  );
};

export default JobCard;
