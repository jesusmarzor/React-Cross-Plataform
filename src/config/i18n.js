import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_en from "./../assets/translations/en.json";
import { LANGUAGES } from "./../utils/Constants";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translation_en
      }
    },
    lng: LANGUAGES.EN,
    fallbackLng: LANGUAGES.EN,

    interpolation: {
      escapeValue: false
    }
});