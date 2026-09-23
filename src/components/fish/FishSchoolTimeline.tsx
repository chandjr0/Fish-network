import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { LINKS } from "@/lib/site";
import { CtaLink, Reveal, Section, SectionHeading } from "./primitives";

const steps = [
  { t: "Define the investment thesis", d: "Set the mandate, sector focus, and check size your club will pursue." },
  { t: "Invite and onboard members", d: "Bring in your community with verified onboarding and role assignment." },
  { t: "Establish governance rules", d: "Encode quorum, voting thresholds, and permissions from the operating agreement." },
  { t: "Coordinate capital accounts", d: "Track commitments and member capital accounts against club-controlled treasury." },
  { t: "Review opportunities", d: "Members and organizers surface their own deals; diligence is collaborative." },
  { t: "Vote and document decisions", d: "Every proposal, vote, and outcome is recorded onchain." },
  { t: "Track participation and reputation", d: "Contribution is measured through participation-based Fish Points." },
  { t: "Manage ongoing club operations", d: "Reporting, records, and coordination for the life of the club." },
];

export function FishSchoolTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Section aurora>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Fish Schools"
          title="Launch a Fish School"
          lead="A structured path from thesis to fully operational, member-led investment club."
        />
        <Reveal delay={0.12}>
          <CtaLink href={LINKS.onboarding} external>
            Launch a Fish School <ArrowUpRight className="h-4 w-4" />
          </CtaLink>
        </Reveal>
      </div>

      <ol ref={ref} className="mt-14 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.t}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 0.8, 0.24, 1] }}
            className="relative pt-7"
          >
            <span className="hairline absolute inset-x-0 top-[3px] h-px opacity-70" />
            <span className="bg-violet node-pulse absolute top-0 left-0 h-[7px] w-[7px] rounded-full" />
            <p className="mono-label">Step {String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-[0.98rem] leading-snug font-medium">{s.t}</h3>
            <p className="text-muted-foreground mt-2 text-[0.83rem] leading-relaxed">{s.d}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
