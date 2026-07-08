import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found | AnotherChanceStudio",
    };
  }

  return {
    title: `${project.title} | AnotherChanceStudio`,
    description: project.summary?.en || project.description.en || project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <p className="p-12 text-base text-neutral-600">Project not found.</p>;
  }

  return <ProjectDetailClient project={project} />;
}
