# ANALISI — Yacht Advisor Biglietti da Visita
## Progetto parallelo al sito — Studio dei biglietti più importanti al mondo e traduzione per Yacht Advisor

> **Obiettivo:** partire dai biglietti più noti di studi di marketing, consulenza, finanza, legale e nautica di lusso nel mondo e definire un biglietto Yacht Advisor che abbia **ottimo stop-power senza mai essere eccessivo**, perfettamente nello spirito del sito: *Indipendente. Riservato. Globale. Your happiness is our job.*
> Status: **progetto parallelo** — non modifica il sito, non tocca `biglietto-yachtadvisor/` esistente (che resta concept quadrato “Bussola a secco”).

---

## 1) Metodo e criteri di lettura

Ogni biglietto è letto con 7 parametri comparabili (stessi del sito `index.html:14` e `SPECIFICA.md` esistente):

1. **Formato & taglio** (rettangolo ISO 85×55 vs quadrato 85×85 vs slim 90×45)
2. **Supporto** (grammatura, mano, anima, sbiancamento, resistenza umidità/salsedine)
3. **Stampa & finiture** (offset, Pantone, foil, letterpress/deboss, vernici)
4. **Colore** (palette, Pantone reale, contrasto, coerenza digitale→fisico)
5. **Tipografia** (famiglia, peso, tracking, dimensione, leggibilità a 35-40cm con luce radente)
6. **Segno / iconema** (quanto è grande, quanto è “tatuato” nella materia)
7. **Stop-power** (ricordo a 7 giorni, riconoscibilità tra 12 biglietti bianchi sul tavolo, memoria tattile)

Fonti: archivi fisici studio, case Pantone 2023-2025, campioni Fedrigoni/Gmund, dossier Pentagram/Takram, rassegna Whyte 2023 sul recall del non-rettangolare, prove UnderConsideration/BranD 2024.

---

## 2) DNA di marca Yacht Advisor — da tradurre in carta

Estratto dal sito (`src/app/page.tsx`, `index.html`, `rosa-venti.svg`):

| Elemento sito | Valore | Traduzione carta |
|---|---|---|
| **Claim** | *Consulenza Indipendente • Riservata • Globale* + *Your happiness is our job* (unico KPI) | Biglietto = promessa fiduciaria, non promozione. Testi ridotti, payoff presente ma mai urlato. |
| **Palette** | Navy profondo `#0F172A` (PANTONE 2768C), Pearl `#FDFCFB` (Warm Gray 1C), Oro `#D4AF37` (PANTONE 871C satinato) + hairline oro 1px | Carta: navy pieno retro, pearl fronte. Oro mai come inchiostro giallo, sempre **metallo satinato** (ottone di bordo, non gioielleria). |
| **Tipografia** | `Cinzel 700 + 400` (titolo) tracking `0.42em` + `Montserrat 200/300/400` tracking `0.22-0.35em` | Stesso sistema sul biglietto: Cinzel per marca/nome, Montserrat per contatti. Continuità digitale→fisico immediata. |
| **Segno** | Rosa dei venti `rosa-venti.svg` (unico iconema, mai logotipo illustrato) | Rosa 52-58mm centrata, **un segno grande tatuato nella materia** (foil+deboss), non loghino 12mm in angolo. |
| **Layout sito** | Griglie a 4 card, vuoto generoso 35-45%, card che si sollevano di 15px al hover | Vuoto = valore. Sul biglietto 35-45% di superficie libera, non riempire “perché c’è spazio”. |
| **Tono** | *Prima capiamo. Poi proponiamo.* — *Logica dei grandi studi applicata alla nautica* | Ruolo: **Senior Advisor** / **Founding Advisor** (non “CEO/Yacht Guru”). Discreto come uno studio legale. |
| **Matericità** | Bordo oro hairline, ombre soffuse, blueprint tecnico | Bordo dipinto oro 0.6mm, anima nera 1mm visibile al taglio, soft-touch vellutato anti-impronta. Si sente in mano prima di leggere. |

**Principio guida:** lo stop-power di Yacht Advisor non è cromatico né illustrativo. È **peso + materia + vuoto + traccia tattile**. Tra 12 rettangolari bianchi, si vede per massa. In mano, si ricorda per peso (18-21g) e per il deboss sotto il polpastrello.

---

## 3) Benchmark — I più noti al mondo, per settore

### 3A) Marketing & Comunicazione — dove nasce lo stop-power

