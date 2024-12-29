import React, { useState } from 'react';
import { FilterModal } from '@components/filter-modal/FilterModal';

import settingsIcon from '@/assets/Vector.svg';
import { OrderKey, SortKey } from '@/types/interfaces';

import './FilterSettings.scss';

type FilterSettingsProps = {
   onSort: (sortBy: SortKey, order: OrderKey) => void;
};

export const FilterSettings: React.FC<FilterSettingsProps> = ({ onSort }) => {
   const [isFilterSettingOpen, setIsFilterSettingOpen] = useState(false);

   const handleFilterClick = () => setIsFilterSettingOpen(!isFilterSettingOpen);

   return (
      <>
         <button className='filter-button' onClick={handleFilterClick}>
            <img src={settingsIcon} alt='settings' />
         </button>

         {isFilterSettingOpen && (
            <FilterModal handleFilterClick={handleFilterClick} onSort={onSort} />
         )}
      </>
   );
};
