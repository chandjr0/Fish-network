import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/fish/Hero";
import { WhatWeDoSection } from "@/components/fish/WhatWeDoSection";
import { EcosystemFeatureCards } from "@/components/fish/EcosystemFeatureCards";
import { FishSchoolTimeline } from "@/components/fish/FishSchoolTimeline";
import { FishShoalSection } from "@/components/fish/FishShoalSection";
import { GovernanceDashboardMockup } from "@/components/fish/GovernanceDashboardMockup";
import { CapitalAccountCards } from "@/components/fish/CapitalAccountCards";
import { ReputationGraph } from "@/components/fish/ReputationGraph";
import { NomineeRiderCard } from "@/components/fish/NomineeRiderCard";
import { DocsCardGrid } from "@/components/fish/DocsCardGrid";
import { PartnershipMap } from "@/components/fish/PartnershipMap";
import { UseCaseCards } from "@/components/fish/UseCaseCards";
import { MissionSection } from "@/components/fish/MissionSection";
import { TeamGrid } from "@/components/fish/TeamGrid";
import { FAQAccordion } from "@/components/fish/FAQAccordion";
import { ContactForm } from "@/components/fish/ContactForm";
import { SiteFrame } from "@/components/fish/SiteFrame";
import { seoHead } from "@/lib/seo";

const title = "Fish Network — The Collaborative Investing Platform";
const description =
  "Infrastructure for member-led investment clubs with verifiable governance, capital accounts, and participation-based reputation. Swim Together, Win Together.";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title,
      description,
      path: "/",
      keywords:
        "Fish Network, collaborative investing, investment clubs, Fish Schools, member-led investing, onchain governance, capital accounts, Fish Points",
    }),
  component: Index,
});

function Index() {
  return (
    <SiteFrame>
      <Hero />
      <WhatWeDoSection />
      <EcosystemFeatureCards />
      <FishSchoolTimeline />
      <FishShoalSection />
      <GovernanceDashboardMockup />
      <CapitalAccountCards />
      <ReputationGraph />
      <NomineeRiderCard />
      <DocsCardGrid />
      <PartnershipMap />
      <UseCaseCards />
      <MissionSection />
      <TeamGrid />
      <FAQAccordion />
      <ContactForm />
    </SiteFrame>
  );
}
