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
- React Router (client-side navigatie, mobile-first "device frame")
- Tailwind CSS v4

## Starten

```bash
npm install
npm run dev
```

Open de URL die Vite toont (standaard `http://localhost:5173`). Log in met
een willekeurig dienstnummer en wachtwoord.

## Build

```bash
npm run build
npm run preview
```
