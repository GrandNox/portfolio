import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "../components/Button";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 border border-transparent transition-all duration-500 ${isScrolled ? "glass-strong border-border/20 py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl tracking-tight hover:text-primary">
          Anastasia Zhalevska
          <span className="text-primary">.</span>
        </a>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavLinks
            className="glass rounded-full px-2 py-1 flex items-center gap-1"
            itemClassName="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface "
          />
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* mobile navigation */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <NavLinks
            showCTA={true}
            onClick={() => setIsMobileMenuOpen(false)}
            className="container mx-auto px-6 py-6 flex flex-col gap-4"
            itemClassName="text-lg text-muted-foreground hover:text-foreground py-2"
          />
        </div>
      )}
    </header>
  );
}
