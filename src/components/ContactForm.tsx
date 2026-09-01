"use client";

import { useState } from "react";

type Props = {
  lang?: "it" | "en";
};

const copy = {
  it: {
    name: "Nome e Cognome *",
    email: "Email *",
    subject: "Oggetto *",
    message: "Messaggio *",
    submit: "Invia Richiesta",
    hint: "* Campi obbligatori. Rispondiamo entro 24h.",
    success: "Richiesta inviata con successo. Ti risponderemo a breve.",
  },
  en: {
    name: "Full Name *",
    email: "Email *",
    subject: "Subject *",
    message: "Message *",
    submit: "Send Request",
    hint: "* Required fields. We reply within 24 hours.",
    success: "Request sent successfully. We will be in touch shortly.",
  },
};

export default function ContactForm({ lang = "it" }: Props) {
  const t = copy[lang];
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-y-6">
      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm p-4 text-center"
        >
          {t.success}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`nome-${lang}`} className="sr-only">
            {t.name}
          </label>
          <input
            id={`nome-${lang}`}
            name="nome"
            required
            autoComplete="name"
            placeholder={t.name}
            className="w-full p-4 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition"
          />
        </div>
        <div>
          <label htmlFor={`email-${lang}`} className="sr-only">
            {t.email}
          </label>
          <input
            id={`email-${lang}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.email}
            className="w-full p-4 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition"
          />
        </div>
      </div>
      <div>
        <label htmlFor={`oggetto-${lang}`} className="sr-only">
          {t.subject}
        </label>
        <input
          id={`oggetto-${lang}`}
          name="oggetto"
          required
          placeholder={t.subject}
          className="w-full p-4 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition"
        />
      </div>
      <div>
        <label htmlFor={`messaggio-${lang}`} className="sr-only">
          {t.message}
        </label>
        <textarea
          id={`messaggio-${lang}`}
          name="messaggio"
          rows={5}
          required
          placeholder={t.message}
          className="w-full p-4 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#020817] text-[#D4AF37] font-bold py-5 uppercase tracking-[0.2em] hover:bg-[#0F172A] transition-all duration-300 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
      >
        {t.submit}
      </button>
      <p className="text-[11px] text-gray-400 text-center">{t.hint}</p>
    </form>
  );
}
