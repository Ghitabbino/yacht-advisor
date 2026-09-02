<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# ⛔ YACHT-ADVISOR — NON È PORTOLANO ⛔

> **Questo repo è YACHT ADVISOR e SOLO Yacht Advisor.**
> - Repo: `Ghitabbino/yacht-advisor` — Path locale: `Documents/yacht-advisor` — Stack: Next.js 16 + statiche `index.html`/`en.html`
> - **Portolano è un progetto TOTALMENTE DIVERSO**: repo `Ghitabbino/portolano`, path `Documents/Default Project`, wiki Markdown `paesi/*.md` → `paesi.html`, Pages `ghitabbino.github.io/portolano`.
> - **VIETATO** confondere i due: mai copiare file, commit, branch, build, Pages, `AGENTI_HANDOFF.md` o `paesi/` tra i progetti. Se l'utente dice "portolano" lavora SOLO in `Documents/Default Project`.
> - Scolpito 02/09/2026 su richiesta utente — vale per TUTTI gli agenti, per SEMPRE.

---

# 📐 REGOLA UNIFORMITÀ IT/EN — VALIDA PER SEMPRE

> **Scolpita 02/09/2026 su richiesta utente — vale per TUTTI gli agenti, per SEMPRE, su OGNI pagina e OGNI testo.**

- **Grandezza caratteri identica IT↔EN:** ogni pagina IT (`src/app/page.tsx`, `src/app/chi-siamo/page.tsx`, `src/app/selezione/page.tsx`, `src/app/equipaggio/page.tsx`, `src/app/vendita/page.tsx`, `src/app/charter/page.tsx`) e corrispondente EN (`src/app/en/page.tsx`, `src/app/en/about/page.tsx`, `src/app/en/selection/page.tsx`, `src/app/en/crew/page.tsx`, `src/app/en/sale/page.tsx`, `src/app/en/charter/page.tsx`) deve avere **stessi `font-size`, `tracking`, `leading`, `font-weight`, `text-justify/hyphens`, `max-w`, `gap`, `py/mt/mb`, `grid`**. Solo il testo tradotto cambia, mai le classi.
- **Posizione identica IT↔EN:** `Navbar.tsx` (logo YACHT ADVISOR 23/29 tracking 0.40, bussola 11/14, payoff 10.5/11.5), `Footer.tsx`, hero `86px`, premessa `17px leading-[1.85]`, `ServiceCard`, `ServicePageLayout` devono essere **pixel-identici** tra IT ed EN. Verificare con diff `className` prima di ogni commit.
- **Colori identici IT↔EN:** `YACHT #020817` + `ADVISOR #D4AF37` (Cinzel 23/29 tracking 0.40), `payoff #0F172A`, `navy #0F172A`, `oro #D4AF37`, `pearl #FDFCFB` — mai tutto blu o tutto oro in una lingua. `Footer` `YACHT ADVISOR #020817` uniforme.
- **Verifica obbligatoria:** prima di `npm run build` fare audit `grep -n "YACHT\|text-\[\|tracking\|leading"` su IT vs EN e assicurare 1:1. Dopo build controllare `out/index.html` vs `out/en/index.html` con diff. Vietato pubblicare se IT≠EN per classi/layout.
- **Esempio violazione corretta:** IT `YACHT #020817 + ADVISOR #D4AF37` vs EN tutto blu = **vietato** — uniformato a `YACHT #020817 + ADVISOR #D4AF37` in entrambe.
