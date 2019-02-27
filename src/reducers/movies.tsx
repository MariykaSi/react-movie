import { MoviesAction } from '../actions/movies';
import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR
} from "../constants/actions/movies";

export interface MoviesReduxState {
  list: any,
  genres: any,
  error: any,
  totalPages: any
}

const initialState: MoviesReduxState = {
  list: [],
  genres: [],
  error: null,
  totalPages: null
};

export const moviesReducer = (state: MoviesReduxState = initialState, action: MoviesAction): MoviesReduxState => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      const { movies, genres } = action.payload;
      return {
        ...state,
        list: action.payload.movies.results,
        totalPages: movies.total_pages,
        genres: genres,
        error: null
      };
    }
    case SEARCH_MOVIES_SUCCESS: {
      const movies = action.payload;
      return {
        ...state,
        list: movies.results,
        totalPages: movies.total_pages,
        error: null
      };
    }
    case GET_MOVIES_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case SEARCH_MOVIES_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
