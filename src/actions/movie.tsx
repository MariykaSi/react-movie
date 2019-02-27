import {
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
} from "../constants/actions/movie";

export interface GetMovieStart {
  type: GET_MOVIE_START;
  payload: string;
}

export interface GetMovieSuccess {
  type: GET_MOVIE_SUCCESS;
  payload: any;
}

export interface GetMovieError {
  type: GET_MOVIE_ERROR;
  payload: string;
}

export type MovieAction = GetMovieStart | GetMovieSuccess | GetMovieError;

export const getMovieStart = (id: string): GetMovieStart => ({
  type: GET_MOVIE_START,
  payload: id
});

export const getMovieSuccess = (data: any): GetMovieSuccess => ({
  type: GET_MOVIE_SUCCESS,
  payload: data
});

export const getMovieError = (msg: string): GetMovieError => ({
  type: GET_MOVIE_ERROR,
  payload: msg
});
