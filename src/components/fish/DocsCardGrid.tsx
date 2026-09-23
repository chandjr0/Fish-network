import { ArrowUpRight, Search } from "lucide-react";
import { LINKS } from "@/lib/site";
import { CtaLink, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const docs = [
  { path: "/mission", title: "Mission & Vision", body: "Why collaborative capital formation, and what we optimize for." },
  { path: "/fish-schools", title: "Fish School setup", body: "Thesis, members, entity, and launch checklist." },
  { path: "/governance", title: "Governance", body: "Proposals, quorum, voting thresholds, and decision records." },
  { path: "/capital-accounts", title: "Capital accounts", body: "Commitments, contributions, and ownership references." },
  { path: "/fish-points", title: "Reputation / Fish Points", body: "Minting, decay, and slashing mechanics." },
  { path: "/compliance", title: "Compliance-aware launch", body: "Entity review and eligibility responsibilities by club." },
  { path: "/partnerships", title: "Partnerships", body: "Working with the collaborative investing ecosystem." },
  { path: "/faqs", title: "FAQs", body: "Answers for organizers, members, and partners." },
  { path: "/blog", title: "Blog", body: "Notes on governance, capital formation, and platform updates." },
];

export function DocsCardGrid() {
  return (
    <Section aurora>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Documentation"
          title="Documentation for Builders, Organizers & Members"
          lead="Start here, then go deep. Everything about setup, governance, capital accounting, and reputation."
        />
        <Reveal delay={0.12}>
          <CtaLink href={LINKS.docs} external>
            Read the Docs <ArrowUpRight className="h-4 w-4" />
          </CtaLink>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <div className="glass flex items-center gap-3 px-5 py-4">
          <Search className="text-muted-foreground h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          <span className="text-muted-foreground font-mono text-[0.8rem]">
            Search the docs — governance, quorum, capital accounts, Fish Points…
          </span>
          <span className="mono-label border-border ml-auto hidden rounded-md border px-2 py-1 sm:inline">
            Start here
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.05}>
            <a
              href={`${LINKS.docs}${d.path}`}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-visible:ring-ring group block h-full rounded-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <GlassCard className="h-full p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="mono-label">docs{d.path}</p>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-lavender h-4 w-4 shrink-0 transition-colors" />
                </div>
                <h3 className="mt-3 text-[0.98rem] font-medium">{d.title}</h3>
                <p className="text-muted-foreground mt-2 text-[0.83rem] leading-relaxed">{d.body}</p>
              </GlassCard>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
