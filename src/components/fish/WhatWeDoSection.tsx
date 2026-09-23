import { ArrowUpRight, Handshake, ShieldCheck, Wallet } from "lucide-react";
import { LINKS } from "@/lib/site";
import { CtaLink, GlassCard, IconBadge, Reveal, Section, SectionHeading } from "./primitives";

const points = [
  {
    icon: Handshake,
    title: "Form and operate member-led clubs",
    body: "Stand up a Fish School with built-in governance, member onboarding, and coordinated operations from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Establish a verifiable track record",
    body: "Onchain proposals and voting create a durable, reviewable record of how every decision was made.",
  },
  {
    icon: Wallet,
    title: "Invest together, keep your carry",
    body: "No sponsors, no managers, no performance fees — just you and your community, aligned for the long term.",
  },
];

export function WhatWeDoSection({
  titleAs = "h2",
  headerOffset = false,
}: {
  titleAs?: "h1" | "h2";
  headerOffset?: boolean;
}) {
  return (
    <Section id="about" aurora headerOffset={headerOffset}>
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            as={titleAs}
            eyebrow="What we do"
            title={
              <>
                Smarter Investing.
                <br />
                Together.
              </>
            }
            lead="Keep your carry; we'll handle the ops. Fish Network is the operating layer beneath member-led investment clubs — structure, governance, and capital accounting, without the fund-manager overhead."
          />
          <Reveal delay={0.15} className="mt-9">
            <CtaLink href={LINKS.docs} external>
              Learn More <ArrowUpRight className="h-4 w-4" />
            </CtaLink>
          </Reveal>
        </div>

        <div className="grid gap-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GlassCard className="flex gap-5">
                <IconBadge>
                  <p.icon className="h-5 w-5" strokeWidth={1.5} />
                </IconBadge>
                <div>
                  <h3 className="text-[1.02rem] font-medium">{p.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.body}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
