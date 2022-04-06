import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App/App";

//& Base Styles, all pages;
// const stylesL01 = import.meta.globEager("./Styles/**/*.scss");
import "./Styles/main.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
