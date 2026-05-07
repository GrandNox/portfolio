import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-f form-card via-card/50 to-transperent opacity-60" />

        {/* overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* description */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="text-muted-foreground text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={`tag-${project.title}-${tag}-${tagIndex}`}
              className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}