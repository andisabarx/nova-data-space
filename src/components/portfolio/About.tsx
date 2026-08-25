import { Download } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" label="Get to know me" />
        <div className="surface-card rounded-4xl p-7 sm:p-12">
          <Reveal>
            <p className="text-base leading-relaxed text-body sm:text-lg">
              I'm a data scientist who loves the unglamorous middle of the
              pipeline — the cleaning, the framing, the honest evaluation — as
              much as the final chart. For the past several years I've worked
              with product, marketing and operations teams to answer questions
              they didn't know their data could already answer.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              My toolkit spans Python (pandas, scikit-learn, PyTorch), SQL and
              dbt for modeling, Power BI and Streamlit for delivery, plus modern
              LLM tooling for retrieval-augmented assistants. I'm equally
              comfortable with time-series forecasting, NLP and spatial data
              science.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              If you have a dataset gathering dust, a forecast nobody trusts, or
              an AI idea that needs a pragmatic first version — let's build it
              together.
            </p>
            <a
              href="#resume"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 font-ui text-sm font-bold text-background transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
