import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { SettingsProvider } from "./context/SettingsContext";
import { BrowserRouter } from "react-router-dom";

const AppRoutes = lazy(() => import("./AppRoutes.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <SettingsProvider>
          <AppRoutes />
        </SettingsProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
