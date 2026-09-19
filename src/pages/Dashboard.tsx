import { Link } from "react-router-dom";
import { Card, StatusPill } from "../components/ui";
import { useSession } from "../context/SessionContext";
import { bekeuringen, feitcodes, ingelogdeAgent, meldingen } from "../data/mockData";

const tiles = [
  { to: "/zoeken/persoon", label: "Persoon check", desc: "Zoek op naam of BSN", icon: "👤" },
  { to: "/zoeken/kenteken", label: "Kenteken check", desc: "RDW / signalering", icon: "🚗" },
  { to: "/melding/nieuw", label: "Melding maken", desc: "Registreer een incident", icon: "📝" },
  { to: "/bekeuring", label: "Bekeuring", desc: "Digitale bon uitschrijven", icon: "🎫" },
  { to: "/dienst", label: "Dienstoverzicht", desc: "Team & planning", icon: "🧑‍🤝‍🧑" },
  { to: "/profiel", label: "Profiel", desc: "Instellingen & dienst", icon: "⚙️" },
];

export function Dashboard() {
  const { dienstStatus, setDienstStatus } = useSession();

  const recentMeldingen = [...meldingen].reverse().slice(0, 3);

  return (
    <div className="px-4 py-4 space-y-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-meos-950">{ingelogdeAgent.naam}</p>
            <p className="text-xs text-meos-500">
              {ingelogdeAgent.rang} · {ingelogdeAgent.team}
            </p>
          </div>
          <StatusPill
            status={dienstStatus}
            tone={dienstStatus === "In dienst" ? "ok" : dienstStatus === "Pauze" ? "warn" : "neutral"}
          />
        </div>
        <div className="flex gap-2 mt-3">
          {(["In dienst", "Pauze", "Uit dienst"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setDienstStatus(s)}
              className={`flex-1 text-[11px] font-semibold rounded-lg py-2 border ${
                dienstStatus === s
                  ? "bg-meos-700 text-white border-meos-700"
                  : "bg-white text-meos-700 border-meos-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </Card>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2 px-0.5">
          Snelle acties
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {tiles.map((t) => (
            <Link key={t.to} to={t.to}>
              <Card className="p-3 h-full hover:border-meos-400 transition-colors">
                <span className="text-2xl">{t.icon}</span>
                <p className="text-sm font-semibold text-meos-950 mt-1.5">{t.label}</p>
                <p className="text-[11px] text-meos-500">{t.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2 px-0.5">
          <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500">
            Recente meldingen
          </h2>
          <Link to="/melding" className="text-[11px] text-meos-600 font-semibold">
            Alles bekijken
          </Link>
        </div>
        <Card className="divide-y divide-meos-100">
          {recentMeldingen.map((m) => (
            <div key={m.id} className="p-3 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm font-medium text-meos-950 truncate">{m.type}</p>
                <p className="text-[11px] text-meos-500 truncate">{m.locatie}</p>
              </div>
              <StatusPill
                status={m.status}
                tone={m.status === "Afgehandeld" ? "ok" : m.status === "In behandeling" ? "warn" : "neutral"}
              />
            </div>
          ))}
        </Card>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2 px-0.5">
          Laatste bekeuring
        </h2>
        <Card className="p-3">
          {bekeuringen.slice(-1).map((b) => {
            const feit = feitcodes.find((f) => f.code === b.feitcode);
            return (
              <div key={b.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-meos-950">{feit?.omschrijving}</p>
                  <p className="text-[11px] text-meos-500">
                    {b.kenteken} · €{feit?.bedrag}
                  </p>
                </div>
                <StatusPill status={b.status} tone="ok" />
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
