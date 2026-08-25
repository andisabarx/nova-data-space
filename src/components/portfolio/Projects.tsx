import { useState } from "react";
import { Send } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const filters = ["All", "Web", "Mobile", "Marketing", "Research"] as const;

const projects = [
  {
    image: p1,
    title: "Retail Revenue Command Center",
    stack: "Python · dbt · Power BI",
    category: "Web",
  },
  {
    image: p2,
    title: "Demand Forecasting Engine",
    stack: "Prophet · XGBoost · FastAPI",
    category: "Research",
  },
  {
    image: p3,
    title: "Store Location Intelligence",
    stack: "GeoPandas · H3 · Kepler.gl",
    category: "Research",
  },
  {
    image: p4,
    title: "On-Device AI Assistant",
    stack: "React Native · LangChain · RAG",
    category: "Mobile",
  },
  {
    image: p5,
    title: "Voice of Customer NLP",
    stack: "spaCy · BERTopic · Streamlit",
    category: "Marketing",
  },
  {
    image: p6,
    title: "Marketing Attribution Model",
    stack: "SQL · Bayesian MMM · Looker",
    category: "Marketing",
  },
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" label="Some of my Work" />

        <Reveal>
          <div className="mb-9 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setShowAll(false);
                }}
                className={cn(
                  "rounded-full px-5 py-2 font-ui text-xs font-semibold tracking-wide transition-colors sm:text-sm",
                  filter === f
                    ? "bg-foreground text-background"
                    : "border border-border text-subtle hover:border-primary hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="surface-card h-full overflow-hidden rounded-4xl p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={640}
                  className="h-44 w-full rounded-3xl object-cover"
                />
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 p-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-subtle">{p.stack}</p>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`View ${p.title}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Send className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!showAll && filtered.length > 3 && (
          <Reveal>
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="rounded-full border border-primary px-8 py-3 font-ui text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View All
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
