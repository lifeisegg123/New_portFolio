import GlobalStyle from "globalStyle";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>,
  document.getElementById("root")
);
