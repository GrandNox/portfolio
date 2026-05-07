import { heroSocials } from "../mock-data/hero";
import { navList } from "./NavLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* logo*/}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AZ<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Anastasia Zhahlevska
            </p>
          </div>

          {/* links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navList.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* socials */}
          <div className="flex items-center gap-4">
            {heroSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <img src={social.icon} alt="social icon" className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
