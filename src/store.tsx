import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import { rootReducer } from "./reducers";
const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middleware));
};

const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

store.runSaga = sagaMiddleware.run;

sagaMiddleware.run(rootSaga);

export default store;
