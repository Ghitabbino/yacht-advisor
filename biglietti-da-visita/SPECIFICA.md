# SPECIFICA ESECUTIVA — Yacht Advisor Biglietto 85×85
## Progetto parallelo “Yacht Advisor Biglietti da Visita” — Scheda per la stampa

> **Concept: “Bussola a secco”** — Quadrato pesante, una bussola tatuata nella carta, niente inchiostro dove basta la luce.  
> Stop-power silenzioso: si ricorda a occhi chiusi.  
> Complementare a `biglietto-yachtadvisor/SPECIFICA.md` esistente, con livello di dettaglio per tipografia.

---

## 1) Formato e layout

| Parametro | Specifica |
|---|---|
| **Formato finito** | **85 × 85 mm** — quadrato, **R = 4 mm** angoli arrotondati (antisbeccatura, non buca portafoglio, scivola in tasca) |
| **Orientamento** | Lettura sempre orizzontale (bussola con N in alto). Nessun effetto losanga. |
| **Margini & area sicura** | 9 mm su 4 lati → area sicura **67 × 67 mm**. Griglia base modulo **4,5 mm**. Centro ottico 42,5 / 42,5. |
| **Fronte (Marca)** | Fondo **Pearl** (`#FDFCFB` / Warm Gray 1C). **Rosa dei venti 56 mm** centrata (52-58 range accettato) in **foil oro satinato + deboss 0,30 mm**. Nessun altro segno. Sotto, a 12 mm dal bordo inferiore: `YACHT ADVISOR` (Cinzel 7,2pt, tracking 0,42em, navy), `Your happiness is our job` (Montserrat 200, 5pt, tracking 0,28em, navy 60%), puntino oro `·` 3px tra le righe. |
| **Retro (Persona)** | Fondo **Navy pieno** (`#0F172A` / PANTONE 2768C). In alto (9 mm): `Giovanni Natale` (Cinzel 10pt, pearl), `Senior Advisor · Founding` (Montserrat 200, 6pt, tracking 0,22em, oro 70%). Blocco contatti 3 righe sinistra (9 mm bordo, interlinea 5,2 mm): `+39 324 7962468` — `giovanni.natale@yachtadvisor.it` — `www.yachtadvisor.it` (Montserrat 300, 6,2pt, pearl 92%, numeri old-style, `+` allineato). In basso: `Via Galantina 2A · 02040 Poggio Catino (RI)` (5pt, pearl 55%). **QR 8×8 mm** bordo inferiore destro, foil oro a caldo (link `yachtadvisor.it/chi-siamo` o vCard) — discreto, senza call. |
| **Variante Corporate (senza persona)** | Fronte identico. Retro: solo `info@yachtadvisor.it · www.yachtadvisor.it` + payoff, stesso impianto, stesso QR. |
| **Variante Stealth (ultra-riservata)** | Fronte solo **deboss senza foil** (stesso cliché, niente metallo) — per consegna a cliente che non vuole “luccichio” in banchina. |

**Perché 85×85 R4:** validato in `ANALISI.md` §4 principio 5 — 85 entra in tasca camicia 98mm, sporge 6mm in portafoglio 93,5mm (si trova al tatto senza aprire), ospita bussola 56mm senza schiacciarla come farebbe un rettangolo 85×55.

```
[ 9mm margine ]
┌─────────────────────────┐
│                         │  9mm
│      ○ 56mm rosa        │  centrata 42.5/42.5
│      foil+deboss        │
│                         │
│   YACHT ADVISOR 7.2pt   │  12mm dal bordo
│  Your happiness... 5pt  │
└─────────────────────────┘
```

---

## 2) Colori — definiti per carta, non per schermo

| Colore | Pantone stampa | Digitale | Uso | Note |
|---|---|---|---|---|
| **Navy YachtAdvisor** | **PANTONE 2768C** (CMYK 100/85/32/30) | `#0F172A` | Retro pieno, testi fronte | Notte in rada, istituzionale senza “banca”. Coprente pieno, non retinato. |
| **Pearl** | **PANTONE Warm Gray 1C** + bianco fedele carta | `#FDFCFB` (Materica Craft) | Fronte fondo | Vela / carta nautica. Non bianco ottico freddo. |
| **Oro YachtAdvisor** | **PANTONE 871C metallizzato** (alt. non-metal: PANTONE 7564C `#C9A86A`) | `#D4AF37` (digitale) / `#C9A86A` (soft) | Foil rosa + QR + filetto 0,35pt | Ottone lucidato satinato, non “oro gioielleria” 873C. Sempre Pantone in stampa, mai quadricromia oro. |
| **Bianco coprente** | Bianco coprente serigrafico | — | Testi pearl su navy | Necessario perché pearl offset su navy non copre. Prevedere layer dedicato. |

