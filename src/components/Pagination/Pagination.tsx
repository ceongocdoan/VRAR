import React from 'react';
import PaginationButton from './PaginationButton';
import PaginationPages from './PaginationPages';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center w-full">
        <PaginationButton type='prev' paginationProps={{ currentPage, totalPages, onPageChange }} />
        <PaginationPages currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} /> 
        <PaginationButton type='next' paginationProps={{ currentPage, totalPages, onPageChange }} />
    </div>
  )
}

export default Pagination;