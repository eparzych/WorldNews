import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import plLang from "../locale/pl.json";
import enLang from "../locale/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pl: plLang,
      en: enLang,
    }
  });

export default i18n;
