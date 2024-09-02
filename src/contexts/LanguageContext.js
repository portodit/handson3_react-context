import React, { createContext, useState, useContext } from 'react';

// Buat context
const LanguageContext = createContext();

// Buat provider
const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook untuk menggunakan context
const useLanguage = () => useContext(LanguageContext);

export { LanguageContextProvider, useLanguage };
