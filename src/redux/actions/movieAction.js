import {
  GET_POPULAR_MOVIES,
  GET_TRENDING_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_SEARCH,
} from '../types';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`;

export const getPopularMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/popular?${API_KEY}`);

    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data,
    });
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?${API_KEY}`
    );

    dispatch({
      type: GET_TRENDING_MOVIES,
      payload: data,
    });
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}?${API_KEY}`);

    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: data,
    });
  } catch (error) {
    throw error;
  }
};

export const getSearchResults = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    dispatch({
      type: GET_MOVIE_SEARCH,
      payload: data,
    });
  } catch (error) {
    throw error;
  }
};
