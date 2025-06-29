import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/placeholder-loading.min.css";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
