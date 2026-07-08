"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        {t.contact.offices}
      </h2>
      <p className="mt-6 text-base text-neutral-600">{t.contact.officeText}</p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t.contact.emailTitle}
        </h2>
        <dl className="mt-6 text-sm text-neutral-600">
          <div>
            <dt className="font-semibold text-neutral-950">{t.contact.general}</dt>
            <dd className="mt-2">
              <Link
                href="mailto:info@anotherchance.studio"
                className="text-neutral-600 hover:text-neutral-950"
              >
                info@anotherchance.studio
              </Link>
            </dd>
          </div>
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t.contact.socialTitle}
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
