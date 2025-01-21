"use client";
import Image from "next/image";
import finance from "../../../../public/images/icons/finance.svg";
import { Link } from "../../../components/Link";
import { ArrowBigRightDash } from "lucide-react";

import { TechBadge } from "../../../components/TechBadge";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../../lib/animations";
import { Project } from "../../../types/projects";

type ProjectsCardsProps = {
  project: Project;
};

export const ProjectsCards = ({ project }: ProjectsCardsProps) => {
  return (
    <motion.div
      className="flex flex-col gap-6 py-6 containers text-zinc-500 lg:gap-12 lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>

      <div className="flex flex-col items-start flex-1 gap-3 text-xl lg:py-4">
        <motion.h3
          className="flex items-center gap-2 text-base md:text-xl"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image src={finance} alt="Logo" width={20} height={20} />
          {project.title}
        </motion.h3>

        <motion.p
          className="text-sm md:text-base"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {project.technology.map((tech, i) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="flex text-base transition-colors hover:text-purple-950"
        >
          Ver Projeto
          <ArrowBigRightDash />
        </Link>
      </div>
    </motion.div>
  );
};
