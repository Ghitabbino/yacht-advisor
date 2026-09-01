# TODO Yacht Advisor - da ricordare

## Da fare (segnalato utente - 2026-09-01)
- [ ] Invio reale form contatti con Resend (o SendGrid/Resend + API route /api/contact)
      Attualmente il form in src/components/ContactForm.tsx fa solo validazione client + mock success.
      Servono: API route, env RESEND_API_KEY, email template luxury, anti-spam, conferma.

- [ ] Deploy su Vercel
      Progetto: yacht-advisor-next (Next.js 16, TypeScript, Tailwind 4)
      Dominio da collegare: yachtadvisor.it (?)
      Verificare env, redirect IT/EN, analytics

## Note
Stack: Next.js 16.3.4 + TypeScript + Tailwind 4 + next/font (Cinzel/Montserrat)
Build: npm run build -- --webpack (Turbopack WASM non supportato su darwin/arm64)
Routes IT: / , /selezione, /equipaggio, /vendita, /charter
Routes EN: /en , /en/selection, /en/crew, /en/sale, /en/charter
Dev: http://localhost:3000
