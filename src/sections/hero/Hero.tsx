import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroProfile } from "./HeroProfile";
import { SkillsMarquee } from "./SkillsMarquee";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroProfile />
        </div>

        <SkillsMarquee />
      </div>
    </section>
  );
}