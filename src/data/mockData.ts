import type { Agent, Bekeuring, FeitCode, Melding, Persoon, Voertuig } from "./types";

/**
 * Alle data in dit bestand is volledig verzonnen voor een schoolproject.
 * Namen, adressen, BSN-achtige nummers en kentekens verwijzen niet naar
 * echte personen, voertuigen of overheidsregisters.
 */

export const ingelogdeAgent: Agent = {
  id: "a-01",
  dienstnummer: "48213",
  naam: "S. de Wolf",
  rang: "Hoofdagent",
  team: "Basisteam Nieuwstad-Centrum",
  standplaats: "Nieuwstad",
  initialen: "SW",
};

export const collegas: Agent[] = [
  { id: "a-02", dienstnummer: "51907", naam: "R. Baas", rang: "Agent", team: "Basisteam Nieuwstad-Centrum", standplaats: "Nieuwstad", initialen: "RB" },
  { id: "a-03", dienstnummer: "33456", naam: "N. Achterberg", rang: "Hoofdagent", team: "Basisteam Nieuwstad-Centrum", standplaats: "Nieuwstad", initialen: "NA" },
  { id: "a-04", dienstnummer: "60021", naam: "T. Overes", rang: "Brigadier", team: "Basisteam Nieuwstad-Centrum", standplaats: "Nieuwstad", initialen: "TO" },
];

export const personen: Persoon[] = [
  {
    id: "p-01",
    bsnFictief: "000-11-2233",
    voornaam: "Bram",
    achternaam: "Kuijpers",
    geslacht: "M",
    geboortedatum: "14-03-1991",
    geboorteplaats: "Nieuwstad",
    nationaliteit: "Nederlandse",
    adres: "Vinkenstraat 22",
    postcode: "4821 XJ",
    plaats: "Nieuwstad",
    signalementen: [
      { type: "Aandachtsvestiging", omschrijving: "Eerder betrokken bij verkeersovertreding (2023)", ernst: "laag" },
    ],
    gekoppeldeKentekens: ["12-VBK-7"],
    foto: "BK",
  },
  {
    id: "p-02",
    bsnFictief: "000-44-5566",
    voornaam: "Fenna",
    achternaam: "de Groen",
    geslacht: "V",
    geboortedatum: "02-11-1987",
    geboorteplaats: "Havendorp",
    nationaliteit: "Nederlandse",
    adres: "Marktplein 9",
    postcode: "4822 GH",
    plaats: "Nieuwstad",
    signalementen: [],
    gekoppeldeKentekens: ["88-KLM-2"],
    foto: "FG",
  },
  {
    id: "p-03",
    bsnFictief: "000-77-8899",
    voornaam: "Youssef",
    achternaam: "El Amrani",
    geslacht: "M",
    geboortedatum: "27-06-1999",
    geboorteplaats: "Nieuwstad",
    nationaliteit: "Nederlandse",
    adres: "Dorpsstraat 145",
    postcode: "4819 BB",
    plaats: "Havendorp",
    signalementen: [
      { type: "Opsporing", omschrijving: "Openstaand signalement i.v.m. niet verschenen op zitting (fictief)", ernst: "hoog" },
      { type: "Waarschuwing", omschrijving: "Bekend met agressief gedrag bij eerder contact", ernst: "middel" },
    ],
    gekoppeldeKentekens: [],
    foto: "YE",
  },
  {
    id: "p-04",
    bsnFictief: "000-22-9911",
    voornaam: "Mila",
    achternaam: "Verstappen",
    geslacht: "V",
    geboortedatum: "19-09-2003",
    geboorteplaats: "Nieuwstad",
    nationaliteit: "Nederlandse",
    adres: "Lindelaan 3",
    postcode: "4823 AK",
    plaats: "Nieuwstad",
    signalementen: [],
    gekoppeldeKentekens: [],
    foto: "MV",
  },
];

