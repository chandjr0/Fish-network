import {
  Atom,
  Building,
  FlaskConical,
  GraduationCap,
  Rocket,
  Sprout,
  Sparkles,
  Users,
} from "lucide-react";
import { GlassCard, IconBadge, Reveal, Section, SectionHeading } from "./primitives";

const cases = [
  { icon: Users, title: "Emerging manager communities", body: "Designed for managers building a track record alongside their community." },
  { icon: Rocket, title: "Founder & operator angel groups", body: "Supports operators who invest together and share diligence." },
  { icon: GraduationCap, title: "University alumni investor clubs", body: "Helps organize alumni networks around a defined thesis." },
  { icon: Sparkles, title: "Sector-focused investing communities", body: "Provides infrastructure for specialists coordinating deal flow." },
  { icon: FlaskConical, title: "Biotech or AI investment circles", body: "Supports technical groups that need rigorous decision records." },
  { icon: Sprout, title: "Pre-seed & seed investment groups", body: "Designed for high-frequency, small-check collaboration." },
  { icon: Building, title: "Family-office adjacent communities", body: "Helps organize coordinated participation with clear records." },
  { icon: Atom, title: "Venture education communities", body: "Provides infrastructure for learning-by-participating cohorts." },
];

export function UseCaseCards() {
  return (
    <Section aurora>
      <SectionHeading
        eyebrow="Platform use cases"
        title="Built for Communities That Invest Together"
        lead="Fish Network provides the infrastructure. The thesis, the members, and the decisions belong to the club."
        align="center"
      />

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <GlassCard className="flex h-full flex-col gap-4 p-5">
              <IconBadge>
                <c.icon className="h-5 w-5" strokeWidth={1.5} />
              </IconBadge>
              <h3 className="text-[0.95rem] leading-snug font-medium">{c.title}</h3>
              <p className="text-muted-foreground mt-auto text-[0.83rem] leading-relaxed">{c.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
