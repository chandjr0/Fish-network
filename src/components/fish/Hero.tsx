import { ArrowUpRight, BookOpen, Network } from "lucide-react";
import { motion } from "motion/react";
import { LINKS } from "@/lib/site";
import { CtaLink } from "./primitives";
import { ParticleWave } from "./ParticleWave";

const stats = [
  { k: "Idea → live club", v: "Weeks, not months" },
  { k: "Performance fees", v: "None — keep your carry" },
  { k: "Governance", v: "Onchain & verifiable" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-16 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora drift absolute inset-[-25%] opacity-80" />
        <ParticleWave className="absolute inset-x-0 bottom-0 h-[68%] w-full" />
        <div className="bg-background/40 absolute inset-0" />
      </div>

      <div className="shell relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 0.8, 0.24, 1] }}
          className="eyebrow"
        >
          Collaborative investing infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 0.8, 0.24, 1] }}
          className="mt-6 max-w-full text-[clamp(1.9rem,8.4vw,6.2rem)] leading-[0.95] font-semibold tracking-[-0.03em]"
        >
          <span className="text-gradient">FISH NETWORK.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 0.8, 0.24, 1] }}
          className="text-lavender mt-5 text-lg font-light sm:text-2xl"
        >
          The Collaborative Investing Platform.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
          className="text-muted-foreground mt-7 max-w-2xl font-mono text-[0.82rem] leading-relaxed sm:text-[0.9rem]"
        >
          Infrastructure for member-led investment clubs with verifiable governance, capital
          accounts, participation-based reputation, and transparent coordination.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.42 }}
          className="text-foreground/90 mt-6 text-sm tracking-[0.18em] uppercase"
        >
          Swim Together, Win Together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <CtaLink href={LINKS.onboarding} external size="lg">
            Launch a Fish School <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </CtaLink>
          <CtaLink href={LINKS.docs} external size="lg" variant="outline">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> Read the Docs
          </CtaLink>
          <CtaLink href={LINKS.partners} external size="lg" variant="outline">
            <Network className="h-4 w-4" aria-hidden="true" /> Explore Partnerships
          </CtaLink>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.66 }}
          className="border-border mt-14 grid max-w-4xl gap-6 border-t pt-8 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.k}>
              <dt className="mono-label">{s.k}</dt>
              <dd className="text-foreground mt-2 text-[0.95rem]">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
