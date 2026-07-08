"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-3 py-2 text-sm font-semibold transition ${
          language === "en"
            ? "bg-neutral-950 text-white"
            : "text-neutral-600 hover:text-neutral-950"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("it")}
        className={`px-3 py-2 text-sm font-semibold transition ${
          language === "it"
            ? "bg-neutral-950 text-white"
            : "text-neutral-600 hover:text-neutral-950"
        }`}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
