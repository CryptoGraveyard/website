import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  FileWarning,
  Ghost,
  LockKeyhole,
  Radio,
  ShieldCheck
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { KeepExploring } from "../components/KeepExploring";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "About & Safety | Crypto Graveyard",
  description:
    "Crypto Graveyard's mission, safety rules, launch status, and what the project does and does not promise."
};

const principles = [
  {
    title: "Memorials over markets",
    copy: "Crypto Graveyard is built around stories, public memorial pages, eulogies, leaderboards, and community rituals—not investment promises.",
    icon: Ghost
  },
  {
    title: "Evidence gets labels",
    copy: "Future burials should distinguish on-chain facts, estimated values, documented records, and unknown claims so visitors can tell what is actually proven.",
    icon: BadgeCheck
  },
  {
    title: "No tax conclusions",
    copy: "The site can describe observed wallet activity and memorial metrics, but it should never claim to verify deductible tax losses.",
    icon: FileWarning
  }
];

const safetyRules = [
  "Crypto Graveyard will never ask for seed phrases, private keys, wallet recovery words, or remote access to your device.",
  "Official receiving wallets are not published in this prototype. Any current request to send tokens should be treated as suspicious.",
  "Burials should be framed as memorial transfers, not guaranteed tax events, charitable donations, investment sales, or exchange services.",
  "Public entries should use masked wallet addresses and pseudonyms unless a participant explicitly chooses to reveal more.",
  "Large-value claims need confidence labels and supporting evidence before being presented as documented."
];

const statusItems = [
  ["Website", "Live"],
  ["Domain", "Connected"],
  ["Wallets", "Not published"],
  ["Submissions", "Closed"],
  ["Watcher automation", "Planned"],
  ["NFT / SBT collectibles", "Roadmap"]
];

const notClaims = [
  "Tax advisor",
  "Broker or exchange",
  "Qualified charity",
  "Wallet recovery service",
  "Investment app",
  "Valuation authority"
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="about" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.88fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <ShieldCheck size={14} aria-hidden="true" />
            Mission and guardrails
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            About Crypto Graveyard
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            A proper funeral for dead coins, without pretending the casket is a tax strategy.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            Crypto Graveyard is an entertainment, memorial, and analytics project for forgotten,
            abandoned, rugged, and dust-bin crypto assets. The goal is to turn painful bags into
            shareable stories: public memorials, eulogies, confidence labels, and eventually
            collectible headstones.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cemetery"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Ghost size={18} aria-hidden="true" />
              Explore cemetery
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Safety FAQ
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Launch status</span>
            <span className="text-acid-400">v0 prototype</span>
          </div>
          <div className="space-y-3">
            {statusItems.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 border border-bone-200/10 bg-black/20 p-3">
                <span className="font-mono text-xs uppercase text-bone-500">{label}</span>
                <span className="font-mono text-xs uppercase text-bone-100">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Prototype note:</strong>{" "}
            no official wallets are live yet, and this site is not accepting real burials today.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 py-12 lg:grid-cols-3">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <article key={principle.title} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
              <Icon className="text-acid-400" size={24} aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-bold text-bone-100">
                {principle.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{principle.copy}</p>
            </article>
          );
        })}
      </section>

      <section id="safety" className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="terminal-border p-6">
          <LockKeyhole className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
            Safety rules
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-bone-500">
            These are the bright lines for keeping the project useful, weird, and not accidentally
            shaped like a scam goblin.
          </p>
          <div className="mt-6 space-y-3">
            {safetyRules.map((rule) => (
              <div key={rule} className="flex gap-3 border border-bone-200/10 bg-black/20 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-acid-400" />
                <p className="text-sm leading-6 text-bone-200/85">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
          <FileWarning className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            What this project is not
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            This wording matters. It helps keep the brand playful while avoiding promises the site
            should not make.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {notClaims.map((claim) => (
              <div key={claim} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-200">
                {claim}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Pre-launch status</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The public site is a teaser until the MVP is ready.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              Visitors can explore the cemetery world, sample memorials, leaderboards, and safety
              rules. Real submissions and receiving wallets stay closed until the product is ready.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Read FAQ
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
              href="https://www.youtube.com/@CryptoGraveyard"
              target="_blank"
              rel="noreferrer"
            >
              <Radio size={18} aria-hidden="true" />
              YouTube
            </a>
          </div>
        </div>
      </section>

      <KeepExploring current="about" />

      <DisclaimerFooter variant="standard" />
    </main>
  );
}
