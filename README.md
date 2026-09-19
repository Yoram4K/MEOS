# MEOS-Lookalike (schoolproject)

Een **fictieve, educatieve look-alike** van MEOS ("Mobiel Effectiever Op
Straat"), de mobiele applicatie waarmee agenten van de Nationale Politie
basaal politiewerk op straat afhandelen via smartphone.

> ⚠️ **Disclaimer**: dit is een schoolproject. De app is volledig
> losstaand gebouwd op basis van **publiek beschikbare informatie** over de
> functionaliteit van MEOS (nieuwsartikelen, Kamervragen, vacatureteksten).
> MEOS zelf is een intern, beveiligd politiesysteem — er bestaan geen
> publieke screenshots van de echte interface, dus de exacte look van het
> origineel is hier **nagebootst, niet gekopieerd**. Alle gegevens
> (personen, kentekens, adressen, meldingen) zijn verzonnen. De app gebruikt
> geen echt politielogo, is niet verbonden met echte overheidsregisters
> (BRP/RDW/BVH) en is niet onderschreven door of verbonden aan de
> Nationale Politie.

## Functionaliteit

Gebaseerd op de publiek bekende onderdelen van MEOS:

- **Login** — inlogscherm met dienstnummer/wachtwoord (fictief, elke invoer werkt)
- **Dashboard** — dienststatus (in dienst / pauze / uit dienst), snelle acties, recente activiteit
- **Persoonscheck** — zoeken op naam/BSN, tonen van signaleringen en gekoppelde kentekens
- **Kentekencheck** — gesimuleerde RDW/ANPR-raadpleging (voertuiggegevens, APK, diefstal-signalering, WA-verzekering)
- **Melding maken** — incidenten registreren met type, locatie, prioriteit en omschrijving
- **Bekeuring** — digitale bon uitschrijven op feitcode, gekoppeld aan kenteken en/of persoon
- **Dienstoverzicht** — planning en collega's op dienst
- **Profiel** — agentgegevens en uitloggen

## Techstack

- React 19 + TypeScript
- React Router (`HashRouter`, zodat routes ook werken op statische hosting zoals GitHub Pages)
- Tailwind CSS v4
- `vite-plugin-pwa` (installeerbaar als app op een telefoon)

## Starten (lokaal)

```bash
npm install
npm run dev
```

Open de URL die Vite toont (standaard `http://localhost:5173`). Log in met
een willekeurig dienstnummer en wachtwoord.

> De inlogsessie staat alleen in het geheugen van de pagina. Na een harde
> herlaad (of het opnieuw openen van de app) moet je opnieuw inloggen — dat
> is bewust, net als bij een echte werk-app.

## Build

```bash
npm run build
npm run preview
```

## Live zetten op GitHub Pages

1. Ga in de GitHub-repo naar **Settings → Pages** en zet **Source** op
   **GitHub Actions** (eenmalig).
2. Push naar de `main`-branch (of draai de workflow handmatig via
   **Actions → Deploy naar GitHub Pages → Run workflow**).
3. De workflow (`.github/workflows/deploy.yml`) bouwt de app en publiceert
   hem automatisch op:

   ```
   https://<jouw-github-gebruikersnaam>.github.io/MEOS/
   ```

   (Voor deze repo dus normaal gesproken `https://yoram4k.github.io/MEOS/`.)

Elke volgende push naar `main` deployt automatisch een nieuwe versie.

> Verhuis je de site naar een andere repo-naam of een custom domain? Pas
> dan `base` in `vite.config.ts` en `start_url`/`scope` in het
> `manifest`-blok aan.

## Als "app" op je telefoon zetten

De app is een PWA (Progressive Web App): geen appstore nodig, gewoon de
GitHub Pages-link openen en installeren.

**Android (Chrome):**
1. Open de GitHub Pages-link.
2. Tik op het menu (⋮) → **App installeren** (of Chrome toont vanzelf een
   installbanner).
3. Het icoon verschijnt op je startscherm en opent in een los
   app-venster, zonder browserbalk.

**iPhone/iPad (Safari):**
1. Open de GitHub Pages-link in **Safari** (moet Safari zijn, geen Chrome).
2. Tik op het deel-icoon (vierkant met pijl omhoog).
3. Kies **Zet op beginscherm**.
4. Het MEOS-icoon verschijnt op je beginscherm en opent als
   full-screen app.

iOS ondersteunt geen automatische installbanner zoals Android — dat
"Zet op beginscherm" is daar de standaard manier om een PWA als app te
gebruiken.
