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
    <section className="containers my-12 md:my32 flex flex-col gap-8 md:gap-32 text-zinc-500">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2>{section.title}</h2>
          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-xl object-cover text-purple-950"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  );
};
