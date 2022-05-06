import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_UK } from './uk/translations';
import { TRANSLATIONS_EN } from './en/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      uk: {
        translation: TRANSLATIONS_UK,
      },
    },
    interpolation: {
      format: function (value, format, lng) {
        if (typeof value === 'number')
          return new Intl.NumberFormat().format(value);
        return value;
      },
    },
  });

export default i18n;
