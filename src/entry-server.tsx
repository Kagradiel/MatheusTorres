import ReactDOMServer from "react-dom/server";
import React, { lazy, Suspense } from "react";
import { StaticRouter as Router } from "react-router-dom/server";
import { SettingsProvider } from "./context/SettingsContext";

const Routes = lazy(() => import("./AppRoutes.jsx"));

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <Suspense fallback={<h1>Loading</h1>}>
      <Router location={url}>
        <SettingsProvider>
          <Routes />
        </SettingsProvider>
      </Router>
    </Suspense>
  );
  return { html };
}
