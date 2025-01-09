import React from 'react';

interface FormInputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField: React.FC<FormInputFieldProps> = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <label className="gap-2.5 px-5 w-full text-lg font-semibold leading-7 text-slate-700 max-md:max-w-full">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base leading-6 text-gray-700 rounded-xl border border-gray-300 border-solid max-md:max-w-full"
      />
    </div>
  );
};

export default FormInputField;
