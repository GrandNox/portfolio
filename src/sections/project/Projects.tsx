import { ArrowUpRight } from "lucide-react";

import { githubLink, projects, projectsSection } from "../../mock-data/projects";
import AnimatedBorderButton from "../../components/AnimatedBorderButton";
import { SectionHeader } from "../../components/SectionHeader";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          label={projectsSection.label}
          heading={projectsSection.heading}
          headingHighlight={projectsSection.headingHighlight}
          description={projectsSection.description}
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* view all */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              {projectsSection.additionalText}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
}
