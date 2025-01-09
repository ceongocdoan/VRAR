import { Link } from 'gatsby';
import React from 'react';
import { navigate } from "gatsby";

interface CategoryLabelProps {
  category: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ category }) => {
  const handleCategoryChange = (newCategory: string) => {
    navigate(`/blog/?category=${newCategory}`);
  };
  return (
    <div onClick={()=>handleCategoryChange(category)} className="self-start px-2 py-1 text-base leading-6 whitespace-nowrap cursor-pointer bg-[#ECF3FF] rounded-[10px] text-[#475467]">
      {category}
    </div>
  );
};

export default CategoryLabel;