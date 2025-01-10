import * as React from "react";
import { ProgramCard, ProgramCardProps } from "./ProgramCard";
import Image1 from "../../assets/images/OptimizedProgram/OptimizedProgram1.jpeg"
import Image2 from "../../assets/images/OptimizedProgram/OptimizedProgram2.jpeg"


const programData: ProgramCardProps[] = [
  {
    imageUrl: Image1,
    percentage: "Bài tập 1",
    description: "Khi người ta bị bệnh nhồi máu cơ tim, họ thường cảm thấy gì?"
  },
  {
    imageUrl: Image2,
    percentage: "Bài tập 2",
    description: "Bao nhiêu giờ ngủ mỗi đêm là tốt cho sức khỏe tim mạch của chúng ta?"
  }
];

export function OptimizedProgram() {
  return (
    <section className="flex flex-col items-center px-32 py-16 bg-white max-md:px-4 max-md:py-6">
      <h2 className="w-full text-5xl font-bold tracking-tighter leading-[60px] max-w-[1184px] text-slate-700 max-md:max-w-full max-md:text-3xl">
        Bài tập về phân tích bệnh lý tim mạch
      </h2>
      <div className="flex flex-wrap gap-6 items-stretch mt-12 w-full rounded-3xl max-w-[1184px] max-md:mt-6 max-md:max-w-full">
        {programData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </section>
  );
}