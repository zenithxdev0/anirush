import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import detailService from "../services/detailService";

export const fetchDetail = createAsyncThunk(
    'detail/fetchAnime',
    async (animeId) => { //animeId
        const data = await detailService.getDetail(animeId);
        return data;
    }
);

const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        info: null,
        moreInfo: null,
        seasons: [],

        mostPopularAnimes: [],
        recommendedAnimes: [],
        relatedAnimes: [],

        loading: false,
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetail.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                // console.log(state);
            })
            .addCase(fetchDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.info = action.payload.data.anime.info;
                state.moreInfo = action.payload.data.anime.moreInfo
                state.seasons = action.payload.data.seasons

                state.mostPopularAnimes = action.payload.data.mostPopularAnimes
                state.recommendedAnimes = action.payload.data.recommendedAnimes
                state.relatedAnimes = action.payload.data.relatedAnimes
                
                console.log(action.payload.data)
            })
            .addCase(fetchDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error || 'Something went wrong. Try again later';
            });
    }
});

export default detailSlice.reducer;