import { Globe, Mail, MapPin, type LucideIcon } from "lucide-react";
import type { SectionHeaderData } from "../components/SectionHeader";

type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "zhahlevska@gmail.com",
      href: "mailto:zhahlevska@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kyiv, Ukraine",
      href: "#",
    },
    {
      icon: Globe,
      label: "Relocation",
      value: "Open to UK, Ireland & EU opportunities",
      href: "#",
    },
  ];

export const contactSection: SectionHeaderData = {
  label: "Get In Touch",
  heading: "Let’s connect",
  headingHighlight: "and discuss opportunities.",
  description:
    "Feel free to reach out regarding frontend engineering opportunities.",
};

