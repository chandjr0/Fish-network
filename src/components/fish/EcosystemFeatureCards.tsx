import { GaugeCircle, Scale, Timer, Wallet } from "lucide-react";
import { GlassCard, IconBadge, Reveal, Section, SectionHeading } from "./primitives";

const features = [
  {
    icon: Scale,
    label: "01 / Shared outcomes",
    title: "Split risk and reward evenly",
    body: "Collaborate on diligence and sourcing to drive shared outcomes.",
  },
  {
    icon: Timer,
    label: "02 / Velocity",
    title: "Faster Setup",
    body: "Idea to fully operational club in weeks, not months.",
  },
  {
    icon: GaugeCircle,
    label: "03 / Rules",
    title: "Built-In Governance",
    body: "Proposals, voting, and permissions follow the club's operating agreement by design.",
  },
  {
    icon: Wallet,
    label: "04 / Ownership",
    title: "Keep Your Carry",
    body: "No sponsors, no managers, no performance fees, just member ownership.",
  },
];

export function EcosystemFeatureCards() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Ecosystem features"
        title="Core Offerings"
        lead="The four commitments that define how a Fish School operates."
        align="center"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <GlassCard className="flex h-full flex-col gap-5">
              <IconBadge>
                <f.icon className="h-5 w-5" strokeWidth={1.5} />
              </IconBadge>
              <p className="mono-label">{f.label}</p>
              <h3 className="text-[1.05rem] leading-snug font-medium">{f.title}</h3>
              <p className="text-muted-foreground mt-auto text-sm leading-relaxed">{f.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
