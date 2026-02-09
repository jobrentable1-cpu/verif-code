import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, detectBrowserLanguage, Language, supportedLanguages } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then detect from browser
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && ['fr', 'en', 'de', 'es', 'it'].includes(saved)) {
      return saved;
    }
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { supportedLanguages, type Language };
