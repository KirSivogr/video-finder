import { VideoById } from '@/types/interfaces';

export const getVideosForPage = (
   videos: VideoById[],
   videosPerPage: number,
   pageNumber: number,
) => {
   const startIndex = (pageNumber - 1) * videosPerPage;
   const endIndex = startIndex + videosPerPage;

   return videos.slice(startIndex, endIndex);
};