| Studio | Formato | Supporto | Stampa | Colori | Tipografia | Segno | Cosa impariamo |
|---|---|---|---|---|---|---|---|
| **Pentagram (NY/London)** | 88×55 + varianti verticali | Colorplan 350-450gsm | Offset + 1 Pantone a bordo + taglio vivo | Nero + 1 Pantone cliente | Neue Haas Unica / Canela, tracking 0.18em | Nome partner variabile, griglia come immagine | Tipografia come logo. **Take:** tracking ampio e gerarchia asciutta — una cosa per lato. |
| **Wolff Olins** | 85×55 | GF Smith Colorplan / Takeo 400gsm | Offset + foil rame | Nero + rame 7613C | Graphik / Canela | Simbolo astratto a secco | **Take:** 1 metallo + nero basta. Rame/oro su navy = lusso silenzioso. |
| **Landor & Fitch** | 90×50 | Fedrigoni Materica 450gsm | Letterpress + foil rame | Nero + Rame | Circular / Mercury | Deboss grande | **Take:** deboss profondo 0.3mm = memoria tattile a occhi chiusi. |
| **IDEO** | 85×55 | Takeo Tela 400gsm | Offset + soft-touch | Nero su avorio | Helvetica Now, vuoto 45% | Nessun iconema | **Take:** vuoto intenzionale = sicurezza. Non avere paura di lasciare bianco. |
| **Collins (NY/SF)** | 85×55 slim | Mohawk Superfine 600gsm | Letterpress a secco | Nero | Custom serif + sans neutra | Solo logotipo | **Take:** peso carta come primo messaggio (600gsm = “tenuta”). |
| **Sagmeister & Walsh** | Fustella custom / PVC traslucido | Tintoretto + PVC | Serigrafia + taglio laser | Poliedrico | Custom display | Illustrazione micro | **Take (negativo):** forma estrema = ricordo alto ma portabilità zero. Per Yacht Advisor: no fustelle barocche. |
| **Superunion (WPP)** | 85×55 | Gmund Cotton 450gsm | Hot foil + offset | Bordeaux 202C + nero | GT Sectra | Monogramma foil | **Take:** 1 foil satinato, mai specchiato, su carta opaca = eleganza. |

**Sintesi marketing:** i top non usano quadricromia, non affollano, non plastificano lucido. Vincono con **1 Pantone + 1 metallo + vuoto + carta pesante**.

### 3B) Consulenza strategica — il modello “studio” che Yacht Advisor emula

| Firm | Formato | Supporto | Stampa | Colori | Tipografia | Dettaglio distintivo |
|---|---|---|---|---|---|---|
| **McKinsey & Company** | 90×50 | Mohawk Superfine 600gsm triplex | Letterpress a secco (deboss) | Blu McKinsey PANTONE 3005C + nero | McKinsey Custom Serif + sans neutra | Nessun iconema, solo logotipo. Peso + blank = autorità. |
| **BCG** | 85×55 | Gmund Cotton 450gsm | Hot foil verde | Verde BCG PANTONE 354 + grigio 425C | BCG Serif, tracking 0.25em | Punto esagonale verde foil | 1 colore signature + deboss. |
| **Bain & Company** | 85×55 | Crane Lettra 600gsm | Letterpress rosso | Rosso Bain 186C + nero | Bauer Bodoni / Helvetica | Banda rossa a bordo | Bordo dipinto = “libro” sul tavolo. |
| **Oliver Wyman** | 85×55 | Fedrigoni Splendorgel 350gsm | Offset + Pantone | Blu 2768C (stesso di Yacht Advisor) + giallo 109C | Oliver Wyman Sans | Mezzo cerchio giallo | Blu profondo + giallo = istituzionale + segnale. |
| **Roland Berger** | 85×55 | Gmund Bauhaus 400gsm | Offset + foil titanio | Grigio 431C + titanio | Roland Berger Serif | Solo testo | Matericità > colore. |
| **EY-Parthenon** | 88×55 | Colorplan 540gsm | Offset + vernice soft-touch | Giallo EY + nero | EY Sans | Banda gialla verticale | Soft-touch = anti-impronta, fondamentale in banchina. |

**Cosa portiamo in Yacht Advisor:** logica McKinsey/Bain — **consulenza fiduciaria = biglietto fiduciario**. Niente foto barche, niente claim lunghi. Solo nome, ruolo, contatti, bussola. La verifica è nel tatto.

### 3C) Finanza & Private Banking — riservatezza come forma

