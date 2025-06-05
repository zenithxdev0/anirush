// src/features/homeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import homeService from '../services/homeService';

export const fetchHome = createAsyncThunk(
  'home/fetchHome',
  async () => {
    const data = await homeService.getHome();
    return data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {

    spotlightAnimes: [],
    trendingAnimes: [],

    topAiringAnimes: [],
    mostPopularAnimes: [],
    mostFavoriteAnimes: [],
    latestCompletedAnimes: [],
    
    latestEpisodeAnimes: [],
    topUpcomingAnimes: [],

    top10Today: [],
    top10Week: [],
    top10Month: [],

    loading: false,
    error: null
  },
  reducers: {
    clearHome: (state) => {

      state.spotlightAnimes = [],
      state.trendingAnimes = [];
      
      state.mostPopularAnimes = [];
      state.topAiringAnimes = [];
      state.mostPopularAnimes = [];
      state.mostFavoriteAnimes = [];
      state.latestCompletedAnimes = [];

      state.top10Today = [];
      state.top10Week = [];
      state.top10Month = [];
  
      state.loading = false;
      state.error = null;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchHome.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        // console.log(state);
      })
      
      .addCase(fetchHome.fulfilled, (state, action) => { //get the data from payload
        
        state.loading = false

        state.spotlightAnimes = action.payload.spotlightAnimes;
        state.trendingAnimes = action.payload.trendingAnimes;

        state.topAiringAnimes = action.payload.topAiringAnimes.slice(0,5);
        state.mostPopularAnimes = action.payload.mostPopularAnimes.slice(0, 5);
        state.mostFavoriteAnimes = action.payload.mostFavoriteAnimes.slice(0, 5);
        state.latestCompletedAnimes = action.payload.latestCompletedAnimes.slice(0, 5);

        state.latestEpisodeAnimes = action.payload.latestEpisodeAnimes;
        state.topUpcomingAnimes = action.payload.topUpcomingAnimes;

        state.top10Today = action.payload.top10Animes.today;
        state.top10Week = action.payload.top10Animes.week;
        state.top10Month = action.payload.top10Animes.month;

      })
      
      .addCase(fetchHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error || 'Something went wrong';
        // console.log(state.error);
      })
  },
  
});


export const { clearHome } = homeSlice.actions;
export default homeSlice.reducer;
