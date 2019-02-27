import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

import "./styles/scss/global.scss";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" exact component={Movie} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
