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
      title="Trasformiamo la vostra passione in un investimento redditizio."
      subtitle="Gestione Charter"
      intro="Ogni armatore è unico. Capendo i vostri bisogni, troviamo la soluzione su misura."
      blocks={[
        {
          title: "Ottimizzazione della Redditività",
          text: "Analizziamo il mercato globale, il posizionamento competitivo e la stagionalità per definire la strategia tariffaria più efficace. Valutiamo calendario, aree di operatività e intervalli di manutenzione per massimizzare il ritorno sull'investimento preservando le vostre settimane di utilizzo e la tutela del valore dell'unità nel tempo.",
        },
        {
          title: "Promozione Internazionale",
          text: "Connettiamo lo yacht con la clientela più esclusiva attraverso una rete selezionata di broker di charter e piattaforme di lusso. Ogni richiesta viene profilata e valutata con attenzione per garantire un flusso costante di prenotazioni di alto livello, coerenti con lo standard dell'imbarcazione e con la vostra reputazione.",
        },
        {
          title: "Gestione Operativa e Standard",
          text: "Supervisioniamo ogni aspetto logistico tra un charter e l'altro — coordinamento tra manutenzione, provisioning, pulizia e preparazione dell'equipaggio — assicurando che imbarcazione ed equipaggio rispettino standard impeccabili per ogni ospite. Standardizzazione dell'esperienza, controllo qualità continuo e reportistica trasparente su costi e ricavi: voi vedete solo il risultato.",
        },
      ]}
      closing="Un programma charter che protegge lo yacht, rispetta i vostri tempi e trasforma un costo fisso in un rendimento trasparente."
    />
  );
}
