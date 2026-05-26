import {
  BriefcaseBusiness,
  Component,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Highlights = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const highlights: Highlights[] = [
  {
    icon: Component,
    title: "Frontend Systems",
    description:
      "Building reusable UI components and shared frontend patterns focused on long-term maintainability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Feature Ownership",
    description:
      "Contributing to feature delivery across planning, implementation, and refinement.",
  },

  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working across distributed teams to deliver reliable solutions within evolving products.",
  },
  {
    icon: Workflow,
    title: "Complex Workflows",
    description:
      "Developing data-driven interfaces and multi-view workflows within enterprise applications.",
  },
];

export const aboutDescriptions = [
  "Frontend Engineer with 5+ years of experience building Angular and TypeScript applications within enterprise and microfrontend environments.",
  "Core contributor to a cybersecurity platform, developing reusable UI components, scalable workflows, and maintainable frontend architecture for complex products.",
  "Interested in frontend engineering across Angular and React, focused on scalable systems and long-term maintainability.",
];

export const aboutMission =
  "Building UI solutions that balance usability, scalability, and long-term maintainability.";
