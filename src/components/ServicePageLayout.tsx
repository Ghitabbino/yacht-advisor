import Link from "next/link";

type Block = {
  title: string;
  text: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  intro?: string;
  blocks: Block[];
  closing?: string;
  backHref?: string;
  backLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaSublabel?: string;
};

export default function ServicePageLayout({
  eyebrow,
  title,
  subtitle,
  intro,
  blocks,
  closing,
  backHref = "/#servizi",
  backLabel = "← Tutti i Servizi",
  ctaHref = "/#contatti",
  ctaLabel = "Richiedi Consulenza Riservata",
  ctaSublabel = "Risposta entro 24 ore • Nessun impegno",
}: Props) {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition mb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
        >
          {backLabel}
        </Link>

        {eyebrow && (
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">{eyebrow}</p>
        )}
        <h1 className="font-luxury text-3xl md:text-[46px] font-bold text-center text-white leading-tight">
          {title}
        </h1>
        <p className="font-luxury text-lg md:text-xl font-light italic text-[#D4AF37] text-center mt-4">
          {subtitle}
        </p>
        {intro && (
          <p className="text-[15px] leading-relaxed font-light text-gray-400 text-center mt-8 max-w-2xl mx-auto">
            {intro}
          </p>
        )}
        <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mt-10 mb-14" aria-hidden />

        <div className="grid grid-cols-1 gap-10">
          {blocks.map((b) => (
            <div key={b.title} className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
              <h2 className="font-luxury text-lg md:text-xl mb-3 text-white tracking-wide">{b.title}</h2>
              <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">{b.text}</p>
            </div>
          ))}
        </div>

        {closing && (
          <p className="mt-12 text-center text-sm italic font-light text-gray-500 max-w-2xl mx-auto border-t border-white/10 pt-8">
            {closing}
          </p>
        )}

        <div className="mt-10 text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition shadow-[0_10px_30px_rgba(212,175,55,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {ctaLabel}
          </Link>
          <p className="mt-4 text-[11px] text-gray-500 font-light">{ctaSublabel}</p>
        </div>
      </div>
    </section>
  );
}
