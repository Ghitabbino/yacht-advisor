import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Yacht Selection | Yacht Advisor",
  description:
    "Independent advice to find the yacht that fits your lifestyle. Technical analysis, yard comparison and protected negotiation.",
  keywords: [
    "yacht selection",
    "yacht purchase advisory",
    "yacht due diligence",
    "yard comparison",
    "independent yacht consultancy",
  ],
  alternates: {
    canonical: "/en/selection/",
    languages: {
      "it-IT": "/selezione/",
      "en-US": "/en/selection/",
    },
  },
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Yacht Selection"
      title="Finding the perfect vessel is not a matter of luck, but of precision."
      subtitle="Yacht Selection"
      intro="Every owner is unique. By understanding your needs, we find the tailored solution."
      blocks={[
        {
          title: "Lifestyle Analysis",
          text: "We don't just look at models. We analyse how you want to live at sea — family cruising, social events or extreme adventure — reconstructing habits, people on board and expectations. This allows us to identify the hull that fits your rhythm, and not vice versa, excluding incoherent options before any comparison and protecting time and investment.",
        },
        {
          title: "Technical Verification & Performance",
          text: "We rigorously assess engine efficiency, hull stability and behaviour, integration of onboard technological systems and overall build quality. We verify maintenance history, equipment, yard support and value retention over time to guarantee a reliable, safe vessel defensible as a long-term investment.",
        },
        {
          title: "Budget Optimisation",
          text: "We support you in negotiating with brokers and builders on a fiduciary basis, handling surveys, sea trials and contracts. Every detail — equipment, warranties, conditions — is put in writing before signing, so the investment value mirrors your market expectations without surprises.",
        },
      ]}
      closing="A conscious choice, with no surprises after purchase."
      backHref="/en/#services"
      backLabel="← All Services"
      ctaHref="/en/#contact"
      ctaLabel="Request a Private Consultation"
      ctaSublabel="Reply within 24 hours • No obligation"
    />
  );
}
