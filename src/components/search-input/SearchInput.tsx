import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';

import { useDebounce } from '@/hooks/useDebounce';

import { setStateQuery } from '../../slices/querySlice';

import './SearchInput.scss';

export const SearchInput = () => {
   const dispatch = useDispatch();

   const handleSearchDebounce = useDebounce((query: string) => {
      dispatch(setStateQuery({ query }));
   }, 500);

   return (
      <Formik
         initialValues={{ searchQuery: '' }}
         onSubmit={(values, { resetForm }) => {
            resetForm();
         }}
      >
         {({ handleSubmit, values, handleChange }) => (
            <form onSubmit={handleSubmit} className='styled-form'>
               <input
                  name='searchQuery'
                  placeholder='Что бы ты хотел посмотреть?'
                  value={values.searchQuery}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                     handleChange(event);
                     handleSearchDebounce(event.target.value);
                  }}
                  className='input'
               />
               <button type='submit' className='button'>
                  Найти
               </button>
               <ErrorMessage name='search' component='div' className='error' />
            </form>
         )}
      </Formik>
   );
};
