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
      title="Trovare l'imbarcazione perfetta non è una questione di fortuna, ma di precisione."
      subtitle="Selezione Imbarcazione"
      intro="Ogni armatore è unico. Capendo i vostri bisogni, troviamo la soluzione su misura."
      blocks={[
        {
          title: "Analisi dello Stile di Vita",
          text: "Non ci limitiamo a guardare i modelli. Analizziamo come desideri vivere il mare — crociere in famiglia, eventi sociali, lunghe traversate o avventura estrema — ricostruendo abitudini, persone a bordo e aspettative. Questo ci permette di identificare lo scafo che si adatta ai tuoi ritmi, e non viceversa, escludendo opzioni non coerenti prima di qualsiasi comparazione e tutelando tempo e investimento.",
        },
        {
          title: "Verifica Tecnica e Performance",
          text: "Valutiamo con rigore l'efficienza dei motori, la stabilità e il comportamento della carena, l'integrazione dei sistemi tecnologici di bordo e la qualità costruttiva complessiva. Verifichiamo storico manutentivo, dotazioni, assistenza del cantiere e tenuta del valore nel tempo per garantirti un'imbarcazione affidabile, sicura e difendibile come investimento nel lungo periodo.",
        },
        {
          title: "Ottimizzazione del Budget",
          text: "Ti supportiamo nella negoziazione con broker e costruttori con mandato fiduciario, curando perizie, prove a mare e contrattualistica. Ogni dettaglio — dotazioni, garanzie, condizioni — viene messo nero su bianco prima della firma, affinché il valore dell'investimento sia speculare alle tue aspettative di mercato e privo di sorprese.",
        },
      ]}
      closing="Una scelta consapevole, senza sorprese dopo l'acquisto."
    />
  );
}
