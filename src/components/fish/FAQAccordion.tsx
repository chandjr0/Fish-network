import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FAQS, FAQ_DISCLAIMER } from "@/lib/site";
import { Reveal, Section, SectionHeading } from "./primitives";

export function FAQAccordion({
  titleAs = "h2",
  headerOffset = false,
}: {
  titleAs?: "h1" | "h2";
  headerOffset?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const Question = titleAs === "h1" ? "h2" : "h3";

  return (
    <Section aurora headerOffset={headerOffset}>
      <SectionHeading
        as={titleAs}
        eyebrow="FAQ"
        title="Questions, answered plainly."
        lead="How Fish Network works — and, just as importantly, what it does not do."
      />

      <div className="border-border mt-12 border-t">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={Math.min(i, 6) * 0.04}>
              <div className="border-border border-b">
                <Question className="text-[0.98rem] leading-snug font-medium">
                  <button
                    id={`faq-button-${i}`}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="group focus-visible:ring-ring flex min-h-11 w-full items-start justify-between gap-6 py-5 text-left focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span className="text-foreground group-hover:text-lavender leading-snug font-medium transition-colors">
                      {f.q}
                    </span>
                    <span className="border-border text-muted-foreground group-hover:border-violet/50 group-hover:text-lavender mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </Question>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 0.8, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground max-w-3xl pr-12 pb-6 text-[0.88rem] leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <div className="glass border-violet/25 p-5">
          <p className="text-muted-foreground text-[0.85rem] leading-relaxed">{FAQ_DISCLAIMER}</p>
        </div>
      </Reveal>
    </Section>
  );
}
