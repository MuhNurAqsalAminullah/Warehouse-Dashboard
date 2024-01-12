import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "regenerator-runtime/runtime"; // tambahkan ini untuk menjalankan regenerator runtime untuk menjalankan react-table GlobalSearch
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] =
    "bearer" + localStorage.getItem("token");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
