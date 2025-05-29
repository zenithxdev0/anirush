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
                console.log(action.payload.episodes);

            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error || 'Something went wrong. Try again later.';
            })
    }
});


export const fetchServer = createAsyncThunk(
    'watch/fetchServer',
    async (episodeId) => {
        const data = await watchService.getServers(episodeId);

        return data;
    }
);

const serverSlice = createSlice({
    name: 'server',
    initialState: {
        serverInfo: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServer.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;

                // console.log(action.payload);
                state.serverInfo = action.payload;
            })
            .addCase(fetchServer.rejected, (state, action) => {
                console.log(action.error);
                state.loading = false;
                state.error = action.error || 'Something went wrong. Try again later'
            });
    }
});


export const fetchSource = createAsyncThunk(
    'watch/fetchSource',
    async ({episodeId, server, category}) => {
        const data = await watchService.getVideoSources(episodeId, server, category);

        return data;
    }
);

const sourceSlice = createSlice({
    name: 'source',
    initialState: {
        source: [],
        track: [],
        loading: false,
        error: null
    }, 
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSource.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchSource.fulfilled, (state, action) => {

                state.source = action.payload.sources;
                state.track = action.payload.tracks;
                state.loading = false;
                state.error = null;

                console.log(action.payload);
            })
            .addCase(fetchSource.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error || 'Something went wrong. Try again later.';
                console.log(action.error)

            })
    }
})

export const sourceReducer = sourceSlice.reducer;
export const serverReducer = serverSlice.reducer;
export default episodeSlice.reducer;