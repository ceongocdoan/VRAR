import React, { useState } from "react";

import FacebookIcon from "../../assets/images/SocialLinks/FacebookNegative.svg";
import XIcon from "../../assets/images/SocialLinks/XNegative.svg";
import LinkedInIcon from "../../assets/images/SocialLinks/LinkedInNegative.svg";
import ThreadsIcon from "../../assets/images/SocialLinks/ThreadsNegative.svg";
import WhatsappIcon from "../../assets/images/SocialLinks/WhatsAppNegative.svg";


// import CopyIcon from '../../assets/icons/Socials/Copy.svg';

interface ShareSocial {
  type: string;
  image: string;
}

const socials: ShareSocial[] = [
  { image: FacebookIcon, type: "facebook" },
  { image: WhatsappIcon, type: "whatsapp" },
  { image: XIcon, type: "x" },
  { image: LinkedInIcon, type: "linkedin" },
  { image: ThreadsIcon, type: "threads" },
  // { image: CopyIcon, type: "copy" }
];

interface ShareSectionProps {
  title: string;
}

const ShareSection: React.FC<ShareSectionProps> = ({ title }) => {
  const [tooltip, setTooltip] = useState("");

  const onClickShare = (type: string) => {
    const postURL = `${window.location.origin}${window.location.pathname}`;
    let shareUrl = "";

    switch (type) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          postURL
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          postURL
        )}}`;
        break;
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          postURL
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "threads":
        shareUrl = `https://www.threads.net/share?url=${encodeURIComponent(
          postURL
        )}`;
        break;
        case "whatsapp":
          shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
            postURL
          )}`;
          break;
      // case 'copy':
      //   navigator.clipboard.writeText(postURL).then(() => {
      //     setTooltip('Đã sao chép link');
      //     setTimeout(() => setTooltip(''), 2000); // ẩn tooltip sau 2 giây
      //   });
      //   return; // không cần mở cửa sổ mới
      default:
        break;
    }

    if (shareUrl) window.open(shareUrl, "_blank");
  };

  return (
    <section className="flex flex-col justify-center items-center self-center mt-12 max-md:mt-10">
      <p className="text-base font-medium tracking-normal leading-7 text-neutral-800">
        Đừng quên chia sẻ bài viết này!
      </p>
      <div className="flex gap-6 justify-center items-center mt-3">
        {socials.map((social, index) => (
          <div
            className="relative size-[36px] cursor-pointer group"
            onClick={() => onClickShare(social.type)}
            key={index}
          >
            <img
              loading="lazy"
              src={social.image}
              alt={social.type}
              className="object-contain shrink-0 self-stretch my-auto w-[36px] aspect-square"
            />
            {social.type === "copy" && (
              <div
                className={`absolute left-0 bottom-1/2 translate-x-[26px] translate-y-1/2 bg-[#0C111D] text-white text-xs font-semibold text-nowrap rounded-lg px-3 py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none`}
              >
                {tooltip || "Sao chép link"}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShareSection;
