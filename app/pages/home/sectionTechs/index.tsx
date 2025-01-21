"use client";
import { TechCards } from "../../../components/Techs";
import { TitleSection } from "../../../components/Title/title";
import { knownTechsh } from "../../../types/projects";
import { motion } from "framer-motion";

type KnowTechsProps = {
  techs: knownTechsh[];
};
export const Techs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="py-16 containers">
      <TitleSection
        title="Conhecimentos"
        subtitle="competências"
        className="text-zinc-500"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-2 mt-14 ">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <TechCards tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
