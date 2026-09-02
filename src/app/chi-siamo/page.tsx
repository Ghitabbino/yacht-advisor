import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi siamo | Yacht Advisor",
  description:
    "Yacht Advisor: consulenza indipendente per armatori. Conosciamo i vostri bisogni prima di indicare la soluzione su misura, con verifica documentata e riservatezza.",
  keywords: [
    "yacht advisor chi siamo",
    "consulenza nautica team",
    "consulenti yacht",
    "marketing nautico",
    "yacht advisor genova",
  ],
  alternates: {
    canonical: "/chi-siamo/",
    languages: {
      "it-IT": "/chi-siamo/",
      "en-US": "/en/about/",
    },
  },
};

export default function Page() {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition mb-10"
        >
          ← Home
        </Link>

        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Chi siamo</p>
          <h1 className="font-luxury text-3xl md:text-[46px] font-bold text-center leading-tight">
            Prima i bisogni.<br />
            <span className="italic font-normal text-[#D4AF37]">Poi lo yacht giusto.</span>
          </h1>
          <p className="font-luxury text-lg md:text-xl font-light italic text-[#D4AF37] text-center mt-4">
            Ogni armatore è unico. Capendo i bisogni, indichiamo la soluzione su misura.
          </p>
          <p className="text-[15px] leading-relaxed font-light text-gray-400 text-center mt-8 max-w-2xl mx-auto">
            Yacht Advisor nasce come struttura indipendente e riservata. Nessun mandato di vendita, nessun legame con cantieri o broker. Lavoriamo su mandato fiduciario, con verifiche documentate e confronti tra alternative.
          </p>
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mt-10 mb-10" aria-hidden />
        </div>

        {/* Chi Siamo — professionisti marketing + esperienza vissuta proprietari/skipper/equipaggi */}
        <div className="max-w-3xl mx-auto mb-14 text-left space-y-5 text-[14.5px] leading-relaxed font-light text-gray-300">
          <p>
            <strong className="text-white font-normal">Siamo professionisti del marketing con una profonda esperienza vissuta nella nautica.</strong> Non solo marketing nautico: abbiamo vissuto il mare come <em className="text-[#D4AF37] not-italic">proprietari, skipper ed equipaggi di numerose imbarcazioni</em> — a vela e a motore, monoscafi e multiscafi — in Mediterraneo, Atlantico, Caraibi e Nord Europa. Conosciamo da dentro tempi, costi, dinamiche di bordo, scelta e gestione dell’equipaggio, manutenzione, ormeggi e valorizzazione dell’asset, perché li abbiamo provati noi per primi.
          </p>
          <p className="text-gray-400">
            Questa doppia competenza — <strong className="text-gray-200 font-normal">rigore consulenziale e vita a bordo</strong> — nasce da oltre 25 anni in multinazionali di diversi settori come responsabili marketing, con Master SADA in Marketing e Comunicazione, e da soci anziani dello Studio Zanni e Associati per il marketing strategico e operativo, sempre continuando a navigare. Da oltre 15 anni la dedichiamo interamente alla nautica, trasferendo metodo, verifica e disciplina d’impresa al mondo dello yachting.
          </p>
          <p className="text-gray-400">
            Operiamo come <em className="text-[#D4AF37] not-italic">TEAM integrato</em> nella consulenza nautica a 360° — selezione dell’imbarcazione, gestione equipaggio, assistenza alla vendita e gestione charter — tenendo costantemente conto dei vincoli strutturali, operativi ed economici e delle implicazioni a bordo e a terra. Contatti ed esperienze internazionali ci svincolano dalla routine e dall’assuefazione ai problemi, mantenendoci connessi all’evoluzione del mercato.
          </p>
          <p className="text-gray-400">
            Affianchiamo l’armatore, studiamo con lui opportunità e programma di navigazione, definiamo criteri condivisi, verifichiamo alternative comparabili e curiamo l’attuazione, accettando la verifica sui risultati. <span className="text-white">La nostra missione è la vostra piena soddisfazione — unico KPI.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
            <h2 className="font-luxury text-lg md:text-xl mb-3 tracking-wide">Il nostro approccio</h2>
            <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">
              Ascolto dei bisogni, definizione di criteri oggettivi, due diligence tecnica e comparazione. Indichiamo poche opzioni, motivate e difendibili, non una lista di scafi da promuovere.
            </p>
          </div>
          <div className="border border-[#D4AF37]/20 rounded-xl bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-white/10 border border-[#D4AF37]/30 grid place-items-center text-[#D4AF37] text-2xl font-luxury shrink-0">SA</div>
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Senior Advisor — Marketing Strategico e Operativo</p>
                <h2 className="font-luxury text-xl md:text-2xl mt-1">Senior Advisor</h2>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mt-1">Mandato fiduciario indipendente — Yacht Advisor</p>
                <p className="text-gray-300 leading-relaxed text-[14px] font-light mt-4 italic">“Ogni armatore è unico. La mia missione è la sua piena soddisfazione.”</p>
                <p className="text-gray-400 leading-relaxed text-[14px] font-light mt-4">
                  Oltre 25 anni in multinazionali di diversi settori come Responsabile Marketing — brand strategy, go-to-market, sviluppo prodotto e team multiculturali — coltivando in parallelo la pratica velica (crociere d’altura, regate, oceaniche). Socio anziano dello <strong className="text-gray-200 font-normal">Studio Zanni e Associati</strong>, vi ha guidato il marketing strategico e operativo continuando a navigare. Da oltre 15 anni dedica l’attività esclusivamente alla nautica, implementando soluzioni su misura per la soddisfazione dei clienti.
                </p>
                <div className="mt-5 grid sm:grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Competenze chiave</p>
                    <p className="text-gray-400 font-light leading-relaxed">Selezione imbarcazione • Due diligence tecnica • Marketing strategico/operativo • Gestione equipaggi • Vendita • Charter</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Formazione</p>
                    <p className="text-gray-400 font-light">Master SADA — Marketing e Comunicazione</p>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mt-3 mb-1">Lingue</p>
                    <p className="text-gray-400 font-light">IT madrelingua • EN professionale • PT fluente • ES intermedio</p>
                  </div>
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80">Nome e foto su indicazione — base Genova / Palma</p>
              </div>
            </div>
          </div>
          <div className="border border-[#D4AF37]/20 rounded-xl bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-white/10 border border-[#D4AF37]/30 grid place-items-center text-[#D4AF37] text-xl font-luxury shrink-0">YA</div>
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Advisor — Yacht Advisor</p>
                <h2 className="font-luxury text-xl md:text-2xl mt-1">Advisor</h2>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mt-1">Gestione del Personale e Problem Solving — Yacht Advisor</p>
                <p className="text-gray-400 leading-relaxed text-[14px] font-light mt-4">
                  In Yacht Advisor è il riferimento per la <strong className="text-gray-200 font-normal">gestione del personale e il problem solving operativo</strong> dell’equipaggio. Esperienza consolidata in <strong className="text-gray-200 font-normal">importanti realtà leader del settore accoglienza</strong>, maturata con responsabilità su team e servizio, e come <strong className="text-gray-200 font-normal">Chief Stewardess</strong> a bordo di <strong className="text-gray-200 font-normal">numerosi yacht di prestigio</strong>. Metodo: definizione del profilo ideale per compatibilità con armatore e programma, verifica referenze incrociate, costruzione di standard leggeri ma vincolanti e presidio strutturato nei primi 60 giorni. Approccio discreto, anticipazione e soluzione — non escalation.
                </p>
                <div className="mt-5 grid sm:grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Competenze chiave</p>
                    <p className="text-gray-400 font-light leading-relaxed">Capacità nel recruitment • Selezione del personale • Selezione e valutazione equipaggi per attitudine e compatibilità • Verifica referenze incrociate e colloqui strutturati • Definizione di standard di servizio e SOP leggeri ma vincolanti • Training on-the-job su accoglienza, mise en place, servizio e housekeeping • Costruzione di manuali di bordo su misura e check-list operative • Pianificazione turni, gestione conflitti e dinamiche di gruppo • Problem solving operativo in tempo reale con discrezione</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Lingue</p>
                    <p className="text-gray-400 font-light">IT madrelingua • EN buono • FR fluente</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]/80 mt-4">Base Genova / Palma — su indicazione</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#contatti"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition shadow-[0_10px_30px_rgba(212,175,55,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contatto riservato
          </Link>
          <p className="mt-4 text-[11px] text-gray-500 font-light">Risposta entro 24 ore • Nessun impegno</p>
        </div>
      </div>
    </section>
  );
}
