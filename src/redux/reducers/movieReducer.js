import {
  GET_POPULAR_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_SEARCH,
  GET_TRENDING_MOVIES,
} from '../types';

const initialState = {
  popular: [],
  trending: [],
  detail: null,
  searchRes: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popular: action.payload.results,
      };
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        trending: action.payload.results,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_MOVIE_SEARCH:
      return {
        ...state,
        searchRes: action.payload.results,
      };
    default:
      return state;
  }
};

export default movieReducer;
