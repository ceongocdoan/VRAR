import React from "react";

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="self-stretch px-2.5 py-0.5 text-base font-normal rounded bg-neutral-200">
      {skill}
    </div>
  );
};

export default SkillTag;