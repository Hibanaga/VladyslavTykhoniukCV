import ReactDom from "react-dom";
import React, { Suspense } from "react";
import App from "./App";
import { JellyfishSpinner } from "react-spinners-kit";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import projectsAssets from "./assets/projectInfo.json";

ReactDom.render(
  <BrowserRouter>
    <Suspense
      className="loadedPage"
      fallback={
        <div className="wrapperLoader">
          <JellyfishSpinner size={250} color="#fff" />
        </div>
      }
    >
      <App assets={projectsAssets} />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
