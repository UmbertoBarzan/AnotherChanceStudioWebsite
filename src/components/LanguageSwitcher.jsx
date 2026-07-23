"use client";

import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

const LanguageSwitcher = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={clsx(
        "inline-flex shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1.5 text-xs font-semibold transition sm:px-3 sm:py-2 sm:text-sm ${
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
        className={`px-2 py-1.5 text-xs font-semibold transition sm:px-3 sm:py-2 sm:text-sm ${
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
