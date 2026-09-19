import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl border border-meos-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function Field({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 py-1.5">
      <span className="text-[11px] uppercase tracking-wide text-meos-500 font-semibold">
        {label}
      </span>
      <span className="text-sm text-meos-950">{value}</span>
    </div>
  );
}

const ernstStyles: Record<string, string> = {
  laag: "bg-warn-100 text-warn-500",
  middel: "bg-warn-100 text-warn-500",
  hoog: "bg-signal-100 text-signal-500",
};

export function ErnstPill({ ernst }: { ernst: "laag" | "middel" | "hoog" }) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${ernstStyles[ernst]}`}
    >
      {ernst}
    </span>
  );
}

export function StatusPill({ status, tone }: { status: string; tone: "ok" | "warn" | "signal" | "neutral" }) {
  const styles: Record<string, string> = {
    ok: "bg-ok-100 text-ok-500",
    warn: "bg-warn-100 text-warn-500",
    signal: "bg-signal-100 text-signal-500",
    neutral: "bg-meos-100 text-meos-700",
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${styles[tone]}`}>
      {status}
    </span>
  );
}

export function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-meos-700 hover:bg-meos-800 disabled:bg-meos-100 disabled:text-meos-400 text-white font-semibold rounded-lg py-3 text-sm transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
