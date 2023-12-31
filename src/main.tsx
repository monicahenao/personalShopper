import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery.min";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
