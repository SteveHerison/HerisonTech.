import type { RichTextContent } from "@graphcms/rich-text-types";
import { knownTechsh } from "./projects";

export type WorkExperience = {
  companyLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  technology: knownTechsh[];
  description: {
    raw: RichTextContent;
  };
};
