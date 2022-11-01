import axios from 'axios';

import {
  getPopularMoviesReducer,
  getTrendingMoviesReducer,
  getMovieDetailReducer,
  getSearchResultsReducer,
} from '../reducers/movieReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`;

export const getPopularMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/popular?${API_KEY}`);
    dispatch(getPopularMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?${API_KEY}`
    );

    dispatch(getTrendingMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}?${API_KEY}`);

    dispatch(getMovieDetailReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getSearchResults = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    dispatch(getSearchResultsReducer(data));
  } catch (error) {
    throw error;
  }
};
