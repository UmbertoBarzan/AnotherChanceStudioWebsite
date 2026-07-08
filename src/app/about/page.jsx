"use client";

import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <PageIntro eyebrow={t.about.eyebrow} title={t.about.title}>
        <p>{t.about.paragraph}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            The studio is led by Umberto Barzan (Italy), a specialist in 3D
            content, Unreal Engine and Blender with experience in real-time
            visualization and computer vision. We work closely with clients to
            define goals, prototype fast and ship polished experiences.
          </p>
          <p>
            Our approach balances technical rigour with clean design - we aim
            to make XR experiences that are reliable, maintainable and easy to
            integrate within existing workflows.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Years collective experience" />
          <StatListItem value="30+" label="Projects delivered" />
          <StatListItem value="10" label="Industries served" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
