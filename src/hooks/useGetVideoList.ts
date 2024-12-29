import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoList } from 'src/api/api';

import { setStateVideos } from '@/slices/videoSlice';
import { getVideosForPage } from '@/utils/getVideosForPage';

type UseFetchVideoListProps = {
   totalPages: number;
   isVideoListLoading: boolean;
   isVideoListError: boolean;
};

export function useGetVideoList(
   query: string | undefined,
   pageNumber: number,
   videosPerPage: number = 12,
): UseFetchVideoListProps {
   const dispatch = useDispatch();
   const [isVideoListLoading, setIsVideoListLoading] = useState(false);
   const [isVideoListError, setIsVideoListError] = useState(false);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchVideoList = async () => {
         setIsVideoListLoading(true);
         try {
            const videos = await getVideoList(query);

            const displayedVideos = getVideosForPage(videos, videosPerPage, pageNumber);

            dispatch(setStateVideos({ videos: displayedVideos }));
            setTotalPages(Math.ceil(videos.length / videosPerPage));
         } catch (error) {
            setIsVideoListError(true);
         } finally {
            setIsVideoListLoading(false);
         }
      };

      fetchVideoList();
   }, [dispatch, query, pageNumber, videosPerPage]);

   return { isVideoListLoading, isVideoListError, totalPages };
}
