"use client";

import Image from "next/image";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const ProjectHeroMedia = ({ project }) => {
  if (project.video) {
    return (
      <div className="overflow-hidden rounded-[2rem] bg-neutral-950 shadow-sm shadow-neutral-950/10">
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          className="aspect-video h-full w-full object-cover"
        />
      </div>
    );
  }

  if (project.gallery?.[0] || project.image) {
    return (
      <div className="overflow-hidden rounded-[2rem] bg-neutral-50 shadow-sm shadow-neutral-950/10">
        <Image
          src={project.gallery?.[0] || project.image}
          alt={project.title}
          width={1400}
          height={900}
          className="aspect-video h-full w-full object-cover"
          priority
        />
      </div>
    );
  }

  return null;
};

function getGalleryFilename(src) {
  return src.split("/").pop();
}

const ProjectGalleryImage = ({ src, title, caption }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-sm shadow-neutral-950/5">
      <div className="relative aspect-video w-full bg-neutral-50">
        <Image
          src={src}
          alt={caption || title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <p className="flex min-h-20 items-center border-t border-neutral-100 px-5 py-4 text-sm leading-6 text-neutral-600">
          {caption}
        </p>
      ) : null}
    </div>
  );
};

const StructuredProjectGallery = ({ project, gallery, language }) => {
  const galleryByFile = new Map(
    gallery.map((src) => [getGalleryFilename(src), src])
  );
  const hardwareNote =
    project.hardwareNote?.[language] || project.hardwareNote?.en;

  return (
    <div className="grid gap-8">
      {project.galleryGroups?.map((group) => {
        const images = group.images
          .map((file) => ({ file, src: galleryByFile.get(file) }))
          .filter((item) => item.src);

        if (images.length === 0) {
          return null;
        }

        const title = group.title?.[language] || group.title?.en;
        const description =
          group.description?.[language] || group.description?.en;

        return (
          <section
            key={title}
            className="rounded-[2rem] bg-white p-6 shadow-sm shadow-neutral-950/5"
          >
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                {title}
              </h3>
              {description ? (
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-2">
              {images.map(({ file, src }) => {
                const caption =
                  project.galleryCaptions?.[file]?.[language] ||
                  project.galleryCaptions?.[file]?.en;

                return (
                  <ProjectGalleryImage
                    key={src}
                    src={src}
                    title={project.title}
                    caption={caption}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
      {hardwareNote ? (
        <div className="rounded-[2rem] bg-white p-6 shadow-sm shadow-neutral-950/5">
          <h3 className="font-display text-2xl font-semibold text-neutral-950">
            {language === "it" ? "Interazione hardware" : "Hardware interaction"}
          </h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-600">
            {hardwareNote}
          </p>
        </div>
      ) : null}
    </div>
  );
};

const ProjectDetailClient = ({ project }) => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const description = project.description[language] || project.description.en;
  const intro =
    project.intro?.[language] || project.intro?.en || description;
  const role = project.role[language] || project.role.en;
  const collaboration =
    project.collaboration?.[language] || project.collaboration?.en;
  const gallery = project.gallery || [];
  const videos = project.videos || [];
  const tags = project.tags || [];
  const hasStructuredGallery = Boolean(project.galleryGroups?.length);
  const hasGroupedGallery =
    project.galleryLayout === "georisk" && !hasStructuredGallery;
  const primaryGalleryImage = hasGroupedGallery ? gallery[0] : null;
  const pairedGalleryImages = hasGroupedGallery ? gallery.slice(1) : gallery;

  return (
    <main className="bg-white text-neutral-950">
      <section className="border-b border-neutral-200/80 bg-white pb-20 pt-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              {role}
            </p>
            <div className="mt-6 flex items-center gap-5">
              {project.logo ? (
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-neutral-50 p-3 ring-1 ring-neutral-200/80">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              ) : null}
              <h1 className="font-display text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
                {project.title}
              </h1>
            </div>
            <p className="mt-6 text-xl leading-9 text-neutral-600">
              {intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/" className="rounded-full">
                {t.projectPage.back}
              </Button>
              {videos.map((video) => (
                <Button
                  key={video.src}
                  href={video.src}
                  className="rounded-full"
                  invert
                >
                  {videos.length > 1
                    ? `${t.projectPage.watchDemo}: ${video.title}`
                    : t.projectPage.watchDemo}
                </Button>
              ))}
            </div>
          </div>
          <ProjectHeroMedia project={project} />
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm shadow-neutral-950/5">
              <h2 className="font-display text-3xl font-semibold text-neutral-950">
                {t.projectPage.about}
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-600">
                {description}
              </p>
              {collaboration ? (
                <p className="mt-6 rounded-2xl bg-neutral-50 p-5 text-sm leading-7 text-neutral-700">
                  {collaboration}
                </p>
              ) : null}
              {tags.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <dl className="mt-10 grid gap-6 text-sm text-neutral-600 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <dt className="font-semibold text-neutral-950">Client</dt>
                  <dd className="mt-2">{project.client}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-950">
                    {t.projectPage.sector}
                  </dt>
                  <dd className="mt-2">{role}</dd>
                </div>
              </dl>
            </div>

            {gallery.length > 0 && hasStructuredGallery ? (
              <StructuredProjectGallery
                project={project}
                gallery={gallery}
                language={language}
              />
            ) : gallery.length > 0 ? (
              <div className="grid gap-6">
                {primaryGalleryImage ? (
                  <div
                    key={primaryGalleryImage}
                    className="overflow-hidden rounded-[2rem] bg-white shadow-sm shadow-neutral-950/5"
                  >
                    <Image
                      src={primaryGalleryImage}
                      alt={`${project.title} screenshot`}
                      width={1200}
                      height={800}
                      className="aspect-video h-full w-full object-contain"
                    />
                  </div>
                ) : null}
                <div
                  className={
                    hasGroupedGallery
                      ? "mx-auto grid max-w-5xl gap-5 sm:grid-cols-2"
                      : "grid gap-6 sm:grid-cols-2"
                  }
                >
                  {pairedGalleryImages.map((image) => (
                    <div
                      key={image}
                      className="overflow-hidden rounded-[2rem] bg-white shadow-sm shadow-neutral-950/5"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot`}
                        width={1200}
                        height={800}
                        className="aspect-video h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex min-h-72 items-center justify-center rounded-[2rem] border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
                Project screenshots will be added here when available.
              </div>
            )}
          </div>

          {project.showTrailerSection && videos.length > 1 ? (
            <div className="mt-12">
              <h2 className="font-display text-3xl font-semibold text-neutral-950">
                {t.projectPage.trailers}
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {videos.map((video) => (
                  <div
                    key={video.src}
                    className="overflow-hidden rounded-[2rem] bg-neutral-950 shadow-sm shadow-neutral-950/10"
                  >
                    <video
                      src={video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="aspect-video h-full w-full object-cover"
                    />
                    <div className="bg-white px-6 py-4 text-sm font-semibold text-neutral-950">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailClient;
