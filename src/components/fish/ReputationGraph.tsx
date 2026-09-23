import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const attributes = [
  "Participation tracking",
  "Governance involvement",
  "Member credibility",
  "Non-transferable reputation",
  "Decay mechanic",
  "Slashing for poor behaviour",
  "Long-term alignment",
];

const nodes = [
  { x: 50, y: 50, r: 15, score: "1,240", core: true },
  { x: 18, y: 26, r: 8, score: "612" },
  { x: 82, y: 22, r: 7, score: "480" },
  { x: 24, y: 78, r: 9, score: "735" },
  { x: 76, y: 76, r: 6.5, score: "318" },
  { x: 50, y: 14, r: 5.5, score: "204" },
  { x: 88, y: 52, r: 5, score: "141" },
  { x: 12, y: 52, r: 6, score: "266" },
];

export function ReputationGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <Section aurora>
      <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Reputation / Fish Points"
            title="Reputation Earned Through Participation"
            lead="Fish Points are non-transferable reputation tokens minted to verified participants for actively contributing to Fish Schools or Shoals. They decay over time to ensure ongoing engagement, and can be slashed for poor behaviour."
          />

          <Reveal delay={0.12} className="mt-7">
            <div className="glass border-violet/25 p-5">
              <p className="text-muted-foreground text-[0.86rem] leading-relaxed">
                Fish Points are not a tradable or speculative investment token. They cannot be
                transferred or sold, and they carry no promise of returns.
              </p>
            </div>
          </Reveal>

          <div className="mt-7 flex flex-wrap gap-2">
            {attributes.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <span className="mono-label border-border hover:border-violet/50 hover:text-lavender rounded-full border px-3.5 py-2 transition-colors duration-300">
                  {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div ref={ref}>
          <GlassCard interactive={false} className="p-5 sm:p-7">
            <div className="border-border flex items-center justify-between border-b pb-4">
              <p className="mono-label">Reputation graph</p>
              <p className="mono-label">Illustrative</p>
            </div>

            <div className="relative mt-6 aspect-square w-full">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="repEdge" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.56 0.238 300 / 0.55)" />
                    <stop offset="100%" stopColor="oklch(0.6 0.196 268 / 0.25)" />
                  </linearGradient>
                  <radialGradient id="repNode">
                    <stop offset="0%" stopColor="oklch(0.72 0.2 310)" />
                    <stop offset="100%" stopColor="oklch(0.5 0.23 285)" />
                  </radialGradient>
                </defs>

                {nodes.slice(1).map((n, i) => (
                  <motion.line
                    key={`e${i}`}
                    x1={50}
                    y1={50}
                    x2={n.x}
                    y2={n.y}
                    stroke="url(#repEdge)"
                    strokeWidth={0.4}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  />
                ))}

                {nodes.map((n, i) => (
                  <motion.circle
                    key={`n${i}`}
                    cx={n.x}
                    cy={n.y}
                    r={n.r / 2}
                    fill="url(#repNode)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: n.core ? 1 : 0.85 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 + i * 0.07, ease: [0.16, 0.8, 0.24, 1] }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                ))}
              </svg>

              {nodes.map((n, i) => (
                <motion.span
                  key={`s${i}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.06 }}
                  className="mono-label border-border bg-background/70 absolute -translate-x-1/2 rounded-full border px-2 py-0.5 text-[0.6rem] backdrop-blur"
                  style={{ left: `${n.x}%`, top: `${n.y + n.r / 2 + 3}%` }}
                >
                  {n.score}
                </motion.span>
              ))}
            </div>

            <p className="mono-label border-border mt-6 border-t pt-4">
              Member nodes weighted by participation — scores decay without activity
            </p>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
