import Link from "next/link";
import { Skull, TvMinimalPlay } from "lucide-react";

type NavKey =
  | "home"
  | "cemetery"
  | "bagholders"
  | "awards"
  | "roadmap"
  | "hall"
  | "bury"
  | "memorial"
  | "headstones"
  | "certificates"
  | "livestream"
  | "methodology"
  | "launch"
  | "wallets"
  | "beta"
  | "faq"
  | "about";

const navLinks: Array<{ href: string; key: NavKey; label: string }> = [
  { href: "/", key: "home", label: "Dashboard" },
  { href: "/cemetery", key: "cemetery", label: "Cemetery" },
  { href: "/bagholders", key: "bagholders", label: "Bagholders" },
  { href: "/hall-of-fame", key: "hall", label: "Hall of Fame" },
  { href: "/awards", key: "awards", label: "Awards" },
  { href: "/memorial/sample", key: "memorial", label: "Sample Memorial" },
  { href: "/headstones", key: "headstones", label: "Headstones" },
  { href: "/certificates", key: "certificates", label: "Certificates" },
  { href: "/livestream", key: "livestream", label: "Livestream" },
  { href: "/faq", key: "faq", label: "FAQ" },
  { href: "/about", key: "about", label: "About & Safety" }
];

export function SiteNav({ current = "home" }: { current?: NavKey }) {
  return (
    <nav className="terminal-border pixel-corners relative z-10 mx-auto flex max-w-7xl flex-col gap-4 p-3 sm:flex-row sm:items-center sm:justify-between">
      <Link className="group flex items-center gap-3" href="/" aria-label="Crypto Graveyard home">
        <span className="grid h-11 w-11 place-items-center border border-acid-400/40 bg-grave-950 text-acid-400 pixel-shadow transition group-hover:border-bone-100 group-hover:text-bone-100">
          <Skull size={20} aria-hidden="true" />
        </span>
        <span>
          <span className="block font-display text-lg font-black leading-none text-bone-100">
            Crypto Graveyard
          </span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.24em] text-acid-400">
            Gothic pixel cemetery
          </span>
        </span>
      </Link>

      <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase">
        {navLinks.map((link) => {
          const isCurrent = current === link.key;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent ? "page" : undefined}
              className={
                isCurrent
                  ? "border border-acid-400/50 bg-acid-400/15 px-3 py-2 text-acid-400 shadow-[0_0_18px_rgba(166,255,61,0.12)]"
                  : "border border-bone-200/10 bg-grave-950/70 px-3 py-2 text-bone-400 hover:border-acid-400/50 hover:text-acid-400"
              }
            >
              {link.label}
            </Link>
          );
        })}

        <a
          className="inline-flex items-center gap-2 border border-violet-400/25 bg-violet-400/10 px-3 py-2 text-violet-400 hover:border-acid-400/50 hover:text-acid-400"
          href="https://www.youtube.com/@CryptoGraveyard"
          target="_blank"
          rel="noreferrer"
        >
          <TvMinimalPlay size={14} aria-hidden="true" />
          YouTube
        </a>
      </div>
    </nav>
  );
}
