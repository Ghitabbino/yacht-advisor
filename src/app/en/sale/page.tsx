import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sales Advisory | Yacht Advisor",
  description:
    "Sell at the right value, at the right time, discreetly. We appoint the ideal broker and manage positioning and negotiation.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Sales Advisory"
      title="Measured preparation, not haste."
      subtitle="Correct positioning before market exposure."
      intro="The brokerage market rewards correct preparation. We assess comparables, timing and channel to avoid undervaluation and ineffective exposure."
      blocks={[
        {
          title: "Channel selection",
          text: "We identify the broker with proven competence in that type, region and price bracket. Mandate and terms are negotiated to protect your position.",
        },
        {
          title: "Preparation & documentation",
          text: "Technical documentation, inventory and pricing based on comparable market data. Professional, coherent presentation from day one on the market.",
        },
        {
          title: "Negotiation & closing",
          text: "We filter enquiries, manage viewings and offers, lead the negotiation and oversee surveys and contracts. Identity remains private if requested, until closing.",
        },
      ]}
      closing="Outcome: a fair return, with a traceable and discreet process."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
