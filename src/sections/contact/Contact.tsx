
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { Availability } from "./Availability";
import { contactSection } from "../../mock-data/contact";
import { SectionHeader } from "../../components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          label={contactSection.label}
          heading={contactSection.heading}
          headingHighlight={contactSection.headingHighlight}
          description={contactSection.description}
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ContactForm />

          <div className="space-y-6">
            <ContactInfo />
            <Availability />
          </div>
        </div>
      </div>
    </section>
  );
}
