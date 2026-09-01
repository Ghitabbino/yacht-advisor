import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gestione Equipaggi | Yacht Advisor",
  description:
    "L'equipaggio è l'anima dell'esperienza a bordo. Selezioniamo e gestiamo professionisti discreti, preparati e allineati al vostro stile.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Gestione Equipaggi"
      title="L'eccellenza del servizio passa attraverso l'eccellenza delle persone."
      subtitle="Gestione Equipaggi"
      intro="Ogni armatore è unico. Capendo i vostri bisogni, troviamo la soluzione su misura."
      blocks={[
        {
          title: "Recruitment di Elite",
          text: "Selezioniamo professionisti internazionali che possiedano non solo competenze tecniche certificate e referenze verificabili, ma anche la discrezione, l'educazione e l'intelligenza relazionale richieste dal settore luxury. Ogni profilo viene valutato per compatibilità con il vostro contesto familiare e con gli ospiti, attraverso screening rigoroso e rete internazionale, senza invio massivo di curricula.",
        },
        {
          title: "Formazione e Protocolli",
          text: "Implementiamo protocolli di servizio rigorosi e su misura — accoglienza, mise en place, servizio in tavola, gestione cabine, sicurezza e comunicazione — affinché ogni dettaglio sia impeccabile, coerente e senza tempo. Definiamo standard chiari, lingua e aspetti culturali inclusi, per un servizio continuo e allineato alle vostre aspettative.",
        },
        {
          title: "Gestione Logistica e Contrattuale",
          text: "Ci occupiamo continuativamente della gestione burocratica, dei turni, delle rotazioni, dei contratti, delle buste paga, delle assicurazioni e delle certificazioni, permettendovi di godere lo yacht senza alcuna preoccupazione gestionale. In caso di necessità, interveniamo con discrezione e rapidità per sostituzioni o criticità, senza alcun carico per voi.",
        },
      ]}
      closing="Un servizio stabile e riservato, che tutela tempo e privacy."
    />
  );
}
