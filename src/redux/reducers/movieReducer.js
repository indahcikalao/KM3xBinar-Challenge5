import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popular: [],
  trending: [],
  detail: null,
  searchRes: [],
};

const movieSlicer = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getPopularMoviesReducer: (state, action) => {
      state.popular = action.payload.results;
    },
    getTrendingMoviesReducer: (state, action) => {
      state.trending = action.payload.results;
    },
    getMovieDetailReducer: (state, action) => {
      state.detail = action.payload;
    },
    getSearchResultsReducer: (state, action) => {
      state.searchRes = action.payload.results;
    },
  },
});

export const {
  getPopularMoviesReducer,
  getTrendingMoviesReducer,
  getMovieDetailReducer,
  getSearchResultsReducer,
} = movieSlicer.actions;

export default movieSlicer.reducer;
