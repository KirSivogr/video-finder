import { getVideos } from '@/api/respone';
import { VideoById } from '@/types/interfaces';

export const getVideoList = async (query: string | undefined): Promise<VideoById[]> => {
   const response = getVideos();

   const filteredVideos = response.items.filter(video =>
      video.snippet.title.toLowerCase().includes(query?.toLowerCase() || ''),
   );

   return filteredVideos.map(video => {
      return {
         id: video?.id ?? '',
         title: video?.snippet.title ?? '',
         description: video?.snippet.description ?? '',
         publishedAt: video?.snippet.publishedAt ?? '',
         image: video?.snippet.thumbnails.medium.url ?? '',
         viewCount: video?.statistics.viewCount ?? '',
         likeCount: video?.statistics.likeCount ?? '',
         dislikeCount: video?.statistics.dislikeCount ?? '',
         favoriteCount: video?.statistics.favoriteCount ?? '',
         commentCount: video?.statistics.commentCount ?? '',
      };
   });
};

export const getVideoById = async (id: string): Promise<VideoById> => {
   const response = getVideos();

   const videoById = response.items.find(video => video.id === id);

   return {
      id: videoById?.id ?? '',
      title: videoById?.snippet.title ?? '',
      description: videoById?.snippet.description ?? '',
      publishedAt: videoById?.snippet.publishedAt ?? '',
      image: videoById?.snippet.thumbnails.standard.url ?? '',
      viewCount: videoById?.statistics.viewCount ?? '',
      likeCount: videoById?.statistics.likeCount ?? '',
      dislikeCount: videoById?.statistics.dislikeCount ?? '',
      favoriteCount: videoById?.statistics.favoriteCount ?? '',
      commentCount: videoById?.statistics.commentCount ?? '',
   };
};
