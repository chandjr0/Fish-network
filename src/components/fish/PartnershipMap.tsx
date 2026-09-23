import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LINKS } from "@/lib/site";
import { CtaLink, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const categories = [
  "Emerging managers",
  "Investor communities",
  "Startup ecosystems",
  "Compliance & legal partners",
  "Fund administration partners",
  "Private market platforms",
  "Web3 infrastructure partners",
  "Universities & founder networks",
  "Venture communities",
];

export function PartnershipMap({
  titleAs = "h2",
  headerOffset = false,
}: {
  titleAs?: "h1" | "h2";
  headerOffset?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const apply = () => setCompact(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const orbit = compact ? 27 : 34;
  const nodes = categories.map((label, i) => {
    const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
    return {
      label,
      x: 50 + Math.cos(angle) * orbit,
      y: 50 + Math.sin(angle) * orbit,
    };
  });

  return (
    <Section headerOffset={headerOffset}>
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            as={titleAs}
            eyebrow="Partnerships"
            title="Partnerships for the Collaborative Investing Ecosystem"
            lead="Fish Network works with the operators, platforms, and advisors that member-led clubs depend on."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <li className="mono-label border-border hover:border-violet/50 hover:text-lavender rounded-full border px-3.5 py-2 transition-colors duration-300">
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2} className="mt-9">
            <CtaLink href={LINKS.partners} external>
              Explore Partnerships <ArrowUpRight className="h-4 w-4" />
            </CtaLink>
          </Reveal>
        </div>

        <div ref={ref} className="min-w-0" aria-hidden="true">
          <GlassCard interactive={false} className="p-5 sm:p-7">
            <div className="border-border flex items-center justify-between border-b pb-4">
              <p className="mono-label">Partner ecosystem map</p>
              <p className="mono-label">Fish Network core</p>
            </div>

            <div className="relative mt-6 aspect-square w-full">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="pmEdge" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.56 0.238 300 / 0.6)" />
                    <stop offset="100%" stopColor="oklch(0.6 0.196 268 / 0.2)" />
                  </linearGradient>
                </defs>
                {nodes.map((n, i) => (
                  <motion.line
                    key={n.label}
                    x1={50}
                    y1={50}
                    x2={n.x}
                    y2={n.y}
                    stroke="url(#pmEdge)"
                    strokeWidth={0.35}
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: "easeOut" }}
                  />
                ))}
                <circle cx={50} cy={50} r={7} fill="oklch(0.56 0.238 300 / 0.18)" />
                <circle cx={50} cy={50} r={3.4} fill="oklch(0.62 0.23 300)" />
              </svg>

              {nodes.map((n, i) => (
                <motion.span
                  key={n.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.06 }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <span className="bg-neon-blue node-pulse h-2 w-2 rounded-full" />
                  <span className="mono-label border-border bg-background/70 max-w-[4.4rem] rounded-full border px-1.5 py-0.5 text-center text-[0.48rem] leading-tight backdrop-blur sm:max-w-[8.5rem] sm:px-2 sm:text-[0.55rem]">
                    {n.label}
                  </span>
                </motion.span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
