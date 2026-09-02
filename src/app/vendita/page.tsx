import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Assistenza alla Vendita | Yacht Advisor",
  description:
    "Vendete al giusto valore, nei tempi giusti, con discrezione. Scegliamo il broker ideale e curiamo posizionamento e negoziazione.",
  keywords: [
    "vendita yacht",
    "assistenza vendita yacht",
    "broker yacht selezione",
    "valutazione yacht",
    "negoziazione yacht",
  ],
  alternates: {
    canonical: "/vendita/",
    languages: {
      "it-IT": "/vendita/",
      "en-US": "/en/sale/",
    },
  },
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Assistenza alla Vendita"
      title="Valorizziamo il vostro investimento con professionalità e discrezione."
      subtitle="Assistenza alla Vendita"
      intro="Ogni armatore è unico. Capendo i vostri bisogni, troviamo la soluzione su misura."
      backHref="/#servizi"
      backLabel="← Tutti i Servizi"
      ctaHref="/#contatti"
      ctaLabel="Richiedi Consulenza Riservata"
      ctaSublabel="Risposta entro 24 ore • Nessun impegno"
      blocks={[
        {
          title: "Selezione del Broker Ideale",
          text: "Non lasciamo nulla al caso. Analizziamo comparabili reali, posizionamento e tempistiche per identificare i broker più qualificati e specializzati nel mercato di riferimento della vostra imbarcazione, per tipologia, area e fascia di prezzo. Garantiamo una rappresentazione d'eccellenza, l'accesso ai canali più esclusivi e la negoziazione di mandato e condizioni a tutela della vostra posizione.",
        },
        {
          title: "Marketing di Prestigio",
          text: "Curiamo ogni dettaglio dell'esposizione con rigore consulenziale: fotografia e video professionali di alta qualità, descrizioni tecniche ineccepibili, inventario documentato e promozione mirata sui principali portali nautici di lusso. Presentiamo lo yacht al meglio fin dal primo giorno, con pricing basato su dati di mercato comparabili e coerente con la sua valorizzazione.",
        },
        {
          title: "Gestione della Negoziazione",
          text: "Supportiamo l'armatore in ogni fase del processo di vendita — filtro delle richieste, gestione di visite e offerte, conduzione della negoziazione e supervisione di perizie, contratti e closing — assicurando la massima tutela degli interessi, trasparenza sui passaggi e riservatezza sull'identità fino alla chiusura, se richiesta.",
        },
      ]}
      closing="Un realizzo congruo, con processo tracciato e riservato."
    />
  );
}
