import type { ReactNode } from "react";

type TerminalStatusPanelProps = {
  title: string;
  status: string;
  lines: string[];
  warningLabel: string;
  children: ReactNode;
};

export function TerminalStatusPanel({
  title,
  status,
  lines,
  warningLabel,
  children
}: TerminalStatusPanelProps) {
  return (
    <div className="terminal-border pixel-corners p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
        <span>{title}</span>
        <span className="text-acid-400">{status}</span>
      </div>
      <div className="space-y-3 font-mono text-xs leading-6 text-bone-200/80">
        {lines.map((line) => (
          <p key={line}>
            <span className="text-acid-400">&gt;</span> {line}
          </p>
        ))}
      </div>
      <div className="mt-5 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
        <strong className="font-mono text-xs uppercase text-blood-500">{warningLabel}:</strong>{" "}
        {children}
      </div>
    </div>
  );
}