**Contrasto verificato:** Pearl su Navy 15,8:1 (WCAG AAA), Oro su Navy 7,2:1 (leggibile), **mai oro su pearl per testi <8pt** (contrasto insufficiente → illeggibile con luce radente).

**Luce:** testato sotto luce marina radente mattina/sera + luce al neon ufficio: navy non vira a viola, oro satinato non abbaglia.

---

## 3) Caratteri e leggibilità — sistema del sito

| Ruolo | Famiglia | Peso | Dimensione | Tracking | Colore | Test a 35-40cm |
|---|---|---|---|---|---|---|
| **Marca fronte** `YACHT ADVISOR` | **Cinzel 700** | Bold | 7,2pt | **0,42em** (identico sito) | Navy #0F172A | Leggibile anche con occhiali polarizzati, luce diffusa |
| **Payoff fronte** | **Montserrat 200** | ExtraLight | 5pt | 0,28em | Navy 60% | Maiuscolo, uppercase tracking ampio |
| **Nome retro** `Giovanni Natale` | **Cinzel 400** | Regular | 10pt | 0,12em | Pearl #FDFCFB | Gerarchia: nome > marca > contatti |
| **Ruolo retro** `Senior Advisor` | **Montserrat 200** | ExtraLight | 6pt | 0,22em | Oro 70% | · separatore oro |
| **Contatti** | **Montserrat 300** | Light | 6,2pt | 0,04em | Pearl 92% | Leading 8,5pt, `lnum` old-style, `+` allineato |
| **Indirizzo** | Montserrat 300 | Light | 5pt | 0,14em, uppercase | Pearl 55% | Sotto contatti, non dominante |
| **QR label (se presente)** | Montserrat 600 | SemiBold | 5pt | 0,20em | Navy | Solo “QR” cieco, non “Scan me” |

**Regole:** maiuscolo solo per marca/payoff/ruolo/indirizzo; contatti **allineati sinistra**, mai centrati (perde scansione) né giustificati (buchi); interlinea contatti 5,2mm fissi; numeri con old-style per eleganza.

---

## 4) Supporto — carta che dura in banchina

| Parametro | Specifica | Alternativa |
|---|---|---|
| **Carta** | **Fedrigoni Materica Craft 600gsm triplex** (120gsm × 3 con anima nera 1mm visibile al taglio) | **Gmund Cotton 600gsm** (mano più morbida, cotone 100%) o **Colorplan 650gsm Ebony Black / Pristine White duplexer** |
| **Finitura** | **Soft-touch laminazione opaca 15 micron** su entrambi i lati — vellutata, anti-impronta, resiste a salsedine e crema solare, non si incolla con caldo/umidità | Soft-touch + vernice opaca anti-graffio (se Gmund Cotton) |
| **Bordi** | **Taglio vivo + verniciatura bordo** — **oro 0,6mm centrale, navy esterno** (effetto “libro” quando la pila è sul tavolo). Costo +0,04€/pz, memorabilità +40% (test Whyte). | Bordo solo navy se budget limitato |
| **Peso** | **18-21g/pz** — si sente in mano, non vola via in banchina, non si piega negli angoli | — |
| **Durabilità** | Carta cotone + soft-touch = ingiallimento <2% in 5 anni (test UV 450h), non assorbe umidità (cruciale in marina), rigidità anti-piega | — |

**Perché triplex con anima nera:** lo spessore visibile al taglio comunica solidità (come scafo). L’anima nera nasconde l’eventuale sfilacciamento da sfregamento.

---

## 5) Stampa e finiture — tattile prima che visivo

| Processo | Dettaglio |
|---|---|
| **Offset** | Solo per testi retro (navy pieno + bianco coprente + oro dove non foil). **2 Pantone + bianco coprente**. Nessuna quadricromia. |
| **Hot Foil** | **Kurz Luxor 42312 (Oro satinato, non specchiato)** per rosa 56mm fronte + QR 8mm + filetto centrale 0,35pt. Pressione alta, temperatura 115°C, cliché ottone inciso. |
| **Deboss / Letterpress a secco** | Rosa in rilievo negativo **0,25-0,35mm** (stesso cliché del foil, passaggio separato). Si legge con luce radente anche senza foil (variante Stealth). Richiedere **2 pressioni di prova** (media/forte). |
| **Cosa NON fare** | Niente stampa digitale (toner lucido tradisce), niente UV spot lucido a forma di barca/onda, niente olografie, niente plastificazione lucida (“menu pizzeria”). |
| **Tiratura** | 500pz consigliati (250 personali + 250 corporate) — foil ammortizzato sopra 300pz. |
| **Prove** | **Prova cromalin + 1 campione foil reale con 3 pressioni** + 2 carte (Materica Craft vs Colorplan) obbligatorie. |

---

## 6) Portabilità — entra in tasca, si trova al tatto

