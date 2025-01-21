"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectSection as ProjectSectionds } from "../../../types/projects";
import { fadeUpAnimation } from "../../../lib/animations";

type ProjectSectionsProps = {
  sections: ProjectSectionds[];
};

export const ProjectSection = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="flex flex-col gap-8 my-12 containers md:my32 md:gap-32 text-zinc-500">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold md:text-2xl text-purple-950">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="object-cover w-full aspect-auto rounded-xl text-purple-950"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  );
};
