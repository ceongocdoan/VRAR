import { Link } from "gatsby";
import React from "react";

import LogoImage from '../../assets/images/OnschoolLogo.svg';
import LogoImageWhite from '../../assets/images/OnschoolLogoWhite.svg';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="relative flex flex-col justify-center items-center self-stretch px-4 py-2.5 my-auto w-[191px]">
      <img src={LogoImageWhite} alt="Onschool" />
      <img
        src={LogoImage}
        alt="Onschool"
        className="absolute top-2.5 left-4 w-[159px] opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </Link>
  );
};

export default Logo;
