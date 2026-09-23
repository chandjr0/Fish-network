import { createFileRoute } from "@tanstack/react-router";
import { FAQAccordion } from "@/components/fish/FAQAccordion";
import { SiteFrame } from "@/components/fish/SiteFrame";
import { seoHead } from "@/lib/seo";
import { FAQS } from "@/lib/site";

const title = "FAQ — Fish Network";
const description =
  "How Fish Network works — and, just as importantly, what it does not do. Answers on Fish Schools, governance, capital accounts, and Fish Points.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => {
    const head = seoHead({
      title,
      description,
      path: "/faq",
      keywords:
        "Fish Network FAQ, Fish Schools, Fish Points, investment club organizer, accredited investor, capital accounts",
    });
    return {
      ...head,
      scripts: [
        ...(head.scripts ?? []),
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteFrame>
      <FAQAccordion titleAs="h1" headerOffset />
    </SiteFrame>
  );
}
