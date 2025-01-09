import React from 'react';


interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className="flex justify-center items-center self-stretch p-1 my-auto font-semibold whitespace-nowrap bg-indigo-500 rounded-[32px] text-neutral-50">
      <span className="gap-2.5 self-stretch px-3 py-1 my-auto">
        Search
      </span>
    </button>
  );
};

export default SearchButton;