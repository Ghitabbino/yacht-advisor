import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Assistenza alla Vendita | Yacht Advisor",
  description:
    "Vendete al giusto valore, nei tempi giusti, con discrezione. Scegliamo il broker ideale e curiamo posizionamento e negoziazione.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Assistenza alla Vendita"
      title="Impostazione misurata, non fretta."
      subtitle="Posizionamento corretto prima dell'esposizione."
      intro="Il mercato dell'usato premia l'impostazione corretta. Valutiamo comparabili, tempistiche e canale per evitare svalutazioni ed esposizioni non efficaci."
      blocks={[
        {
          title: "Scelta del canale",
          text: "Individuiamo il broker con competenze comprovate su tipologia, area e fascia di prezzo. Mandato e condizioni sono negoziati con tutela della vostra posizione.",
        },
        {
          title: "Preparazione e documentazione",
          text: "Documentazione tecnica, inventario e pricing basati su dati di mercato comparabili. Presentazione professionale e coerente fin dall'ingresso sul mercato.",
        },
        {
          title: "Negoziazione e chiusura",
          text: "Filtro delle richieste, gestione di visite e offerte, conduzione della negoziazione e supervisione di perizie e contratti. Riservatezza sull'identità, se richiesta, fino alla chiusura.",
        },
      ]}
      closing="Obiettivo: un realizzo congruo, con processo tracciato e riservato."
    />
  );
}
