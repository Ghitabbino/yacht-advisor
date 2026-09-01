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
      title="We enhance your investment with professionalism and discretion."
      subtitle="Sales Advisory"
      intro="Every owner is unique. By understanding your needs, we find the tailored solution."
      blocks={[
        {
          title: "Ideal Broker Selection",
          text: "We leave nothing to chance. We identify the most qualified brokers specialised in your vessel's reference market, ensuring excellent representation and access to the most exclusive channels.",
        },
        {
          title: "Prestige Marketing",
          text: "We curate every detail of the exposure: from high-quality professional photography to targeted promotion on leading luxury yachting portals, to present the yacht in the most attractive way possible.",
        },
        {
          title: "Negotiation Management",
          text: "We support the owner at every stage of the sale process, from handling offers to concluding the contract, ensuring utmost protection of interests and discretion.",
        },
      ]}
      closing="A fair return, with a traceable and discreet process."
      backHref="/en#services"
      backLabel="← All Services"
      ctaHref="/en#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
