import {
  highlights,
  aboutDescriptions,
  aboutMission,
} from "../mock-data/about";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left col */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building maintainable {""}
              <span className="font-serif font-normal text-white">
                interfaces for scalable and {""}
                <span className=" text-secondary-foreground ">
                  thoughtful{" "}
                </span>
                user experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              {aboutDescriptions.map((description, index) => (
                <p key={`description-${index}`}>{description}</p>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-serif font-medium italic text-foreground">
                "{aboutMission}"
              </p>
            </div>
          </div>

          {/* right col */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={`highlight-${item.title}-${index}`}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
