import React from "react";
import UniversityItem from "./UniversityItem";

interface University {
  name: string;
}

const universities: University[] = [
  { name: "Luyện tập ghi nhớ cấu tạo của trái tim" },
  { name: "Xoay để xem các bộ phận của trái tim" },
  
  
];

const UniversityList: React.FC = () => {
  return (
    <section className="grow flex flex-col gap-2 md:gap-4] text-base font-medium max-xl:text-center text-[#344054]">
      {universities.map((university, index) => (
        <UniversityItem key={index} name={university.name} />
      ))}
    </section>
  );
};

export default UniversityList;