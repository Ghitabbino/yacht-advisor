import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Crew Management | Yacht Advisor",
  description:
    "Crew is the soul of the onboard experience. We recruit and manage discreet, skilled professionals aligned with your style.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Crew Management"
      title="Service continuity, not improvisation."
      subtitle="Quality is assessed in day-to-day operation."
      intro="Crew affects privacy, safety and service regularity. We assess profiles and processes so management is predictable and aligned with your expectations."
      blocks={[
        {
          title: "Profile selection",
          text: "We assess technical skills, verifiable references, interpersonal fit and compatibility with your context. Structured screening, international network, no bulk CV sending.",
        },
        {
          title: "Service standards",
          text: "We define onboard procedures — hospitality, service, housekeeping, safety, communication — consistent with your habits. Language and cultural aspects are considered in crew composition.",
        },
        {
          title: "Ongoing management",
          text: "Contracts, rotations, payroll, insurance, certification and replacements are handled on a continuous basis. If issues arise, we intervene discreetly without burden on you.",
        },
      ]}
      closing="Outcome: stable, discreet service that protects your time and privacy."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
