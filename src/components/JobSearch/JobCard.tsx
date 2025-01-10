// import React from "react";
// import { Link } from "gatsby";
// import Button from "../UI/UI/Buttons";

// export interface JobCardProps {
//   onschool_locations: {
//     name: string;
//   }[];
//   title: string;
//   slug: string;
//   quantity: number;
//   expiredDate: string;
// }



// const JobCard: React.FC<JobCardProps> = ({
//   onschool_locations,
//   title,
//   slug,
//   quantity,
//   expiredDate,
 
// }) => {
//   return (
//     <article className="flex gap-12 justify-between items-center p-9 mt-6 w-full bg-gray-50 rounded-[36px] max-md:max-w-full max-md:flex-col max-md:gap-3">
//       <div className="flex flex-col gap-3 self-stretch my-auto min-w-[200px] w-[676px] max-md:max-w-full">
//         <div className="flex gap-3 items-start self-start text-sm font-bold leading-5 text-slate-700">
//           {onschool_locations.map((location, index) => (
//             <span
//               key={index}
//               className="self-stretch px-3 py-1 bg-gray-200 rounded-full"
//             >
//               {location.name}
//             </span>
//           ))}
//         </div>
//         <div className="flex flex-col w-full max-md:max-w-full max-md:gap-12">
//           <h2 className="text-3xl max-md:text-2xl font-semibold leading-10 text-slate-700 max-md:max-w-full">
//             {/* {title} */}
          
//           </h2>
//           <div className="flex gap-10 items-start self-start mt-3 text-base leading-6 max-md:justify-between max-md:w-full">
//             <div className="flex gap-3 items-center whitespace-nowrap max-md:flex-col">
//               <span className="self-stretch my-auto font-medium text-gray-500">
//                 Thời gian: 60p
//               </span>
//               <span className="self-stretch my-auto font-bold text-slate-600">
//                 {quantity}
//               </span>
//             </div>
//             <div className="flex gap-3 items-center max-md:flex-col">
//               <span className="self-stretch my-auto font-medium text-gray-500">
//                 Nộp bài tập trước
//               </span>
//               <span className="self-stretch my-auto font-bold text-slate-600">
//                 {expiredDate}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Link to={`/${slug}`} className="max-md:w-full">
//         <Button variant="tertiary" className="max-md:w-full">Trải nghiệm ngay</Button>
//       </Link>
//     </article>
//   );
// };

// export default JobCard;



import React from "react";
import { Link } from "gatsby";
import Button from "../UI/UI/Buttons";

// export interface JobCardProps {
//   onschool_locations: {
//     name: string;
//   }[];
//   title: string;
//   slug: string;
//   quantity: number;
//   expiredDate: string;
// }



const JobCard = () => {
  const jobs = [
    {
      title: "Khám Phá Cấu Trúc Tim Mạch với AR/VR",
      description:
        "Bài học này sử dụng AR/VR để mô phỏng cấu trúc của tim và hệ tuần hoàn, giúp học viên quan sát và tương tác với từng phần của hệ tim mạch trong không gian 3D.",
      slug: "kham-pha-cau-truc-tim-mach-arvr",
      quantity: "10 bài học",
      expiredDate: "2025-01-20",
    },
    {
      title: "Hiểu Biểu Đồ Điện Tim (ECG) qua AR/VR",
      description:
        "Bài học sử dụng công nghệ AR/VR để giúp học viên hiểu cách đọc và phân tích biểu đồ điện tim (ECG).",
      slug: "hieu-bieu-do-dien-tim-ecg-arvr",
      quantity: "8 bài học",
      expiredDate: "2025-02-10",
    },
    {
      title: "Quá Trình Máu Lưu Thông qua AR/VR",
      description:
        "Bài học này mô phỏng quá trình lưu thông máu trong cơ thể, từ tim ra các cơ quan và trở lại tim.",
      slug: "qua-trinh-mau-luu-thong-arvr",
      quantity: "12 bài học",
      expiredDate: "2025-03-01",
    }
  ];

  return (
    <div>
      {jobs.map((job) => (
        <article
          // key={job.slug}
          className="flex gap-12 justify-between items-center p-9 mt-6 w-full bg-gray-50 rounded-[36px] max-md:max-w-full max-md:flex-col max-md:gap-3"
        >
          <div className="flex flex-col gap-3 self-stretch my-auto min-w-[200px] w-[676px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full max-md:gap-12">
              <h2 className="text-3xl max-md:text-2xl font-semibold leading-10 text-slate-700 max-md:max-w-full">
                {job.title}
              </h2>
              <p className="text-base text-slate-600">{job.description}</p>
              <div className="flex gap-10 items-start self-start mt-3 text-base leading-6 max-md:justify-between max-md:w-full">
                <div className="flex gap-3 items-center whitespace-nowrap max-md:flex-col">
                  <span className="self-stretch my-auto font-medium text-gray-500">
                    Số bài:
                  </span>
                  <span className="self-stretch my-auto font-bold text-slate-600">
                    {job.quantity}
                  </span>
                </div>
                <div className="flex gap-3 items-center max-md:flex-col">
                  <span className="self-stretch my-auto font-medium text-gray-500">
                    Nộp bài tập trước
                  </span>
                  <span className="self-stretch my-auto font-bold text-slate-600">
                    {job.expiredDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
{/* 
          <Link to={`/lesson/${job.slug}`} className="max-md:w-full">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Trải nghiệm ngay
            </button>
          </Link> */}
        </article>
      ))}
    </div>
  );
};

export default JobCard;

