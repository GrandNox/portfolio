export type SectionHeaderData = {
  label?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  additionalText?: string;
};

type SectionHeaderProps = Partial<SectionHeaderData> & {
  className?: string;
};

export function SectionHeader({
  label,
  heading,
  headingHighlight,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mx-auto max-w-3xl mb-16 ${className}`}>
      {label ? (
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          {label}
        </span>
      ) : null}

      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
        {heading}
        {headingHighlight ? (
          <span className="font-serif italic font-normal text-white">
            {" "}
            {headingHighlight}
          </span>
        ) : null}
      </h2>

      {description ? (
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          {description}
        </p>
      ) : null}
    </div>
  );
}
