import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//  Supposedly, GitHub Pages needs a <HashRouter> instead of a <BrowserRouter>:
import { HashRouter } from "react-router-dom";
import App from "./components/App.tsx";
import { IntlProvider } from "react-intl";

//  This isn't exactly how we did internationalization at ShiftKey,
//  somehow the English and the Spanish were both in the same file,
//  like there was an English section, then below it, a Spanish one.
//  I don't remember what the setup in main.tsx for that looked like tho,
//  so I just went with Google's AI's suggestion of doing it this way:
import enMessages from "./locales/en.json";
import esMessages from "./locales/es.json";

const messages = {
  en: enMessages,
  es: esMessages,
};

const locale = navigator.language.split("-")[0] || "en";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <IntlProvider
        locale={locale}
        messages={messages[locale as keyof typeof messages] || messages.en}
      >
        <App />
      </IntlProvider>
    </StrictMode>
  </HashRouter>,
);
