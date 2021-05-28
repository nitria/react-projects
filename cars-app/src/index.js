import React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import App from "./App";
import GalleryContextProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <GalleryContextProvider>
      <App />
    </GalleryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
