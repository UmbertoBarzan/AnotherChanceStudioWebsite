"use client";

import Container from "./Container";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section id="contact" className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn className="rounded-[2rem] border border-neutral-200/80 bg-neutral-950 px-6 py-16 text-white shadow-sm shadow-neutral-950/10 sm:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              {t.contact.description}
            </p>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] bg-white/5 p-8">
                <h3 className="text-base font-semibold uppercase tracking-[0.24em] text-neutral-300">
                  {t.contact.reach}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  info@anotherchance.studio
                </p>
                <div className="mt-10 border-t border-white/10 pt-8 text-sm text-neutral-400">
                  <p>{t.contact.officeText}</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ContactSection;
