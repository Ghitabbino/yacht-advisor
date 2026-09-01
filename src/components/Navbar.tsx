"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linksIt = [
  { href: "/#la-premessa", label: "La Premessa" },
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Il Metodo" },
  { href: "/#contatti", label: "Contattaci" },
];

const linksEn = [
  { href: "/en#premise", label: "Premise" },
  { href: "/en#services", label: "Services" },
  { href: "/en#method", label: "Method" },
  { href: "/en#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");
  const links = isEn ? linksEn : linksIt;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          href={isEn ? "/en/about" : "/chi-siamo"}
          className="flex flex-col items-center text-center group"
          aria-label="Yacht Advisor - Chi siamo"
        >
          <span className="flex items-center gap-3">
            <img src="/rosa-venti.svg" alt="Chi siamo" className="w-10 h-10 md:w-12 md:h-12 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition" />
            <span className="font-luxury text-[24px] md:text-[32px] font-black tracking-[0.42em] text-[#020817] leading-none">
              YACHT<span className="text-[#D4AF37]"> ADVISOR</span>
            </span>
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-[#0F172A] mt-2.5 font-semibold">
            Your happiness is our job
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#020817]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 rounded-sm"
            >
              {l.label}
            </Link>
          ))}
          {/* Language switch */}
          <div className="flex items-center gap-1 ml-4 border-l border-gray-200 pl-6 text-[11px]">
            <Link
              href="/"
              className={`px-2 py-1 rounded transition ${!isEn ? "bg-[#0F172A] text-[#D4AF37]" : "text-gray-400 hover:text-[#0F172A]"}`}
              aria-current={!isEn ? "page" : undefined}
            >
              IT
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href="/en"
              className={`px-2 py-1 rounded transition ${isEn ? "bg-[#0F172A] text-[#D4AF37]" : "text-gray-400 hover:text-[#0F172A]"}`}
              aria-current={isEn ? "page" : undefined}
            >
              EN
            </Link>
          </div>
        </div>

        {/* Mobile button */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-1 text-[11px] font-semibold">
            <Link href="/" className={`px-2 py-1 ${!isEn ? "text-[#D4AF37] bg-[#0F172A] rounded" : "text-gray-400"}`}>IT</Link>
            <Link href="/en" className={`px-2 py-1 ${isEn ? "text-[#D4AF37] bg-[#0F172A] rounded" : "text-gray-400"}`}>EN</Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 text-[#020817] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-6 space-y-4 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#020817]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-[#D4AF37] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
