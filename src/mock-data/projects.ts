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
    title: "Portfolio",
    description: "Personal portfolio website built with React, TypeScript and Tailwind CSS",
    image: "portfolio_preview.png",
    tags: ["React", "Typescript"],
    link: "https://github.com/GrandNox/portfolio",
  },
  {
    title: "Rapid Reflex Game",
    description: "A simple reaction game built with Angular 20",
    image: "/reflex-game.jpg",
    tags: ["Angular", "TypeScript"],
    link: "https://github.com/GrandNox/reflex-game",
  },
];

export const projectsSection: SectionHeaderData = {
  label: "Featured Work",
  heading: "Projects",
  headingHighlight: "in progress",
  description: "",
  additionalText: "View All Projects",
};
