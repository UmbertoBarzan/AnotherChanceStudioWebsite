import { getProjects } from "@/lib/projects";
import ProjectGridClient from "./ProjectGridClient";

const ProjectGrid = () => {
  const projects = getProjects();

  return <ProjectGridClient projects={projects} />;
};

export default ProjectGrid;
