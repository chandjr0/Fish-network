import { Linkedin } from "lucide-react";
import { TEAM } from "@/lib/site";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

export function TeamGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Meet the team"
        title="Founder-led, builder-run."
        lead="The team building the infrastructure behind member-led investment clubs."
        align="center"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.09}>
            <GlassCard className="group flex h-full flex-col p-5">
              <div className="border-border bg-secondary/50 relative aspect-[4/5] w-full overflow-hidden rounded-xl border">
                <picture>
                  <source srcSet={m.image} type="image/webp" />
                  <img
                    src={m.imageFallback}
                    alt={`${m.name}, ${m.title} at Fish Network`}
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </picture>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <span className="mono-label absolute bottom-3 left-3 text-foreground">
                  {i === 0 ? "Founder" : "Team"}
                </span>
              </div>

              <h3 className="mt-5 text-[1.02rem] font-medium">{m.name}</h3>
              <p className="mono-label mt-1.5">{m.title}</p>

              <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
                {m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${m.name} on LinkedIn`}
                    className="border-border text-muted-foreground hover:border-violet/50 hover:text-lavender focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </a>
                ) : null}
                {m.x ? (
                  <a
                    href={m.x}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${m.name} on X`}
                    className="border-border text-muted-foreground hover:border-violet/50 hover:text-lavender focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <XIcon className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {!m.linkedin && !m.x ? (
                  <span className="mono-label text-muted-foreground/70">add here</span>
                ) : null}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
