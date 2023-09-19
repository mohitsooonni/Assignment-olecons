import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next
  .use(initReactI18next) // bind react-i18next to i18next
  .init({
    resources: {
      en: {
        translation: require("./locales/en.json"),
      },
      hi: {
        translation: require("./locales/hi.json"),
      },
      ne: {
        translation: require("./locales/ne.json"),
      },
      ja: {
        translation: require("./locales/ja.json"),
      },

      fr: {
        translation: require("./locales/fr.json"),
      },
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    debug: true, // logs will be shown in the console
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
