import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App/App";

//& Base Styles, all pages;
const styles = import.meta.globEager("./Styles/**/*.scss");
// import "./Styles/_index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
