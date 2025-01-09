import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

interface ContactInfoData {
  title: string;
  location: string;
  address: string;
  url: string;
}

const contactInfoData: ContactInfoData[] = [
  {
    title: "Trụ sở chính",
    location: "Hà Nội",
    address:
      "Tầng 2-3, Tòa 17T4, Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Quận Thanh Xuân, Thành phố Hà Nội",
    url: 'https://maps.app.goo.gl/yTA5CndVZiaH6uGF7',
  },
  {
    title: "Văn phòng đại diện",
    location: "Hồ Chí Minh",
    address:
      "Tầng 1-2, Tòa QCoop, Số 150 Nguyễn Xí, Phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    url: 'https://maps.app.goo.gl/P3mn6q6zLPakG5JJ7',
  },
];

const ContactSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F4F8FF]  px-32 py-16 max-md:py-6 max-md:px-4 ">
      <section className="max-w-[1184px] mx-auto flex gap-10 items-center">
        <div className="flex flex-wrap-reverse flex-1 shrink gap-10 max-md:gap-6 items-center self-stretch my-auto w-full basis-0 max-w-[1184px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-end md:mt-12 basis-12 min-w-[240px] max-md:max-w-full">
            <h2 className="text-6xl font-semibold tracking-tighter leading-[72px] text-slate-700 max-md:max-w-full max-md:text-3xl">
              Liên hệ
            </h2>
            <ContactInfo
              phone="0396025019"
              email="ngoc.da212330@sis.hust.edu.vn"
              contactInfoData={contactInfoData}
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
