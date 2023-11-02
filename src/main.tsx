import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

// !, afirma que o elemento existe para o typescript
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
