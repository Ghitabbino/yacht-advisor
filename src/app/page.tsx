import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Yacht Advisor | Prima i bisogni. Poi lo yacht giusto.",
  description:
    "Consulenza indipendente e riservata per armatori: ogni armatore è unico. Capendo i vostri bisogni, indichiamo la soluzione su misura. Nessun legame con cantieri o broker.",
  keywords: [
    "yacht advisor",
    "consulenza nautica",
    "selezione yacht",
    "gestione equipaggio",
    "vendita yacht",
    "charter yacht",
    "consulenza indipendente",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-US": "/en/",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        aria-label="Hero"
        className="relative h-[92vh] min-h-[680px] flex items-center justify-center overflow-hidden bg-[#0F172A]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(2,8,23,0.65), rgba(15,23,42,0.45), rgba(2,8,23,0.82)), url('https://images.unsplash.com/photo-1567899154113-9d511797d17b?auto=format&fit=crop&w=1920&q=80')`,
          }}
          role="img"
          aria-label="Yacht di lusso in navigazione al tramonto"
        />
        {/* sottile vignettatura gold */}
        <div className="absolute inset-0 ring-1 ring-white/10 ring-inset pointer-events-none" aria-hidden />
        <div className="relative text-center text-white px-6 max-w-5xl">
          <p className="text-[11px] tracking-[0.45em] uppercase text-white/70 mb-6 font-light">
            Consulenza Indipendente • Riservata • Globale
          </p>
          <h1 className="font-luxury text-5xl md:text-7xl lg:text-[86px] font-bold leading-[1.15] tracking-tight">
            Your Happiness <br />
            <span className="font-light italic text-[#D4AF37] font-normal">is Our Job</span>
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-8 mb-7" aria-hidden />
          <p className="text-[13px] md:text-[15px] font-light leading-relaxed text-white/85 max-w-3xl mx-auto tracking-wide">
            Ogni armatore è unico. Capiamo i vostri bisogni e troviamo la soluzione su misura.<br className="hidden md:block" />
            <span className="text-white font-normal">Consulenza indipendente, senza legami con cantieri o broker</span>
          </p>
          <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-white/55 font-light">La nostra missione è la vostra piena soddisfazione — unico KPI</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#metodo"
              className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition shadow-[0_10px_30px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              Metodo di lavoro
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center justify-center border border-white/30 text-white px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm hover:bg-white hover:text-[#020817] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contatti
            </a>
          </div>
          <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">
            Mediterraneo • Caraibi • Pacifico • Medio Oriente — Ovunque desideriate navigare
          </p>
        </div>
      </section>

      {/* BARRA FIDUCIA */}
      <section className="bg-white border-y border-gray-100 py-6" aria-label="Valori">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-6 md:gap-8 text-center text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> Indipendenti da Cantieri e Broker</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> Massima Riservatezza</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> Network Internazionale</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> Unico Interesse: Il Vostro</span>
        </div>
      </section>

      {/* PROMESSA SOLLIEVO — frase di apertura consulenziale */}
      <section className="py-10 md:py-14 bg-[#FDFCFB] border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-luxury text-[15px] md:text-[17px] leading-relaxed font-light text-[#0F172A] tracking-wide">
            Uno yacht dovrebbe alleggerirti la vita, non appesantirla. Se <em className="not-italic font-normal text-[#0F172A]">occuparti di ogni aspetto</em> — scelta, equipaggio, burocrazia, manutenzione, gestione — rischia di diventare un peso, <strong className="font-normal text-[#0F172A]">lo portiamo noi</strong>.
          </p>
          <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed font-light text-gray-500">
            Con metodo, discrezione e cura sartoriale. A te resta solo il piacere di navigare.
          </p>
        </div>
      </section>

      {/* LA PREMESSA - concept unico armatore */}
      <section id="la-premessa" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">La Premessa</p>
            <h2 className="font-luxury text-3xl md:text-[44px] font-bold leading-tight text-[#020817]">
              Prima capiamo.<br className="hidden md:block"/>
              <span className="italic font-normal text-[#0F172A]">Poi proponiamo.</span>
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-10" aria-hidden />
          </div>

          <div className="space-y-6 text-[17px] leading-[1.85] font-light text-gray-600 max-w-3xl mx-auto text-justify hyphens-none break-normal [text-align:justify] [hyphens:none] [word-break:normal] [overflow-wrap:normal]">
            <p>
              L&apos;acquisto di uno yacht rappresenta un investimento significativo, con una vasta gamma di imbarcazioni disponibili sul mercato, ognuna caratterizzata da specifiche proprietà costruttive e finalità d&apos;uso.
            </p>
            <p>
              Il potenziale armatore si ritrova così di fronte a un ampio ventaglio di opzioni, spesso contrastanti, che rendono difficile individuare la scelta più adatta al proprio stile di vita e alle proprie aspettative nel settore nautico.
            </p>
            <p>
              Altrettanto complessa si rivela la selezione dell&apos;equipaggio, un terreno spesso inesplorato per il nuovo armatore. Orientarsi in questo contesto richiede tempo ed energia; d&apos;altronde, un reclutamento errato rischia di compromettere non solo la gestione della barca, ma l&apos;intera esperienza di vacanza a bordo del proprio yacht.
            </p>
            <p className="text-[#0F172A] font-normal text-center">
              Yacht Advisor nasce per colmare questa distanza: prima comprendiamo i vostri bisogni, poi indichiamo la soluzione su misura, con indipendenza, verifiche documentate e riservatezza — come <em>single integrated team</em> al vostro fianco, con rete globale e tutela fiduciaria. La nostra missione è la vostra piena soddisfazione.
            </p>
          </div>
        </div>
      </section>

      {/* PER CHI - taglio consulenziale */}
      <section className="py-16 bg-[#FDFCFB] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-luxury text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-3">Per chi valuta l&apos;acquisto</h3>
            <p className="text-sm leading-relaxed text-gray-600 font-light">Analisi comparata di modelli, cantieri e configurazioni in base al programma d&apos;uso reale. Per scegliere con criteri verificabili.</p>
          </div>
          <div className="md:border-x md:border-gray-200 md:px-10">
            <h3 className="font-luxury text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-3">Per chi possiede</h3>
            <p className="text-sm leading-relaxed text-gray-600 font-light">Verifica di equipaggio, processi di bordo e costi di esercizio. Per allineare la gestione allo standard atteso.</p>
          </div>
          <div>
            <h3 className="font-luxury text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-3">Per chi valuta la vendita</h3>
            <p className="text-sm leading-relaxed text-gray-600 font-light">Valutazione di mercato, scelta del canale e gestione della negoziazione con tutela della riservatezza.</p>
          </div>
        </div>
      </section>

      {/* I SERVIZI - taglio consulenziale */}
      <section id="servizi" className="py-24 md:py-32 bg-[#0F172A] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Aree di intervento</p>
            <h2 className="font-luxury text-3xl md:text-[44px] font-bold leading-tight">
              Quattro aree,<br />
              <span className="italic font-normal text-white/90">un unico mandato: tutelarvi.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed font-light text-gray-400">
              Ogni incarico è autonomo e regolato da mandato fiduciario. Metodo costante: raccolta di requisiti, verifica tecnica, confronto tra alternative.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-14" aria-hidden />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            <ServiceCard
              href="/selezione"
              title="Selezione Imbarcazione"
              description="Analisi comparata di modelli e cantieri in base al programma d'uso, con due diligence tecnica e verifica del valore nel tempo."
              cta="Approfondisci →"
            />
            <ServiceCard
              href="/equipaggio"
              title="Gestione Equipaggi"
              description="Valutazione di profili, referenze e compatibilità operativa, con definizione di standard di servizio e gestione contrattuale."
              cta="Approfondisci →"
            />
            <ServiceCard
              href="/vendita"
              title="Assistenza alla Vendita"
              description="Analisi di mercato, scelta del canale e gestione della negoziazione con documentazione e riservatezza."
              cta="Approfondisci →"
            />
            <ServiceCard
              href="/charter"
              title="Gestione Charter"
              description="Impostazione di strategia, canali e processi operativi per un utilizzo charter compatibile con standard e tutela dell'asset."
              cta="Approfondisci →"
            />
          </div>
        </div>
      </section>

      {/* IL METODO - taglio consulenziale */}
      <section id="metodo" className="py-24 md:py-32 bg-[#FDFCFB] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Metodo</p>
            <h2 className="font-luxury text-3xl md:text-[42px] font-bold leading-tight text-[#020817]">
              Indipendenza, <br />
              <span className="italic font-normal">verifica, riservatezza.</span>
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-14" aria-hidden />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37] font-luxury text-sm">01</div>
              <h3 className="font-luxury text-[13px] uppercase tracking-[0.18em] text-[#020817] mb-3">Analisi approfondita dei bisogni</h3>
              <p className="text-sm leading-relaxed font-light text-gray-600">Valutiamo i vostri bisogni con <strong className="font-normal text-[#0F172A]">colloqui dedicati</strong> — ascolto attivo e ricostruzione del programma di navigazione — per definire criteri oggettivi e condivisi. Su questa base <strong className="font-normal text-[#0F172A]">formuliamo un’offerta chiara</strong> che articola percorso, attività, tempi e compenso. <strong className="font-normal text-[#0F172A]">Solo se la condividete, ci conferite un mandato.</strong> Nessun impegno prima, nessuna soluzione proposta prima di aver compreso cosa significa per voi navigare con serenità e senza sorprese.</p>
            </div>
            <div className="text-center md:border-x md:border-gray-200 md:px-8">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37] font-luxury text-sm">02</div>
              <h3 className="font-luxury text-[13px] uppercase tracking-[0.18em] text-[#020817] mb-3">Verifica indipendente e documentata</h3>
              <p className="text-sm leading-relaxed font-light text-gray-600">Operiamo senza provvigioni da cantieri, broker o fornitori e senza mandati di vendita: la nostra indipendenza è sostanziale, non dichiarata. <strong className="font-normal text-[#0F172A]">Non percepiamo compensi da terzi.</strong> Il nostro compenso — chiaro e concordato — matura solo dopo aver condiviso con voi come articolare il percorso, e riflette esclusivamente il lavoro consulenziale svolto. Ogni indicazione è il risultato di verifiche tecniche approfondite, confronto sistematico tra alternative, analisi di comparabili reali, esame di documentazione, storico manutentivo e fonti incrociate. Ogni raccomandazione è documentata, motivata punto per punto e orientata esclusivamente alla tutela del vostro interesse, con piena trasparenza su limiti, rischi e alternative scartate, così da rendere ogni scelta comprensibile, difendibile e priva di sorprese.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37] font-luxury text-sm">03</div>
              <h3 className="font-luxury text-[13px] uppercase tracking-[0.18em] text-[#020817] mb-3">Riservatezza e continuità</h3>
              <p className="text-sm leading-relaxed font-light text-gray-600">Informazioni, identità, tempi e contenuti delle negoziazioni restano sotto il vostro controllo, gestiti con discrezione assoluta e con la riservatezza tipica dei grandi studi professionali. Lo stesso impegno per la massima soddisfazione del cliente, la stessa cura per il dettaglio e la stessa continuità di presidio sono applicati a tutti gli altri nostri servizi — selezione dell’imbarcazione, gestione dell’equipaggio, assistenza alla vendita e gestione charter — con identico rigore metodologico, stessa tracciabilità dei passaggi e medesima tutela fiduciaria in ogni fase.</p>
            </div>
          </div>

          <p className="mt-14 text-center text-sm font-semibold text-[#020817] max-w-2xl mx-auto tracking-wide">
            Capiamo i bisogni, verifichiamo le opzioni, troviamo la soluzione su misura.
          </p>
        </div>
      </section>

      {/* PRINCIPI - ispirato ai grandi studi (Goldman/McKinsey) */}
      <section className="py-16 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">I nostri principi</p>
          <h2 className="font-luxury text-2xl md:text-[32px] font-bold text-center text-white leading-tight">
            Logica dei grandi studi,<br /><span className="italic font-normal text-white/85">applicata alla nautica.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">01 — Interesse del cliente prima di tutto</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Come nelle firm più esigenti, il vostro interesse prevale sempre. Nessuna provvigione da terzi; solo un compenso chiaro e concordato per il lavoro consulenziale.</p>
            </div>
            <div className="md:border-x md:border-white/10 md:px-6">
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">02 — Rigore e verifica</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Dati verificabili, fonti incrociate, comparabili reali. Ogni indicazione è documentata e difendibile.</p>
            </div>
            <div className="md:border-x md:border-white/10 md:px-6">
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">03 — Visione di lungo termine</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Valutiamo l&apos;impatto oltre l&apos;acquisto: gestione, tenuta del valore, continuità del servizio.</p>
            </div>
            <div>
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">04 — Riservatezza</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Informazioni, identità e negoziazioni sotto controllo. Discrezione paragonabile a quella di uno studio legale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CITAZIONE */}
      <section className="py-14 bg-[#FDFCFB] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-luxury text-xl md:text-2xl text-[#0F172A] font-light leading-relaxed">
            &ldquo;Una buona consulenza si misura da ciò che vi evita,<br className="hidden md:block"/> non da ciò che vi promette.&rdquo;
          </p>
        </div>
      </section>

      {/* CONTATTI - consulenziale */}
      <section id="contatti" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Contatti</p>
            <h2 className="font-luxury text-3xl md:text-[42px] font-bold leading-tight text-[#020817]">
              Valutiamo <span className="italic font-normal">insieme.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed font-light text-gray-500 max-w-xl mx-auto">
              Descrivete contesto, esigenze e vincoli. Rispondiamo entro 24 ore con riservatezza. Primo confronto senza impegno.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-12" aria-hidden />
          </div>
          <ContactForm />
          <p className="mt-8 text-center text-[11px] leading-relaxed text-gray-400 font-light">
            Preferite scrivere direttamente? <a href="mailto:yachtadvisor@mail.com" className="text-[#0F172A] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] transition">yachtadvisor@mail.com</a> — corrispondenza riservata.
          </p>
        </div>
      </section>
    </>
  );
}
