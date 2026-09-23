import { createFileRoute } from "@tanstack/react-router";
import { MissionSection } from "@/components/fish/MissionSection";
import { SiteFrame } from "@/components/fish/SiteFrame";
import { TeamGrid } from "@/components/fish/TeamGrid";
import { WhatWeDoSection } from "@/components/fish/WhatWeDoSection";
import { seoHead } from "@/lib/seo";

const title = "About Us — Fish Network";
const description =
  "Making collaborative capital formation accessible and sustainable. Fish Network is organized around members — governance, records, and capital accounting so a community can invest together.";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title,
      description,
      path: "/about",
      keywords:
        "About Fish Network, Fish Network team, Joseph Argiro, collaborative capital formation, member-led investment clubs",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteFrame>
      <WhatWeDoSection titleAs="h1" headerOffset />
      <MissionSection />
      <TeamGrid />
    </SiteFrame>
  );
}
