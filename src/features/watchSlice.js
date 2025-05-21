import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import watchService from "../services/watchService";

export const fetchEpisodes = createAsyncThunk(
    'watch/fetchEpisodes',
    async (animeId) => {
        const data = await watchService.getEpisodes(animeId);

        return data;
    }
);




const episodeSlice = createSlice({
    name: 'episode',
    initialState: {
        totalEpisodes: null,
        episodes: [],
        
        loading: false,
        error: null
        
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodes.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
        
                state.episodes = action.payload.episodes;
                state.totalEpisodes = action.payload.totalEpisodes;
                //console.log(action);

            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error || 'Something went wrong. Try again later.';
            })
    }
});



export default episodeSlice.reducer;