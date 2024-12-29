import React, { useState } from 'react';

import { OrderKey, SortKey } from '@/types/interfaces';

import './FilterModal.scss';

type FilterModalProps = {
   onSort: (sortBy: SortKey, order: OrderKey) => void;
   handleFilterClick: () => void;
};

export const FilterModal: React.FC<FilterModalProps> = ({
   onSort,
   handleFilterClick,
}) => {
   const [sortBy, setSortBy] = useState<SortKey>('publishedAt');
   const [order, setOrder] = useState<OrderKey>('asc');

   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortBy(e.target.value as SortKey);
      onSort(e.target.value as SortKey, order);
   };

   const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setOrder(e.target.value as OrderKey);
      onSort(sortBy, e.target.value as OrderKey);
   };

   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget === e.target) {
         handleFilterClick();
      }
   };

   return (
      <div className='modal-overlay' onClick={handleOverlayClick}>
         <div className='modal-content'>
            <h3>Настройки фильтрации и сортировки</h3>
            <button className='close-button' onClick={handleFilterClick}>
               ×
            </button>
            <div>
               <label>Сортировка по:</label>
               <select value={sortBy} onChange={handleSortChange}>
                  <option value='publishedAt'>Дате публикации</option>
                  <option value='viewCount'>Количество просмотров</option>
               </select>
            </div>
            <div>
               <label>Направление:</label>
               <select value={order} onChange={handleOrderChange}>
                  <option value='asc'>По возрастанию</option>
                  <option value='desc'>По убыванию</option>
               </select>
            </div>
         </div>
      </div>
   );
};
