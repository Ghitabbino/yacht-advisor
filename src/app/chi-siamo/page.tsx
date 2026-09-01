import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi siamo | Yacht Advisor",
  description:
    "Yacht Advisor: consulenza indipendente per armatori. Conosciamo i vostri bisogni prima di indicare la soluzione. In attesa dei curriculum.",
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
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mt-10 mb-14" aria-hidden />
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
            <h2 className="font-luxury text-lg md:text-xl mb-3 tracking-wide">Il nostro approccio</h2>
            <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">
              Ascolto dei bisogni, definizione di criteri oggettivi, due diligence tecnica e comparazione. Indichiamo poche opzioni, motivate e difendibili, non una lista di scafi da promuovere.
            </p>
          </div>
          <div className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
            <h2 className="font-luxury text-lg md:text-xl mb-3 tracking-wide">Curriculum</h2>
            <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">
              In questa sezione inseriremo i profili del team. Inviateci i CV e li impagineremo con lo stesso rigore consulenziale del sito — foto, ruolo, esperienza, aree di competenza.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">In attesa dei vostri curriculum</p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm italic font-light text-gray-500 max-w-2xl mx-auto border-t border-white/10 pt-8">
          Bussola grande cliccabile: ogni volta che la vedete, vi riporta qui.
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/#contatti"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition"
          >
            Contatto riservato
          </Link>
          <p className="mt-4 text-[11px] text-gray-500 font-light">Risposta entro 24 ore • Nessun impegno</p>
        </div>
      </div>
    </section>
  );
}
