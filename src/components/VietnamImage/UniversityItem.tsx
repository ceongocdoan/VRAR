import React from "react";

interface UniversityItemProps {
  name: string;
}

const UniversityItem: React.FC<UniversityItemProps> = ({ name }) => {
  return (
    <div className="px-4 py-2 bg-[#F2F4F7] max-md:w-full max-md:text-center rounded-2xl first:mt-0">
      {name}
    </div>
  );
};

export default UniversityItem;