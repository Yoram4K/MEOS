import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, PrimaryButton, StatusPill } from "../components/ui";
import { meldingen, vindAgent } from "../data/mockData";
import type { Melding } from "../data/types";

function statusTone(status: Melding["status"]) {
  if (status === "Afgehandeld") return "ok" as const;
  if (status === "In behandeling") return "warn" as const;
  return "neutral" as const;
}

export function MeldingenHub() {
  const [items] = useState(meldingen);
  const sorted = [...items].sort((a, b) => (a.tijdstip < b.tijdstip ? 1 : -1));

  return (
    <div className="px-4 py-4 space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-bold text-meos-950">Meldingen</h1>
        <Link to="/melding/nieuw" className="text-xs font-semibold text-meos-700">
          + Nieuwe melding
        </Link>
      </div>

      <div className="space-y-2">
        {sorted.map((m) => (
          <Card key={m.id} className="p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-meos-950">{m.type}</p>
                <p className="text-[11px] text-meos-500">{m.locatie}</p>
              </div>
              <StatusPill status={m.status} tone={statusTone(m.status)} />
            </div>
            <p className="text-xs text-meos-700 mt-1.5">{m.omschrijving}</p>
            <div className="flex items-center justify-between mt-2 text-[11px] text-meos-400">
              <span>{new Date(m.tijdstip).toLocaleString("nl-NL")}</span>
              <span>Prio {m.prioriteit} · {vindAgent(m.agentId)?.naam}</span>
            </div>
          </Card>
        ))}
      </div>

      <Link to="/melding/nieuw">
        <PrimaryButton>+ Nieuwe melding registreren</PrimaryButton>
      </Link>
    </div>
  );
}
