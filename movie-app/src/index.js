import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { reducer } from "./redux/reducers";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
