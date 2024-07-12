import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";

const Routes = lazy(() => import("./AppRoutes.jsx"));

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <Suspense fallback={<h1>Loading</h1>}>
    <Router>
      <SettingsProvider>
        <Routes />
      </SettingsProvider>
    </Router>
  </Suspense>
);
