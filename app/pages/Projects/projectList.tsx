"use client";

import Link from "next/link";
import ProjectCard from "./projectCard";
import { Project } from "../../types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../lib/animations";
type ProjectsListProps = {
  projects: Project[];
};
export const ProjectList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="containers py-32 grid grid-cols-1 text-zinc-600 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-3">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
