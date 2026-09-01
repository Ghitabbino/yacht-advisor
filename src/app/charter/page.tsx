import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gestione Charter | Yacht Advisor",
  description:
    "Trasformate il vostro yacht in un asset che genera reddito, senza rinunciare a standard, privacy e controllo. Strategia charter su misura.",
};

export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="Gestione Charter"
      title="Impostazione sostenibile, non solo occupazione."
      subtitle="Compatibilità tra utilizzo charter e tutela dell'asset."
      intro="Il charter può coprire parte dei costi e mantenere l'unità attiva, ma richiede selezione e processi. Impostiamo l'attività perché sia compatibile con standard, disponibilità e protezione del valore."
      blocks={[
        {
          title: "Strategia e pricing",
          text: "Analizziamo posizionamento, stagionalità e concorrenza per definire tariffe, calendario e aree. Consideriamo le settimane di vostro uso e gli intervalli di manutenzione.",
        },
        {
          title: "Distribuzione selettiva",
          text: "Attiviamo solo broker charter con affidabilità verificata e canali coerenti con lo standard dell'unità. Ogni richiesta è valutata prima dell'accettazione.",
        },
        {
          title: "Processi operativi",
          text: "Coordinamento tra charter, manutenzione, approvvigionamento e pulizia, con procedure definite e report su costi e ricavi. Controllo continuo senza aggravio per voi.",
        },
      ]}
      closing="Obiettivo: un programma che tutela l'unità, rispetta i vostri tempi e rende trasparente il risultato economico."
    />
  );
}
