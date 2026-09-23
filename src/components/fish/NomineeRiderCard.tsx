import { Download, FileSignature, ShieldCheck, ClipboardCheck } from "lucide-react";
import { LINKS, SMS_CONSENT } from "@/lib/site";
import { CtaLink, GlassCard, IconBadge, Reveal, Section, SectionHeading } from "./primitives";

const highlights = [
  { icon: FileSignature, title: "Free and editable", body: "Adapt the rider to your club's operating agreement before signature." },
  { icon: ShieldCheck, title: "Explicit authority", body: "Authority to execute documents or transmit funds must be granted in writing by the club." },
  { icon: ClipboardCheck, title: "Built-in accountability", body: "Reporting obligations and accountability are written into the rider itself." },
];

export function NomineeRiderCard() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Resource"
            title="Nominee Rider Agreement"
            lead="A free, editable rider that lets clubs authorize a member to act on their behalf with built-in accountability and reporting."
          />
          <div className="mt-8 grid gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <GlassCard className="flex gap-5">
                  <IconBadge>
                    <h.icon className="h-5 w-5" strokeWidth={1.5} />
                  </IconBadge>
                  <div>
                    <h3 className="text-[0.98rem] font-medium">{h.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{h.body}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.14}>
          <GlassCard interactive={false} className="p-6 sm:p-8">
            <p className="mono-label">Free download / rider template</p>
            <h3 className="text-gradient mt-4 text-2xl font-semibold">
              Authorize an organizer — on the club's terms.
            </h3>
            <p className="text-muted-foreground mt-4 text-[0.9rem] leading-relaxed">
              A Fish School Organizer coordinates the club, but any authority to execute documents or
              transmit funds must be explicitly granted by the club through a written rider.
            </p>
            <div className="mt-7">
              <CtaLink href={`${LINKS.docs}/nominee-rider-agreement`} external size="lg">
                <Download className="h-4 w-4" /> Download Now
              </CtaLink>
            </div>
            <p className="text-muted-foreground/80 border-border mt-7 border-t pt-5 font-mono text-[0.68rem] leading-relaxed">
              {SMS_CONSENT}
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
