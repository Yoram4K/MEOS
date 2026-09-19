import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Field, PrimaryButton } from "../components/ui";
import { feitcodes, ingelogdeAgent, vindPersoon, zoekVoertuig } from "../data/mockData";

type NavState = { kenteken?: string; persoonId?: string };

export function Bekeuring() {
  const location = useLocation();
  const navState = (location.state as NavState) ?? {};

  const [feitcode, setFeitcode] = useState(feitcodes[0].code);
  const [kenteken, setKenteken] = useState(navState.kenteken ?? "");
  const [locatie, setLocatie] = useState("");
  const [uitgeschreven, setUitgeschreven] = useState(false);

  const persoon = navState.persoonId ? vindPersoon(navState.persoonId) : undefined;
  const voertuig = kenteken ? zoekVoertuig(kenteken) : undefined;
  const feit = feitcodes.find((f) => f.code === feitcode)!;

  if (uitgeschreven) {
    const nu = new Date();
    return (
      <div className="px-4 py-4">
        <Card className="p-5 border-meos-700">
          <p className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold text-center">
            Digitale bon — fictief document
          </p>
          <h1 className="text-lg font-bold text-meos-950 text-center mt-1">
            € {feit.bedrag.toFixed(2)}
          </h1>
          <p className="text-xs text-meos-500 text-center mb-3">{feit.omschrijving}</p>
          <div className="border-t border-meos-100 pt-2">
            <Field label="Feitcode" value={feit.code} />
            {kenteken && <Field label="Kenteken" value={kenteken.toUpperCase()} />}
            {persoon && <Field label="Persoon" value={`${persoon.voornaam} ${persoon.achternaam}`} />}
            <Field label="Locatie" value={locatie || "Onbekend"} />
            <Field label="Tijdstip" value={nu.toLocaleString("nl-NL")} />
            <Field label="Uitgeschreven door" value={`${ingelogdeAgent.naam} (${ingelogdeAgent.dienstnummer})`} />
          </div>
          <p className="text-[10px] text-meos-400 text-center mt-3">
            Dit is een gesimuleerde bon voor een schoolproject. Er is geen betaalverplichting en
            geen koppeling met het CJIB.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-3">
      <h1 className="text-base font-bold text-meos-950">Bekeuring uitschrijven</h1>

      <Card className="p-4 space-y-3">
        <label className="block">
          <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
            Feitcode
          </span>
          <select
            value={feitcode}
            onChange={(e) => setFeitcode(e.target.value)}
            className="mt-1 w-full rounded-lg border border-meos-100 px-3 py-2.5 text-sm bg-white"
          >
            {feitcodes.map((f) => (
              <option key={f.code} value={f.code}>
                {f.code} — {f.omschrijving} (€{f.bedrag})
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
            Kenteken (optioneel)
          </span>
          <input
            value={kenteken}
            onChange={(e) => setKenteken(e.target.value)}
            placeholder="bijv. 12-VBK-7"
            className="mt-1 w-full rounded-lg border border-meos-100 px-3 py-2.5 text-sm font-mono uppercase bg-white"
          />
          {voertuig && (
            <p className="text-[11px] text-meos-500 mt-1">
              {voertuig.merk} {voertuig.model} · {voertuig.kleur}
            </p>
          )}
        </label>

        {persoon && (
          <div className="rounded-lg bg-meos-50 px-3 py-2 text-xs text-meos-700">
            Gekoppeld aan persoon: <strong>{persoon.voornaam} {persoon.achternaam}</strong>
          </div>
        )}

        <label className="block">
          <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
            Locatie
          </span>
          <input
            value={locatie}
            onChange={(e) => setLocatie(e.target.value)}
            placeholder="Straat, plaats"
            className="mt-1 w-full rounded-lg border border-meos-100 px-3 py-2.5 text-sm bg-white"
          />
        </label>
      </Card>

      <PrimaryButton onClick={() => setUitgeschreven(true)}>Bon genereren</PrimaryButton>
    </div>
  );
}
