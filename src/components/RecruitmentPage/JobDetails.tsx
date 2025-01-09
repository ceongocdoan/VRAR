import React from "react";

interface JobDetailsProps {
  jobTitle: string;
  location: string[];
}

const JobDetails: React.FC<JobDetailsProps> = ({ jobTitle, location }) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full ">
      <div className="self-center px-2 py-1 text-xl leading-8 bg-indigo-500 rounded text-neutral-50">
        Tuyển dụng
      </div>
      <div className="flex flex-col items-center justify-center mt-6 w-full text-center max-md:max-w-full">
        <h1 className="text-7xl font-bold tracking-tight text-white leading-[90px] max-md:max-w-full max-md:text-4xl">
          {jobTitle}
        </h1>
        <h2 className="mt-3 text-4xl tracking-tight leading-10 text-white max-md:max-w-full">
          {location.join(", ")}
        </h2>
      </div>
    </div>
  );
};

export default JobDetails;
