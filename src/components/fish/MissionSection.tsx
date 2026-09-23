import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal, Section, SectionRule } from "./primitives";

const lines = [
  "Making collaborative capital formation",
  "accessible and sustainable.",
];

const values = [
  {
    k: "We value",
    v: "Active participation over passive speculation.",
  },
  {
    k: "We build for",
    v: "Long-term alignment over short-term liquidity.",
  },
  {
    k: "We provide",
    v: "Infrastructure — not advice, not opportunities.",
  },
];

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Section aurora>
      <div ref={ref} className="max-w-5xl">
        <p className="eyebrow">Mission & vision</p>
        <h2 className="mt-6 text-[2.1rem] leading-[1.05] font-semibold tracking-[-0.02em] sm:text-[3.2rem] lg:text-[4rem]">
          {lines.map((line, li) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.95, delay: 0.1 + li * 0.12, ease: [0.16, 0.8, 0.24, 1] }}
                className="text-gradient block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <Reveal delay={0.35} className="mt-9 max-w-2xl">
          <p className="text-muted-foreground text-base leading-relaxed">
            Private markets have been organized around managers. Fish Network is organized around
            members. We build the governance, records, and capital accounting that let a community
            invest together — transparently, verifiably, and on its own terms.
          </p>
        </Reveal>

        <div className="mt-14">
          <SectionRule />
          <dl className="mt-8 grid gap-8 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.k} delay={0.15 + i * 0.1}>
                <dt className="mono-label">{v.k}</dt>
                <dd className="mt-3 text-[1.05rem] leading-snug font-light">{v.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
