import Homes from "./pages/home";
import { ProjectsComponent } from "./pages/home/componentsProjects";
import { Techs } from "./pages/home/sectionTechs";
import Experience from "./pages/home/Work";
import { HomePageData } from "./types/pageInfo";
import { fetchHygraphQuery } from "./utils/fetchHygrapQuery";

export const metadata = {
  title: "Home",
};

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
  page(where: {slug: "home"}) {
    introduction {
      raw
    }
    technologies {   # Esse campo está correto para 'Page'
      name
    }
    profilePicture {
      url
    }
    socials {
      url
      iconSvg
    }
    knownTechsh {
      iconSvg
      name
      startDate
    }
    highlightProjects {
      slug
      thumbnail {
        url
      }
      title
      shortDescription
      technology { 
        name
      }
    }
  }
     workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
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

export default async function page() {
  const { page: pageData, workExperiences } = await getPageData();

  console.log("knownTechs", pageData.knownTechsh);
  return (
    <>
      <Homes homeInfo={pageData} />
      <Techs techs={pageData.knownTechsh} />
      <ProjectsComponent projects={pageData.highlightProjects} />
      <Experience experiences={workExperiences} />
    </>
  );
}
