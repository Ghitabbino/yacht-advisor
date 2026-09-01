import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us | Yacht Advisor",
  description:
    "Yacht Advisor: independent, confidential consultancy. Every owner is unique. By understanding your needs, we find the tailored solution.",
};

export default function Page() {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition mb-10"
        >
          ← Home
        </Link>

        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">About us</p>
          <h1 className="font-luxury text-3xl md:text-[46px] font-bold text-center leading-tight">
            Needs first.<br />
            <span className="italic font-normal text-[#D4AF37]">Then the right yacht.</span>
          </h1>
          <p className="font-luxury text-lg md:text-xl font-light italic text-[#D4AF37] text-center mt-4">
            Every owner is unique. By understanding your needs, we find the tailored solution.
          </p>
          <p className="text-[15px] leading-relaxed font-light text-gray-400 text-center mt-8 max-w-2xl mx-auto">
            Yacht Advisor is an independent, confidential structure. No sales mandate, no yard or broker ties. We work on a fiduciary basis, with documented verification and comparison of alternatives.
          </p>
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mt-10 mb-14" aria-hidden />
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
            <h2 className="font-luxury text-lg md:text-xl mb-3 tracking-wide">Our approach</h2>
            <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">
              Listening to needs, defining objective criteria, technical due diligence and comparison. We indicate a few options, reasoned and defensible — not a list of hulls to push.
            </p>
          </div>
          <div className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
            <h2 className="font-luxury text-lg md:text-xl mb-3 tracking-wide">Team</h2>
            <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">
              This section will host the team profiles. Send us the CVs and we will lay them out with the same consultancy rigour as the site — photo, role, experience, areas of expertise.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">Awaiting your CVs</p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm italic font-light text-gray-500 max-w-2xl mx-auto border-t border-white/10 pt-8">
          The large compass is clickable: wherever you see it, it brings you here.
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/en#contact"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition"
          >
            Private contact
          </Link>
          <p className="mt-4 text-[11px] text-gray-500 font-light">Reply within 24 hours • No obligation</p>
        </div>
      </div>
    </section>
  );
}