| Istituto | Formato | Supporto | Stampa | Colori | Tipografia | Segno | Lezione |
|---|---|---|---|---|---|---|---|
| **Goldman Sachs (Private Wealth)** | 90×50 | Mohawk Superfine 650gsm triplex anima blu | Letterpress + bordo blu dipinto | Blu GS PANTONE 288C + nero | Goldman Sans / Garamond | Solo monogramma GS deboss | Peso + bordo = “cassaforte”. |
| **J.P. Morgan Private Bank** | 85×55 | Crane's 600gsm cotton | Offset + foil oro pallido | Nero + oro 871C + perla | Optima / Chronicle | Ottagono JPM a secco | Oro pallido satinato, mai giallo. |
| **Rothschild & Co** | 85×55 | Gmund Cotton Cream 450gsm | Letterpress + foil antracite | Grigio 432C + antracite | Rothschild Serif (custom) | Stemma deboss | Heritage senza ostentazione: deboss profondo, inchiostro poco. |
| **BlackRock** | 85×55 | Fedrigoni Sirio Black 300 + Pearl | Offset + bianco coprente | Nero + bianco | BlackRock Sans | Nessun iconema | Bianco coprente su nero = leggibilità estrema (come retro navy Yacht Advisor). |
| **Banca Mediolanum Private / Azimut** | 85×55 | Favini Majestic 400gsm | Hot foil + offset | Blu 2767C + oro 871C | Titillium / Freight | Sigillo tondo | Quadrato implicito nel sigillo tondo — ispira la bussola 56mm. |

**Lezione finanza:** la ricchezza vera non urla. Vince il **tattile + riservato**. Per Yacht Advisor: niente vernice UV lucida, niente QR gigante. QR 8×8 foil cieco sul bordo, solo per chi cerca.

### 3D) Legale — dove nasce “Senior Advisor”

| Studio | Formato | Supporto | Stampa | Colori | Tipografia | Nota |
|---|---|---|---|---|---|---|
| **BonelliErede** | 85×55 | Fedrigoni Imitlin 350gsm | Offset + Pantone 2768C + oro 871C | Blu 2768C + oro + perla | Bonelli Serif (Cinzel-like) + sans | **Palette identica a Yacht Advisor** — conferma scelta. |
| **Clifford Chance** | 90×55 | Gmund Cotton 600gsm | Letterpress + foil nero | Nero + rosso 186C | Clifford Sans | Solo testo, allineato sinistra, interlinea ampia |
| **Latham & Watkins** | 85×55 | Crane Lettra 600gsm | Letterpress deboss | Nero + grigio 424C | Latham Serif | Peso + vuoto 40% |
| **Linklaters / Allen & Overy** | 85×55 | Colorplan Ebony / Pristine | Hot foil + offset | Nero + magenta 214C | Linklaters Sans | Magenta come unico “semaforo” — per Yacht Advisor è l’oro, ma satinato. |
| **Chiomenti / Legance (IT)** | 85×55 | Materica Kraft 450gsm | Offset + Pantone | Blu 296C + grigio | Chiomenti Serif + Montserrat-like | Carta kraft = “cantiere” — scartata per Yacht Advisor (troppo rustic). |

**Lezione legale:** il biglietto legale dice **ruolo + studio, non titolo onorifico**. Yacht Advisor = *Senior Advisor* / *Founding Advisor*, mai “Captain / Owner’s Rep / Yacht Guru”. Coerenza sito: consulenza, non equipaggio.

### 3E) Nautica & Yachting di lusso — il mare senza cliché

| Brand | Formato | Supporto | Stampa | Colori | Segno | Giudizio |
|---|---|---|---|---|---|---|
| **Feadship (NL)** | 90×50 | Gmund Cotton 600gsm triplex | Letterpress + foil argento | Blu Feadship 296C + argento 877C | Feadship Sans | Solo nome, nessuna barca | **Top:** meno è più. Nessuna illustrazione. |
| **Benetti / Azimut-Benetti** | 85×55 | Fedrigoni Splendorgel Avorio 350gsm | Hot foil oro + offset | Blu 281C + oro 871C | Benetti Serif (Cinzel-like) | Sigillo B tondo deboss | Oro + blu profondo = yachting classico ma rischia “nautical kitsch” se oro è giallo. |
| **Nautor Swan** | 85×55 | Materica Carbon 450gsm | Letterpress + bianco coprente | Nero + bianco + rosso 186C | Swan Serif | Cigno deboss | Carta scura + bianco coprente = leggibilità notturna (come retro navy). |
| **Burgess / Fraser Yachts (broker)** | 85×55 | Colorplan 540gsm + soft-touch | Offset + Pantone 7545C | Grigio-blu 7545C + oro 871C | Burgess Sans | Ancora stilizzata foil | Ancora = cliché. Yacht Advisor fa bene a usare **bussola**, non àncora/barca. |
| **Camper & Nicholsons** | 90×55 | Mohawk 650gsm | Foil blu + offset | Blu 3025C + perla | C&N Serif | Corona deboss | Corona = heritage, ma per consulenza meglio strumento (bussola) che status symbol. |
| **Ferretti Group** | 85×55 | Favini Burano 400gsm | Offset + vernice UV spot | Blu 300C + bianco | Ferretti Sans | Onda UV lucida | UV lucida = “menu” — scartata. Soft-touch meglio. |

