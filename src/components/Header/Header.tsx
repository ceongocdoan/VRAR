import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Button from "../UI/Button";
import NavItemsMobile from "./NavItemsMobile";
import { Link } from "gatsby";

interface HeaderProps {
  bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ bgColor }) => {
  const [toogleNav, setToogleNav] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  const scrollToForm = () => {
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToogleNav = () => {
    setToogleNav(!toogleNav);
  };

  return (
    <div className="w-full">
      {toogleNav && (
        <div
          onClick={handleToogleNav}
          className="fixed top-0 left-0 w-screen h-screen xl:hidden bg-black/70 backdrop-blur z-10 transition-opacity duration-300 ease-in-out opacity-100"
        />
      )}
      <div className="w-full h-[128px] px-32 max-md:px-4 fixed z-10 mx-auto flex justify-center">
        {/* <div className={`w-full h-full max-md:hidden bg-gradient-to-t to-white from-transparent absolute ${isVisible ? "opacity-0" : "opacity-100"}`}></div> */}
        <header
          className={`flex flex-wrap self-end max-lg:hidden max-w-[1184px] w-full h-fit mx-auto gap-10 justify-between items-center p-2.5 backdrop-blur-[10px] bg-opacity-90 rounded-[40px] group hover:bg-white hover:shadow-xl transition-all ${
            bgColor ? bgColor : "bg-zinc-900"
          }  transition-transform duration-300 ease-in-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-[150px]"
        }`}
        >
          <div className="flex flex-wrap gap-9 items-center self-stretch px-2.5 my-auto min-w-[240px] max-md:max-w-full">
            <Logo />
            <NavItems />
          </div>
          <Link to="/lien-he" className="group-hover:hidden">
            <Button
              name="Contact"
              size="desktop"
              contact={true}
              variant="secondary"
            />
          </Link>
          <Link to="/lien-he" className="hidden group-hover:block">
            <Button
              name="Contact"
              size="desktop"
              contact={true}
              variant="primary"
            />
          </Link>
        </header>
        <header
          className={`flex lg:hidden flex-wrap fixed w-[91%] z-10 mx-auto justify-between items-center p-2 mt-3 backdrop-blur-[15px] ${
            bgColor ? bgColor : "bg-zinc-900"
          } hover:bg-white hover:shadow-xl transition-all ease-linear bg-opacity-80 rounded-[40px] group`}
        >
          <div className="flex flex-wrap gap-9 max-xl:gap-1 items-center self-stretch px-2.5 my-auto min-w-fit max-md:max-w-full">
            <Logo />
          </div>
          <div className="group-hover:hidden transition-all">
            <div className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="#3644F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={handleToogleNav}
            className="hidden group-hover:block transition-all"
          >
            <div className="flex items-center justify-center bg-[#3644F5] rounded-full w-[40px] h-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="#F2F4F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {toogleNav && (
            <div className="absolute left-1/2 mt-2 transform -translate-x-1/2 top-full w-full bg-white rounded-[36px] shadow-lg z-20 bg-opacity-75">
              <section className="flex flex-wrap justify-between gap-12 items-start p-9 border border-blue-300 border-solid shadow-xl bg-white bg-opacity-75 rounded-[36px] max-md:p-4">
                <NavItemsMobile
                  handleToogleNav={handleToogleNav}
                  scrollToForm={scrollToForm}
                />
              </section>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
