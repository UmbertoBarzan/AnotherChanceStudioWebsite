"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionIntro from "./SectionIntro";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

const ServiceCards = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section id="services" className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title}>
        <p>{t.services.description}</p>
      </SectionIntro>
      <Container className="mt-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {t.services.cards.map((service) => (
            <FadeIn
              key={service.title}
              className="rounded-[2rem] border border-neutral-200/80 bg-white/95 p-8 shadow-sm shadow-neutral-950/5"
            >
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                {service.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceCards;
