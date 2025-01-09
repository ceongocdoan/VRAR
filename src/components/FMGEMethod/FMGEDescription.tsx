import React from 'react';
import FMGEDesImage from '../../assets/images/FMGE-des.jpeg';
import { StaticImage } from 'gatsby-plugin-image';

const FMGEDescription: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6 mt-12 w-full h-full text-xl max-md:text-base font-medium leading-8 rounded-3xl bg-neutral-100 text-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <StaticImage
        src='../../assets/images/FMGE-des.jpeg'
        alt='FMGE'
        className='w-[251px] max-md:w-full max-md:h-[200px] rounded max-md:rounded-2xl'
      />
      <div className="flex-1 shrink self-start basis-0 max-md:max-w-full h-full">
        <ul className='list-disc flex flex-col justify-between h-full gap-6 px-6'>
          <li>
            <strong>FMGE</strong> là phương pháp học thông qua thực hành làm việc (Learning-by-doing). Chương trình đào tạo theo xu hướng project-based learning sẽ đưa các capstone project từ Doanh nghiệp vào chương trình để đào tạo kỹ năng chuyên môn cho người học bằng cách huấn luyện làm trên dự án bởi các Mentor.
          </li>
          <li>
            <strong>FMGE</strong> được Onschool nghiên cứu phát triển và ứng dụng trong các chương trình đào tạo kỹ năng chuyên sâu và đào tạo nghề cho người cần chuyển ngành nhanh. FMGE giúp tạo ra những người làm được việc, đáp ứng được nhu cầu thực tiễn của Doanh nghiệp trong thời gian nhanh nhất.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FMGEDescription;