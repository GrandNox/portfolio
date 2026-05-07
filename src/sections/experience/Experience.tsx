import { experiences, experienceSection } from "../../mock-data/experience";
import { SectionHeader } from "../../components/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";

export default function Experience() {
  
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          label={experienceSection.label}
          heading={experienceSection.heading}
          headingHighlight={experienceSection.headingHighlight}
          description={experienceSection.description}
          className="max-w-3xl mb-16"
        />

        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

        {/* exp */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`experience-${exp.role}-${exp.company}-${index}`}
              experience={exp}
              index={index}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
