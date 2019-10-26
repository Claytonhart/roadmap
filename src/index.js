import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components/macro";

import "@atlaskit/css-reset";
import "./styles/index.scss";

import App from "./components/app/App";

const theme = {
  primary: {
    blue: "#384E77",
    white: "#F9F8F8",
    red: "#EB9486",
    yellow: "#F3DE8A",
    grey: "#272838",
    lightgrey: "#898992"
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
