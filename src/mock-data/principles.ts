import {
  BriefcaseBusiness,
  Component,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { SectionHeaderData } from "../components/SectionHeader";

type Principles = {
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
};

export const principles: Principles[] = [
  {
    icon: BriefcaseBusiness,
    title: "Product-oriented development",
    category: "Business & Delivery",
    description:
      "Translating evolving business requirements into scalable and reliable frontend solutions.",
  },
  {
    icon: Component,
    title: "Reusable UI systems",
    category: "Frontend Architecture",
    description:
      "Creating shared components and frontend patterns that improve consistency and long-term maintainability.",
  },
  {
    icon: Workflow,
    title: "Complex workflows",
    category: "Enterprise Applications",
    description:
      "Developing data-driven interfaces and multi-view workflows within enterprise applications.",
  },
  {
    icon: Users,
    title: "Collaborative engineering",
    category: "Cross-functional Teams",
    description:
      "Working across distributed teams and cross-functional environments to deliver reliable frontend solutions.",
  },
];

export const principlesSection: SectionHeaderData = {
  label: "Engineering mindset",
  heading: "Approach to",
  headingHighlight: "frontend engineering.",
};
