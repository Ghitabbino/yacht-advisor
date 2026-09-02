"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linksIt = [
  { href: "/#la-premessa", label: "Premessa" },
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Metodo" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/#contatti", label: "Contatti" },
];

const linksEn = [
  { href: "/en#premise", label: "Premise" },
  { href: "/en#services", label: "Services" },
  { href: "/en#method", label: "Method" },
  { href: "/en/about", label: "About" },
  { href: "/en#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");
  const links = isEn ? linksEn : linksIt;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto pl-2 pr-4 lg:pl-3 lg:pr-6 py-4 flex justify-between items-center gap-3">
        <Link href={isEn ? "/en/about" : "/chi-siamo"} className="flex justify-start group shrink-0 ml-0 pl-0" aria-label="Yacht Advisor - Chi siamo">
          <img src="/yacht-advisor/rosa-venti.svg" alt="Rosa dei venti" className="w-11 h-11 md:w-14 md:h-14 opacity-95 group-hover:rotate-180 transition-transform duration-700 shrink-0 drop-shadow-[0_2px_8px_rgba(15,23,42,0.14)] [filter:drop-shadow(0_1px_3px_rgba(212,175,55,0.18))] ml-0" />
        </Link>
        <Link href={isEn ? "/en/about" : "/chi-siamo"} className="flex-1 flex flex-col items-center justify-center text-center group px-2" aria-label="Yacht Advisor - Chi siamo">
          <span className="font-luxury text-[23px] md:text-[28px] font-black tracking-[0.38em] text-[#020817] leading-none text-center">YACHT</span>
          <span className="font-luxury text-[23px] md:text-[28px] font-black tracking-[0.38em] text-[#D4AF37] leading-none text-center">ADVISOR</span>
          <span className="text-[10.5px] md:text-[11.5px] uppercase tracking-[0.42em] text-[#0F172A] mt-1.5 font-semibold leading-none text-center whitespace-nowrap">
            Your happiness is our job
          </span>
        </Link>

        <div className="flex justify-end items-center">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-[11px] uppercase tracking-[0.16em] font-semibold text-[#020817] flex-nowrap">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 rounded-sm whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
            {/* Language switch */}
            <div className="flex items-center gap-1 ml-3 lg:ml-4 border-l border-gray-200 pl-4 lg:pl-6 text-[11px]">
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
