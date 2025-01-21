import { PageIntroduction } from "../pages/Projects/pageIntroduction";
import { ProjectList } from "../pages/Projects/projectList";
import { ProjectsPageData } from "../types/pageInfo";
import { fetchHygraphQuery } from "../utils/fetchHygrapQuery";

export const metadata = {
  title: "Projetos",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technology {
          name
        }
      }
    }
    `;

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24 // 1 day
  );
};

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  );
}
