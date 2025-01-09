import React from "react";

interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="flex flex-col justify-center self-start mt-6">
      <div className="flex gap-3 items-center w-fit self-start p-1 bg-blue-800 rounded-3xl">
        <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-10 h-10 rounded-3xl bg-neutral-50 min-h-[40px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
              fill="white"
            />
            <path
              d="M16.2285 16.7222C16.9535 18.2323 17.9418 19.6475 19.1934 20.8992C20.4451 22.1508 21.8603 23.1391 23.3704 23.8641C23.5002 23.9265 23.5652 23.9577 23.6474 23.9816C23.9394 24.0667 24.298 24.0056 24.5453 23.8285C24.6149 23.7787 24.6745 23.7191 24.7935 23.6001C25.1577 23.2359 25.3398 23.0538 25.5229 22.9347C26.2134 22.4858 27.1036 22.4858 27.7941 22.9347C27.9772 23.0538 28.1593 23.2359 28.5235 23.6001L28.7265 23.803C29.28 24.3566 29.5568 24.6334 29.7072 24.9307C30.0062 25.5219 30.0062 26.2201 29.7072 26.8113C29.5568 27.1086 29.28 27.3854 28.7265 27.939L28.5623 28.1032C28.0106 28.6549 27.7347 28.9307 27.3597 29.1414C26.9435 29.3751 26.2972 29.5432 25.8199 29.5418C25.3897 29.5405 25.0957 29.4571 24.5078 29.2902C21.348 28.3934 18.3664 26.7012 15.8789 24.2137C13.3914 21.7262 11.6992 18.7446 10.8024 15.5848C10.6355 14.9969 10.5521 14.7029 10.5508 14.2727C10.5494 13.7954 10.7175 13.1491 10.9512 12.7329C11.1619 12.3579 11.4377 12.082 11.9894 11.5303L12.1536 11.3661C12.7072 10.8126 12.984 10.5358 13.2813 10.3854C13.8725 10.0864 14.5707 10.0864 15.1619 10.3854C15.4592 10.5358 15.736 10.8126 16.2896 11.3661L16.4925 11.5691C16.8567 11.9333 17.0388 12.1154 17.1578 12.2985C17.6068 12.989 17.6068 13.8792 17.1578 14.5697C17.0388 14.7528 16.8567 14.9349 16.4925 15.2991C16.3735 15.4181 16.3139 15.4777 16.2641 15.5473C16.087 15.7946 16.0259 16.1532 16.111 16.4452C16.1349 16.5274 16.1661 16.5924 16.2285 16.7222Z"
              stroke="#4460FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="gap-2.5 self-stretch pr-3 my-auto text-base font-medium text-center text-neutral-50">
          {phone}
        </div>
      </div>
      <div className="flex gap-3 items-center p-1 mt-3 w-fit bg-blue-800 rounded-3xl">
        <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-1.5 my-auto w-10 h-10 rounded-3xl bg-neutral-50 min-h-[40px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="white" />
            <path
              d="M10 15L18.1649 20.7154C18.8261 21.1783 19.1567 21.4097 19.5163 21.4993C19.8339 21.5785 20.1661 21.5785 20.4837 21.4993C20.8433 21.4097 21.1739 21.1783 21.8351 20.7154L30 15M14.8 28H25.2C26.8802 28 27.7202 28 28.362 27.673C28.9265 27.3854 29.3854 26.9265 29.673 26.362C30 25.7202 30 24.8802 30 23.2V16.8C30 15.1198 30 14.2798 29.673 13.638C29.3854 13.0735 28.9265 12.6146 28.362 12.327C27.7202 12 26.8802 12 25.2 12H14.8C13.1198 12 12.2798 12 11.638 12.327C11.0735 12.6146 10.6146 13.0735 10.327 13.638C10 14.2798 10 15.1198 10 16.8V23.2C10 24.8802 10 25.7202 10.327 26.362C10.6146 26.9265 11.0735 27.3854 11.638 27.673C12.2798 28 13.1198 28 14.8 28Z"
              stroke="#4460FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="gap-2.5 self-stretch pr-3 my-auto text-base font-medium text-center whitespace-nowrap text-neutral-50">
          {email}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
