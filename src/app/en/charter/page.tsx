import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Charter Management | Yacht Advisor",
  description:
    "Turn your yacht into a performing asset without compromising standards, privacy or control. Bespoke charter strategy.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Charter Management"
      title="We turn your passion into a profitable investment."
      subtitle="Charter Management"
      intro="Every owner is unique. By understanding your needs, we find the tailored solution."
      blocks={[
        {
          title: "Profitability Optimisation",
          text: "We analyse the global market, competitive positioning and seasonality to define the most effective pricing strategy. We assess calendar, operating areas and maintenance intervals to maximise return on investment while preserving your weeks of use and protecting the unit's value over time.",
        },
        {
          title: "International Promotion",
          text: "We connect the yacht with the most exclusive clientele through a selected network of charter brokers and luxury platforms. Each enquiry is profiled and carefully evaluated to ensure a steady flow of high-level bookings consistent with the vessel's standard and your reputation.",
        },
        {
          title: "Operational Management & Standards",
          text: "We supervise every logistical aspect between charters — coordination of maintenance, provisioning, cleaning and crew preparation — ensuring vessel and crew meet impeccable standards for every guest. Standardised experience, continuous quality control and transparent reporting on costs and revenues: you see only the result.",
        },
      ]}
      closing="A charter programme that protects the yacht, respects your time and turns a fixed cost into transparent return."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
