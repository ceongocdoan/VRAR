import React from "react";
import { ContactInfo } from "./ContactInfo";
import { SocialIcon } from "./SocialIcon";
import YouTubeIcon from "../../assets/images/SocialLinks/YouTubeNegative.svg";
import FacebookIcon from "../../assets/images/SocialLinks/FacebookNegative.svg";
import LinkedInIcon from "../../assets/images/SocialLinks/LinkedInNegative.svg";
import TiktokIcon from "../../assets/images/SocialLinks/TikTokNegative.svg";

const socialIcons = [
  {
    src: YouTubeIcon,
    alt: "Social media icon 1",
    link: "https://www.youtube.com/@Onschool2020",
  },
  {
    src: FacebookIcon,
    alt: "Social media icon 2",
    link: "https://www.facebook.com/Onschool.Edtech.Group",
  },
  {
    src: LinkedInIcon,
    alt: "Social media icon 3",
    link: "https://www.linkedin.com/company/onschool-edtech-group/",
  },
  {
    src: TiktokIcon,
    alt: "Social media icon 4",
    link: "https://www.tiktok.com/@loa_nha_onser",
  },
];

interface SuccessPageProps {
  title: string;
  description: string;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({
  title,
  description,
}) => {
  return (
    <main className="flex flex-col  items-center p-32 bg-[#F4F8FF] max-md:px-5 max-md:py-24">
      <section className="flex pt-32 flex-col max-w-full w-[874px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="self-center"
        >
          <path
            d="M18 24L22 28L31 19M35.8024 9.99701C36.2142 10.9931 37.0047 11.7848 38.0001 12.1981L41.4905 13.644C42.4866 14.0566 43.278 14.848 43.6906 15.8441C44.1032 16.8402 44.1032 17.9595 43.6906 18.9556L42.2458 22.4436C41.8331 23.4402 41.8325 24.5606 42.2471 25.5566L43.6894 29.0436C43.8939 29.537 43.9992 30.0658 43.9993 30.5999C43.9994 31.134 43.8942 31.6629 43.6899 32.1563C43.4855 32.6497 43.1859 33.0981 42.8082 33.4757C42.4305 33.8533 41.982 34.1527 41.4886 34.357L38.0007 35.8017C37.0047 36.2136 36.213 37.0041 35.7997 37.9995L34.3539 41.49C33.9413 42.4862 33.1499 43.2776 32.1538 43.6902C31.1577 44.1028 30.0385 44.1028 29.0424 43.6902L25.5546 42.2454C24.5584 41.8338 23.4397 41.8347 22.4442 42.2478L18.9538 43.6915C17.9582 44.1032 16.84 44.1028 15.8447 43.6905C14.8495 43.2783 14.0585 42.4878 13.6456 41.4927L12.1994 38.0012C11.7876 37.0051 10.9971 36.2134 10.0017 35.8001L6.51133 34.3542C5.51567 33.9418 4.72451 33.1509 4.31176 32.1553C3.89902 31.1598 3.89846 30.0411 4.31021 29.0451L5.75493 25.5571C6.16651 24.5609 6.16567 23.4421 5.75259 22.4466L4.30994 18.9536C4.10541 18.4602 4.00009 17.9314 4 17.3973C3.99991 16.8632 4.10507 16.3343 4.30945 15.8409C4.51383 15.3474 4.81343 14.8991 5.19114 14.5215C5.56884 14.1439 6.01725 13.8444 6.51073 13.6402L9.99859 12.1954C10.9937 11.7839 11.785 10.9944 12.1986 10.0001L13.6444 6.50962C14.057 5.51349 14.8484 4.72207 15.8444 4.30946C16.8405 3.89685 17.9597 3.89685 18.9558 4.30946L22.4437 5.75423C23.4398 6.16583 24.5586 6.16498 25.5541 5.75189L29.0459 4.3117C30.0419 3.89932 31.1609 3.8994 32.1568 4.31193C33.1527 4.72446 33.9439 5.51566 34.3566 6.51153L35.8028 10.0031L35.8024 9.99701Z"
            stroke="#FAA41B"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="self-center mt-6 text-4xl font-bold md:tracking-[-0.72px] leading-11 text-center text-[#4460FF] max-md:max-w-full max-md:text-2xl">
          {title}
        </h1>
        <p className="mt-6 md:text-xl font-medium md:leading-8 text-[#3D3D3D] max-md:max-w-full">
          <ul className="pl-6 list-disc">
            <li>{description}</li>
            <li>Cần hỗ trợ nhanh vui lòng liên hệ qua:</li>
          </ul>
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-6 w-full max-md:max-w-full">
          <ContactInfo label="Hotline" value="0769 899 899" />
          <ContactInfo label="Email" value="info@onschool.edu.vn" />
        </div>
      </section>

      <section className="flex flex-col items-center mt-12 max-w-full w-[544px] max-md:mt-10">
        <h2 className="text-xl font-medium leading-8 text-center text-[#3D3D3D] max-md:max-w-full">
          Theo dõi thông tin mới nhất từ{" "}
          <span className="text-[#4460FF]">Onschool</span>
        </h2>
        <div className="flex gap-5 items-center mt-6">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </div>
      </section>
    </main>
  );
};
