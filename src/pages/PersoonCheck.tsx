import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui";
import { zoekPersonen } from "../data/mockData";

export function PersoonCheck() {
  const [query, setQuery] = useState("");
  const [gezocht, setGezocht] = useState(false);
  const resultaten = zoekPersonen(query);

  return (
    <div className="px-4 py-4 space-y-3">
      <h1 className="text-base font-bold text-meos-950">Persoonscheck</h1>
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setGezocht(true);
          }}
          placeholder="Naam of BSN (probeer: Kuijpers)"
          className="flex-1 rounded-lg border border-meos-100 px-3 py-2.5 text-sm bg-white"
        />
      </div>

      {!gezocht && (
        <p className="text-xs text-meos-500 px-1">
          Voer een (fictieve) naam of BSN in om te zoeken in de demo-database.
        </p>
      )}

      {gezocht && resultaten.length === 0 && (
        <Card className="p-4 text-sm text-meos-500">Geen resultaten gevonden.</Card>
      )}

      <div className="space-y-2">
        {resultaten.map((p) => (
          <Link key={p.id} to={`/zoeken/persoon/${p.id}`}>
            <Card className="p-3 flex items-center gap-3 hover:border-meos-400">
              <div className="w-10 h-10 rounded-full bg-meos-100 text-meos-700 flex items-center justify-center text-sm font-bold shrink-0">
                {p.foto}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-meos-950">
                  {p.voornaam} {p.achternaam}
                </p>
                <p className="text-[11px] text-meos-500">
                  {p.geboortedatum} · {p.plaats}
                </p>
              </div>
              {p.signalementen.some((s) => s.ernst === "hoog") && (
                <span className="text-[10px] font-bold bg-signal-100 text-signal-500 rounded-full px-2 py-1">
                  SIGNAAL
                </span>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
