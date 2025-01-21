"use client";
import { RicheText } from "../../../components/RichText";
import { TechBadge } from "../../../components/TechBadge";
import { WorkExperience } from "../../../types/workExperiences";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../../lib/animations";

type ExperienceItemProps = {
  experience: WorkExperience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = new Date(experience.startDate);
  const endDate = new Date(experience.endDate);
  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });
  const formattedEndDate = experience.endDate
    ? format(endDate, "MMM yyyy", { locale: ptBR })
    : "o momento";

  const end = endDate ? endDate : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
            : ""
        }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4 ">
        <div className="rounded-full border border-purple-950 p-0.5">
          <Image
            src={experience.companyLogo.url}
            alt={`${experience.companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-0.5 bg-purple-950" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="hover:text-purple-950 transition-colors"
          >
            @{experience.companyName}
          </a>
          <h4>{experience.role}</h4>
          <span className="text-zinc-500/50">
            {formattedStartDate} . {formattedEndDate} {formattedDuration}
          </span>
          <div className="flex flex-col gap-4">
            <RicheText content={experience.description.raw} />
          </div>
        </div>
        <p className="font-semibold text-sm text-zinc-500/50 mb-3 mt-6 ">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-96 mb-8">
          {experience.technology.map((tech, i) => (
            <TechBadge
              key={`experience-${experience.companyName}-tech-${tech.name}`}
              name={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
