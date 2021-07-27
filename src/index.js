import React from "react";
import ReactDOM from "react-dom";

import App from "./Pages/App";
import GlobalStyle from "./Styles/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
