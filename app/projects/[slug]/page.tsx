import ProjectDatails from "../../pages/Projects/projectDatals";
import { ProjectSection } from "../../pages/Projects/projectDatals/projectSection";
import { ProjectPageData, ProjectsPageStaticData } from "../../types/pageInfo";
import { fetchHygraphQuery } from "../../utils/fetchHygrapQuery";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectsProps = {
  params: {
    slug: string;
  };
};

// Função para buscar detalhes do projeto
const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technology {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
  `;
  const data = await fetchHygraphQuery<ProjectPageData>(
    query,
    1000 * 60 * 60 * 24
  ); // 1 day
  return data;
};

export default async function Project({ params }: ProjectsProps) {
  const { slug } = params;

  const projectData = await getProjectDetails(slug);

  if (!projectData) {
    return notFound();
  }

  return (
    <>
      <ProjectDatails projectData={projectData.project} />
      <ProjectSection sections={projectData.project.sections} />{" "}
    </>
  );
}

// Gerar os parâmetros estáticos para as páginas
export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100) {
        slug
      }
    }
  `;

  const data = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  if (!data || !data.projects) {
    console.error("No projects found in the response:", data);
    return [];
  }

  const { projects } = data;
  return projects;
}

export async function generateMetadata({
  params: { slug },
}: ProjectsProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data.project;

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
