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
      title="Sustainable setup, not just occupancy."
      subtitle="Compatibility between charter use and asset protection."
      intro="Charter can cover part of the costs and keep the unit active, but it requires selection and processes. We set it up to be compatible with standards, availability and value protection."
      blocks={[
        {
          title: "Strategy & pricing",
          text: "We analyse positioning, seasonality and competition to define rates, calendar and areas. Your weeks of use and maintenance intervals are factored in.",
        },
        {
          title: "Selective distribution",
          text: "We engage only charter brokers with verified reliability and channels consistent with the unit's standard. Each enquiry is assessed before acceptance.",
        },
        {
          title: "Operating processes",
          text: "Coordination of charter, maintenance, provisioning and housekeeping with defined procedures and reporting on costs and income. Ongoing control without burden on you.",
        },
      ]}
      closing="Outcome: a programme that protects the unit, respects your time and makes the financial result transparent."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
