import { Link } from "gatsby";
import React, { useState } from "react";

interface NavItemProps {
  label: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const careerSubNav = [
    { title: "Mô hình động", link: "/career#van-hoa" },
    { title: "Mô hình tĩnh", link: "/career#onschool-ask" },
    // { title: "Tuyển dụng", link: "/career#tuyen-dung" },
  ];
  const checkActiveTab = () => {
    if (typeof window !== "undefined") {
      if (link === "/product") {
        return (
          window.location.pathname.includes("/san-pham-bootcamp/") ||
          window.location.pathname.includes("/san-pham-onk12/") ||
          window.location.pathname.includes("/san-pham-skill/") ||
          window.location.pathname.includes("/san-pham-uni/") ||
          window.location.pathname.includes(link)
        );
      }
      return window.location.pathname.includes(link);
    }
    return false;
  };
  let subNavItems = null;
  if (link === "/career") {
    subNavItems = careerSubNav;
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        to={link}
        className="gap-2.5 self-stretch px-5 py-2 my-auto border border-transparent hover:border-white group-hover:hover:bg-[#DDE9FF] rounded-full cursor-pointer transition-all group-hover:text-black aria-checked:border-white aria-checked:font-bold group-hover:aria-checked:bg-[#DDE9FF]"
        aria-checked={checkActiveTab()}
      >
        {label}
      </Link>
      <div className="absolute h-[80px]">
        {isHovered && subNavItems && (
          <div className="left-0 mt-4 p-2 min-w-[226px] bg-white shadow-lg rounded-[24px] border border-[#DDE9FF]">
            {subNavItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block px-4 rounded-full py-2 text-slate-700 hover:bg-[#DDE9FF] hover:text-[#2A33D8] hover:font-bold transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
