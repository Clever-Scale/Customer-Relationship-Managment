import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
);
