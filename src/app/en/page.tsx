import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Yacht Advisor | Needs first. Then the right yacht.",
  description:
    "Independent, confidential consultancy: every owner is unique. By understanding your needs, we find the tailored solution. No yard or broker ties.",
};

export default function EnHome() {
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
          aria-label="Luxury yacht at sunset"
        />
        <div className="absolute inset-0 ring-1 ring-white/10 ring-inset pointer-events-none" aria-hidden />
        <div className="relative text-center text-white px-6 max-w-5xl">
          <p className="text-[11px] tracking-[0.45em] uppercase text-white/70 mb-6 font-light">
            Independent • Confidential • Global
          </p>
          <h1 className="font-luxury text-5xl md:text-7xl lg:text-[86px] font-bold leading-[1.15] tracking-tight">
            Your Happiness <br />
            <span className="font-light italic text-[#D4AF37] font-normal">is Our Job</span>
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-8 mb-7" aria-hidden />
          <p className="text-[13px] md:text-[15px] font-light leading-relaxed text-white/85 max-w-3xl mx-auto tracking-wide">
            Every owner is unique. We understand your needs and we find the tailored solution.<br className="hidden md:block" />
            <span className="text-white font-normal">Independent advice, no yard or broker ties</span>
          </p>
          <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-white/55 font-light">Our mission is your complete satisfaction — our only KPI</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#method"
              className="inline-flex items-center justify-center bg-[#D4AF37] text-[#020817] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#c9a22f] transition shadow-[0_10px_30px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              Our method
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/30 text-white px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm hover:bg-white hover:text-[#020817] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contacts
            </a>
          </div>
          <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">
            Mediterranean • Caribbean • Pacific • Middle East — Wherever you cruise
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-y border-gray-100 py-6" aria-label="Values">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-6 md:gap-8 text-center text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> Independent of Shipyards & Brokers</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> Absolute Confidentiality</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> International Network</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden/> One Interest: Yours</span>
        </div>
      </section>

      {/* PREMISE - unique owner concept */}
      <section id="premise" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Premise</p>
            <h2 className="font-luxury text-3xl md:text-[44px] font-bold leading-tight text-[#020817]">
              First we understand.<br className="hidden md:block"/>
              <span className="italic font-normal text-[#0F172A]">Then we advise.</span>
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-10" aria-hidden />
          </div>

          <div className="space-y-6 text-[17px] leading-[1.85] font-light text-gray-600 max-w-3xl mx-auto">
            <p>
              Purchasing a yacht represents a significant investment, with a wide range of vessels available on the market, each characterised by specific construction features and intended use.
            </p>
            <p>
              The prospective owner is thus faced with a broad and often conflicting array of options, making it difficult to identify the choice best suited to their lifestyle and expectations at sea.
            </p>
            <p>
              Equally complex is the selection of the crew, an area often unfamiliar to the new owner. Finding one&apos;s way in this field requires time and energy; moreover, an ill-judged recruitment risks compromising not only the management of the vessel, but the entire holiday experience on board one&apos;s own yacht.
            </p>
            <p className="text-[#0F172A] font-normal">
              Yacht Advisor was created to bridge this gap: first we understand your needs, then we indicate the tailored solution, with independence, documented verification and discretion — as a <em>single integrated team</em> alongside you, with global network and fiduciary protection. Our mission is your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* FOR WHOM - consultancy */}
      <section className="py-16 bg-[#FDFCFB] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-luxury text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-3">Considering a purchase</h3>
            <p className="text-sm leading-relaxed text-gray-600 font-light">Comparative analysis of models, yards and configurations against your actual programme of use.</p>
          </div>
          <div className="md:border-x md:border-gray-200 md:px-10">
            <h3 className="font-luxury text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-3">Already an owner</h3>
            <p className="text-sm leading-relaxed text-gray-600 font-light">Review of crew, onboard processes and running costs to align operations with the expected standard.</p>
          </div>
          <div>
            <h3 className="font-luxury text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-3">Considering a sale</h3>
            <p className="text-sm leading-relaxed text-gray-600 font-light">Market assessment, channel selection and negotiation with attention to documentation and discretion.</p>
          </div>
        </div>
      </section>

      {/* SERVICES - consultancy */}
      <section id="services" className="py-24 md:py-32 bg-[#0F172A] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Scope</p>
            <h2 className="font-luxury text-3xl md:text-[44px] font-bold leading-tight">
              Four areas,<br />
              <span className="italic font-normal text-white/90">one mandate: to protect you.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed font-light text-gray-400">
              Each engagement is independent and fiduciary. Same method: requirements gathering, technical verification, comparison of alternatives.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-14" aria-hidden />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            <ServiceCard
              href="/en/selection"
              title="Yacht Selection"
              description="Comparative analysis of models and yards against your programme of use, with technical due diligence and value retention review."
              cta="Learn more →"
            />
            <ServiceCard
              href="/en/crew"
              title="Crew Management"
              description="Assessment of profiles, references and operational fit, with service standards and contractual management."
              cta="Learn more →"
            />
            <ServiceCard
              href="/en/sale"
              title="Sales Advisory"
              description="Market analysis, channel selection and negotiation with documentation and discretion."
              cta="Learn more →"
            />
            <ServiceCard
              href="/en/charter"
              title="Charter Management"
              description="Strategy, distribution and operating processes for charter use consistent with standards and asset protection."
              cta="Learn more →"
            />
          </div>
        </div>
      </section>

      {/* METHOD - consultancy */}
      <section id="method" className="py-24 md:py-32 bg-[#FDFCFB] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Method</p>
            <h2 className="font-luxury text-3xl md:text-[42px] font-bold leading-tight text-[#020817]">
              Independence, <br />
              <span className="italic font-normal">verification, discretion.</span>
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-14" aria-hidden />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37] font-luxury text-sm">01</div>
              <h3 className="font-luxury text-[13px] uppercase tracking-[0.18em] text-[#020817] mb-3">In-depth needs analysis</h3>
              <p className="text-sm leading-relaxed font-light text-gray-600">Our operating approach is founded on an in-depth analysis of our clients’ needs, expectations and requirements — through dedicated interviews, active listening and reconstruction of your cruising programme — we define objective, measurable and shared criteria. We do not propose solutions before thoroughly understanding all aspects: every relevant detail, from layout to time management on board, is considered because nothing is recommended without understanding what serene, surprise-free cruising truly means to you.</p>
            </div>
            <div className="text-center md:border-x md:border-gray-200 md:px-8">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37] font-luxury text-sm">02</div>
              <h3 className="font-luxury text-[13px] uppercase tracking-[0.18em] text-[#020817] mb-3">Independent, documented verification</h3>
              <p className="text-sm leading-relaxed font-light text-gray-600">We operate with no commissions from yards or brokers and no sales mandates: our independence is substantive, not declared. Every recommendation results from in-depth technical verification, systematic comparison of alternatives, analysis of real comparables, examination of documentation, maintenance history and cross-checked sources. Each recommendation is documented, reasoned point by point and solely in your interest, with full transparency on limits, risks and discarded alternatives, so that every choice is understandable, defensible and free of surprises.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37] font-luxury text-sm">03</div>
              <h3 className="font-luxury text-[13px] uppercase tracking-[0.18em] text-[#020817] mb-3">Discretion and continuity</h3>
              <p className="text-sm leading-relaxed font-light text-gray-600">Information, identity, timing and negotiation content remain under your control, handled with absolute discretion, as in leading professional firms. The same commitment to utmost client satisfaction, the same care for detail and the same continuity of oversight are applied to all our other services — yacht selection, crew management, sale assistance and charter management — with identical methodological rigour, traceability and fiduciary protection at every stage.</p>
            </div>
          </div>

          <p className="mt-14 text-center text-sm font-semibold text-[#020817] max-w-2xl mx-auto tracking-wide">
            We understand needs, we verify options, we deliver the tailored solution.
          </p>
        </div>
      </section>

      {/* PRINCIPLES - inspired by leading firms */}
      <section className="py-16 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Our principles</p>
          <h2 className="font-luxury text-2xl md:text-[32px] font-bold text-center text-white leading-tight">
            The discipline of leading firms,<br /><span className="italic font-normal text-white/85">applied to yachting.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">01 — Client first</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Your interest comes first. No third-party incentives, no conflicts.</p>
            </div>
            <div className="md:border-x md:border-white/10 md:px-6">
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">02 — Rigour & verification</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Verifiable data, cross-checked sources, real comparables. Every recommendation is documented.</p>
            </div>
            <div className="md:border-x md:border-white/10 md:px-6">
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">03 — Long-term view</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">We assess impact beyond the purchase: operation, value retention, service continuity.</p>
            </div>
            <div>
              <p className="font-luxury text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">04 — Discretion</p>
              <p className="text-[13px] leading-relaxed font-light text-gray-400">Information, identity and negotiations under your control. Discretion as in a leading law firm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE - consultancy */}
      <section className="py-14 bg-[#FDFCFB] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-luxury text-xl md:text-2xl text-[#0F172A] font-light leading-relaxed">
            &ldquo;Good advice is measured by what it helps you avoid,<br className="hidden md:block"/> not by what it promises.&rdquo;
          </p>
        </div>
      </section>

      {/* CONTACT - consultancy */}
      <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4">Contacts</p>
            <h2 className="font-luxury text-3xl md:text-[42px] font-bold leading-tight text-[#020817]">
              Let&apos;s <span className="italic font-normal">assess together.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed font-light text-gray-500 max-w-xl mx-auto">
              Share context, requirements and constraints. We reply within 24 hours, in confidence. Initial exchange without obligation.
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 mb-12" aria-hidden />
          </div>
          <ContactForm lang="en" />
          <p className="mt-8 text-center text-[11px] leading-relaxed text-gray-400 font-light">
            Prefer to write directly? <a href="mailto:info@yachtadvisor.it" className="text-[#0F172A] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] transition">info@yachtadvisor.it</a> — confidential correspondence.
          </p>
        </div>
      </section>
    </>
  );
}
