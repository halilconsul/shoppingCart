// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";
// import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/reducers/index.js";

import App from "./App";
import "./index.scss";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("app")
);
