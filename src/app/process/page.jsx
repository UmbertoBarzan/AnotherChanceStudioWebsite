"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <PageIntro eyebrow={t.process.eyebrow} title={t.process.title}>
        <p>{t.process.description}</p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
