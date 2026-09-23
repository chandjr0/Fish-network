import { ArrowUpRight, Check, FileText, Vote } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { LINKS } from "@/lib/site";
import { CtaLink, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const capabilities = [
  "Proposal creation",
  "Member review",
  "Voting flows",
  "Transparent decision records",
  "Participation logs",
  "Rule-based coordination",
  "Governance history",
  "Entity-level compliance review before launch where required",
];

export function GovernanceDashboardMockup() {
  return (
    <Section aurora>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Governance"
            title="Verifiable Governance for Member-Led Decisions"
            lead="Designed to support the way clubs actually decide: proposals are raised, reviewed, voted, and recorded — structured for the rules in the club's own operating agreement."
          />
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <li className="text-muted-foreground flex items-start gap-2.5 text-[0.86rem] leading-relaxed">
                  <Check className="text-lavender mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.6} />
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2} className="mt-9">
            <CtaLink href={LINKS.docs} external>
              Read Governance Docs <ArrowUpRight className="h-4 w-4" />
            </CtaLink>
          </Reveal>
        </div>

        <ProposalStack />
      </div>
    </Section>
  );
}

const cards = [
  { id: "FS-014", title: "Allocate to seed round — climate analytics", quorum: 82, yes: 11, no: 2, status: "Open" },
  { id: "FS-013", title: "Amend voting threshold to 60%", quorum: 100, yes: 14, no: 1, status: "Passed" },
  { id: "FS-012", title: "Add secondary treasury signer", quorum: 100, yes: 9, no: 6, status: "Passed" },
];

function ProposalStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <div ref={ref} className="relative">
      <GlassCard interactive={false} className="p-5 sm:p-7">
        <div className="border-border flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2.5">
            <Vote className="text-lavender h-4 w-4" strokeWidth={1.6} />
            <p className="mono-label">Governance / proposals</p>
          </div>
          <p className="mono-label">Illustrative data</p>
        </div>

        <div className="mt-5 space-y-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 26, scale: 0.97 }}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.14, ease: [0.16, 0.8, 0.24, 1] }}
              className="border-border bg-secondary/45 rounded-xl border p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono-label">Proposal {c.id}</p>
                  <h4 className="mt-1.5 text-[0.92rem] leading-snug font-medium">{c.title}</h4>
                </div>
                <span className="mono-label border-border shrink-0 rounded-full border px-2.5 py-1">
                  {c.status}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="mono-label">Quorum</p>
                  <p className="mono-label">{c.quorum}%</p>
                </div>
                <div className="bg-muted h-1 w-full overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${c.quorum}%` } : { width: 0 }}
                    transition={{ duration: 1.1, delay: 0.4 + i * 0.14, ease: "easeOut" }}
                    className="h-full [background-image:var(--gradient-cta)]"
                  />
                </div>
                <div className="mono-label flex gap-5 pt-1">
                  <span>For {c.yes}</span>
                  <span>Against {c.no}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-border mt-5 flex items-center gap-2.5 border-t pt-4">
          <FileText className="text-muted-foreground h-3.5 w-3.5" strokeWidth={1.6} />
          <p className="mono-label">Decision log — every outcome recorded onchain</p>
        </div>
      </GlassCard>
    </div>
  );
}
