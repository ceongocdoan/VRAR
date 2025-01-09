import React from "react";

interface BlogTagProps {
    children: React.ReactNode;
    active?: boolean
}

const BlogTag: React.FC<BlogTagProps> = ({ children, active = false }) => {
    return <span className={`self-start px-2 py-1 text-base font-normal text-[#475467] leading-6 bg-[#ECF3FF] transition-all  rounded-[10px] ${active?"bg-[#cbdeff]":""}`} aria-checked={active}>{children}</span>
}

export default BlogTag;
