import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, ErnstPill, Field, PrimaryButton } from "../components/ui";
import { vindPersoon, voertuigen } from "../data/mockData";

export function PersoonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const persoon = vindPersoon(id ?? "");

  if (!persoon) {
    return (
      <div className="px-4 py-4">
        <p className="text-sm text-meos-500">Persoon niet gevonden.</p>
      </div>
    );
  }

  const gekoppeld = voertuigen.filter((v) => persoon.gekoppeldeKentekens.includes(v.kenteken));
  const heeftSignaal = persoon.signalementen.length > 0;

  return (
    <div className="px-4 py-4 space-y-3">
      <button onClick={() => navigate(-1)} className="text-xs text-meos-600 font-semibold">
        ← Terug
      </button>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-meos-100 text-meos-700 flex items-center justify-center text-lg font-bold shrink-0">
            {persoon.foto}
          </div>
          <div>
            <p className="text-base font-bold text-meos-950">
              {persoon.voornaam} {persoon.achternaam}
            </p>
            <p className="text-xs text-meos-500">BSN (fictief): {persoon.bsnFictief}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mt-3 border-t border-meos-100 pt-2">
          <Field label="Geboortedatum" value={persoon.geboortedatum} />
          <Field label="Geboorteplaats" value={persoon.geboorteplaats} />
          <Field label="Geslacht" value={persoon.geslacht} />
          <Field label="Nationaliteit" value={persoon.nationaliteit} />
          <Field
            label="Adres"
            value={
              <>
                {persoon.adres}
                <br />
                {persoon.postcode} {persoon.plaats}
              </>
            }
          />
        </div>
      </Card>

      <Card className={`p-4 ${heeftSignaal ? "border-signal-500/40" : ""}`}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2">
          Signaleringen ({persoon.signalementen.length})
        </h2>
        {!heeftSignaal && <p className="text-sm text-meos-500">Geen signaleringen bekend.</p>}
        <div className="space-y-2">
          {persoon.signalementen.map((s, i) => (
            <div key={i} className="flex items-start justify-between gap-2 border-b border-meos-100 last:border-0 pb-2 last:pb-0">
              <div>
                <p className="text-sm font-medium text-meos-950">{s.type}</p>
                <p className="text-xs text-meos-500">{s.omschrijving}</p>
              </div>
              <ErnstPill ernst={s.ernst} />
            </div>
          ))}
        </div>
      </Card>

      {gekoppeld.length > 0 && (
        <Card className="p-4">
          <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2">
            Gekoppelde voertuigen
          </h2>
          <div className="space-y-2">
            {gekoppeld.map((v) => (
              <Link
                key={v.kenteken}
                to="/zoeken/kenteken"
                className="flex items-center justify-between text-sm border-b border-meos-100 last:border-0 pb-2 last:pb-0"
              >
                <span className="font-mono font-semibold bg-meos-950 text-white px-2 py-0.5 rounded">
                  {v.kenteken}
                </span>
                <span className="text-meos-500 text-xs">
                  {v.merk} {v.model} · {v.kleur}
                </span>
              </Link>
            ))}
          </div>
        </Card>
      )}

      <Link to="/bekeuring" state={{ persoonId: persoon.id }}>
        <PrimaryButton>Bekeuring uitschrijven voor deze persoon</PrimaryButton>
      </Link>
    </div>
  );
}
