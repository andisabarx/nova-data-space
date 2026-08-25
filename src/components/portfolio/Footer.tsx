import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="px-5 pb-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="surface-card rounded-4xl p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                Let's Work Together <span className="text-primary">-</span>
              </h2>
              <a
                href="mailto:hello@georgy.dev"
                className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-4 text-sm text-body transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="truncate">hello@georgy.dev</span>
              </a>
            </div>

            <hr className="my-8 border-t border-border" />

            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <p className="min-w-0 text-xs text-subtle sm:text-sm">
                © 2026 All rights reserved.
              </p>
              <div className="flex shrink-0 items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-subtle transition-colors hover:border-primary hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
