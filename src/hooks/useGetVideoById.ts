import { useEffect, useState } from 'react';

import { getVideoById } from '@/api/api';
import { VideoById } from '@/types/interfaces';

export const useGetVideoById = (id: string | undefined) => {
   const [videoData, setVideoData] = useState<VideoById | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      const fetchArtData = async (id: string) => {
         setIsLoading(true);
         try {
            const videoInfo = await getVideoById(id);

            setVideoData(videoInfo);
         } catch (err) {
            setIsError(true);
         } finally {
            setIsLoading(false);
         }
      };

      // eslint-disable-next-line no-unused-expressions
      id && fetchArtData(id);
   }, [id]);

   return { videoData, isLoading, isError };
};
