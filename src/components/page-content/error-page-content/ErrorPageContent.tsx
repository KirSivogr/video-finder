import React from 'react';
import { useNavigate } from 'react-router';
import errorIcon from 'src/assets/404.svg';

import './ErrorPageContent.scss';

export const ErrorPageContent: React.FC = () => {
   const navigate = useNavigate();

   return (
      <div className='error-page'>
         <div className='error-container'>
            <img src={errorIcon} alt='Ошибка' className='error-icon' />
            <div>
               <div className='error-title'>Что-то пошло не так...</div>
               <div
                  className='error-message'
                  onClick={() => navigate('/', { replace: false })}
               >
                  Вернуться на главную
               </div>
            </div>
         </div>
      </div>
   );
};
