import {
  GET_RECOMMENDATIONS_START,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR
} from "../constants/actions/recommendations";

export interface GetRecommendationsStart {
  type: GET_RECOMMENDATIONS_START;
  payload: string;
}

export interface GetRecommendationsSuccess {
  type: GET_RECOMMENDATIONS_SUCCESS;
  payload: any;
}

export interface GetRecommendationsError {
  type: GET_RECOMMENDATIONS_ERROR;
  payload: string;
}

export type RecommendationAction = GetRecommendationsStart | GetRecommendationsSuccess | GetRecommendationsError;

export const getRecommendationsStart = (id: string): GetRecommendationsStart => ({
  type: GET_RECOMMENDATIONS_START,
  payload: id
});

export const getRecommendationsSuccess = (data: any): GetRecommendationsSuccess => ({
  type: GET_RECOMMENDATIONS_SUCCESS,
  payload: data
});

export const getRecommendationsError = (msg: string): GetRecommendationsError => ({
  type: GET_RECOMMENDATIONS_ERROR,
  payload: msg
});
