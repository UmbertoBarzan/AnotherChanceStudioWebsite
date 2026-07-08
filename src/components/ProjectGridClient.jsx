"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const ProjectGridClient = ({ projects }) => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section id="projects" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="max-w-3xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              {t.featuredProjects.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              {t.featuredProjects.title}
            </h2>
            <p className="mt-6 text-xl leading-9 text-neutral-600">
              {t.featuredProjects.description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 px-6 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn
              key={project.slug}
              className="group overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-sm shadow-neutral-950/5"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`${t.projectPage.viewProject}: ${project.title}`}
                className="relative block h-72 overflow-hidden bg-neutral-50"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-contain transition duration-500 group-hover:scale-105 ${
                      project.slug === "georisk" ? "p-4" : "p-10"
                    }`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-neutral-50 text-neutral-950">
                    {project.title}
                  </div>
                )}
                {project.logo && project.logo !== project.image ? (
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-white/90 p-3 shadow-sm">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                ) : null}
              </Link>
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  {project.role[language]}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-neutral-950">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {(project.summary?.[language] ||
                    project.summary?.en ||
                    project.description[language])}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-8 inline-flex text-sm font-semibold text-neutral-950 underline underline-offset-4 transition hover:text-neutral-700"
                >
                  {t.projectPage.viewProject}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGridClient;
