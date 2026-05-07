import type { SectionHeaderData } from "../components/SectionHeader";

type Projects = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export const githubLink = "https://github.com/GrandNox";

export const projects: Projects[] = [
  {
    title: "Project 1",
    description: "Some description of the project named 'One'",
    image: "/project2.jpg",
    tags: ["React", "Typescript"],
    link: githubLink,
  },
  {
    title: "Project 2",
    description: "Some description of the project named 'Two'",
    image: "/project3.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    link: githubLink,
  },
];

export const projectsSection: SectionHeaderData = {
  label: "Featured Work",
  heading: "Projects",
  headingHighlight: "in progress",
  description: "Coming soon...",
  additionalText: "View All Projects",
};
