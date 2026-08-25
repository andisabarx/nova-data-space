import { useState } from "react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "service" | "message", string>>;

const servicesList = [
  "Data Analytics & Visualization",
  "Predictive Analytics & Forecasting",
  "Natural Language Processing",
  "AI Chatbots",
  "Machine Learning",
  "Spatial Data Science",
];

const fieldClass =
  "w-full rounded-2xl border border-border bg-surface px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-primary";

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please pick a service.";
    if (values.message.trim().length < 10)
      next.message = "Tell me a bit more (at least 10 characters).";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    toast.success("Message ready to send", {
      description: `Thanks ${values.name.trim()} — I'll get back to you shortly.`,
    });
    setValues({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Get In Touch" label="Let's work together" />

        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="surface-card space-y-5 rounded-4xl p-7 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-ui text-xs font-semibold tracking-wider text-subtle uppercase"
                >
                  Name
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Your name"
                  className={fieldClass}
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-ui text-xs font-semibold tracking-wider text-subtle uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@company.com"
                  className={fieldClass}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block font-ui text-xs font-semibold tracking-wider text-subtle uppercase"
              >
                Service
              </label>
              <select
                id="service"
                value={values.service}
                onChange={(e) => set("service", e.target.value)}
                className={fieldClass}
              >
                <option value="">Select a service</option>
                {servicesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-2 text-xs text-destructive">{errors.service}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-ui text-xs font-semibold tracking-wider text-subtle uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell me about your project..."
                className={`${fieldClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-foreground px-8 py-4 font-ui text-sm font-bold text-background transition-opacity hover:opacity-90"
            >
              Get in Touch
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
