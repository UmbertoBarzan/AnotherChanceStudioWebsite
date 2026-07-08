"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <PageIntro eyebrow={t.blog.eyebrow} title={t.blog.title}>
        <p>{t.blog.description}</p>
      </PageIntro>
    </>
  );
};

export default BlogPage;
