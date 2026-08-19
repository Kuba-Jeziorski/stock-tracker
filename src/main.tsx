import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/app.tsx";
import { ErrorFallback } from "./shared/aplication-errors/error-fallback.tsx";
import { ErrorBoundary } from "react-error-boundary";

let container = document.getElementById("root");

if (!container) {
  container = document.createElement("div");
  container.id = "root";
  document.body.appendChild(container);
}

createRoot(container).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
