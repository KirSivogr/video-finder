import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterSettings } from '@components/filter-settings/FilterSettings';

import { RootState } from '@/slices';
import { setStateVideos } from '@/slices/videoSlice';
import { OrderKey, SortKey } from '@/types/interfaces';
import { sortVideos } from '@/utils/sortVideos';

import { Logo } from '../logo/Logo';
import { SearchInput } from '../search-input/SearchInput';

import './Header.scss';

export const Header = () => {
   const videos = useSelector((state: RootState) => state.videos.videos);
   const dispatch = useDispatch();

   const handleSort = (sortBy: SortKey, order: OrderKey) => {
      const filteredVideos = sortVideos(videos, sortBy, order);

      dispatch(setStateVideos({ videos: filteredVideos }));
   };

   return (
      <header className='header'>
         <Logo />
         <SearchInput />
         <FilterSettings onSort={handleSort} />
      </header>
   );
};
