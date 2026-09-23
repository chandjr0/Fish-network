import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/fish/ContactForm";
import { SiteFrame } from "@/components/fish/SiteFrame";
import { seoHead } from "@/lib/seo";

const title = "Contact — Fish Network";
const description =
  "Tell us about your community and what you're trying to coordinate. Contact Fish Network about launching a Fish School or a partnership.";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title,
      description,
      path: "/contact",
      keywords:
        "Contact Fish Network, launch a Fish School, partnership inquiry, Fish Network phone, Fish Network email",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteFrame>
      <ContactForm titleAs="h1" headerOffset />
    </SiteFrame>
  );
}
