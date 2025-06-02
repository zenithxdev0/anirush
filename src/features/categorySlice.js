import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sortingService from "../services/sortingService";


export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async({name, page}) => {
        const data = await sortingService.getCategory(name, page);
        return data;
    }
)

const categorySclice = createSlice({
    name: 'category',
    initialState: {
        animes: [],
        genres: [],
        currentPage: null,
        totalPages: null,
        hasNextPage: false,
        error: null,
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.animes = action.payload.animes;
                state.genres = action.payload.genres;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.hasNextPage = action.payload.hasNextPage;
                state.error = null;
                state.loading = false;

                console.log(action.payload);
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.error = action.error || 'Something went wrong'
                state.loading = false;
            })
        
    }
})

export default categorySclice.reducer;