import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
   query: '',
};

const querySlice = createSlice({
   name: 'query',
   initialState,
   reducers: {
      setStateQuery: (state, action: PayloadAction<{ query: string }>) => {
         const { query } = action.payload;

         state.query = query;
      },
   },
});

export const { setStateQuery } = querySlice.actions;

export default querySlice.reducer;
