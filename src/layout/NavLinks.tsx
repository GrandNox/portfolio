import Button from "../components/Button";

type Navigation = {
  href: string;
  label: string;
};

export const navList: Navigation[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#principles", label: "Principles" },
  { href: "#contact", label: "Contact" },
];

type NavLinksProps = {
  showCTA?: boolean;
  onClick?: () => void;
  className?: string;
  itemClassName?: string;
};

export default function NavLinks({
  showCTA = false,
  onClick,
  className,
  itemClassName,
}: NavLinksProps) {
  return (
    <div className={className}>
      {navList.map((link) => (
        <a
          key={link.href}
          onClick={onClick}
          href={link.href}
          className={itemClassName}
        >
          {link.label}
        </a>
      ))}

      {showCTA && (
        <div className=" md:block">
          <Button>Contact Me</Button>
        </div>
      )}
    </div>
  );
}
