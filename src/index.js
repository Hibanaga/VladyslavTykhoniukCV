import ReactDom from "react-dom";
import React, { Suspense } from "react";
import App from "./App";
import { JellyfishSpinner } from "react-spinners-kit";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";

// настройки плагина
import "./i18n";

ReactDom.render(
  <BrowserRouter>
    <Suspense fallback={<JellyfishSpinner />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
