import React from 'react';

interface ContactItemProps {
  label: string;
  value: string;
}

export const ContactInfo: React.FC<ContactItemProps> = ({ label, value }) => (
  <div className="flex gap-2 justify-center items-center self-stretch my-auto">
    <p className="self-stretch my-auto text-base font-medium leading-6 text-[#3D3D3D]">
      {label}
    </p>
    <span className="gap-2.5 self-stretch px-3 py-1 my-auto text-sm font-semibold leading-5 bg-[#4460FF] rounded-2xl text-zinc-50">
      {value}
    </span>
  </div>
);