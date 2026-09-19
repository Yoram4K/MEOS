import { Navigate, Route, Routes } from "react-router-dom";
import { SessionProvider, useSession } from "./context/SessionContext";
import { AppShell } from "./components/AppShell";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ZoekenHub } from "./pages/ZoekenHub";
import { PersoonCheck } from "./pages/PersoonCheck";
import { PersoonDetail } from "./pages/PersoonDetail";
import { KentekenCheck } from "./pages/KentekenCheck";
import { MeldingenHub } from "./pages/MeldingenHub";
import { NieuweMelding } from "./pages/NieuweMelding";
import { Bekeuring } from "./pages/Bekeuring";
import { Dienstoverzicht } from "./pages/Dienstoverzicht";
import { Profiel } from "./pages/Profiel";

function Protected({ children }: { children: React.ReactNode }) {
  const { ingelogd } = useSession();
  if (!ingelogd) return <Navigate to="/login" replace />;
  return <AppShell>{children}</AppShell>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Protected><Dashboard /></Protected>} />
      <Route path="/zoeken" element={<Protected><ZoekenHub /></Protected>} />
      <Route path="/zoeken/persoon" element={<Protected><PersoonCheck /></Protected>} />
      <Route path="/zoeken/persoon/:id" element={<Protected><PersoonDetail /></Protected>} />
      <Route path="/zoeken/kenteken" element={<Protected><KentekenCheck /></Protected>} />
      <Route path="/melding" element={<Protected><MeldingenHub /></Protected>} />
      <Route path="/melding/nieuw" element={<Protected><NieuweMelding /></Protected>} />
      <Route path="/bekeuring" element={<Protected><Bekeuring /></Protected>} />
      <Route path="/dienst" element={<Protected><Dienstoverzicht /></Protected>} />
      <Route path="/profiel" element={<Protected><Profiel /></Protected>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <SessionProvider>
      <AppRoutes />
    </SessionProvider>
  );
}

export default App;
