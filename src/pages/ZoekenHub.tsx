import { Link } from "react-router-dom";
import { Card } from "../components/ui";

export function ZoekenHub() {
  return (
    <div className="px-4 py-4 space-y-3">
      <h1 className="text-base font-bold text-meos-950">Zoeken & raadplegen</h1>
      <Link to="/zoeken/persoon">
        <Card className="p-4 flex items-center gap-3 hover:border-meos-400">
          <span className="text-2xl">👤</span>
          <div>
            <p className="text-sm font-semibold text-meos-950">Persoonscheck</p>
            <p className="text-[11px] text-meos-500">Zoek op naam of BSN, bekijk signaleringen</p>
          </div>
        </Card>
      </Link>
      <Link to="/zoeken/kenteken">
        <Card className="p-4 flex items-center gap-3 hover:border-meos-400">
          <span className="text-2xl">🚗</span>
          <div>
            <p className="text-sm font-semibold text-meos-950">Kentekencheck</p>
            <p className="text-[11px] text-meos-500">RDW-gegevens, APK, diefstal/vermissing</p>
          </div>
        </Card>
      </Link>
      <p className="text-[11px] text-meos-400 px-1 pt-2">
        Alle raadplegingen in deze demo worden fictief gelogd — er is geen koppeling met echte
        RDW- of BRP-registers.
      </p>
    </div>
  );
}
