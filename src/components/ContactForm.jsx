"use client";

import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const contactEmail = "info@anotherchance.studio";

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("AnotherChanceStudio work inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Company: ${formData.get("company") || ""}`,
        `Phone: ${formData.get("phone") || ""}`,
        "",
        `${formData.get("message") || ""}`,
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-white">
          {t.form.heading}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/5 backdrop-blur">
          <TextInput label={t.form.name} name="name" autoComplete="name" />
          <TextInput
            label={t.form.email}
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label={t.form.company}
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label={t.form.phone}
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput label={t.form.message} name="message" />
        </div>
        <Button
          type="submit"
          className="mt-10 border-2 border-white hover:bg-white/10"
        >
          {t.form.submit}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
