import { createContext, useContext, useState, type ReactNode } from "react";

export type DienstStatus = "Uit dienst" | "In dienst" | "Pauze";

type SessionState = {
  ingelogd: boolean;
  dienstStatus: DienstStatus;
  login: () => void;
  logout: () => void;
  setDienstStatus: (status: DienstStatus) => void;
};

const SessionContext = createContext<SessionState | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [ingelogd, setIngelogd] = useState(false);
  const [dienstStatus, setDienstStatus] = useState<DienstStatus>("Uit dienst");

  const login = () => {
    setIngelogd(true);
    setDienstStatus("In dienst");
  };

  const logout = () => {
    setIngelogd(false);
    setDienstStatus("Uit dienst");
  };

  return (
    <SessionContext.Provider
      value={{ ingelogd, dienstStatus, login, logout, setDienstStatus }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}