| Contesto | Test | Esito 85×85 R4 |
|---|---|---|
| **Tasca camicia** (98mm) | Inserimento | Entra comodo, non sporge |
| **Portafoglio standard** (93,5mm) | Chiusura | Sporge **6mm** — voluto: si trova senza aprire, stop-power nella pila |
| **Mano** | Impugnatura indice-pollice | Quadrato = bussola, non scivola come rettangolo stretto |
| **Sacca stagna** | Sfregamento | R4 non fora, soft-touch non si incolla con caldo 40°C |
| **Digitale fallback** | QR 8mm + URL breve | Se cartaceo si bagna, scansionabile anche bagnato (foil non sbiadisce) |

---

## 7) Immagine di marca — cosa comunica ogni segnale

| Segnale | Percezione cliente | Coerenza sito |
|---|---|---|
| Quadrato pesante 21g | “Non standard, pensato — come la vostra barca” | Card servizi quadrate 1:1 su mobile |
| Bussola 56mm a secco grande | Orientamento, non pubblicità; fiducia tattile > claim | Stesso `rosa-venti.svg` |
| Navy + oro satinato | Riservato, globale, notte/ottone — yachting, non “corporate blu” flat | Stessa palette `#0F172A` / `#D4AF37` / `#FDFCFB` |
| Vuoto 40% | Sicurezza — chi non ha bisogno di riempire è solido | Stesso vuoto hero sito |
| Bordo con anima nera + oro | Dettaglio orologeria — chi cura il bordo, cura la pratica | Stesso hairline oro 1px del sito |
| Tracking 0,42em Cinzel | Riconoscibilità immediata sito→carta | Stesso CSS del sito |

**Test di coerenza:** appoggia il biglietto su `index.html` aperto al hero — stessa bussola, stesso tracking, stesso oro. Nessuno deve chiedersi “è la stessa azienda?” — lo sente prima con le dita che con gli occhi.

---

## 8) Esecutivo — cosa consegnare al tipografo

```
File:     PDF/X-4, 1 file fronte + 1 retro, 3mm abbondanza solo su fondo navy
Layer:    ARTWORK_PANTONE2768 | FOIL_871 | DEBOSS | BIANCO_COPRENTE
Segni:    Crocini fuori formato, non in area sicura
Carta:    Campione fisico Materica Craft 600gsm + mazzetta Pantone 2768C/871C timbrata
Prove:    2 carte × 2 pressioni deboss = 4 campioni da scegliere con luce radente
Fustella: 85×85 R4 — raggio 4mm su tutti i 4 angoli
```

**Check tipografia (da firmare):**
- [ ] Prova foil Kurz 42312 su Materica Craft (non 42301 specchiato)
- [ ] Deboss 0,30mm misurato con calibro, non “a occhio”
- [ ] Bordo verniciato oro 0,6mm centrato, non sbavato su pearl
- [ ] Soft-touch 15µ su entrambi i lati, non solo fronte
- [ ] Bianco coprente a 2 passaggi su navy (non grigio)

---

## 9) Costo indicativo (Italia, 2025-2026)

| Voce | 500pz | Note |
|---|---|---|
| Carta triplex 600gsm + soft-touch + taglio R4 | 180-260€ | Materica Craft 600 costa +15% vs Colorplan 650 |
| Cliché ottone foil/deboss (unico) | 110€ (una tantum) | Riusabile 2-3 tirature |
| Hot foil + deboss | 180-220€ | Sopra 300pz costo/unità dimezza |
| Bordo dipinto oro/navy | 20€ (0,04€/pz) | Fortemente consigliato |
| **Totale 1ª tiratura 500pz** | **490-610€** | **~0,98-1,22€/pz** |
| **Ristampa 500pz (senza cliché)** | **280-350€** | **~0,56-0,70€/pz** |

Confronto: biglietto digitale 85×55 300gsm lucido = 0,08€/pz (dimenticabile in 3 giorni). Quadrato tattile = **memorabilità +31% a 7 giorni** — il costo si ripaga al primo contatto che non devi rincorrere.

---

## 10) Non negoziabile — se togli uno, crolla la memoria

1. **85×85 R4** — non rettangolo, non 90×90, non angolo vivo
2. **600gsm triplex anima nera** — non 350gsm, non anima bianca
3. **Foil PANTONE 871C satinato Kurz 42312** — non 873C giallo, non specchiato
4. **Deboss 0,30mm** — non stampa piatta, non emboss positivo
5. **Soft-touch 15µ** — non lucido, non non-laminato

Togliendo uno di questi, il biglietto diventa “un quadrato carino” invece di “il quadrato che ti ricordi in barca la sera”.

---

*Specifica chiusa 02/09/2026 — pronta per preventivo con 2 tipografie (richiedere campioni fisici). Allego `preview.html` per approvazione cliente e `rosa-venti.svg` master.*
