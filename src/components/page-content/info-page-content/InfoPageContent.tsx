import React from 'react';

import dislike from '@/assets/dislike.svg';
import comments from '@/assets/Group 9.svg';
import liked from '@/assets/liked.svg';
import viewed from '@/assets/viewed.svg';
import { VideoById } from '@/types/interfaces';
import { formatDate } from '@/utils/formatDate';
import { getBorderClass } from '@/utils/getBorderClass';

import './InfoPageContent.scss';

type InfoPageContentProps = {
   videoData: VideoById | null;
   isLoading: boolean;
   isError: boolean;
};

export const InfoPageContent = ({
   videoData,
   isLoading,
   isError,
}: InfoPageContentProps) => {
   return (
      <div className='container'>
         <div
            className={`video-detail-card ${getBorderClass(
               videoData?.publishedAt || '',
            )}`}
         >
            <img src={videoData?.image} alt={videoData?.title} className='thumbnail' />
            <div className='video-content'>
               <div className='video-header'>
                  <h2>{videoData?.title}</h2>
                  <p className='published-at'>
                     {formatDate(new Date(videoData?.publishedAt || ''))}
                  </p>
               </div>

               <div className='video-description'>
                  <h3>Описание:</h3>
                  <p>{videoData?.description}</p>
               </div>
               <div className='video-statistics'>
                  <span>
                     <img src={viewed} alt='viewed' />
                     <p>{videoData?.viewCount}</p>
                  </span>
                  <span>
                     <img src={liked} alt='liked' />
                     <p>{videoData?.likeCount}</p>
                  </span>
                  <span>
                     <img src={dislike} alt='dislike' />
                     <p>{videoData?.dislikeCount}</p>
                  </span>
                  <span>
                     <img src={comments} alt='comments' />
                     <p>{videoData?.commentCount}</p>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};
