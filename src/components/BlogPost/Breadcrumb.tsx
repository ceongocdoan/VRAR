import { Link } from 'gatsby';
import React from 'react';

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex gap-1.5 items-center self-start max-w-full truncate" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          {index > 0 && (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
              <path d="M4.70312 9.88916L8.7772 5.81509L4.70312 1.74101" stroke="#667085" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          <Link to={`${item==='Home'?"/":'/blog'}`} className={`self-stretch my-auto text-sm font-medium leading-[130%] text-[#475467] ${(index === items.length - 1) && 'truncate pointer-events-none'}`}>
            {item}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;