import React from 'react';

interface TableOfContentsProps {
  items: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  return (
    <aside className="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-3xl min-w-[240px] w-[360px] max-md:px-5">
      <h2 className="max-w-full text-2xl font-bold leading-8 w-[196px]">Nội dung bài viết</h2>
      <nav className="flex flex-col mt-4 w-full text-base leading-6">
        {items.map((item, index) => (
          <a key={index} href={`#section-${index + 1}`} className="mt-2 max-w-full w-[316px]">
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default TableOfContents;