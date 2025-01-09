import React from 'react';

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col max-md:place-self-start w-fit">
      <h3 className="text-sm font-bold leading-5">{title}</h3>
      <p className={`mt-3 text-2xl leading-8 ${title==="Hạn nộp hồ sơ"&& "whitespace-nowrap"}`}>{value}</p>
    </div>
  );
};

export default InfoCard;