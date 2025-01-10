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
  <strong>AR/VR Learning</strong> là phương pháp học thông qua công nghệ thực tế ảo và thực tế tăng cường (AR/VR), giúp người học trải nghiệm và thực hành trong môi trường mô phỏng 3D sống động. Chương trình đào tạo sử dụng AR/VR để người học có thể trực tiếp tương tác và khám phá các mô hình, từ đó phát triển kỹ năng chuyên môn một cách hiệu quả và sinh động.
</li>
<li>
  <strong>AR/VR Learning</strong> được nghiên cứu và phát triển bởi Edtech Hust, ứng dụng công nghệ AR/VR trong các chương trình đào tạo kỹ năng chuyên sâu và nghề nghiệp. Phương pháp này giúp người học có thể tự tin thực hành trong môi trường mô phỏng, đáp ứng nhanh chóng nhu cầu chuyển ngành và đào tạo nghề cho người học, đồng thời giúp người học làm việc hiệu quả hơn trong thời gian ngắn nhất.
</li>

        </ul>
      </div>
    </div>
  );
};

export default FMGEDescription;