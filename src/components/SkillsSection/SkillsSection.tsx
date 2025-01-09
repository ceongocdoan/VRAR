import React from "react";
import CourseList from "./CourseList";

interface SkillsSectionProps {
  title?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title }) => {
  return (
    <div className="w-screen px-32 max-md:px-4 py-16 max-md:py-6">
      <section className="max-w-[1184px] mx-auto gap-6 flex flex-col items-center max-md:py-0">
        <h2 className="text-5xl whitespace-pre-line font-bold text-center md:leading-[65px] text-neutral-700 max-md:max-w-full max-md:text-2xl max-md:text-start max-md:self-start">
          {title ? title : " Mở rộng cơ hội nghề nghiệp\nvới các khoá học kỹ năng"}
        </h2>
        <CourseList />
      </section>
    </div>
  );
};

export default SkillsSection;
