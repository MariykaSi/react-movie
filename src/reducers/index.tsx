import { combineReducers } from "redux";

import { globalReducer, GlobalReduxState } from "./global";
import { moviesReducer, MoviesReduxState } from "./movies";
import { movieReducer, MovieReduxState } from "./movie";

export interface AppState {
  global: GlobalReduxState;
  movies: MoviesReduxState;
  movie: MovieReduxState;
}

export const rootReducer = combineReducers({
  global: globalReducer,
  movies: moviesReducer,
  movie: movieReducer
});
