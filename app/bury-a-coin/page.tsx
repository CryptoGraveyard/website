import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  ClipboardList,
  Coins,
  Flame,
  Ghost,
  LockKeyhole,
  Skull,
  Sparkles,
  Trophy
} from "lucide-react";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Bury a Coin | Crypto Graveyard",
  description:
    "A coming-soon preview of the Crypto Graveyard burial flow: wallet proof, burial details, memorial pages, and future awards."
};

const steps = [
  {
    eyebrow: "Step 01",
    title: "Choose the dead coin",
    copy: "Select the chain, token contract, ticker, and quantity you want to memorialize. In the live version, this starts the burial record.",
    icon: Coins
  },
  {
    eyebrow: "Step 02",
    title: "Prove wallet control",
    copy: "Sign a harmless verification message or submit a tiny verification transaction. Never share private keys or seed phrases. Ever.",
    icon: BadgeCheck
  },
  {
    eyebrow: "Step 03",
    title: "Send it to the cemetery",
    copy: "Once wallets are live, supported tokens can be transferred to the official graveyard address for that chain.",
    icon: Skull
  },
  {
    eyebrow: "Step 04",
    title: "Receive the memorial",
    copy: "The site generates a public burial page, demo-style eulogy, leaderboard eligibility, and future certificate options.",
    icon: Trophy
  }
];

const neededLater = [
  "Token contract and chain",
  "Sending wallet address",
  "Burial transaction hash",
  "Display name or pseudonym",
  "Permission to show masked wallet info",
  "Optional acquisition records for future documented-value tiers"
];

const hardRules = [
  "No private keys",
  "No seed phrases",
  "No guaranteed tax outcomes",
  "No wallet addresses on v0",
  "No real burial flow until official wallets are published"
];

const futureOutputs = [
  {
    label: "Burial page",
    copy: "A permanent memorial with coin details, chain data, value labels, and a shareable eulogy."
  },
  {
    label: "Hall of Fame eligibility",
    copy: "Qualifying burials can appear in round-trip, token-count, and monthly award leaderboards."
  },
  {
    label: "Certificate options",
    copy: "Downloadable certificates first; optional SBTs and randomized headstone NFTs later."
  }
];

export default function BuryCoinPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="bury" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.88fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <BellRing size={14} aria-hidden="true" />
            Coming soon
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Bury a Coin
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            A future funeral flow for tokens that have seen enough.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews how burial submissions will work once official wallets and watcher
            automation are live. For now, no wallet addresses are displayed and no real token
            transfers are requested.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/beta-request"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ClipboardList size={18} aria-hidden="true" />
              Beta request preview
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
              href="/wallet-policy"
            >
              <LockKeyhole size={18} aria-hidden="true" />
              Wallet plan
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Burial terminal</span>
            <span className="text-acid-400">not live</span>
          </div>
          <div className="space-y-3 font-mono text-xs leading-6 text-bone-200/80">
            <p>
              <span className="text-acid-400">&gt;</span> wallets.published = false
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> submissions.open = false
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> private.keys.requested = never
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> tax.advice.provided = false
            </p>
          </div>
          <div className="mt-5 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Safety note:</strong>{" "}
            If anyone claims to be Crypto Graveyard and asks for seed phrases, private keys, or
            wallet recovery words, that is not us. That is a digital raccoon in a trench coat.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Future flow</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
              How a burial will work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-bone-500">
            The live version should feel ceremonial, but the underlying flow has to be careful,
            verifiable, and impossible to confuse with tax advice.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-bone-500">{step.eyebrow}</span>
                  <Icon className="text-acid-400" size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-bone-100">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-bone-500">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="terminal-border p-6">
          <Sparkles className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            What we may ask for later
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            These fields help build a useful memorial record without exposing more than the user
            consents to show publicly.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {neededLater.map((item) => (
              <div key={item} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
          <Flame className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Hard rules for the cemetery gate
          </h2>
          <div className="mt-6 space-y-3">
            {hardRules.map((rule) => (
              <div key={rule} className="flex items-center gap-3 border border-bone-200/10 bg-black/20 p-3">
                <span className="h-2 w-2 bg-blood-500" />
                <span className="font-mono text-xs uppercase text-bone-200">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <div className="mb-7">
          <p className="font-mono text-xs uppercase text-acid-400">What a burial unlocks</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
            Memorials first. Collectibles later.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {futureOutputs.map((output, index) => (
            <article key={output.label} className="terminal-border p-6">
              {index === 0 ? (
                <Ghost className="text-violet-400" size={24} aria-hidden="true" />
              ) : index === 1 ? (
                <Trophy className="text-acid-400" size={24} aria-hidden="true" />
              ) : (
                <Coins className="text-blood-500" size={24} aria-hidden="true" />
              )}
              <h3 className="mt-4 font-display text-2xl font-bold text-bone-100">{output.label}</h3>
              <p className="mt-3 text-sm leading-6 text-bone-500">{output.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Status</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The grave is dug. The gates are not open yet.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-bone-500">
              Next milestone: decide supported chains and wallet display policy before publishing
              official receiving addresses.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/beta-request"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ClipboardList size={18} aria-hidden="true" />
              Beta request preview
            </Link>
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Trophy size={18} aria-hidden="true" />
              See demo awards
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl border-t border-bone-200/10 py-8 text-xs leading-6 text-bone-500">
        <p>
          The burial flow is not live. Crypto Graveyard does not request private keys, seed phrases,
          or wallet recovery words. It does not verify tax losses, charitable deductions, cost basis,
          investment outcomes, or legal ownership.
        </p>
      </footer>
    </main>
  );
}
