import { contactInfo } from "../../mock-data/contact";

export function ContactInfo() {
  return (
    <div className="space-y-6 animate-fade-in animation-delay-400">
      <div className="glass rounded-3xl p-8">
        <h3 className="text-xl font-semibold mb-6">
          Contact Information
        </h3>
        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <a
              key={`contact-${item.label}-${index}`}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
                <div className="font-medium">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}