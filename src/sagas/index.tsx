import { all, fork } from "redux-saga/effects";

import globalSaga from "./global";
import moviesSaga from "./movies";
import movieSaga from "./movie";
import recommendationsSaga from "./recommendations";
const sagas = [globalSaga, moviesSaga, movieSaga, recommendationsSaga];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
