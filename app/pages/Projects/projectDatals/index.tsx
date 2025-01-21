"use client";
import { RicheText } from "../../../components/RichText";
import { TechBadge } from "../../../components/TechBadge";
import { TitleSection } from "../../../components/Title/title";
import { Button } from "../../../components/ui/button";
import { Project } from "../../../types/projects";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../../lib/animations";

type ProjectDetailsProps = {
  projectData: Project;
};
const ProjectDetails = ({ projectData }: ProjectDetailsProps) => {
  return (
    <div className="w-full sm:min-h-[700px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/backHero.png) no-repeat bottom/cover, url(${projectData.pageThumbnail.url}) no-repeat center/cover`,
          backgroundBlendMode: "multiply",
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <TitleSection
        subtitle="projetos"
        title={projectData.title}
        className="text-center items-center  sm:[&>h3]:text-4xl sm:[&>span]:text-xl [&>h3]:font-semibold [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:bg-gradient-to-r from-purple-600 to-zinc-300"
      />
      <motion.div
        className="text-center text-zinc-300 max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RicheText content={projectData.description.raw} />
      </motion.div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {projectData.technology.map((tech) => (
          <TechBadge
            key={tech.name}
            name={tech.name}
            // initial={{ opacity: 0, scale: 0 }}
            // whileInView={{ opacity: 1, x: 1 }}
            // exit={{ opacity: 0, scale: 0 }}
            // transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="flex flex-col items-center gap-2 my-6 sm:my-12 sm:gap-4 sm:flex-row"
        {...fadeUpAnimation}
      >
        {projectData?.githubUrl && (
          <a href={projectData.githubUrl} target="_blank">
            <Button className="transition-all shadow-lg bg-purple-950 shadow-purple-500 hover:shadow-zinc-800 text-zinc-300">
              repositorio
            </Button>
          </a>
        )}
        {projectData?.liveProjectUrl && (
          <a target="_blank" href={projectData.liveProjectUrl}>
            <Button className="transition-all shadow-lg bg-purple-950 shadow-purple-500 hover:shadow-zinc-800 text-zinc-300">
              Project Online
            </Button>
          </a>
        )}
      </motion.div>

      <Link
        href="/projects"
        className="flex items-center text-sm transition-colors hover:text-purple-600"
      >
        <ArrowBigLeftDash /> Voltar para projetos
      </Link>
    </div>
  );
};

export default ProjectDetails;
