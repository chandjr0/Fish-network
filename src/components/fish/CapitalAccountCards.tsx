import { ArrowUpRight, Banknote, ClipboardList, Landmark, PieChart, ScrollText, Users } from "lucide-react";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LINKS } from "@/lib/site";
import { CtaLink, GlassCard, IconBadge, Reveal, Section, SectionHeading } from "./primitives";

const cards = [
  { icon: Users, title: "Member capital accounts", body: "Per-member balances and ownership references maintained at club level." },
  { icon: Banknote, title: "Contribution tracking", body: "Commitments and contributions recorded as they are made." },
  { icon: ClipboardList, title: "Club-level records", body: "A single, reviewable ledger of club activity and decisions." },
  { icon: PieChart, title: "Investment allocation visibility", body: "See how capital is allocated across the club's positions." },
  { icon: Landmark, title: "Treasury coordination", body: "Coordinate with club-controlled treasury accounts and wallets." },
  { icon: ScrollText, title: "Transparent participation history", body: "A durable record of who participated in what, and when." },
];

const metrics = [
  { label: "Committed capital", value: 4_250_000, prefix: "$" },
  { label: "Member accounts", value: 128, prefix: "" },
  { label: "Recorded allocations", value: 37, prefix: "" },
];

export function CapitalAccountCards() {
  return (
    <Section>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Capital accounts"
          title="Capital Accounts Built for Collaborative Investing"
          lead="Clear tracking of member participation, capital accounts, commitments, ownership references, and investment-club activity."
        />
        <Reveal delay={0.12}>
          <CtaLink href={LINKS.docs} external>
            Explore Capital Infrastructure <ArrowUpRight className="h-4 w-4" />
          </CtaLink>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <GlassCard interactive={false} className="p-5 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="mono-label">{m.label}</p>
                <Counter value={m.value} prefix={m.prefix} />
              </div>
            ))}
          </div>
          <p className="mono-label border-border mt-5 border-t pt-4">
            Placeholder data — illustrative only, not actual club performance
          </p>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.16} className="mt-6">
        <div className="glass border-violet/25 p-5">
          <p className="text-muted-foreground text-[0.86rem] leading-relaxed">
            <span className="text-foreground font-medium">Funds are not held by the platform.</span>{" "}
            Contributions go directly to club-controlled treasury accounts or wallets, often managed
            by third-party providers. Fish Network provides onchain governance and capital
            accounting, but does not custody funds and has no ability to move them.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <GlassCard className="flex h-full flex-col gap-4">
              <IconBadge>
                <c.icon className="h-5 w-5" strokeWidth={1.5} />
              </IconBadge>
              <h3 className="text-[0.98rem] font-medium">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Counter({ value, prefix }: { value: number; prefix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 0.8, 0.24, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <p ref={ref} className="text-gradient mt-2 font-mono text-2xl font-semibold sm:text-3xl">
      {prefix}
      {Math.round(n).toLocaleString("en-US")}
    </p>
  );
}
