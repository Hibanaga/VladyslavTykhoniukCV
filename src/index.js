import ReactDom from "react-dom";
import React, { Suspense } from "react";
import App from "./App";
import { JellyfishSpinner } from "react-spinners-kit";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

ReactDom.render(
  <BrowserRouter>
    <Suspense
      className="loadedPage"
      fallback={
        <div className="wrapperLoader">
          <JellyfishSpinner size={100} color="#fff" />
        </div>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
