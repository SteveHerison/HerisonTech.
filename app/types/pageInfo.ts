import { WorkExperience } from "./workExperiences";
import type { RichTextContent } from "@graphcms/rich-text-types";
import { knownTechsh, Project } from "./projects";

// Tipo para redes sociais
export type Social = {
  url: string;
  iconSvg: string;
};

// Tipo para as informações da homepage
export type HomePageInfo = {
  introduction: {
    raw: RichTextContent; // O conteúdo de introdução é do tipo RichTextContent
  };
  technologies: knownTechsh[]; // Lista de tecnologias que são do tipo KnowTech
  profilePicture: {
    url: string; // A URL da imagem do perfil
  };
  socials: Social[]; // Lista de links de redes sociais
  knownTechsh: knownTechsh[]; // Lista de tecnologias conhecidas (corrigido de 'knownTechsh' para 'knownTech')
  highlightProjects: Project[]; // Projetos em destaque
};

// Tipo para dados de uma página de projeto
export type ProjectPageData = {
  project: Project; // Um único projeto com as propriedades do tipo 'Project'
};

// Tipo para uma lista de projetos (usado na página de projetos)
export type ProjectsPageData = {
  projects: Project[]; // Uma lista de projetos
};

// Tipo para os dados estáticos da página de projetos
export type ProjectsPageStaticData = {
  projects: {
    slug: string; // Apenas o slug de cada projeto
  }[];
};

// Tipo para os dados da homepage, incluindo experiências de trabalho
export type HomePageData = {
  page: HomePageInfo; // Informações da homepage
  workExperiences: WorkExperience[]; // Experiências de trabalho
};
