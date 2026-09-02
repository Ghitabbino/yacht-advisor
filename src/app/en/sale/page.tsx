import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sales Advisory | Yacht Advisor",
  description:
    "Sell at the right value, at the right time, discreetly. We appoint the ideal broker and manage positioning and negotiation.",
  keywords: [
    "yacht sale",
    "yacht sale advisory",
    "yacht broker selection",
    "yacht valuation",
    "yacht negotiation",
  ],
  alternates: {
    canonical: "/en/sale/",
    languages: {
      "it-IT": "/vendita/",
      "en-US": "/en/sale/",
    },
  },
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
          text: "We leave nothing to chance. We analyse real comparables, positioning and timing to identify the most qualified brokers specialised in your vessel's reference market — by type, area and price bracket — ensuring excellent representation, access to the most exclusive channels and negotiation of mandate and conditions to protect your position.",
        },
        {
          title: "Prestige Marketing",
          text: "We curate every detail of the exposure with consulting rigour: high-quality professional photography and videography, impeccable technical descriptions, documented inventory and targeted promotion on leading luxury yachting portals. We present the yacht at its best from day one, with pricing grounded in comparable market data and consistent with its value.",
        },
        {
          title: "Negotiation Management",
          text: "We support the owner at every stage of the sale — filtering enquiries, managing viewings and offers, conducting negotiations and supervising surveys, contracts and closing — ensuring utmost protection of interests, transparency on steps and discretion on identity until completion, if required.",
        },
      ]}
      closing="A fair return, with a traceable and discreet process."
      backHref="/en/#services"
      backLabel="← All Services"
      ctaHref="/en/#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
