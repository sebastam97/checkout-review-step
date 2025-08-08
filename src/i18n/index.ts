import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { detectLanguageByDomain } from './domainDetector';
import { en, es, pt } from './locales';

const resources = {
  es: { translation: es },
  en: { translation: en },
  pt: { translation: pt }
};

// Detectar idioma inicial por dominio
const initialLanguage = detectLanguageByDomain();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'es',
    debug: false,

    // Configuración del detector de idioma
    detection: {
      // Solo usar el dominio para detección
      order: ['navigator'],
      caches: []
    },

    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },

    // Configuración adicional
    returnObjects: true,

    // Namespace por defecto
    defaultNS: 'translation'
  });

export default i18n;
