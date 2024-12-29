export interface VideoById {
   id: string;
   title: string;
   description: string;
   publishedAt: string;
   image: string;
   viewCount: string;
   likeCount: string;
   dislikeCount: string;
   favoriteCount: string;
   commentCount: string;
}

export type SortKey = 'viewCount' | 'publishedAt';
export type OrderKey = 'asc' | 'desc';
