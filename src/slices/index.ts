// noinspection TypeScriptValidateTypes

import { configureStore } from '@reduxjs/toolkit';

import queryReducer from './querySlice';
import videosReducer from './videoSlice';

const store = configureStore({
   reducer: {
      videos: videosReducer,
      query: queryReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
