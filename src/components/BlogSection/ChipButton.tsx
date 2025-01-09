import React, { useEffect, useState } from "react";

interface ChipButtonProps {
  category: string;
  label: string;
  className?: string;
  onClick?: (label: string) => void; // Optional click handler that takes the label as an argument
}

const ChipButton: React.FC<ChipButtonProps> = ({
  label,
  category,
  className = "",
  onClick,
}) => {
  const [activeCategory, setActiveCategory] = useState("");
  useEffect(() => {
    if (category === "") {
      setActiveCategory("Tất cả");
    } else {
      setActiveCategory(category);
    }
  }, [category]);
  return (
    <button
      className={`px-2 py-1 bg-[#ECF3FF] rounded-[10px] text-slate-600 transition-all ${
        activeCategory === label ? "bg-[#cee0ff]" : ""
      } ${className}`}
      onClick={() => onClick && onClick(label)} // Call onClick with the label if provided
    >
      {label}
    </button>
  );
};

export default ChipButton;
