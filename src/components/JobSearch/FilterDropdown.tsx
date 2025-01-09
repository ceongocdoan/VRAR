import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "../../assets/icons/ChevronDown.svg";

interface FilterDropdownProps {
  label: string;
  options: string[]; // Danh sách các tùy chọn
  onChange: (selected: string) => void; // Hàm callback khi chọn một giá trị
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>("Tất cả"); // Mặc định là "Tất cả"
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option === "Tất cả" ? "" : option); // Trả về "" nếu chọn "Tất cả"
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex gap-8 justify-center items-center py-4 pr-4 pl-8 h-full whitespace-nowrap bg-neutral-100 rounded-[48px] max-md:pl-5 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="self-stretch my-auto rounded-none">{label}</span>
        <img
          loading="lazy"
          src={ChevronDown}
          alt=""
          className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown modal */}
      {isOpen && (
        <div className="absolute right-0 max-md:left-0 top-full mt-2 z-50 w-max p-4 bg-white border border-[#DDE9FF] shadow-xl rounded-[24px] overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {/* Thêm "Tất cả" vào đầu danh sách */}
            {["Tất cả", ...options].map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 hover:bg-neutral-100 rounded-full cursor-pointer ${
                  selectedOption === option
                    ? "bg-[#DDE9FF] text-[#2A33D8] hover:!bg-[#DDE9FF] font-bold"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
