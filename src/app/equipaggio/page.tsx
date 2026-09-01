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
      title="Continuità di servizio, non improvvisazione."
      subtitle="La qualità si valuta nella gestione quotidiana."
      intro="L'equipaggio incide su riservatezza, sicurezza e regolarità del servizio. Valutiamo profili e processi perché la gestione sia prevedibile e allineata alle vostre aspettative."
      blocks={[
        {
          title: "Selezione dei profili",
          text: "Valutiamo competenze tecniche, referenze verificabili, idoneità relazionale e compatibilità con il vostro contesto. Screening strutturato, rete internazionale, nessun invio massivo di curricula.",
        },
        {
          title: "Standard di servizio",
          text: "Definiamo procedure di bordo — accoglienza, servizio, gestione cabine, sicurezza, comunicazione — coerenti con le vostre abitudini. Lingua e aspetti culturali sono considerati nella composizione dell'equipaggio.",
        },
        {
          title: "Gestione operativa",
          text: "Contratti, turnazioni, retribuzioni, coperture assicurative, certificazioni e sostituzioni sono gestiti continuativamente. In caso di criticità interveniamo con discrezione, senza carico per voi.",
        },
      ]}
      closing="Obiettivo: un servizio stabile e riservato, che tutela tempo e privacy."
    />
  );
}
