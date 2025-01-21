import { knownTechsh } from "../../types/projects";
import { getRelativeTimeString } from "../../utils/relativeTime";
import { CMSIcon } from "../CMSIcon";

type TechsProps = {
  tech: knownTechsh;
};

export const TechCards = ({ tech }: TechsProps) => {
  // Verifique se startDate está definido e válido
  if (!tech.startDate) {
    return <div>Data de início não fornecida.</div>;
  }

  // Use diretamente a data no formato ISO (yyyy-mm-dd)
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há ", "");

  return (
    <div className="flex flex-col p-6 transition-all rounded-xl bg-zinc-100 hover:text-purple-950 text-zinc-500 hover:shadow-md hover:bg-zinc-400 ">
      <div className="flex items-center justify-between">
        <p className="font-semibold transition-colors">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <span className="transition-colors">{relativeTime} de Experiência</span>
    </div>
  );
};
