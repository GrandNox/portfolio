import { ArrowRight, Download } from "lucide-react";
import Button from "../../components/Button";
import AnimatedBorderButton from "../../components/AnimatedBorderButton";
import { heroDescription, heroSocials } from "../../mock-data/hero";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Frontend Engineer · Angular · React
        </span>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
          Crafting{" "}
          <span className="font-serif italic font-normal text-white">
            digital
          </span>
          <br />
          experiences with
          <br />
          <span className="text-primary glow-text">clarity.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
          {heroDescription}
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
        <Button size="lg">
          Contact Me <ArrowRight className="w-5 h-5" />
        </Button>
        <a href="/anastasia_zhahlevska_frontend_engineer_CV.pdf" download>
          <AnimatedBorderButton>
            <Download className="w-5 h-5" />
            Download CV
          </AnimatedBorderButton>
        </a>
      </div>

      {/* socials */}
      <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
        <span className="text-sm text-muted-foreground">Follow me:</span>
        {heroSocials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <img src={social.icon} alt="social icon" className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
