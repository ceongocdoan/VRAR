import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../library/classes";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  defaltIcon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, defaltIcon = true, ...props }, ref) => {

    const baseClasses = "h-[56px] max-md:h-12 p-1 text-xl leading-[150%] rounded-[32px] font-medium transition-colors duration-200 ease-in-out flex items-center justify-between group disabled:bg-transparent disabled:text-[#98A2B3] disabled:border-[1.5px] disabled:border-[#D0D5DD] disabled:hover:bg-transparent";

    const variantClasses = {
      primary: "text-white bg-[#4460FF] md:hover:bg-[#252FAE] active:bg-[#161950]",
      secondary: "text-[#3644F5] md:hover:text-white active:text-white bg-[#F2F4F7] md:hover:bg-[#3644F5] active:bg-[#252FAE]",
      tertiary: "border border-[#3644F5] active:border-[#2A33D8] active:bg-[#2A33D8] text-[#3644F5] active:text-white",
    };

    const buttonClasses = cn(
      baseClasses,
      variantClasses[variant],
      className
    );

    const iconVariantClass = {
      primary: "bg-white text-[#4460FF]",
      secondary: "bg-[#4460FF] md:group-hover:bg-white group-active:bg-white text-white md:group-hover:text-[#4460FF] group-active:text-[#4460FF]",
      tertiary: "bg-white md:group-hover:bg-[#4460FF] group-active:bg-white md:group-hover:text-white group-active:text-[#4460FF]",
    }

    const DefaultIcon = () => (
        <div
          className={cn("flex justify-center items-center size-12 max-md:size-10 rounded-full transition-colors duration-200 group-disabled:bg-[#D0D5DD] group-disabled:text-white", iconVariantClass[variant])}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
            <path d="M2.23242 12.9998L24.6324 12.9998M24.6324 12.9998L13.4324 1.7998M24.6324 12.9998L13.4324 24.1998" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
    );

    return (
      <button 
        ref={ref} 
        className={buttonClasses}
        {...props}
      >
        {defaltIcon && <div className="my-auto px-4">{children}</div>}
        {defaltIcon && <DefaultIcon />}
        {!defaltIcon && children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;