import { MovieAction } from '../actions/movie';
import { RecommendationAction } from '../actions/recommendations';
import { GET_MOVIE_SUCCESS, GET_MOVIE_ERROR } from "../constants/actions/movie";
import {
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR
} from "../constants/actions/recommendations";

export interface MovieReduxState {
  details: any,
  error: any,
  recommendations: any,
  errorRecommendations: any
}

const initialState: MovieReduxState = {
  details: null,
  error: null,
  recommendations: [],
  errorRecommendations: null
};

export const movieReducer = (state: MovieReduxState = initialState, action: MovieAction | RecommendationAction): MovieReduxState => {
  switch (action.type) {
    case GET_MOVIE_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        error: null
      };
    }
    case GET_RECOMMENDATIONS_SUCCESS: {
      return {
        ...state,
        recommendations: action.payload.results
      };
    }
    case GET_MOVIE_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case GET_RECOMMENDATIONS_ERROR: {
      return {
        ...state,
        errorRecommendations: action.payload
      };
    }
    default:
      return state;
  }
};
