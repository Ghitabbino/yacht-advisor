import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us | Yacht Advisor",
  description:
    "Yacht Advisor: independent, confidential consultancy. Every owner is unique. By understanding your needs, we find the tailored solution.",
  keywords: [
    "yacht advisor about",
    "yacht consultancy team",
    "yacht consultants",
    "yacht marketing",
    "yacht advisor genoa",
  ],
  alternates: {
    canonical: "/en/about/",
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
          href="/en/"
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
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mt-10 mb-10" aria-hidden />
        </div>

        {/* About — marketing professionals + lived owner/skipper/crew experience */}
        <div className="max-w-3xl mx-auto mb-14 text-left space-y-5 text-[14.5px] leading-relaxed font-light text-gray-300">
          <p>
            <strong className="text-white font-normal">We are marketing professionals with deep, lived experience in yachting.</strong> Not just yacht marketing: we have lived at sea as <em className="text-[#D4AF37] not-italic">owners, skippers and crew on numerous vessels</em> — sail and power, monohulls and multihulls — in the Mediterranean, Atlantic, Caribbean and Northern Europe. We know from the inside timing, costs, onboard dynamics, crew selection and management, maintenance, berthing and asset enhancement, because we have experienced them first-hand.
          </p>
          <p className="text-gray-400">
            This dual expertise — <strong className="text-gray-200 font-normal">consulting rigour and life on board</strong> — stems from 25+ years in multinationals across sectors as Heads of Marketing, with a Master SADA in Marketing and Communication, and as Senior Partners at Studio Zanni e Associati for strategic and operational marketing, always continuing to sail. For over 15 years we have dedicated it entirely to yachting, transferring method, verification and business discipline to the world of yachting.
          </p>
          <p className="text-gray-400">
            We operate as an <em className="text-[#D4AF37] not-italic">integrated TEAM</em> in 360° yachting consultancy — yacht selection, crew management, sales advisory and charter management — consistently taking into account structural, operational and financial constraints and the implications on board and ashore. International contacts and cross-sector experience free us from routine and habituation, keeping us connected to market evolution.
          </p>
          <p className="text-gray-400">
            We stand alongside the owner, examine opportunities and cruising programme together, define shared criteria, verify comparable alternatives and oversee implementation, accepting verification on results. <span className="text-white">Our mission is your complete satisfaction — our only KPI.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="border-l-2 border-[#D4AF37]/70 pl-8 py-1">
            <h2 className="font-luxury text-lg md:text-xl mb-3 tracking-wide">Our approach</h2>
            <p className="text-gray-400 leading-relaxed text-[14.5px] font-light">
              Listening to needs, defining objective criteria, technical due diligence and comparison. We indicate a few options, reasoned and defensible — not a list of hulls to push.
            </p>
          </div>
          <div className="border border-[#D4AF37]/20 rounded-xl bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-white/10 border border-[#D4AF37]/30 grid place-items-center text-[#D4AF37] text-2xl font-luxury shrink-0">SA</div>
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Senior Advisor — Strategic & Operational Marketing</p>
                <h2 className="font-luxury text-xl md:text-2xl mt-1">Senior Advisor</h2>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mt-1">Independent fiduciary mandate — Yacht Advisor</p>
                <p className="text-gray-300 leading-relaxed text-[14px] font-light mt-4 italic">“Every owner is unique. My mission is your complete satisfaction.”</p>
                <p className="text-gray-400 leading-relaxed text-[14px] font-light mt-4">
                  25+ years in multinationals across sectors as Head of Marketing — brand strategy, go-to-market, product development and multicultural teams — while sailing offshore (cruising, racing, ocean passages). Senior Partner at <strong className="text-gray-200 font-normal">Studio Zanni e Associati</strong>, leading strategic and operational marketing while continuing to sail. For over 15 years fully dedicated to yachting, delivering bespoke solutions for client satisfaction.
                </p>
                <div className="mt-5 grid sm:grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Core expertise</p>
                    <p className="text-gray-400 font-light leading-relaxed">Yacht Selection • Technical Due Diligence • Strategic/Operational Marketing • Crew Management • Sales • Charter</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Education</p>
                    <p className="text-gray-400 font-light">Master SADA — Marketing and Communication</p>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mt-3 mb-1">Languages</p>
                    <p className="text-gray-400 font-light">IT native • EN professional • PT fluent</p>
                  </div>
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80">Name & photo on request — base Genoa / Palma</p>
              </div>
            </div>
          </div>
          <div className="border border-[#D4AF37]/20 rounded-xl bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-white/10 border border-[#D4AF37]/30 grid place-items-center text-[#D4AF37] text-xl font-luxury shrink-0">YA</div>
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Advisor — Yacht Advisor</p>
                <h2 className="font-luxury text-xl md:text-2xl mt-1">Advisor</h2>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mt-1">Personnel Management & Problem Solving — Yacht Advisor</p>
                <p className="text-gray-400 leading-relaxed text-[14px] font-light mt-4">
                  At Yacht Advisor, the point of reference for <strong className="text-gray-200 font-normal">personnel management and operational problem solving</strong> for crew. Consolidated experience in <strong className="text-gray-200 font-normal">leading organisations in the hospitality sector</strong>, with responsibility for teams and service, and as <strong className="text-gray-200 font-normal">Chief Stewardess</strong> on <strong className="text-gray-200 font-normal">numerous prestigious yachts</strong>. Method: ideal profile definition for compatibility with owner and programme, cross-checked references, building light yet binding standards and structured supervision in the first 60 days. Discreet approach, anticipation and solution — not escalation.
                </p>
                <div className="mt-5 grid sm:grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Core expertise</p>
                    <p className="text-gray-400 font-light leading-relaxed">Recruitment capability • Personnel selection • Crew selection and assessment by attitude and compatibility • Cross-checked references and structured interviews • Service standards and light yet binding SOPs • On-the-job training in hospitality, mise en place, service and housekeeping • Bespoke onboard manuals and operational checklists • Shift planning, conflict and group dynamics management • Real-time operational problem solving with discretion</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.18em] mb-1">Languages</p>
                    <p className="text-gray-400 font-light">IT native • EN excellent • FR near-native, indistinguishable pronunciation (French mother)</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]/80 mt-4">Base Genoa / Palma — on request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/en/#contact"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition shadow-[0_10px_30px_rgba(212,175,55,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Private contact
          </Link>
          <p className="mt-4 text-[11px] text-gray-500 font-light">Reply within 24 hours • No obligation</p>
        </div>
      </div>
    </section>
  );
}
