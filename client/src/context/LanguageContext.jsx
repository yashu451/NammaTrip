import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('nammatrip_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('nammatrip_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'kn' : 'en'));
  };

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'kn') {
      setLanguageState(lang);
    }
  };

  const t = (key) => {
    const dict = translations[language] || translations.en;
    return dict[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
