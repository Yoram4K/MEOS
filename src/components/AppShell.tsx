import type { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BadgeIcon } from "./BadgeIcon";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { useSession } from "../context/SessionContext";
import { ingelogdeAgent } from "../data/mockData";

const tabs = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/zoeken", label: "Zoeken", icon: SearchIcon },
  { to: "/melding", label: "Melden", icon: PlusIcon },
  { to: "/dienst", label: "Dienst", icon: TeamIcon },
  { to: "/profiel", label: "Profiel", icon: UserIcon },
];

export function AppShell({ children }: { children: ReactNode }) {
  const { dienstStatus, logout } = useSession();
  const navigate = useNavigate();

  return (
    <div className="device-frame">
      <DisclaimerBanner />
      <header className="bg-meos-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BadgeIcon className="w-7 h-7 text-meos-100" />
          <div>
            <p className="text-sm font-bold leading-none tracking-wide">MEOS</p>
            <p className="text-[10px] text-meos-100 leading-none mt-0.5">
              {ingelogdeAgent.naam} · {ingelogdeAgent.dienstnummer}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
              dienstStatus === "In dienst"
                ? "bg-ok-500/20 text-ok-100"
                : dienstStatus === "Pauze"
                  ? "bg-warn-500/20 text-warn-100"
                  : "bg-white/10 text-meos-100"
            }`}
          >
            {dienstStatus}
          </span>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            aria-label="Uitloggen"
            className="text-meos-100 hover:text-white text-xs underline underline-offset-2"
          >
            Uitloggen
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-meos-50 pb-20">{children}</main>

      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-meos-100 flex justify-around items-stretch py-1.5">
        {tabs.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium rounded-lg ${
                isActive ? "text-meos-700" : "text-meos-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon active={isActive} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

type IconProps = { active?: boolean };

function iconStroke(active?: boolean) {
  return active ? "#163f7a" : "#4c85d6";
}

function HomeIcon({ active }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9h14v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ active }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.5-4.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon({ active }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" strokeLinecap="round" />
    </svg>
  );
}

function TeamIcon({ active }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <circle cx="8.5" cy="9" r="3" />
      <circle cx="16" cy="10" r="2.4" />
      <path d="M3.5 19c.5-3 2.5-4.5 5-4.5s4.5 1.5 5 4.5" strokeLinecap="round" />
      <path d="M14.5 19c.3-2 1.6-3.4 3.3-3.6" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ active }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19.5c0-3.6 3.1-6 7-6s7 2.4 7 6" strokeLinecap="round" />
    </svg>
  );
}
