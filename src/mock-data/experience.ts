import type { SectionHeaderData } from "../components/SectionHeader";

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: "2022 — 2025",
    role: "Frontend Engineer",
    company: "GlobalLogic, Poland",
    description:
      "Scaled a cybersecurity feature into a multi-view workflow within a microfrontend architecture, improving maintainability and supporting growing product complexity.",
    technologies: ["Angular", "TypeScript", "JavaScript", "RxJs", "Jest", "Jasmine", "Microfrontends"],
  },
  {
    period: "2021 — 2022",
    role: "Frontend Engineer",
    company: "GlobalLogic, Ukraine",
    description:
      "Extended a configurable enterprise UI system with reusable components, improving frontend reliability and supporting client-specific workflows.",
    technologies: ["Angular", "TypeScript", "JavaScript", "RxJs", "Jest", "Cypress"],
  },
  {
    period: "2020 — 2021",
    role: "Junior Frontend Engineer",
    company: "Admixer, Ukraine ",
    description:
      "Implemented video platform features and improved application stability through defect resolution and frontend enhancements.",
    technologies: ["Angular", "TypeScript", "Jest"],
  },
  {
    period: "2018 — 2019",
    role: "Junior Java Engineer",
    company: "Vantino, Ukraine",
    description:
      "Contributed to Java microservices development, improving backend service stability and supporting core platform functionality.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "PostgreSQL", "Microservices"],
  },
];

export const experienceSection: SectionHeaderData = {
  label: "Career Journey",
  heading: "Experience",
  headingHighlight: "through evolving products.",
  description:
    "Translating complex product requirements into maintainable user experiences.",
};
