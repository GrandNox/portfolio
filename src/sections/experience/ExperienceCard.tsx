interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <div
      className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      {/* timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
        {index === 0 && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        )}
      </div>

      {/* exp content */}
      <div
        className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
      >
        <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
          <span className="text-sm text-primary font-medium">
            {experience.period}
          </span>
          <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
          <p className="text-muted-foreground">{experience.company}</p>
          <p className="text-sm text-muted-foreground mt-4">
            {experience.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
          >
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={`tech-${experience.role}-${tech}-${techIndex}`}
                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}