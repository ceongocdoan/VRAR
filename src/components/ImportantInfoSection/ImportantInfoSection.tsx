import React from "react";
import InfoCard from "./InfoCard";

interface InfoItem {
  title: string;
  value: string;
}

interface Props {
    experience: string,
    type: string,
    expiredDate: string,
    location: string[],
}

const ImportantInfoSection: React.FC<Props> = ({experience,type,expiredDate,location}) => {
   const locationString= location.join(", ")
  const infoItems: InfoItem[] = [
    { title: "Đăng nhập hệ thống", value: expiredDate },
    { title: "Quét", value: locationString },
  ];

  return (
    <div className="w-screen px-32 max-md:px-0 bg-indigo-700">
      <section className="max-w-[1184px] mx-auto flex gap-10 justify-center items-start py-16 text-white  max-md:p-6">
        <div className="grid grid-cols-2 max-md:grid max-md:grid-cols-2 gap-10 w-full min-w-[240px] max-md:max-w-full">
          {infoItems.map((item, index) => (
            <InfoCard key={index} title={item.title} value={item.value} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImportantInfoSection;
