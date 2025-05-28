// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/homeSlice';
import detailReducer from '../features/detailSlice';
import episodeReducer from '../features/watchSlice'
import { serverReducer, sourceReducer }  from '../features/watchSlice';
import aZReducer from '../features/sortSlice';
import suggestionReducer from '../features/searchSlice';
import { searchResultReducer  } from '../features/searchSlice';


export const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
    episode: episodeReducer,
    server: serverReducer,
    source: sourceReducer,
    aZList: aZReducer,
    suggestion: suggestionReducer,
    search: searchResultReducer
  },
});
