import profile from "@/assets/profile.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44">
            <div className="hero-glow absolute -inset-8 rounded-full" />
            <img
              src={profile}
              alt="Portrait of Georgy, data scientist"
              width={816}
              height={816}
              className="relative h-full w-full rounded-full border border-border object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-10 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Georgy Georgy
          </h1>
          <p className="gradient-label mt-3 font-display text-2xl font-bold sm:text-3xl">
            Data Sorcerer 🧙‍♂️
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            I turn messy datasets into decisions. My passion lives at the
            intersection of data science, machine learning and AI — building
            models, dashboards and intelligent products that make businesses
            measurably smarter.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex rounded-full border border-primary px-8 py-3 font-ui text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact Me
          </a>
        </Reveal>
      </div>
    </section>
  );
}
