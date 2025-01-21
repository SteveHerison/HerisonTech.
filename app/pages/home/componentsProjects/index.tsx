"use client";
import { ProjectsCards } from "./projectSection";
import { TitleSection } from "../../../components/Title/title";
import { Horizontal } from "../../../components/divider/Horizontal";
import { Link } from "../../../components/Link";
import { ArrowBigRightDash } from "lucide-react";
import { Project } from "../../../types/projects";

type highlightProjectsProps = {
  projects: Project[];
};

export const ProjectsComponent = ({ projects }: highlightProjectsProps) => {
  return (
    <div className="py-16 containers text-zinc-500">
      <TitleSection subtitle="destaques" title="Projetos" />
      <Horizontal className="mb-16" />

      <div className="">
        {projects?.map((projects) => (
          <div key={projects.slug}>
            <ProjectsCards project={projects} />
            <Horizontal className="mb-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span>Se interessou?</span>
          <Link
            href="/projects"
            className="inline-flex hover:text-purple-950 transition-colors"
          >
            Ver todos
            <ArrowBigRightDash />
          </Link>
        </p>
      </div>
    </div>
  );
};