export const voertuigen: Voertuig[] = [
  {
    kenteken: "12-VBK-7",
    merk: "Volkswagen",
    model: "Golf",
    kleur: "Grijs",
    soort: "Personenauto",
    bouwjaar: 2018,
    brandstof: "Benzine",
    apkVervaldatum: "08-01-2027",
    wamVerzekerd: true,
    vermistGestolen: false,
    eigenaarId: "p-01",
  },
  {
    kenteken: "88-KLM-2",
    merk: "Renault",
    model: "Clio",
    kleur: "Blauw",
    soort: "Personenauto",
    bouwjaar: 2015,
    brandstof: "Diesel",
    apkVervaldatum: "22-11-2025",
    wamVerzekerd: true,
    vermistGestolen: false,
    eigenaarId: "p-02",
  },
  {
    kenteken: "VS-442-B",
    merk: "BMW",
    model: "3-serie",
    kleur: "Zwart",
    soort: "Personenauto",
    bouwjaar: 2020,
    brandstof: "Benzine",
    apkVervaldatum: "14-04-2026",
    wamVerzekerd: false,
    vermistGestolen: true,
    eigenaarId: "p-03",
  },
  {
    kenteken: "77-TRX-9",
    merk: "Kia",
    model: "Picanto",
    kleur: "Wit",
    soort: "Personenauto",
    bouwjaar: 2021,
    brandstof: "Benzine",
    apkVervaldatum: "30-06-2026",
    wamVerzekerd: true,
    vermistGestolen: false,
    eigenaarId: "p-04",
  },
];

export const feitcodes: FeitCode[] = [
  { code: "R540a", omschrijving: "Snelheid overschrijden binnen bebouwde kom (t/m 10 km/u)", bedrag: 95, categorie: "Verkeer" },
  { code: "R397a", omschrijving: "Niet dragen autogordel bestuurder", bedrag: 150, categorie: "Verkeer" },
  { code: "R255", omschrijving: "Handheld bellen/appen tijdens het rijden", bedrag: 420, categorie: "Verkeer" },
  { code: "R482", omschrijving: "Negeren rood licht", bedrag: 380, categorie: "Verkeer" },
  { code: "F101", omschrijving: "Fout parkeren op gehandicaptenparkeerplaats", bedrag: 470, categorie: "Verkeer" },
  { code: "O220", omschrijving: "Wildplassen / openbare orde overlast", bedrag: 150, categorie: "Overlast" },
  { code: "O310", omschrijving: "Overtreding geluidshinder / vuurwerk", bedrag: 100, categorie: "Overlast" },
];

export const meldingen: Melding[] = [
  {
    id: "m-1001",
    tijdstip: "2026-09-18T21:14",
    type: "Burengerucht",
    locatie: "Vinkenstraat 22, Nieuwstad",
    omschrijving: "Melding van geluidsoverlast, ter plaatse rustig aangetroffen. Bewoner aangesproken.",
    agentId: "a-01",
    status: "Afgehandeld",
    prioriteit: "3",
  },
  {
    id: "m-1002",
    tijdstip: "2026-09-19T09:02",
    type: "Verkeersongeval (licht letsel)",
    locatie: "Kruising Marktplein / Lindelaan, Nieuwstad",
    omschrijving: "Aanrijding tussen twee personenauto's, materiële schade, geen gewonden.",
    agentId: "a-02",
    status: "In behandeling",
    prioriteit: "2",
  },
  {
    id: "m-1003",
    tijdstip: "2026-09-19T11:47",
    type: "Diefstal winkel",
    locatie: "Dorpsstraat 145, Havendorp",
    omschrijving: "Winkeldiefstal gemeld door filiaalmanager, verdachte niet meer aanwezig.",
    agentId: "a-01",
    status: "Open",
    prioriteit: "3",
  },
];

export const bekeuringen: Bekeuring[] = [
  {
    id: "b-5001",
    tijdstip: "2026-09-17T16:30",
    feitcode: "R397a",
    kenteken: "88-KLM-2",
    persoonId: "p-02",
    locatie: "Havenweg, Nieuwstad",
    agentId: "a-01",
    status: "Verzonden",
  },
];

export function zoekPersonen(query: string): Persoon[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return personen.filter((p) =>
    `${p.voornaam} ${p.achternaam} ${p.bsnFictief}`.toLowerCase().includes(q)
  );
}

export function zoekVoertuig(kenteken: string): Voertuig | undefined {
  const normalized = kenteken.replace(/[\s-]/g, "").toUpperCase();
  return voertuigen.find(
    (v) => v.kenteken.replace(/[\s-]/g, "").toUpperCase() === normalized
  );
}

export function vindPersoon(id: string): Persoon | undefined {
  return personen.find((p) => p.id === id);
}

export function vindAgent(id: string): Agent | undefined {
  return [ingelogdeAgent, ...collegas].find((a) => a.id === id);
}
