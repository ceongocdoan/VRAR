// src/components/NavItemsMobile.tsx
import React, { useState } from "react";
import Button from "../UI/Button";
import ChevronDown from "../../assets/icons/ChevronDown.svg";
import { Link } from "gatsby";

type SubnavItem = {
  title: string;
  link: string;
};

type NavItem = {
  label: string;
  link: string;
};

const items: NavItem[] = [
  {
    label: "Edtech",
    link: "/edtech",
  },
  {
    label: "Product",
    link: "/product",
  },
  {
    label: "Career",
    link: "/career",
  },
];

interface NavItemsMobileProps {
  scrollToForm: () => void;
  handleToogleNav: () => void;
}

const NavItemsMobile: React.FC<NavItemsMobileProps> = ({
  scrollToForm,
  handleToogleNav,
}) => {
  const checkActiveTab = (link: string) => {
    return window.location.pathname.includes(link);
  }

  return (
    <>
      <ul className="w-full flex flex-col gap-[10px]  pt-0">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.link} className="flex justify-between group" aria-checked={checkActiveTab(item.link)}>
              <button
                className={`w-full text-left font-semibold text-lg px-6 py-2 rounded-full group-aria-checked:bg-[#4460FF] group-aria-checked:text-white`}
              >
                {item.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full" onClick={handleToogleNav}>
        <Link to="/lien-he" onClick={scrollToForm} className="w-full">
          <Button
            name="Contact"
            size="mobile"
            variant="primary"
            classname="w-full justify-between"
          />
        </Link>
      </div>
    </>
  );
};

export default NavItemsMobile;
