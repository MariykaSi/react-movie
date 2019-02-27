import { takeEvery, put, call, delay } from "redux-saga/effects";
import { requestStart, requestEnd } from "../actions/global";
import { getMovieSuccess, getMovieError } from "../actions/movie";
import { GET_MOVIE_START } from "../constants/actions/movie";
import { getMovie } from "../api";

function* requestMovie(action) {
  try {
    yield put(requestStart());
    const responseMovie = yield call(getMovie, action.payload);
    yield put(getMovieSuccess(responseMovie.data));
  } catch (error) {
    yield put(getMovieError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_MOVIE_START, requestMovie);
}
