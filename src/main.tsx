import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//  Supposedly, GitHub Pages needs a <HashRouter> instead of a <BrowserRouter>:
import { HashRouter } from "react-router-dom";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>,
);
