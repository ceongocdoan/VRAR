import React from 'react';

interface InfoBoxProps {
  content: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ content }) => {
  return (
    <div className="flex-1 shrink gap-2.5 self-stretch p-6 bg-gray-50 rounded-3xl min-w-[240px] max-md:px-5 max-md:max-w-full">
      {content}
    </div>
  );
};

export default InfoBox;