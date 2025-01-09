import React from "react";
import NavItem from "./NavItem";

const NavItems: React.FC = () => {
  const items = [
    { title: "Lý thuyết", link: "/edtech" },
    { title: "Bài tập", link: "/product" },
    { title: "Mô hình", link: "/career" },
  ];

  return (
    <nav className="flex gap-1.5 items-center self-stretch px-2.5 my-auto text-lg font-medium rounded-full text-white whitespace-nowrap min-w-[240px]">
      {items.map((item, index) => (
        <NavItem key={index} label={item.title} link={item.link} />
      ))}
    </nav>
  );
};

export default NavItems;
