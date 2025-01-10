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
  { title: "Di Truyền", duration: "Vĩnh viễn", category: "Yếu tố di truyền" },
  { title: "Huyết Áp Cao", duration: "Không xác định", category: "Yếu tố bệnh lý" },
  { title: "Cholesterol Cao", duration: "Không xác định", category: "Yếu tố dinh dưỡng" },
  { title: "Chế Độ Ăn Uống Không Lành Mạnh", duration: "Không xác định", category: "Yếu tố dinh dưỡng" },
  { title: "Hút Thuốc", duration: "Không xác định", category: "Yếu tố thói quen" },
  { title: "Tập Thể Dục Ít", duration: "Không xác định", category: "Yếu tố lối sống" },
  { title: "Căng Thẳng Mệt Mỏi", duration: "Không xác định", category: "Yếu tố tâm lý" },
  { title: "Tiểu Đường", duration: "Không xác định", category: "Yếu tố bệnh lý" },
  { title: "Thừa Cân, Béo Phì", duration: "Không xác định", category: "Yếu tố thể chất" }
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
          Di truyền
        </button>
        <button
          onClick={() => setActiveCategory("Design")}
          className={`self-stretch px-4 transition-all py-2 my-auto rounded-xl w-[85px] md:hover:bg-[#E4E7EC] ${
            activeCategory === "Design"
              ? "bg-[#FAA41B] text-neutral-50 font-bold hover:!bg-[#FAA41B]"
              : "bg-neutral-100"
          }`}
        >
          Dinh dưỡng
        </button>
        <button
          onClick={() => setActiveCategory("Develop")}
          className={`self-stretch px-4 transition-all py-2 my-auto rounded-xl w-[95px] md:hover:bg-[#E4E7EC] ${
            activeCategory === "Develop"
              ? "bg-[#12C4B9] text-neutral-50 font-bold hover:!bg-[#12C4B9]"
              : "bg-neutral-100"
          }`}
        >
          Thể chất
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