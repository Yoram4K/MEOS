import { Card, StatusPill } from "../components/ui";
import { collegas, ingelogdeAgent } from "../data/mockData";

const planning = [
  { dag: "Vandaag", dienst: "07:00 – 15:00", type: "Vroege dienst", voertuig: "Nieuwstad-04" },
  { dag: "Morgen", dienst: "15:00 – 23:00", type: "Late dienst", voertuig: "Nieuwstad-02" },
  { dag: "Overmorgen", dienst: "Vrij", type: "—", voertuig: "—" },
];

export function Dienstoverzicht() {
  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-base font-bold text-meos-950">Dienstoverzicht</h1>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2 px-0.5">
          Planning
        </h2>
        <Card className="divide-y divide-meos-100">
          {planning.map((p) => (
            <div key={p.dag} className="p-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-meos-950">{p.dag}</p>
                <p className="text-[11px] text-meos-500">
                  {p.type} · voertuig {p.voertuig}
                </p>
              </div>
              <span className="text-xs font-medium text-meos-700">{p.dienst}</span>
            </div>
          ))}
        </Card>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2 px-0.5">
          Collega's op dienst — {ingelogdeAgent.team}
        </h2>
        <Card className="divide-y divide-meos-100">
          {collegas.map((c) => (
            <div key={c.id} className="p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-meos-100 text-meos-700 flex items-center justify-center text-xs font-bold">
                {c.initialen}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-meos-950">{c.naam}</p>
                <p className="text-[11px] text-meos-500">
                  {c.rang} · {c.dienstnummer}
                </p>
              </div>
              <StatusPill status="In dienst" tone="ok" />
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
