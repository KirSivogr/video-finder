import React from 'react';
import { useNavigate } from 'react-router';
import dislike from 'src/assets/dislike.svg';
import comments from 'src/assets/Group 9.svg';
import liked from 'src/assets/liked.svg';
import viewed from 'src/assets/viewed.svg';

import { VideoById } from '@/types/interfaces';
import { formatNumber } from '@/utils/formatNumber';
import { getBorderClass } from '@/utils/getBorderClass';

import './VideoCard.scss';

export const VideoCard: React.FC<VideoById> = ({
   title,
   image,
   id,
   publishedAt,
   viewCount,
   likeCount,
   dislikeCount,
   commentCount,
}) => {
   const navigate = useNavigate();

   return (
      <div className={`video-card ${getBorderClass(publishedAt)}`}>
         <img src={image} alt={title} className='video-image' />
         <div className='video-content'>
            <div className='video-statistics'>
               <span>
                  <img src={viewed} alt='viewed' />
                  {formatNumber(parseInt(viewCount, 10))}{' '}
               </span>
               <span>
                  <img src={liked} alt='liked' />
                  {formatNumber(parseInt(likeCount, 10))}{' '}
               </span>
               <span>
                  <img src={dislike} alt='dislike' />
                  {formatNumber(parseInt(dislikeCount, 10))}
               </span>
               <span>
                  <img src={comments} alt='comments' />
                  {formatNumber(parseInt(commentCount, 10))}{' '}
               </span>
            </div>
            <h3 className='video-title'>{title}</h3>
            <p className='video-date'>{new Date(publishedAt).toLocaleDateString()}</p>
            <button
               className='video-button'
               onClick={() => navigate(`/videoinfo/${id}`, { replace: false })}
            >
               Далее...
            </button>
         </div>
      </div>
   );
};
