import { takeEvery, put, call, delay } from "redux-saga/effects";
import { requestStart, requestEnd } from "../actions/global";
import {
  getRecommendationsSuccess,
  getRecommendationsError
} from "../actions/recommendations";
import { GET_RECOMMENDATIONS_START } from "../constants/actions/recommendations";
import { getMovieRecommendations } from "../api";

function* requestRecommendations(action) {
  try {
    yield put(requestStart());
    const response = yield call(getMovieRecommendations, action.payload);
    yield put(getRecommendationsSuccess(response.data));
  } catch (error) {
    yield put(getRecommendationsError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_RECOMMENDATIONS_START, requestRecommendations);
}
