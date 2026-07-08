"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("anotherchancestudio-language");
    if (saved === "en" || saved === "it") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("anotherchancestudio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
