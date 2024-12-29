import { SortKey, VideoById } from '@/types/interfaces';

export const sortVideos = (
   artList: VideoById[],
   type: SortKey,
   order: string,
): VideoById[] => {
   return artList.slice().sort((a, b) => {
      const aValue = type === 'viewCount' ? Number(a[type]) : a[type];
      const bValue = type === 'viewCount' ? Number(b[type]) : b[type];

      if (aValue < bValue) {
         return order === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
         return order === 'asc' ? 1 : -1;
      }

      return 0;
   });
};
