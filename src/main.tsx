import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { SettingsProvider } from "./context/SettingsContext";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";

const AppRoutes = lazy(() => import("./AppRoutes"));

const Load = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100dvh;
  .loader {
    width: 40px;
    aspect-ratio: 1;
    --c: linear-gradient(#000 0 0);
    --m: radial-gradient(farthest-side, #000 92%, #0000);
    background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
    background-size:
      8px 12px,
      8px 8px;
    background-repeat: no-repeat;
    animation: l13 1s infinite alternate;
  }

  @keyframes l13 {
    0%,
    100% {
      background-position:
        0 0,
        0 100%,
        50% 0,
        50% 100%,
        100% 0,
        100% 100%;
    }
    20% {
      background-position:
        0 calc(50% - 6px),
        0 calc(50% + 4px),
        50% 0,
        50% 100%,
        100% 0,
        100% 100%;
    }
    40% {
      background-position:
        0 calc(50% - 6px),
        0 calc(50% + 4px),
        50% calc(50% - 6px),
        50% calc(50% + 4px),
        100% 0,
        100% 100%;
    }
    60% {
      background-position:
        0 0,
        0 100%,
        50% calc(50% - 6px),
        50% calc(50% + 4px),
        100% calc(50% - 6px),
        100% calc(50% + 4px);
    }
    80% {
      background-position:
        0 0,
        0 100%,
        50% 0,
        50% 100%,
        100% calc(50% - 6px),
        100% calc(50% + 4px);
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Load>
          <div className="loader"></div>
        </Load>
      }
    >
      <Analytics />
      <BrowserRouter>
        <SettingsProvider>
          <AppRoutes />
        </SettingsProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
