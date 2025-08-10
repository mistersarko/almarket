import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import registerServiceWorker from './registerServiceWorker';

import { SpeedInsights } from '@vercel/speed-insights/react';  // <-- Muny goşduk

registerServiceWorker();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <App />
      <SpeedInsights />       {/* <-- Muny App-den soň goýduk */}
    </>
  </React.StrictMode>
);
