import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR
} from "../constants/actions/movies";

export interface GetMoviesStart {
  type: GET_MOVIES_START;
  payload: number;
}

export interface GetMoviesSuccess {
  type: GET_MOVIES_SUCCESS;
  payload: any;
}

export interface GetMoviesError {
  type: GET_MOVIES_ERROR;
  payload: string;
}

export interface SearchMoviesStart {
  type: SEARCH_MOVIES_START;
  payload: any;
}

export interface SearchMoviesSuccess {
  type: SEARCH_MOVIES_SUCCESS;
  payload: any;
}

export interface SearchMoviesError {
  type: SEARCH_MOVIES_ERROR;
  payload: string;
}

export type MoviesAction = GetMoviesStart | GetMoviesSuccess | GetMoviesError | SearchMoviesStart | SearchMoviesSuccess | SearchMoviesError;

export const getMoviesStart = (page: number): GetMoviesStart => ({
  type: GET_MOVIES_START,
  payload: page
});

export const getMoviesSuccess = (movies: any, genres: any): GetMoviesSuccess => ({
  type: GET_MOVIES_SUCCESS,
  payload: {
    movies,
    genres
  }
});

export const getMoviesError = (msg: string): GetMoviesError => ({
  type: GET_MOVIES_ERROR,
  payload: msg
});

export const searchMoviesStart = (text: string, page: number): SearchMoviesStart => ({
  type: SEARCH_MOVIES_START,
  payload: {
    text,
    page
  }
});

export const searchMoviesSuccess = (movies: any): SearchMoviesSuccess => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies
});

export const searchMoviesError = (msg: string): SearchMoviesError => ({
  type: SEARCH_MOVIES_ERROR,
  payload: msg
});
