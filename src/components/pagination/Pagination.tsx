import React from 'react';
import { getVisiblePages } from 'src/utils/getVisiblePages';

import './Pagination.scss';

type PaginationProps = {
   currentPage: number;
   totalPages: number;
   handleChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
   currentPage,
   totalPages,
   handleChangePage,
}) => {
   const visiblePages = getVisiblePages(currentPage, totalPages);

   return (
      <div className='pagination-wrapper'>
         {currentPage > 1 && (
            <button
               className='arrow-button'
               onClick={() => handleChangePage(currentPage - 1)}
            >
               &lt;
            </button>
         )}
         {visiblePages.map((pageNumber: number, index: number) => (
            <button
               key={index}
               className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
               onClick={() => (pageNumber === -1 ? null : handleChangePage(pageNumber))}
            >
               {pageNumber === -1 ? '...' : pageNumber}
            </button>
         ))}
         {currentPage < totalPages && (
            <button
               className='arrow-button'
               onClick={() => handleChangePage(currentPage + 1)}
            >
               &gt;
            </button>
         )}
      </div>
   );
};
