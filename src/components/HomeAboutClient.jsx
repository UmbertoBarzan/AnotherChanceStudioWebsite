"use client";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const HomeAboutClient = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="about"
      className="relative mt-24 flex min-h-screen items-center overflow-hidden py-32 sm:mt-32 sm:py-40 lg:mt-40"
    >
      <div className="absolute inset-0 z-0">
        <video
          aria-hidden="true"
          className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] object-cover opacity-72 blur-[8px]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/media/about-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 to-white/58" />
      </div>
      <Container className="relative z-10">
        <FadeIn className="max-w-2xl">
          <h2>
            <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
              {t.about.eyebrow}
            </span>
            <span className="sr-only"> - </span>
            <span className="block font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
              {t.about.title}
            </span>
          </h2>
          <p className="mt-6 text-xl text-neutral-600">{t.about.paragraph}</p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default HomeAboutClient;
