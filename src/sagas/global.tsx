import { takeEvery, put, takeLatest } from "redux-saga/effects";

import { showLoader, hideLoader } from "../actions/global";
import { REQUEST_START, REQUEST_END } from "../constants/actions/global";

function* showLoading() {
  yield put(showLoader());
}
function* hideLoading() {
  yield put(hideLoader());
}
export default function* watchSaga() {
  yield takeEvery(REQUEST_START, showLoading);
  yield takeLatest(REQUEST_END, hideLoading);
}
