import { Link } from 'gatsby';
import React from 'react';

interface OfficeLocationProps {
  name: string;
  address: string;
  title:string;
  mapUrl: string;
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({ name, address,title,mapUrl }) => {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[255px] max-md:w-full">
      <div className="flex flex-col w-full text-sm leading-5">
        <div className="w-full text-base font-normal max-md:text-[#98A2B3]">{title}</div>
        <div className="mt-2 w-full text-2xl font-bold leading-8">{name}</div>
        <div className="mt-2 w-full border border-solid border-white border-opacity-30 min-h-[1px]" />
        <div className="mt-2 w-full">{address}</div>
      </div>
      <Link to={mapUrl} target='_blank'  className="self-start mt-4 text-xl font-medium leading-8 max-md:text-[#98A2B3]">Xem bản đồ</Link>
    </div>
  );
};

export default OfficeLocation;