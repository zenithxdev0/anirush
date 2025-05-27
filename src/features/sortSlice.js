import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sortingService from "../services/sortingService";

export const fetchAzList = createAsyncThunk(
    'sort/fetchAzList',
    async ({option, page}) => {

        const data = await sortingService.getAzList(option, page);
        return data;

    }
);

const AzSlice = createSlice({
    name: 'aZList',
    initialState: {

        loading: false,
        error: null,
        animes: [],
        sortOption: null,
        totalPages: null,
        currentPage: null,
        hasNextPage: null
        
    }, 
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAzList.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAzList.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.animes = action.payload.animes;
                state.sortOption = action.payload.sortOption;
                state.totalPages = action.payload.totalPages
                state.currentPage = action.payload.currentPage;
                state.hasNextPage = action.payload.hasNextPage;
                console.log(action);
            })
            .addCase(fetchAzList.rejected, (state, action) => {
                state.error = action.error || 'Something went wrong. Try again later.';
                state.loading = false;
            })
    }
});

export default AzSlice.reducer;