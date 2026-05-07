import { AlertCircle, CheckCircle, Send } from "lucide-react";
import Button from "../../components/Button";
import { useState, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = {
  type: "success" | "error" | null;
  message: string;
};

export function ContactForm() {
  const initFormData: ContactFormData = {
    name: "",
    email: "",
    message: "",
  };
  const initSubmitStatus: SubmitStatus = {
    type: null,
    message: "",
  };

  const [formData, setFormData] = useState(initFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(initSubmitStatus);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setSubmitStatus(initSubmitStatus);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      let emailData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, emailData, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData(initFormData);
    } catch (error) {
      console.error("EmailJS error: ", error);

      const message =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";

      setSubmitStatus({
        type: "error",
        message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name.."
            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
          />
        </div>

        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>Sending...</>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </Button>

        {submitStatus.type && (
          <div
            className={`flex items-center gap-3
               p-4 rounded-xl ${
                 submitStatus.type === "success"
                   ? "bg-green-500/10 border border-green-500/20 text-green-400"
                   : "bg-red-500/10 border border-red-500/20 text-red-400"
               }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
