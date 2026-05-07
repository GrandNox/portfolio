import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { principles, principlesSection } from "../mock-data/principles";
import { SectionHeader } from "../components/SectionHeader";

export default function Principles() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const activeItem = principles[activePrinciple];

  const next = () => {
    setActivePrinciple((prev) => (prev + 1) % principles.length);
  };

  const previous = () => {
    setActivePrinciple(
      (prev) => (prev - 1 + principles.length) % principles.length,
    );
  };

  return (
    <section id="principles" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          label={principlesSection.label}
          heading={principlesSection.heading}
          headingHighlight={principlesSection.headingHighlight}
        />

        {/* carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* main principle */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{activeItem.description}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20 hover:text-primary">
                  <activeItem.icon />
                </div>
                <div>
                  <div className="font-semibold">{activeItem.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {activeItem.category}
                  </div>
                </div>
              </div>
            </div>

            {/* navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {principles.map((_, index) => (
                  <button
                    key={`principle-nav-${index}`}
                    onClick={() => setActivePrinciple(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activePrinciple
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
