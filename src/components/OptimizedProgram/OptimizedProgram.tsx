import * as React from "react";
import { ProgramCard, ProgramCardProps } from "./ProgramCard";
import Image1 from "../../assets/images/OptimizedProgram/OptimizedProgram1.jpeg"
import Image2 from "../../assets/images/OptimizedProgram/OptimizedProgram2.jpeg"


const programData: ProgramCardProps[] = [
  {
    imageUrl: Image1,
    percentage: "70%",
    description: "Thời lượng bám sát chương trình chuẩn của bộ GD&ĐT, giúp con nắm chắc kiến thức trên lớp và đạt điểm tối đa trong các kỳ thi."
  },
  {
    imageUrl: Image2,
    percentage: "30%",
    description: "Toán tư duy từ giáo trình Singapore giúp con phát triển tư duy logic, tham gia kỳ thi Olympic, toán quốc tế."
  }
];

export function OptimizedProgram() {
  return (
    <section className="flex flex-col items-center px-32 py-16 bg-white max-md:px-4 max-md:py-6">
      <h2 className="w-full text-5xl font-bold tracking-tighter leading-[60px] max-w-[1184px] text-slate-700 max-md:max-w-full max-md:text-3xl">
        Chương trình học tối ưu
      </h2>
      <div className="flex flex-wrap gap-6 items-stretch mt-12 w-full rounded-3xl max-w-[1184px] max-md:mt-6 max-md:max-w-full">
        {programData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </section>
  );
}