import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardList,
  Coins,
  FileWarning,
  Flame,
  Ghost,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Trophy
} from "lucide-react";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Wallet Plan | Crypto Graveyard",
  description:
    "Crypto Graveyard's pre-launch receiving-wallet policy, safety model, and phased path to real token burials."
};

const walletModels = [
  {
    title: "Permanent public wallets",
    status: "Simple, but risky first",
    copy: "Publish one official cemetery wallet per supported chain. This is easy to understand and good for a livestream, but attribution, spam, unsupported tokens, and impersonation risk are harder to control.",
    bestFor: "Later public launch",
    icon: Coins
  },
  {
    title: "Per-submission deposit addresses",
    status: "Cleaner attribution",
    copy: "Generate a unique deposit address or memo per burial request. This makes matching transfers to users easier, but it requires more backend infrastructure and careful operational security.",
    bestFor: "Automation phase",
    icon: BadgeCheck
  },
  {
    title: "Manual review first",
    status: "Recommended starting point",
    copy: "Start with a request form, review the token and chain manually, then provide burial instructions only for approved early participants. It is slower, but safer while the process is still being shaped.",
    bestFor: "Private beta",
    icon: ShieldCheck
  }
];

const launchPhases = [
  {
    phase: "Phase 0",
    title: "No wallets published",
    copy: "Current state. The site explains the concept, but does not request or accept token transfers."
  },
  {
    phase: "Phase 1",
    title: "Manual beta burials",
    copy: "Invite a few known testers, review each burial manually, and publish sample-like memorial pages based on controlled real transactions."
  },
  {
    phase: "Phase 2",
    title: "Watcher-assisted flow",
    copy: "Run wallet watchers for a small chain set and reconcile transfers into a database before publishing memorials."
  },
  {
    phase: "Phase 3",
    title: "Public cemetery wallets",
    copy: "Publish official receiving wallets after monitoring, support docs, abuse handling, and display rules are working."
  }
];

const chainCandidates = [
  ["Base", "Low fees, Ethereum-style tooling, good candidate for early headstone and NFT work."],
  ["Polygon", "Low fees and broad EVM support; good for inexpensive test burials."],
  ["Ethereum", "Most recognized, but mainnet fees make it better for later or high-significance burials."],
  ["Solana", "Popular and low cost, but requires a separate watcher and tooling path from EVM chains."]
];

const displayRules = [
  "Use pseudonyms by default.",
  "Mask wallet addresses unless the participant explicitly opts into public display.",
  "Show transaction hashes only when useful and consented to.",
  "Label values as sample, observed, estimated, documented, or unknown.",
  "Never display a burial as a verified tax loss."
];

const openQuestions = [
  "Which chain gets the first real test burial?",
  "Should early testers apply before receiving instructions?",
  "Will large claims require private documentation review?",
  "What should happen when users send unsupported tokens?",
  "When should a burial become eligible for the Hall of Fame?"
];

export default function WalletPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="wallets" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <LockKeyhole size={14} aria-hidden="true" />
            Receiving-wallet plan
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Wallet Plan
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Open the cemetery gates slowly. Make every burial traceable before it becomes theatrical.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            The safest launch path is not to publish wallet addresses immediately. Crypto Graveyard
            should start with a manual beta, learn from a few controlled burials, and only then
            graduate into automated wallet watching and public cemetery wallets.
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
              href="/review-process"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Review process
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Recommended mode</span>
            <span className="text-acid-400">manual beta</span>
          </div>
          <div className="space-y-3 font-mono text-xs leading-6 text-bone-200/80">
            <p>
              <span className="text-acid-400">&gt;</span> wallets.public = false
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> tester.approval_required = true
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> unsupported_tokens.auto_accept = false
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> tax_claims.allowed = never
            </p>
          </div>
          <div className="mt-5 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Gate rule:</strong>{" "}
            until official wallets are published on this domain, no one should send tokens claiming
            they are “burying” them with Crypto Graveyard.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Wallet models</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
              Three ways to receive dead coins
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-bone-500">
            All three can work eventually. The trick is choosing the one that matches the project’s
            maturity instead of the one that feels flashiest.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {walletModels.map((model) => {
            const Icon = model.icon;
            return (
              <article key={model.title} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase text-acid-400">{model.status}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-bone-100">
                      {model.title}
                    </h3>
                  </div>
                  <Icon className="text-acid-400" size={24} aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-6 text-bone-500">{model.copy}</p>
                <div className="mt-5 border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Best for</p>
                  <p className="mt-1 font-mono text-xs uppercase text-bone-100">{model.bestFor}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="terminal-border p-6">
          <Sparkles className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
            Phased launch path
          </h2>
          <div className="mt-6 space-y-4">
            {launchPhases.map((item) => (
              <div key={item.phase} className="grid gap-3 border-l border-acid-400/30 pl-4 sm:grid-cols-[0.22fr_0.78fr]">
                <p className="font-mono text-xs uppercase text-acid-400">{item.phase}</p>
                <div>
                  <h3 className="font-display text-xl font-bold text-bone-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone-500">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <Flame className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Candidate chains
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The first chain should be cheap enough for testing, familiar enough for users, and easy
            enough to watch reliably.
          </p>
          <div className="mt-6 space-y-3">
            {chainCandidates.map(([chain, copy]) => (
              <div key={chain} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-xs uppercase text-acid-400">{chain}</p>
                <p className="mt-2 text-sm leading-6 text-bone-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="terminal-border p-6">
          <Ghost className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Public display policy
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The burial should be public enough to be fun, but private enough that users are not
            accidentally doxxing their wallet history for internet points.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {displayRules.map((rule) => (
              <div key={rule} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-300">
                {rule}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
          <FileWarning className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Open decisions
          </h2>
          <div className="mt-6 space-y-3">
            {openQuestions.map((question) => (
              <div key={question} className="flex gap-3 border border-bone-200/10 bg-black/20 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-blood-500" />
                <p className="text-sm leading-6 text-bone-200/85">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Manual beta layer</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The request-form preview is ready before any wallets are published.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              It previews chain, token contract, wallet proof preference, pseudonym, and consent
              choices while keeping real transfers closed until an approved beta burial exists.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/beta-request"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ClipboardList size={18} aria-hidden="true" />
              Beta request
            </Link>
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Trophy size={18} aria-hidden="true" />
              Leaderboard demo
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl border-t border-bone-200/10 py-8 text-xs leading-6 text-bone-500">
        <p>
          This page is a product plan, not live deposit instructions. Crypto Graveyard does not
          request private keys, seed phrases, or wallet recovery words, and does not verify tax
          losses, charitable deductions, cost basis, token value, or legal ownership.
        </p>
      </footer>
    </main>
  );
}
