import { ArrowUpRight, Building2, Layers, Users } from "lucide-react";
import { LINKS } from "@/lib/site";
import { CtaLink, GlassCard, IconBadge, Reveal, Section, SectionHeading } from "./primitives";

const tiers = [
  {
    icon: Users,
    label: "Tier 01",
    title: "Fish School",
    body: "A single member-led investment club: shared thesis, shared diligence, shared governance.",
  },
  {
    icon: Layers,
    label: "Tier 02",
    title: "Fish Shoal",
    body: "A coordination layer above individual clubs, organizing a collection of Fish Schools toward one business outcome.",
  },
  {
    icon: Building2,
    label: "Role",
    title: "Shoal Leader",
    body: "The business or VC fund that administers and organizes the Shoal's constituent Fish Schools.",
  },
];

export function FishShoalSection() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Fish Shoals"
            title="For Businesses and VC Funds"
            lead="A Fish Shoal is a business or VC fund that wants to coordinate capital and community. A Shoal Leader can administer and organize a collection of individual Fish Schools to achieve a specific business outcome — a distinct, more advanced platform tier above a single club."
          />
          <Reveal delay={0.15} className="mt-9">
            <CtaLink href={LINKS.partners} external>
              Talk to Partnerships <ArrowUpRight className="h-4 w-4" />
            </CtaLink>
          </Reveal>
        </div>

        <div className="relative">
          <div className="grid gap-4">
            {tiers.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <GlassCard
                  className="flex gap-5"
                  /* nesting reads as an ascending coordination stack */
                >
                  <IconBadge>
                    <t.icon className="h-5 w-5" strokeWidth={1.5} />
                  </IconBadge>
                  <div style={{ marginLeft: `${i * 0.5}rem` }}>
                    <p className="mono-label">{t.label}</p>
                    <h3 className="mt-1.5 text-[1.02rem] font-medium">{t.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t.body}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
