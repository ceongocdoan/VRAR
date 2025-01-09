import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Facabook from "../assets/images/SocialLinks/Facebook.svg";
import LinkedIn from "../assets/images/SocialLinks/LinkedIn.svg";
import TikTok from "../assets/images/SocialLinks/TikTok.svg";
import Youtube from "../assets/images/SocialLinks/YouTube.svg";
// Import CSS của slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      {children}
      <Footer
        companyName="Đại học Bách Khoa Hà Nội"
        phone="0396025011"
        email="ngoc.da212330@sis.hust.edu.vn"
        socialLinks={[
        //   { icon: Youtube, link: "https://www.youtube.com/@Onschool2020" },
        //   {
        //     icon: Facabook,
        //     link: "https://www.facebook.com/Onschool.Edtech.Group",
        //   },
        //   {
        //     icon: LinkedIn,
        //     link: "https://www.linkedin.com/company/onschool-edtech-group/",
        //   },
        //   { icon: TikTok, link: "https://www.tiktok.com/@loa_nha_onser" },
        ]}
        offices={[
          {
            title: "Địa chỉ",
            name: "Lớp VR AR",
            
          },
          ,
        ]}
      />
    </div>
  );
};

export default Layout;
