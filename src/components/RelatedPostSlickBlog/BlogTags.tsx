import React, { useEffect, useState } from 'react';
import BlogTag from './BlogTag';

export const tags: string[] = [
    "Tất cả",
    "Tin tức Edtech",
    "Tin Onschool",
    "Tin Sản phẩm",
];
interface BlogTagsProps {
    category: string;
    onCategoryChange: (category: string) => void;
}

const BlogTags: React.FC<BlogTagsProps> = ({ category, onCategoryChange }) => {   
  const [activeCategory,setActiveCategory] = useState("") 
    useEffect(()=>{
      if (category==="") {
        setActiveCategory("Tất cả")
      } else {
        setActiveCategory(category)
      }
    },[category])
    return (
      <div className="flex flex-wrap gap-2">
        {/* <div onClick={() => onCategoryChange("")}>
          <BlogTag active={!category}>Tin nổi bật</BlogTag>
        </div> */}
        {tags.map((tag, index) => (
          <div className='cursor-pointer' onClick={() => onCategoryChange(tag)} key={index}>
            <BlogTag active={activeCategory === tag} key={index}>{tag}</BlogTag>
          </div>
        ))}
      </div>
    );
};

export default BlogTags;