import { heroSkills } from "../../mock-data/hero";

export function SkillsMarquee() {
  const duplicatedSkills = [...heroSkills, ...heroSkills];

  return (
    <div className="mt-20 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Technologies I work with
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="shrink-0 px-8 py-0">
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}