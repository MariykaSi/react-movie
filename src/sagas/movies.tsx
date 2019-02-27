import { takeEvery, put, call, delay } from "redux-saga/effects";
import { requestStart, requestEnd } from "../actions/global";
import {
  getMoviesSuccess,
  getMoviesError,
  searchMoviesSuccess,
  searchMoviesError
} from "../actions/movies";
import {
  GET_MOVIES_START,
  SEARCH_MOVIES_START
} from "../constants/actions/movies";
import { getMovies, getGenres, searchMovies } from "../api";

function* requestMovies(action) {
  try {
    yield put(requestStart());
    const responseMovies = yield call(getMovies, action.payload);
    const responseGenres = yield call(getGenres);
    yield put(
      getMoviesSuccess(responseMovies.data, responseGenres.data.genres)
    );
  } catch (error) {
    yield put(getMoviesError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

function* requestSearchMovies(action) {
  const { text, page } = action.payload;
  try {
    yield put(requestStart());
    const responseMovies = yield call(searchMovies, text, page);
    yield put(searchMoviesSuccess(responseMovies.data));
  } catch (error) {
    yield put(searchMoviesError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_MOVIES_START, requestMovies);
  yield takeEvery(SEARCH_MOVIES_START, requestSearchMovies);
}
