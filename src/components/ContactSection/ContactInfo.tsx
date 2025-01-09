import { Link } from "gatsby";
import React from "react";

interface ContactInfoData {
  title: string;
  location: string;
  address: string;
  url: string;
}

interface ContactInfoProps {
  phone: string;
  email: string;
  contactInfoData: ContactInfoData[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  phone,
  email,
  contactInfoData,
}) => {
  return (
    <div className="flex flex-col pr-6 mt-12 max-md:mt-2 w-full max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-2 items-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center self-stretch px-1 my-auto bg-[#4460FF] rounded-2xl h-[25px] min-h-[25px] w-[25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M6.91476 6.57595C7.4119 7.61139 8.08961 8.58185 8.94788 9.44012C9.80615 10.2984 10.7766 10.9761 11.8121 11.4732C11.9011 11.516 11.9456 11.5374 12.002 11.5538C12.2023 11.6122 12.4481 11.5703 12.6177 11.4488C12.6655 11.4146 12.7063 11.3738 12.7879 11.2922C13.0377 11.0424 13.1625 10.9176 13.2881 10.836C13.7616 10.5281 14.372 10.5281 14.8455 10.836C14.971 10.9176 15.0959 11.0424 15.3456 11.2922L15.4848 11.4314C15.8644 11.811 16.0542 12.0008 16.1573 12.2046C16.3624 12.61 16.3624 13.0888 16.1573 13.4942C16.0542 13.698 15.8644 13.8878 15.4848 14.2674L15.3722 14.38C14.9939 14.7583 14.8048 14.9475 14.5476 15.0919C14.2622 15.2522 13.819 15.3675 13.4917 15.3665C13.1968 15.3656 12.9952 15.3084 12.592 15.194C10.4253 14.579 8.38074 13.4187 6.67504 11.713C4.96934 10.0073 3.809 7.96272 3.19402 5.79601C3.07959 5.39283 3.02237 5.19125 3.02149 4.89628C3.02052 4.56898 3.13578 4.12577 3.29608 3.84041C3.44054 3.58325 3.62969 3.3941 4.00799 3.01579L4.12059 2.9032C4.50019 2.5236 4.68999 2.3338 4.89383 2.23069C5.29923 2.02564 5.778 2.02564 6.1834 2.23069C6.38724 2.33379 6.57704 2.5236 6.95664 2.9032L7.09583 3.04239C7.34555 3.29211 7.47041 3.41697 7.55205 3.54252C7.8599 4.01602 7.8599 4.62643 7.55205 5.09993C7.47041 5.22548 7.34555 5.35034 7.09583 5.60006C7.01418 5.68171 6.97336 5.72254 6.93919 5.77026C6.81775 5.93985 6.77582 6.18575 6.83419 6.386C6.85062 6.44235 6.872 6.48689 6.91476 6.57595Z"
              stroke="white"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="self-stretch my-auto text-lg leading-7 text-slate-600">
          {phone}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-start mt-3 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-1 bg-[#4460FF] rounded-2xl h-[25px] min-h-[25px] w-[25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
          >
            <path
              d="M1.35693 3.75223L7.18902 7.83469C7.66128 8.16528 7.89742 8.33057 8.15427 8.39459C8.38114 8.45115 8.61844 8.45115 8.84532 8.39459C9.10216 8.33057 9.3383 8.16528 9.81056 7.83469L15.6426 3.75223M4.78551 13.0379H12.2141C13.4142 13.0379 14.0142 13.0379 14.4726 12.8044C14.8758 12.5989 15.2036 12.2711 15.4091 11.8679C15.6426 11.4095 15.6426 10.8095 15.6426 9.60938V5.03795C15.6426 3.83783 15.6426 3.23778 15.4091 2.7794C15.2036 2.37619 14.8758 2.04838 14.4726 1.84293C14.0142 1.60938 13.4142 1.60938 12.2141 1.60938H4.78551C3.58539 1.60938 2.98534 1.60938 2.52695 1.84293C2.12375 2.04838 1.79593 2.37619 1.59049 2.7794C1.35693 3.23778 1.35693 3.83783 1.35693 5.03795V9.60938C1.35693 10.8095 1.35693 11.4095 1.59049 11.8679C1.79593 12.2711 2.12375 12.5989 2.52695 12.8044C2.98534 13.0379 3.58539 13.0379 4.78551 13.0379Z"
              stroke="white"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-lg leading-7 text-slate-600">{email}</div>
      </div>
      {/* {contactInfoData.map((info, index) => (
        <div
          key={index}
          className="flex flex-col pr-6 mt-6 w-full max-md:pr-5 max-md:max-w-full"
        >
          <div className="flex flex-wrap gap-2 items-start w-full text-2xl font-bold leading-8 max-md:max-w-full max-md:flex-col">
            <div className="text-slate-700">{info.title}</div>
            <div className="gap-2.5 self-stretch px-1.5 text-white bg-[#4460FF] w-fit">
              {info.location}
            </div>
          </div>
          <div className="mt-4 text-base leading-6 text-slate-600 max-md:max-w-full">
            {info.address}
          </div>
          <div className="flex flex-wrap gap-1.5 items-center mt-4 w-full rounded-3xl max-md:max-w-full">
            <div className="flex overflow-hidden gap-2.5 items-center self-stretch p-2 my-auto bg-[#4460FF] rounded-2xl h-[31px] w-[31px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M5.8184 1.09644L13.0911 17.4601M1.27295 13.8237L9.45477 9.27825M5.63659 17.4601H13.2729C14.8004 17.4601 15.5641 17.4601 16.1475 17.1628C16.6606 16.9013 17.0779 16.4841 17.3393 15.971C17.6366 15.3876 17.6366 14.6239 17.6366 13.0964V5.46007C17.6366 3.93266 17.6366 3.16895 17.3393 2.58555C17.0779 2.07238 16.6606 1.65516 16.1475 1.39369C15.5641 1.09644 14.8004 1.09644 13.2729 1.09644H5.63659C4.10917 1.09644 3.34546 1.09644 2.76207 1.39369C2.2489 1.65516 1.83168 2.07238 1.5702 2.58555C1.27295 3.16895 1.27295 3.93266 1.27295 5.46007V13.0964C1.27295 14.6239 1.27295 15.3876 1.5702 15.971C1.83168 16.4841 2.2489 16.9013 2.76207 17.1628C3.34546 17.4601 4.10917 17.4601 5.63659 17.4601Z"
                  stroke="white"
                  strokeWidth="1.81818"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link to={info.url} className="gap-2.5 self-stretch pr-3.5 pl-1.5 my-auto text-lg font-medium text-[#475467]">
              Xem bản đồ
            </Link>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ContactInfo;
