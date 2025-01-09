import React from 'react';

interface MethodButtonProps {
  imageUrl: string;
  altText: string;
  isActive: boolean;
  link: string
}

const MethodButton: React.FC<MethodButtonProps> = ({ imageUrl, altText, isActive, link }) => {
  const baseClasses = "flex flex-col justify-center items-center  px-14 py-5 my-auto min-w-[240px] rounded-[48px] max-md:px-5";
  const activeClasses = "bg-blue-600 shadow-lg max-md:min-w-fit max-md:px-4 max-md:py-2 max-md:justify-center";
  const inactiveClasses = "bg-neutral-100 max-md:hidden";

  const scrollTo = () => {
    const formElement = document.getElementById(link);
    if (formElement) {
      const elementPosition = formElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + -180;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  

  return (
    <div onClick={scrollTo} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      <img 
        loading="lazy" 
        src={imageUrl} 
        alt={altText}
        className="object-contain w-full aspect-[3.32] max-md:h-[32px]" 
      />
    </div>
  );
};

export default MethodButton;