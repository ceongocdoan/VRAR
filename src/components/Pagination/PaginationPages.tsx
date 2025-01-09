import React, { useState, useEffect } from 'react';

interface PaginationPagesProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationPages: React.FC<PaginationPagesProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const renderPageButton = (pageNumber: number) => (
    <button
      key={pageNumber}
      onClick={() => onPageChange(pageNumber)}
      className={`size-10 rounded-full mx-px hover:bg-[#F0F8FF] ${currentPage === pageNumber ? 'bg-[#F0F8FF]' : ''}`}
    >
      {pageNumber}
    </button>
  );

  const renderPageButtons = () => {
    const buttons = [];

    if (isMobile) {
      // Hiển thị cho mobile
      if (currentPage !== 1) {
        buttons.push(<span key="ellipsis-start" className="inline-block size-10 p-2 mx-px text-center">...</span>);
      }
      buttons.push(renderPageButton(currentPage));
      if (currentPage < totalPages - 1) {
        buttons.push(renderPageButton(currentPage + 1));
        if (currentPage < totalPages - 2) {
          buttons.push(<span key="ellipsis-end" className="inline-block size-10 p-2 mx-px text-center">...</span>);
        }
      }
      if (currentPage < totalPages) {
        buttons.push(renderPageButton(totalPages));
      }
    } else {
      // Hiển thị cho desktop
      if (currentPage > 2) {
        buttons.push(renderPageButton(1));
        if (currentPage > 3) {
          buttons.push(<span key="ellipsis-start" className="inline-block size-10 p-2 mx-px text-center">...</span>);
        }
      }
      
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 2); i++) {
        buttons.push(renderPageButton(i));
      }
      
      if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
          buttons.push(<span key="ellipsis-end" className="inline-block size-10 p-2 mx-px text-center">...</span>);
        }
        buttons.push(renderPageButton(totalPages));
      }
    }

    return buttons;
  };

  return (
    <div className="w-full flex justify-center items-center text-[#475467]">
      {renderPageButtons()}
    </div>
  );
};

export default PaginationPages;
