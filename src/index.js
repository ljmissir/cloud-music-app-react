import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "lib-flexible";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
