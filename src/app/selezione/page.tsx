import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Selezione Imbarcazione | Yacht Advisor",
  description:
    "Consulenza indipendente per scegliere lo yacht cucito sul vostro stile di vita. Analisi tecnica, comparazione cantieri e negoziazione tutelata.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Selezione Imbarcazione"
      title="Scelta verificata, non spinta commerciale."
      subtitle="Criteri definiti prima delle opzioni."
      intro="Partiamo dal programma d'uso effettivo — persone a bordo, aree, autonomia, frequenza — e definiamo i requisiti. Solo dopo confrontiamo modelli e cantieri, senza vincoli con broker o produttori."
      blocks={[
        {
          title: "Definizione dei requisiti",
          text: "Raccogliamo dati d'uso reale e vincoli operativi: volumi, carena, autonomia, layout, dotazioni. Escludiamo le opzioni non coerenti prima di qualsiasi comparazione.",
        },
        {
          title: "Due diligence e comparazione",
          text: "Valutiamo architettura navale, propulsione, stabilizzazione, sistemi e qualità costruttiva. Confrontiamo modelli — inclusi cantieri meno esposti — verificando richiami, assistenza e tenuta del valore.",
        },
        {
          title: "Negoziazione con tutela",
          text: "Gestiamo trattativa, perizie, prove a mare e contrattualistica con mandato fiduciario. Condizioni, dotazioni e garanzie sono documentate prima dell'impegno.",
        },
      ]}
      closing="Obiettivo: una scelta tracciabile e difendibile, senza sorprese dopo l'acquisto."
    />
  );
}
