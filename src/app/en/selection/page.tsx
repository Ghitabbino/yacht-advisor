import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Yacht Selection | Yacht Advisor",
  description:
    "Independent advice to find the yacht that fits your lifestyle. Technical analysis, yard comparison and protected negotiation.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Yacht Selection"
      title="Verified choice, not commercial push."
      subtitle="Criteria defined before options."
      intro="We start from your actual programme of use — people on board, areas, range, frequency — and define requirements. Only then do we compare models and yards, with no ties to brokers or builders."
      blocks={[
        {
          title: "Requirements definition",
          text: "We capture real use data and operational constraints: volumes, hull, range, layout, equipment. Incoherent options are excluded before any comparison.",
        },
        {
          title: "Due diligence & comparison",
          text: "We assess naval architecture, propulsion, stabilisation, systems and build quality. Models are benchmarked — including less exposed yards — checking recalls, support and value retention.",
        },
        {
          title: "Protected negotiation",
          text: "We handle the deal, surveys, sea trials and contracts on a fiduciary basis. Terms, equipment and warranties are documented before commitment.",
        },
      ]}
      closing="Outcome: a traceable, defensible choice with no surprises after purchase."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
