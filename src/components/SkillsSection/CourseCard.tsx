// import React from 'react';

// interface CourseCardProps {
//   category: string;
//   title: string;
//   duration: string;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ category, title, duration }) => {
//   const getCategoryStyle = (category: string) => {
//     switch (category.toLowerCase()) {
//       case 'design':
//         return 'text-orange-600 bg-amber-100 border-amber-200';
//       case 'data':
//         return 'text-sky-600 bg-sky-100 border-sky-200';
//       case 'develop':
//         return 'text-teal-600 bg-teal-100 border-teal-200';
//       default:
//         return 'text-sky-600 bg-sky-100 border-sky-200';
//     }
//   };

//   return (
//     <article className="flex flex-col p-6 rounded-3xl bg-neutral-100 w-full min-w-[320px] max-md:px-5 place-self-stretch">
//       <div className="flex items-start self-start text-xs font-medium text-center whitespace-nowrap">
//         <div className={`gap-2.5 self-stretch px-3 py-1 rounded-3xl border border-solid ${getCategoryStyle(category)}`}>
//           {category}
//         </div>
//       </div>
//       <div className="flex flex-col mt-3 w-full">
//         <h2 className="text-2xl font-semibold leading-8 text-[#344054] max-md:text-xl">{title}</h2>
//         {/* <div className="flex gap-1.5 items-center self-start mt-3 text-sm leading-5 text-neutral-600">
//           <span className="self-stretch my-auto">Thời gian học:</span>
//           <span className="self-stretch my-auto font-semibold">{duration}</span>
//         </div> */}
//       </div>
//     </article>
//   );
// };

// export default CourseCard;

import React from 'react';

interface CourseCardProps {
  category: string;
  title: string;
  duration: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ category, title, duration }) => {
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'health':
        return 'text-sky-600 bg-sky-100 border-sky-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <article className="flex flex-col p-6 rounded-3xl bg-neutral-100 w-full min-w-[320px] max-md:px-5 place-self-stretch">
      <div className="flex items-start self-start text-xs font-medium text-center whitespace-nowrap">
        <div className={`gap-2.5 self-stretch px-3 py-1 rounded-3xl border border-solid ${getCategoryStyle(category)}`}>
          {category}
        </div>
      </div>
      <div className="flex flex-col mt-3 w-full">
        <h2 className="text-2xl font-semibold leading-8 text-[#344054] max-md:text-xl">{title}</h2>
        {/* Optional: You can use this if you want to display the duration */}
        {/* <div className="flex gap-1.5 items-center self-start mt-3 text-sm leading-5 text-neutral-600">
          <span className="self-stretch my-auto">Thời gian học:</span>
          <span className="self-stretch my-auto font-semibold">{duration}</span>
        </div> */}
      </div>
    </article>
  );
};

const HealthFactors = () => {
  const heartHealthFactors = [

  
    { category: "health", title: "Chế độ ăn uống", duration: "" },
    
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {/* Đảm bảo mỗi phần tử trong mảng được render một lần */}
      {heartHealthFactors.map((factor, index) => (
        <CourseCard 
          key={index} 
          category={factor.category} 
          title={factor.title} 
          duration={factor.duration} 
        />
      ))}
    </div>
  );
};

export default HealthFactors;

