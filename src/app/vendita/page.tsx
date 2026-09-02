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
      title="Vendita e riacquisto: un unico percorso, non due pratiche."
      subtitle="Assistenza alla Vendita"
      intro="Se valutate di vendere per poi riacquistare, non vi lasciamo a metà. Valutiamo insieme se conviene vendere ora, dove esporre la barca, se riacquistare prima di vendere, costi/benefici e tempi — poi seguiamo tutto il percorso."
      blocks={[
        {
          title: "Valutazione complessiva — prima di vendere",
          text: "Esempio: 24m valore mediano €1.500.000. Il broker spinge a €1.400.000 per chiudere in 60 giorni — per lui -€8k di provvigione, per voi -€100k di capitale. Noi verifichiamo: vendere ora o tenere 4 mesi in charter controllato (+€28k) e vendere a €1.485.000 a settembre? Dove esporla (Liguria vs Costa Azzurra)? Si può riacquistare prima con vendita con patto di utilizzo? Così decidete con numeri, non con fretta.",
        },
        {
          title: "Broker scelto insieme, provvigione negoziata",
          text: "Non sostituiamo il broker: lo scegliamo insieme per tipologia/area/fascia e ne negoziamo il mandato al 7% invece di 8-10%. Seguiamo per vostro conto perizia del compratore, aiutandovi a valutarla per decidere — senza firmarla. Il broker prende la sua provvigione dal venditore, noi un compenso chiaro per il lavoro.",
        },
        {
          title: "Riacquisto senza restare a terra",
          text: "Con capitale preservato, scouting di 3 alternative comparabili e perito indicato e scelto insieme, seguito per vostro conto. Esempio: venduto €1.485.000 (netto €1.357.000 dopo 7% + fee) e riacquistato 22m a €1.050.000 invece di €1.100.000 — restano €307k + €28k charter = €335k vs €188k senza percorso. Non vi abbandoniamo tra le due operazioni.",
        },
      ]}
      closing="Un esempio tra molti — ogni percorso è cucito sul vostro programma di navigazione."
    />
  );
}
