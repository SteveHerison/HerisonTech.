import Image from "next/image";
import { Project } from "../../types/projects";

type ProjectCardProps = {
  project: Project;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technology.map((x) => x.name).join(", ");
  return (
    <div className="rounded-xl h-[436px] flex flex-col overflow-y-hidden border-2 bg-white hover:border-purple-950 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full overflow-hidden ">
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col flex-1 p-8 ">
        <strong className="transition-colors group-hover:text-purple-950">
          {project.title}
        </strong>
        <p className="mt-2 mb-2 line-clamp-4">{project.shortDescription}</p>
        <span className="block mt-auto text-sm truncate">{technologies}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
