import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@components/pagination/Pagination';
import { VideoCard } from '@components/video-card/VideoCard';

import { useGetVideoList } from '@/hooks/useGetVideoList';
import { RootState } from '@/slices';

import './HomePageContent.scss';

export const HomePageContent: React.FC = () => {
   const query = useSelector((state: RootState) => state.query.query);
   const videoList = useSelector((state: RootState) => state.videos.videos);
   const [videosPerPage, setVideosPerPage] = useState(12);
   const [currentPage, setCurrentPage] = useState(1);
   const { isVideoListLoading, totalPages, isVideoListError } = useGetVideoList(
      query,
      currentPage,
      videosPerPage,
   );

   useEffect(() => {
      const savedValue = localStorage.getItem('videosPerPage');

      if (savedValue) {
         setVideosPerPage(Number(savedValue));
      }
   }, []);

   const handleChangePage = (pageNumber: number) => setCurrentPage(pageNumber);

   const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;

      setVideosPerPage(Number(value));
      setCurrentPage(1);
      localStorage.setItem('videosPerPage', value);
   };

   return (
      <div className='container'>
         <div className='videos-grid'>
            {videoList.map(video => (
               <VideoCard
                  key={video.id}
                  title={video.title}
                  id={video.id}
                  description={video.description}
                  image={video.image}
                  viewCount={video.viewCount}
                  likeCount={video.likeCount}
                  dislikeCount={video.dislikeCount}
                  favoriteCount={video.favoriteCount}
                  commentCount={video.commentCount}
                  publishedAt={video.publishedAt}
               />
            ))}
         </div>
         <div className='video-settings'>
            <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               handleChangePage={handleChangePage}
            />
            <select
               id='videosPerPage'
               value={videosPerPage}
               onChange={handleChangeSelect}
            >
               <option value='12'>12 / page</option>
               <option value='20'>20 / page</option>
               <option value='32'>32 / page</option>
               <option value='56'>56 / page</option>
            </select>
         </div>
      </div>
   );
};
