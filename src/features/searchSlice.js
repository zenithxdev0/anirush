import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "../services/SearchService";


export const fetchSearchSuggestion = createAsyncThunk(
    'search/fetchSearchSuggestion',
    async (query) => {
        const data = await searchService.getSearchSuggestion(query);

        return data;
    }
);

const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState: {
        animes: null,
        loading: false,
        error: null
    },
    reducers: {
        clearSuggestion: (state) => {
            state.animes = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchSuggestion.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchSuggestion.fulfilled, (state, action) => {
                state.animes = action.payload.suggestions;
                state.loading = false;
                state.error = null;

                console.log(action.payload);
            })
            .addCase(fetchSearchSuggestion.rejected, (state, action) => {
                state.loading = false;
                state.error = state.error || 'Something went wrong.'
            });
    }
});

export const fetchSearchResult = createAsyncThunk(
    'search/fetchSearchResult',
    async ({query, page}) => {
        const data = searchService.getSearchResults(query, page);

        return data;
    });

const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: {
        animes: [],
        mostPopularAnimes: [],
        currentPage: null,
        totalPages: null,
        hasNextPage: false,
        searchQuery: null,
        error: null,
        loading: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
       builder
        .addCase(fetchSearchResult.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchSearchResult.fulfilled, (state, action) => {
            state.loading = true;
            state.error = null;
            state.animes = action.payload.animes;
            state.mostPopularAnimes = action.payload.mostPopularAnimes;
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
            state.hasNextPage = action.payload.hasNextPage;

            console.log(action.payload);
            
        })
        .addCase(fetchSearchResult.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error || 'Something went wrong';
        })
    }
})

export const searchResultReducer = searchResultSlice.reducer;
export const { clearSuggestion } = suggestionSlice.actions
export default suggestionSlice.reducer;