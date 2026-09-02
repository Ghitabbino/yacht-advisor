type Props = {
  href: string;
  title: string;
  description: string;
  cta?: string;
};

import Link from "next/link";

export default function ServiceCard({ href, title, description, cta = "Approfondisci →" }: Props) {
  return (
    <Link
      href={href}
      className="group relative bg-[#1E293B] p-8 md:p-9 border border-white/10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_20px_50px_rgba(2,8,23,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
      <h3 className="font-luxury text-[13px] font-bold mb-4 uppercase tracking-[0.18em] text-[#D4AF37] text-center leading-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-[13.5px] leading-relaxed font-light text-center flex-1">
        {description}
      </p>
      <span className="mt-7 text-center text-[10px] uppercase tracking-[0.22em] text-gray-500 group-hover:text-[#D4AF37] transition-colors font-semibold">
        {cta}
      </span>
    </Link>
  );
}
