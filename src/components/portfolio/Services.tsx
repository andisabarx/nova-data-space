import { BarChart3, Bot, Brain, Map, MessageSquareText, TrendingUp } from "lucide-react";
import { useState } from "react";
import chatbot from "@/assets/chatbot.jpg";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    text: "Clean pipelines and dashboards that turn raw tables into decisions leaders actually use.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics & Forecasting",
    text: "Demand, churn and revenue forecasts with honest uncertainty bands and backtesting.",
  },
  {
    icon: MessageSquareText,
    title: "Natural Language Processing",
    text: "Topic modeling, sentiment scoring and document intelligence on messy real-world text.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    text: "From feature engineering to deployment — models that survive contact with production.",
  },
  {
    icon: Map,
    title: "Spatial Data Science",
    text: "Geospatial clustering, catchment analysis and location intelligence maps.",
  },
];

const tags = [
  "Machine Learning",
  "SQL",
  "Power BI",
  "AI/LLMs",
  "Spatial Data Science",
];

export function Services() {
  const [activeTag, setActiveTag] = useState(tags[0]);

  return (
    <section id="services" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="What I do" label="My Services" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2">
            <article className="surface-card flex h-full flex-col gap-6 overflow-hidden rounded-4xl p-7 sm:flex-row sm:items-center sm:p-9">
              <div className="min-w-0 flex-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface">
                  <Bot className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  AI Chatbots
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Retrieval-augmented assistants grounded in your own
                  documentation, with evaluation harnesses and guardrails so the
                  answers stay trustworthy.
                </p>
              </div>
              <img
                src={chatbot}
                alt="AI chatbot illustration"
                loading="lazy"
                width={900}
                height={700}
                className="w-full rounded-3xl border border-border object-cover sm:w-52"
              />
            </article>
          </Reveal>

          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="surface-card h-full rounded-4xl p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t)}
                className={cn(
                  "rounded-full px-5 py-2 font-ui text-xs font-semibold tracking-wide transition-colors sm:text-sm",
                  activeTag === t
                    ? "bg-foreground text-background"
                    : "border border-border text-subtle hover:border-primary hover:text-primary",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