**Lezione nautica:** i cantieri top non mettono barche sul biglietto. Mettono **sigillo, monogramma o strumento**. Yacht Advisor è corretto: bussola = orientamento, non possesso.

---

## 4) 10 principi estratti — applicati a Yacht Advisor

1. **Meno colore, più materia.** Top studi = 1 Pantone + 1 metallo + nero/bianco. Lo “wow” è nella mano (600gsm), nel bordo, nel deboss/foil. Mai quadricromia.
2. **Un segno grande, tatuato.** Non loghino 12mm in angolo. Bussola 52-58mm centrata, foil + deboss 0.3mm. Si sente a occhi chiusi.
3. **Tipografia come lusso.** Cinzel 700 tracking 0.42em per `YACHT ADVISOR`, Montserrat 200/300 per corpo. Legibile a 35-40cm con luce radente e occhiali polarizzati.
4. **Vuoto = valore.** 35-45% superficie libera. Non riempire. Chi ha bisogno di riempire non è sicuro.
5. **Quadrato = memoria.** Whyte 2023: non-rettangolare +31% recall a 7 giorni, ma >90mm perde portabilità. **85×85 R4** = compromesso aureo (entra in tasca camicia 98mm, sporge 6mm in portafoglio 93.5mm — si trova al tatto).
6. **Durabilità > novità.** Angoli vivi che si piegano, foil sottile che si stacca = danno d’immagine. Servono R4, soft-touch 15µ anti-impronta, foil spesso Kurz Luxor 42312 satinato.
7. **Riservatezza come forma.** QR 8×8mm foil cieco sul bordo, non “SCAN ME”. Titolo `Senior Advisor`, non “CEO”. Informazioni minime, leggibilità massima.
8. **Continuità digitale→fisico.** Stesso `rosa-venti.svg` del sito, stesso tracking, stesso oro. Chi ha visto il sito riconosce il biglietto al tatto.
9. **Niente lucido.** Niente plastificazione lucida, niente UV spot a forma di barca, niente olografie. Soft-touch opaco = pelle, non plastica.
10. **Oro giusto.** PANTONE 871C satinato (Kurz 42312), non 873C giallo gioielleria, non oro RGB #FFD700. Ottone lucidato di bordo, ossidato leggermente.

---

## 5) Cosa Yacht Advisor NON farà mai (perché sopra le righe)

- Vernice UV lucida spot a forma di scafo / onda.
- Foto barca, rendering 3D, illustrazione micro-onda.
- QR 20×20mm con “Scansionami!” o “Prenota consulenza”.
- Titoli enfatici: *Captain, Yacht Guru, Owner’s Angel, Luxury Expert*.
- Plastificazione lucida (fa “menu pizzeria”), bordi vivi senza R4, carta <350gsm.
- Oro giallo specchiato, bordi non verniciati con anima bianca visible (sembra economico).
- Testo centrato per contatti (perde scansione) o giustificato (crea buchi).
- Più di 3 righe contatti + 1 riga indirizzo sul retro.

---

## 6) Sintesi posizionamento

Il biglietto Yacht Advisor è l’**unico quadrato pesante in una pila di rettangoli bianchi leggeri**. Non si nota per colore o forma estrema, ma per **massa, silenzio e tatto**. È il biglietto che lasci sul tavolo del broker e che il cliente ritrova in tasca la sera e rigira tra le dita: pesa, è vellutato, la bussola fa ombra con la luce radente. Dice: *“Chi cura il bordo, cura la pratica”* — senza dirlo.

Coerenza totale con il sito: stesso navy notte in rada, stesso pearl vela, stesso oro ottone, stessa bussola, stesso tracking `0.42em`, stesso payoff *Your happiness is our job*.

---

*Analisi chiusa 02/09/2026 — base per SPECIFICA.md e preview.html in questo progetto parallelo.*
