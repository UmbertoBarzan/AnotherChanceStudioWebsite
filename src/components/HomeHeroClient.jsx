"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const HomeHeroClient = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <video
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-62"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/media/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/68 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/50" />
      </div>
      <Container className="relative z-10 flex min-h-screen items-center">
        <FadeIn className="max-w-3xl py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-600">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-neutral-700">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">{t.hero.primary}</Button>
            <Button href="#contact" invert>
              {t.hero.secondary}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default HomeHeroClient;
