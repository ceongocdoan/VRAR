import React from 'react';

interface UniversityItemProps {
  name: string;
}

const UniversityItem: React.FC<UniversityItemProps> = ({ name }) => (
  <div className="gap-2 px-2 py-1 bg-sky-100 rounded-2xl border border-sky-300 border-solid">
    {name}
  </div>
);

export default UniversityItem;