import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '@components/pages/ErrorPage';
import { HomePage } from '@components/pages/HomePage';
import { InfoPage } from '@components/pages/InfoPage';

import './index.scss';

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/videoinfo/:id' element={<InfoPage />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   );
};
