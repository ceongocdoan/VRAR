import React from 'react';

type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text' }) => (
  <div className="flex flex-col w-full max-md:max-w-full">
    <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="gap-2.5 self-start pl-5 text-lg font-semibold text-[#344054]">
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase().replace(/\s/g, '-')}
      placeholder={placeholder}
      className="flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base rounded-xl border border-solid border-[#D0D5DD] text-[#344054] max-md:max-w-full placeholder:text-[#D0D5DD]"
      aria-label={label}
    />
  </div>
);

export default InputField;