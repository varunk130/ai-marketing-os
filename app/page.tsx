import { Hero } from "@/components/overview/hero";
import { Problem } from "@/components/overview/problem";
import { Extent } from "@/components/overview/extent";
import { WhyNow } from "@/components/overview/why-now";
import { Solution } from "@/components/overview/solution";
import { MissionsPreview } from "@/components/overview/missions-preview";
import { HowItWorks } from "@/components/overview/how-it-works";
import { SkillsGrid } from "@/components/overview/skills-grid";
import { CtaSection } from "@/components/overview/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Extent />
      <WhyNow />
      <Solution />
      <MissionsPreview />
      <HowItWorks />
      <SkillsGrid />
      <CtaSection />
    </>
  );
}
