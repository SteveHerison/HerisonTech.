import React from "react";
import { PageIntroduction } from "./pageIntroduction";
import { ProjectList } from "./projectList";
import { ProjectsPageData } from "../../types/pageInfo";
import { fetchHygraphQuery } from "../../utils/fetchHygrapQuery";

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

  return fetchHygraphQuery(query, 1000 * 60 * 60 * 24);
};

export default async function ProjectsContext() {
  const { projects } = await getPageData();
  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  );
}
