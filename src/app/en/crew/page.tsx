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
      title="Excellence in service comes through excellence in people."
      subtitle="Crew Management"
      intro="Every owner is unique. By understanding your needs, we find the tailored solution."
      blocks={[
        {
          title: "Elite Recruitment",
          text: "We select international professionals who possess not only technical skills but also the discretion and education required by the luxury sector. Structured screening, international network, no bulk CV sending.",
        },
        {
          title: "Training & Protocols",
          text: "We implement rigorous service protocols to ensure every detail — from table service to cabin management — is impeccable and timeless. Procedures are defined consistently with your habits, with language and cultural aspects considered in crew composition.",
        },
        {
          title: "Logistical & Contractual Management",
          text: "We handle bureaucratic management, shifts, rotations and contracts, allowing you to enjoy the yacht without any management worries. Contracts, payroll, insurance and replacements are handled continuously, with discreet intervention if needed.",
        },
      ]}
      closing="Stable, discreet service that protects your time and privacy."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
