import React from "react";
import SocialIcons from "./SocialIcons";
import ContactInfo from "./ContactInfo";
import OfficeLocation from "./OfficeLocation";
import UniMono from "../../assets/images/OnschoolEcosystems/UniMono.svg";
import SkillMono from "../../assets/images/OnschoolEcosystems/SkillMono.svg";
import BootcampMono from "../../assets/images/OnschoolEcosystems/BootcampMono.svg";
import Onk12Mono from "../../assets/images/OnschoolEcosystems/Onk12Mono.svg";
import LogoMono from "../../assets/images/LogoMono.svg";
import { Link } from "gatsby";

interface FooterProps {
  companyName: string;
  phone: string;
  email: string;
  socialLinks: {
    icon: string;
    link: string;
  }[];
  offices: {
    name: string;
    address: string;
    title: string;
    mapUrl: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  phone,
  email,
  socialLinks,
  offices,
}) => {
  return (
    <div className="w-screen px-32 py-16 max-md:px-4 max-md:py-6 bg-[#161950]">
      <footer className="max-w-[1184px] mx-auto flex flex-col">
        <div className="flex flex-wrap gap-10 justify-between items-end w-full max-md:max-w-full max-md:flex-col max-md:justify-center max-md:items-center">
          <img
            loading="lazy"
            src={LogoMono}
            alt="Company logo"
            className="object-contain shrink-0 aspect-[1.51] w-[151px]"
          />
          <div className="flex flex-col min-w-[240px] max-md:max-w-full">
            <div className="text-base text-neutral-50 max-md:text-center">
              {" "}
              <span className="max-md:hidden"></span>{" "}
              <p className="md:hidden font-bold">Thực tại ảo, thực tại tăng cường</p>
            </div>
            <div className="flex flex-wrap gap-12 justify-between items-center mt-9 w-full max-md:max-w-full max-md:flex-col max-md:justify-center max-md:gap-6">
              <Link to="/san-pham-uni">
                <img
                  loading="lazy"
                  src={SkillMono}
                  alt="Product 3"
                  className="object-contain max-w-full h-[50px] w-[50px]"
                />
              </Link>
              <div
                className={`border border-solid border-white border-opacity-20 w-[191px] min-h-[0.5px] md:hidden`}
              />
              <Link to="/san-pham-bootcamp">
                <img
                  loading="lazy"
                  src={BootcampMono}
                  alt="Product 2"
                  className="object-contain max-w-full h-[50px]"
                />
              </Link>
              <div
                className={`border border-solid border-white border-opacity-20 w-[191px] min-h-[0.5px] md:hidden`}
              />
              <Link to="/san-pham-skill">
                <img
                  loading="lazy"
                  src={UniMono}
                  alt="Product 1"
                  className="object-contain max-w-full h-[50px]"
                />
              </Link>
              <div
                className={`border border-solid border-white border-opacity-20 w-[191px] min-h-[0.5px] md:hidden`}
              />
              <Link to="/san-pham-onk12">
                <img
                  loading="lazy"
                  src={Onk12Mono}
                  alt="Product 4"
                  className="object-contain max-w-full h-[50px]"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] w-[418px]">
              <div className="border-2 border-blue-200 border-solid min-h-[2px] w-[97px]" />
              <h2 className="mt-6 text-xl whitespace-pre-line font-semibold leading-7 text-neutral-50 max-w-[380px]">
                {companyName}
              </h2>
              <div className="max-md:hidden">
                <ContactInfo phone={phone} email={email} />
                <SocialIcons links={socialLinks} />
              </div>
            </div>
            <div className="flex flex-wrap flex-1 shrink gap-10 max-md:gap-0 justify-between items-center text-white basis-0 min-w-[240px] max-md:max-w-full max-md:mt-6">
              {offices.map((office, index) => (
                <div key={index}>
                  <OfficeLocation
                    name={office.name}
                    address={office.address}
                    title={office.title}
                    mapUrl={office.mapUrl}
                  />
                  {index === 0 && (
                    <div className="w-full border md:hidden border-[#D0D5DD] my-6 border-solid min-h-[1px] max-md:max-w-full" />
                  )}
                </div>
              ))}
            </div>
            <div className="md:hidden mb-[-16px] flex flex-col items-stretch justify-stretch">
                <ContactInfo phone={phone} email={email} />
                <SocialIcons links={socialLinks} />
              </div>
          </div>
          <div className="flex flex-col mt-16 w-full text-sm leading-5 text-center text-neutral-50 max-md:mt-10 max-md:max-w-full">
            <div className="w-full border border-white border-solid min-h-[1px] max-md:max-w-full" />
            <div className="self-center mt-6 max-md:max-w-full">
            
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
