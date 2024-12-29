import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { VideoById } from '@/types/interfaces';

interface VideosState {
   videos: VideoById[];
   displayedVideos: VideoById[];
}

const initialState: VideosState = {
   videos: [],
   displayedVideos: [],
};

const videosSlice = createSlice({
   name: 'videos',
   initialState,
   reducers: {
      setStateVideos: (state, action: PayloadAction<{ videos: VideoById[] }>) => {
         const { videos } = action.payload;

         state.videos = videos;
      },
      setDisplayedVideos: (
         state,
         action: PayloadAction<{ displayedVideos: VideoById[] }>,
      ) => {
         const { displayedVideos } = action.payload;

         state.displayedVideos = displayedVideos;
      },
   },
});

export const { setStateVideos, setDisplayedVideos } = videosSlice.actions;

export default videosSlice.reducer;
