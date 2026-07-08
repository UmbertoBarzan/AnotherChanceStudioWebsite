import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const contactEmail = "info@anotherchance.studio";

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("newsletter-email");
    const subject = encodeURIComponent("AnotherChanceStudio newsletter subscription");
    const body = encodeURIComponent(`Email: ${email || ""}`);

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        {t.footer.newsletterHeading}
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        {t.footer.newsletterDescription}
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="newsletter-email"
          placeholder={t.form.emailPlaceholder}
          autoComplete="email"
          aria-label={t.form.emailPlaceholder}
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label={t.form.submitNewsletter}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={'/'} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              AnotherChanceStudio
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            {t.footer.copyright} {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
