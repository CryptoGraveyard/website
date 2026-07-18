import Link from "next/link";
import { Skull, TvMinimalPlay } from "lucide-react";

type NavKey =
  | "home"
  | "cemetery"
  | "roadmap"
  | "hall"
  | "bury"
  | "memorial"
  | "headstones"
  | "certificates"
  | "livestream"
  | "wallets"
  | "beta"
  | "faq"
  | "about";

const navLinks: Array<{ href: string; key: NavKey; label: string }> = [
  { href: "/", key: "home", label: "Dashboard" },
  { href: "/cemetery", key: "cemetery", label: "Cemetery" },
  { href: "/hall-of-fame", key: "hall", label: "Hall of Fame" },
  { href: "/bury-a-coin", key: "bury", label: "Bury a Coin" },
  { href: "/memorial/sample", key: "memorial", label: "Sample Memorial" },
  { href: "/headstones", key: "headstones", label: "Headstones" },
  { href: "/certificates", key: "certificates", label: "Certificates" },
  { href: "/livestream", key: "livestream", label: "Livestream" },
  { href: "/roadmap", key: "roadmap", label: "Roadmap" },
  { href: "/wallet-policy", key: "wallets", label: "Wallet Plan" },
  { href: "/beta-request", key: "beta", label: "Beta Request" },
  { href: "/faq", key: "faq", label: "FAQ" },
  { href: "/about", key: "about", label: "About & Safety" }
];

export function SiteNav({ current = "home" }: { current?: NavKey }) {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link className="flex items-center gap-3" href="/" aria-label="Crypto Graveyard home">
        <span className="grid h-10 w-10 place-items-center border border-acid-400/35 bg-grave-900 text-acid-400 pixel-shadow">
          <Skull size={20} aria-hidden="true" />
        </span>
        <span className="font-display text-lg font-semibold text-bone-100">Crypto Graveyard</span>
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
                  ? "border border-acid-400/40 bg-acid-400/12 px-3 py-2 text-acid-400"
                  : "border border-bone-200/10 bg-grave-900/70 px-3 py-2 text-bone-400 hover:border-acid-400/50 hover:text-acid-400"
              }
            >
              {link.label}
            </Link>
          );
        })}

        <a
          className="inline-flex items-center gap-2 border border-bone-200/10 bg-grave-900/70 px-3 py-2 text-bone-400 hover:border-acid-400/50 hover:text-acid-400"
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
