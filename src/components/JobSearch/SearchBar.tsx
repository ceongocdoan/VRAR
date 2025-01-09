import React, { useState } from 'react';
import SearchButton from './SearchButton';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Cập nhật từ khóa tìm kiếm vào state
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Gửi từ khóa tìm kiếm lên component cha khi nhấn nút tìm kiếm
  };

  return (
    <div className="flex flex-1 shrink gap-10 max-md:gap-0 justify-between items-center self-stretch px-3 max-md:px-3 py-3.5 my-auto text-base basis-0 bg-neutral-100 min-h-[60px] w-[667px] max-md:w-full rounded-[48px]">
      <label htmlFor="searchInput" className="sr-only">Search by keyword</label>
      <input
        id="searchInput"
        type="text"
        value={searchTerm} // Liên kết giá trị input với state
        onChange={handleInputChange} // Cập nhật từ khóa khi người dùng nhập
        className="gap-6 self-stretch pl-6 my-auto font-medium leading-none min-w-[100px] text-zinc-500 max-w-[421px] bg-transparent border-none focus:outline-none"
        placeholder="Search by keyword..."
      />
      <SearchButton onClick={handleSearchClick} /> {/* Thực hiện tìm kiếm khi nhấn nút */}
    </div>
  );
};

export default SearchBar;
