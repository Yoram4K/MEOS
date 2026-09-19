import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Card, Field, PrimaryButton, StatusPill } from "../components/ui";
import { vindPersoon, zoekVoertuig } from "../data/mockData";

export function KentekenCheck() {
  const [input, setInput] = useState("");
  const [kenteken, setKenteken] = useState<string | null>(null);
  const voertuig = kenteken ? zoekVoertuig(kenteken) : undefined;
  const eigenaar = voertuig ? vindPersoon(voertuig.eigenaarId) : undefined;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setKenteken(input);
  }

  return (
    <div className="px-4 py-4 space-y-3">
      <h1 className="text-base font-bold text-meos-950">Kentekencheck</h1>
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Kenteken (probeer: VS-442-B)"
          className="flex-1 rounded-lg border border-meos-100 px-3 py-2.5 text-sm font-mono uppercase bg-white"
        />
        <button type="submit" className="rounded-lg bg-meos-700 text-white px-4 text-sm font-semibold">
          Check
        </button>
      </form>
      <p className="text-[11px] text-meos-400 px-1">
        Simuleert een ANPR/RDW-raadpleging met fictieve data — geen echte kentekenregisters.
      </p>

      {kenteken && !voertuig && (
        <Card className="p-4 text-sm text-meos-500">Geen voertuig gevonden voor dit kenteken.</Card>
      )}

      {voertuig && (
        <>
          <Card className={`p-4 ${voertuig.vermistGestolen ? "border-signal-500/50" : ""}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono font-bold text-lg bg-meos-950 text-white px-2.5 py-1 rounded">
                {voertuig.kenteken}
              </span>
              {voertuig.vermistGestolen ? (
                <StatusPill status="GESIGNALEERD GESTOLEN" tone="signal" />
              ) : (
                <StatusPill status="Geen signalering" tone="ok" />
              )}
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <Field label="Merk / model" value={`${voertuig.merk} ${voertuig.model}`} />
              <Field label="Kleur" value={voertuig.kleur} />
              <Field label="Soort" value={voertuig.soort} />
              <Field label="Bouwjaar" value={voertuig.bouwjaar} />
              <Field label="Brandstof" value={voertuig.brandstof} />
              <Field label="APK vervaldatum" value={voertuig.apkVervaldatum} />
              <Field
                label="WA-verzekering"
                value={
                  <StatusPill
                    status={voertuig.wamVerzekerd ? "Verzekerd" : "Niet verzekerd"}
                    tone={voertuig.wamVerzekerd ? "ok" : "signal"}
                  />
                }
              />
            </div>
          </Card>

          {eigenaar && (
            <Link to={`/zoeken/persoon/${eigenaar.id}`}>
              <Card className="p-3 flex items-center justify-between hover:border-meos-400">
                <div>
                  <p className="text-[11px] text-meos-500">Kentekenhouder</p>
                  <p className="text-sm font-semibold text-meos-950">
                    {eigenaar.voornaam} {eigenaar.achternaam}
                  </p>
                </div>
                <span className="text-meos-500 text-xs">Bekijk persoon →</span>
              </Card>
            </Link>
          )}

          <Link to="/bekeuring" state={{ kenteken: voertuig.kenteken }}>
            <PrimaryButton>Bekeuring uitschrijven voor dit kenteken</PrimaryButton>
          </Link>
        </>
      )}
    </div>
  );
}
