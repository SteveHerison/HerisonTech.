import { TitleSection } from "../../../components/Title/title";
import ExperienceItem from "./experienceItem";
import { WorkExperience } from "../../../types/workExperiences";

type WorkexperienceProps = {
  experiences: WorkExperience[];
};

const Experience = ({ experiences }: WorkexperienceProps) => {
  return (
    <section className="flex flex-col gap-10 py-16 md:gap-4 lg:gap-16 md:flex-row containers text-zinc-500">
      <div className="space-y-6 max-w-96">
        <TitleSection
          subtitle="experiencias"
          title="Experiência Profissional"
        />
        <p>
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
