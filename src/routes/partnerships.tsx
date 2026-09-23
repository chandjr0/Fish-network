import { createFileRoute } from "@tanstack/react-router";
import { PartnershipMap } from "@/components/fish/PartnershipMap";
import { SiteFrame } from "@/components/fish/SiteFrame";
import { seoHead } from "@/lib/seo";

const title = "Partnerships — Fish Network";
const description =
  "Fish Network works with the operators, platforms, and advisors that member-led clubs depend on.";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    seoHead({
      title,
      description,
      path: "/partnerships",
      keywords:
        "Fish Network partnerships, emerging managers, fund administration, compliance partners, venture communities",
    }),
  component: PartnershipsPage,
});

function PartnershipsPage() {
  return (
    <SiteFrame>
      <PartnershipMap titleAs="h1" headerOffset />
    </SiteFrame>
  );
}
