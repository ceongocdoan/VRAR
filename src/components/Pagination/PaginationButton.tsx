import React from 'react';

import ArrowLeftIcon from '../../assets/icons/chevron-left.svg'
import ArrowRightIcon from '../../assets/icons/chevron-right.svg'
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface PaginationButtonProps {
  paginationProps: PaginationProps;
  type: 'next' | 'prev';
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ paginationProps, type }) => {
  const { currentPage, totalPages, onPageChange } = paginationProps;

  const isActive = type === 'prev' ? currentPage > 1 : currentPage < totalPages;

  const handleClick = () => {
    if (isActive) {
      onPageChange(type === 'prev' ? currentPage - 1 : currentPage + 1);
    }
  };

  const getButtonText = () => {
    switch (type) {
      case 'next':
        return <img src={ArrowRightIcon} alt="Next" className="shrink-0 size-10" />;
      case 'prev':
        return <img src={ArrowLeftIcon} alt="Prev" className="shrink-0 size-10"/>;
    }
  };

  return (
    <button
      className="shrink-0 flex justify-center items-center size-[60px] p-2.5 rounded-full bg-[#2A33D8] disabled:bg-[#9CBBFF]"
      onClick={handleClick}
      disabled={!isActive}
    >
      {getButtonText()}
    </button>
  );
};

export default PaginationButton;
