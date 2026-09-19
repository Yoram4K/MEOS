import { useNavigate } from "react-router-dom";
import { Card, Field } from "../components/ui";
import { useSession } from "../context/SessionContext";
import { ingelogdeAgent } from "../data/mockData";

export function Profiel() {
  const { logout, dienstStatus } = useSession();
  const navigate = useNavigate();

  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-base font-bold text-meos-950">Profiel</h1>

      <Card className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-14 h-14 rounded-full bg-meos-700 text-white flex items-center justify-center text-lg font-bold">
            {ingelogdeAgent.initialen}
          </div>
          <div>
            <p className="text-base font-bold text-meos-950">{ingelogdeAgent.naam}</p>
            <p className="text-xs text-meos-500">{ingelogdeAgent.rang}</p>
          </div>
        </div>
        <div className="border-t border-meos-100 pt-2">
          <Field label="Dienstnummer" value={ingelogdeAgent.dienstnummer} />
          <Field label="Team" value={ingelogdeAgent.team} />
          <Field label="Standplaats" value={ingelogdeAgent.standplaats} />
          <Field label="Huidige status" value={dienstStatus} />
        </div>
      </Card>

      <Card className="p-4">
        <h2 className="text-xs font-bold uppercase tracking-wide text-meos-500 mb-2">Over deze app</h2>
        <p className="text-xs text-meos-600 leading-relaxed">
          Dit is een fictieve, educatieve look-alike van de MEOS-politieapplicatie, gemaakt als
          schoolproject. Alle namen, personen, kentekens en gebeurtenissen zijn verzonnen. De app
          bevat geen echte overheids- of politiegegevens en is niet verbonden aan enig echt
          politiesysteem, en is niet onderschreven door of verbonden aan de Nationale Politie.
        </p>
      </Card>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="w-full text-signal-500 font-semibold text-sm py-2"
      >
        Uitloggen
      </button>
    </div>
  );
}
