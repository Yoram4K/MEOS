export type Agent = {
  id: string;
  dienstnummer: string;
  naam: string;
  rang: string;
  team: string;
  standplaats: string;
  initialen: string;
};

export type Signalering = {
  type: "Aandachtsvestiging" | "Waarschuwing" | "Opsporing";
  omschrijving: string;
  ernst: "laag" | "middel" | "hoog";
};

export type Persoon = {
  id: string;
  bsnFictief: string;
  voornaam: string;
  achternaam: string;
  geslacht: "M" | "V" | "X";
  geboortedatum: string;
  geboorteplaats: string;
  nationaliteit: string;
  adres: string;
  postcode: string;
  plaats: string;
  signalementen: Signalering[];
  gekoppeldeKentekens: string[];
  foto: string;
};

export type Voertuig = {
  kenteken: string;
  merk: string;
  model: string;
  kleur: string;
  soort: string;
  bouwjaar: number;
  brandstof: string;
  apkVervaldatum: string;
  wamVerzekerd: boolean;
  vermistGestolen: boolean;
  eigenaarId: string;
};

export type Melding = {
  id: string;
  tijdstip: string;
  type: string;
  locatie: string;
  omschrijving: string;
  agentId: string;
  status: "Open" | "In behandeling" | "Afgehandeld";
  prioriteit: "1" | "2" | "3" | "4";
};

export type FeitCode = {
  code: string;
  omschrijving: string;
  bedrag: number;
  categorie: "Verkeer" | "Overlast" | "Overig";
};

export type Bekeuring = {
  id: string;
  tijdstip: string;
  feitcode: string;
  kenteken?: string;
  persoonId?: string;
  locatie: string;
  agentId: string;
  status: "Concept" | "Uitgeschreven" | "Verzonden";
};
