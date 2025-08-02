import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tm from "./locales/tm.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const resources = {
  tm: { translation: tm },
  ru: { translation: ru },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tm",
  fallbackLng: "tm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
