import React, { useState } from "react";
import CourseCard from "./CourseCard";
import FilterTabs from "./FilterTabs";
import ViewAllButton from "./ViewAllButton";

interface Course {
  category: string;
  title: string;
  duration: string;
}

const courses: Course[] = [
  {title: "Thiết kế Landing page", duration: "2 tháng", category: "Design" },
  {title: "Excel Dashboard", duration: "1 tháng", category: "Data" },
  {title: "Figma cho Designer & Developer", duration: "2 tháng", category: "Design" },
  {title: "Lập trình front-end sử dụng thư viện jQuery", duration: "1 tháng", category: "Develop" },
  {title: "Xây dựng giao diện với HTML, CSS", duration: "2 tháng", category: "Develop" },
  {title: "Trình bày dữ liệu với Power BI", duration: "1 tháng", category: "Data" },
  {title: "Java Core", duration: "3 tháng", category: "Develop" },
  {title: "Data Pipelines với Python", duration: "1 tháng", category: "Data" },
  {title: "MySQL Data Analysis (SQL cơ bản)", duration: "1 tháng", category: "Data" },
  // { title: "Rest API", duration: "3 tháng", category: "Develop" },
  // { title: "Production Database", duration: "1 tháng", category: "Data" },
  // { title: "HTML, CSS Cơ bản", duration: "2 tháng", category: "Design" },
  // { title: "Lập trình Front-end", duration: "2 tháng", category: "Design" },
  // { title: "SQLs", duration: "1 tháng", category: "Data" },
  // { title: "Mobile", duration: "3 tháng", category: "Develop" }
];

const CourseList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <main className="flex flex-col items-center w-full">
      <nav
        className={`flex gap-1.5 justify-center items-center p-3 text-base font-medium text-center whitespace-nowrap rounded-3xl border max-md:w-full  border-solid shadow-lg bg-neutral-100 text-zinc-700 ${
          activeCategory === "All" && "border-[#3644F5]"
        } ${activeCategory === "Data" && "border-[#00BBFF]"} ${
          activeCategory === "Design" && "border-[#FAA41B]"
        } ${activeCategory === "Develop" && "border-[#12C4B9]"}`}
      >
        <button
          onClick={() => setActiveCategory("All")}
          className={`self-stretch px-4 transition-all py-2 my-auto rounded-xl w-[53px] md:hover:bg-[#E4E7EC] ${
            activeCategory === "All"
              ? "bg-[#3644F5] text-neutral-50 font-bold hover:!bg-[#3644F5]"
              : "bg-neutral-100"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("Data")}
          className={`self-stretch px-4 transition-all py-2 my-auto rounded-xl w-[68px] md:hover:bg-[#E4E7EC] ${
            activeCategory === "Data"
              ? "bg-[#00BBFF] text-neutral-50 font-bold hover:!bg-[#00BBFF]"
              : "bg-neutral-100"
          }`}
        >
          Data
        </button>
        <button
          onClick={() => setActiveCategory("Design")}
          className={`self-stretch px-4 transition-all py-2 my-auto rounded-xl w-[85px] md:hover:bg-[#E4E7EC] ${
            activeCategory === "Design"
              ? "bg-[#FAA41B] text-neutral-50 font-bold hover:!bg-[#FAA41B]"
              : "bg-neutral-100"
          }`}
        >
          Design
        </button>
        <button
          onClick={() => setActiveCategory("Develop")}
          className={`self-stretch px-4 transition-all py-2 my-auto rounded-xl w-[95px] md:hover:bg-[#E4E7EC] ${
            activeCategory === "Develop"
              ? "bg-[#12C4B9] text-neutral-50 font-bold hover:!bg-[#12C4B9]"
              : "bg-neutral-100"
          }`}
        >
          Develop
        </button>
      </nav>
      <section className="grid grid-cols-3 place-items-stretch  max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4 justify-start items-center self-stretch mt-12 max-md:mt-6 w-full max-md:max-w-full">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </section>
      {/* <ViewAllButton /> */}
    </main>
  );
};

export default CourseList;