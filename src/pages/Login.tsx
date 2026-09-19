import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { BadgeIcon } from "../components/BadgeIcon";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { PrimaryButton } from "../components/ui";
import { useSession } from "../context/SessionContext";
import { ingelogdeAgent } from "../data/mockData";

export function Login() {
  const [dienstnummer, setDienstnummer] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [error, setError] = useState("");
  const { login } = useSession();
  const navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!dienstnummer || !wachtwoord) {
      setError("Vul dienstnummer en wachtwoord in.");
      return;
    }
    setError("");
    login();
    navigate("/", { replace: true });
  }

  return (
    <div className="device-frame">
      <DisclaimerBanner />
      <div className="flex-1 flex flex-col justify-center items-center px-8 bg-gradient-to-b from-meos-900 to-meos-950 text-white">
        <BadgeIcon className="w-16 h-16 text-meos-100 mb-3" />
        <h1 className="text-2xl font-bold tracking-wide">MEOS</h1>
        <p className="text-meos-100 text-xs mb-8 text-center">
          Mobiel Effectiever Op Straat — fictieve schoolproject-versie
        </p>

        <form onSubmit={onSubmit} className="w-full max-w-xs space-y-3">
          <div>
            <label className="text-xs text-meos-100 font-medium" htmlFor="dienstnummer">
              Dienstnummer
            </label>
            <input
              id="dienstnummer"
              inputMode="numeric"
              autoComplete="username"
              placeholder="bijv. 48213"
              value={dienstnummer}
              onChange={(e) => setDienstnummer(e.target.value)}
              className="mt-1 w-full rounded-lg border-0 bg-white/95 px-3 py-2.5 text-sm text-meos-950 placeholder:text-meos-400"
            />
          </div>
          <div>
            <label className="text-xs text-meos-100 font-medium" htmlFor="wachtwoord">
              Wachtwoord
            </label>
            <input
              id="wachtwoord"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={wachtwoord}
              onChange={(e) => setWachtwoord(e.target.value)}
              className="mt-1 w-full rounded-lg border-0 bg-white/95 px-3 py-2.5 text-sm text-meos-950 placeholder:text-meos-400"
            />
          </div>

          {error && <p className="text-signal-100 bg-signal-500/30 rounded-md px-2 py-1.5 text-xs">{error}</p>}

          <PrimaryButton type="submit" className="!bg-meos-100 !text-meos-950 hover:!bg-white mt-2">
            Inloggen
          </PrimaryButton>

          <p className="text-[11px] text-meos-100/80 text-center pt-2">
            Demo: vul willekeurig dienstnummer + wachtwoord in
            <br />
            (ingelogd als {ingelogdeAgent.naam})
          </p>
        </form>
      </div>
    </div>
  );
}
