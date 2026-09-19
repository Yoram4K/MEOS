import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Card, PrimaryButton } from "../components/ui";

const typeOpties = [
  "Burengerucht",
  "Verkeersongeval (licht letsel)",
  "Diefstal winkel",
  "Overlast jeugd",
  "Inbraak woning",
  "Vermist voorwerp/dier",
  "Overig",
];

export function NieuweMelding() {
  const navigate = useNavigate();
  const [type, setType] = useState(typeOpties[0]);
  const [locatie, setLocatie] = useState("");
  const [prioriteit, setPrioriteit] = useState<"1" | "2" | "3" | "4">("3");
  const [omschrijving, setOmschrijving] = useState("");
  const [ingediend, setIngediend] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIngediend(true);
  }

  if (ingediend) {
    return (
      <div className="px-4 py-4">
        <Card className="p-5 text-center space-y-2">
          <span className="text-3xl">✅</span>
          <p className="text-sm font-semibold text-meos-950">Melding geregistreerd</p>
          <p className="text-xs text-meos-500">
            (Fictief) — deze melding is lokaal in de demo opgeslagen, er is geen echte
            koppeling met politiesystemen.
          </p>
          <PrimaryButton onClick={() => navigate("/melding")}>Naar overzicht</PrimaryButton>
        </Card>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-3">
      <h1 className="text-base font-bold text-meos-950">Nieuwe melding</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <Card className="p-4 space-y-3">
          <label className="block">
            <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
              Type melding
            </span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 w-full rounded-lg border border-meos-100 px-3 py-2.5 text-sm bg-white"
            >
              {typeOpties.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
              Locatie
            </span>
            <input
              required
              value={locatie}
              onChange={(e) => setLocatie(e.target.value)}
              placeholder="Straat, huisnummer, plaats"
              className="mt-1 w-full rounded-lg border border-meos-100 px-3 py-2.5 text-sm bg-white"
            />
          </label>

          <label className="block">
            <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
              Prioriteit
            </span>
            <div className="flex gap-2 mt-1">
              {(["1", "2", "3", "4"] as const).map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPrioriteit(p)}
                  className={`flex-1 rounded-lg py-2 text-sm font-semibold border ${
                    prioriteit === p
                      ? "bg-meos-700 text-white border-meos-700"
                      : "bg-white text-meos-700 border-meos-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </label>

          <label className="block">
            <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
              Omschrijving
            </span>
            <textarea
              required
              value={omschrijving}
              onChange={(e) => setOmschrijving(e.target.value)}
              rows={4}
              placeholder="Wat is er waargenomen/gemeld?"
              className="mt-1 w-full rounded-lg border border-meos-100 px-3 py-2.5 text-sm bg-white resize-none"
            />
          </label>
        </Card>

        <PrimaryButton type="submit">Melding registreren</PrimaryButton>
      </form>
    </div>
  );
}
