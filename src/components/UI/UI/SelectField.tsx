import React, { useRef, useState } from 'react';
import arrowDown from '../../assets/icons/UI/SelectField/ArrowDown.svg';

type SelectFieldProps = {
  label: string;
  placeholder: string;
  options: { value: string; text: string }[];
};

const SelectField: React.FC<SelectFieldProps> = ({ label, placeholder, options }) => {
  const [expanded, setExpanded] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setExpanded(!expanded);

    if (selectRef.current) {
      const handleOptionClick = (event: MouseEvent) => {
        if (selectRef.current && event.target instanceof HTMLElement) {
          const optionElement = event.target.closest('[data-value]');
          if (optionElement instanceof HTMLElement && optionElement.closest('.group') === selectRef.current) {
            const value = optionElement.getAttribute('data-value') || '';
            const text = optionElement.textContent || '';
            
            const select = selectRef.current.previousElementSibling as HTMLSelectElement;
            select.value = value;
            
            const placeholder = selectRef.current.querySelector('div:first-child');
            if (placeholder) {
              placeholder.textContent = text;
            }
            
            selectRef.current.setAttribute('aria-selected', 'true');
          }
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && (!selectRef.current.contains(event.target as Node))) {
          setExpanded(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('click', handleOptionClick);
      
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('click', handleOptionClick);
      };
    }
  }

  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="gap-2.5 self-start pl-5 text-lg font-semibold text-[#344054]">
        {label}
      </label>
      <select
        id={label.toLowerCase().replace(/\s/g, '-')}
        className="hidden"
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
      <div ref={selectRef} className="relative flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base rounded-xl border border-solid border-[#D0D5DD] select-none max-md:max-w-full group" aria-selected="false" aria-expanded={expanded} onClick={onClick}>
        <div className="grow text-base font-normal text-[#D0D5DD] group-aria-selected:text-[#344054]">{placeholder}</div>
        <div className="shrink-0 flex items-center justify-center size-6">
          <img src={arrowDown} alt="arrow-down" className="w-[15.5px] group-aria-expanded:rotate-180" />
        </div>
        <div className="absolute hidden top-full left-0 translate-y-2.5 w-[calc(100%+2px)] h-fit p-2 rounded-2xl border border-solid border-[#D0D5DD] bg-white group-aria-expanded:block z-50 -ml-px">
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2.5" data-value={option.value}>
              <div className="w-full p-2.5 rounded-lg text-[#344054] hover:bg-[#E0F0FE] hover:text-[#0072BC] transition-colors">
                {option.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default SelectField;