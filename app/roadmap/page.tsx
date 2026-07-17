import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  Boxes,
  ClipboardList,
  Coins,
  Ghost,
  Map,
  Radio,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { roadmapPhases, roadmapStatusCopy, type RoadmapStatus } from "../content/roadmap";

export const metadata: Metadata = {
  title: "Roadmap | Crypto Graveyard",
  description:
    "The staged Crypto Graveyard roadmap from public prototype to controlled beta, wallet watchers, memorial automation, media, and collectibles."
};

const statusStyles: Record<RoadmapStatus, string> = {
  Live: "border-acid-400/35 bg-acid-400/12 text-acid-400",
  Prototype: "border-violet-400/35 bg-violet-400/12 text-violet-400",
  Planned: "border-bone-200/20 bg-bone-100/10 text-bone-100",
  Later: "border-blood-500/35 bg-blood-500/12 text-blood-500"
};

const statusIcons = {
  Live: BadgeCheck,
  Prototype: ClipboardList,
  Planned: Boxes,
  Later: Ghost
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="roadmap" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.86fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Map size={14} aria-hidden="true" />
            Build map
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Roadmap
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Build the cemetery in layers, not in one haunted megastructure.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            Crypto Graveyard is intentionally staged: public prototype first, controlled beta
            second, real request storage third, then wallet watchers, memorial automation, media,
            and collectibles. Each phase should earn the right to unlock the next one.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/beta-request"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ClipboardList size={18} aria-hidden="true" />
              Current beta preview
            </Link>
            <Link
              href="/wallet-policy"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Wallet plan
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Roadmap status</span>
            <span className="text-acid-400">living document</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(["Live", "Prototype", "Planned", "Later"] as RoadmapStatus[]).map((status) => {
              const Icon = statusIcons[status];
              const count = roadmapPhases.filter((phase) => phase.status === status).length;

              return (
                <div key={status} className="border border-bone-200/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase text-bone-500">{status}</p>
                    <Icon className="text-acid-400" size={18} aria-hidden="true" />
                  </div>
                  <p className="mt-2 font-display text-3xl font-bold text-bone-100">{count}</p>
                  <p className="mt-1 text-xs leading-5 text-bone-500">
                    {roadmapStatusCopy[status]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Phases"
          title="What is built, what is previewed, what waits"
          copy="The roadmap separates visible prototypes from operational systems. That keeps the project exciting without accidentally opening real transfers too early."
        />

        <div className="space-y-5">
          {roadmapPhases.map((phase, index) => {
            const Icon = index % 3 === 0 ? Sparkles : index % 3 === 1 ? Coins : Radio;

            return (
              <article key={phase.title} className="grid gap-5 border border-bone-200/10 bg-grave-900/75 p-6 shadow-card lg:grid-cols-[0.34fr_0.66fr]">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase text-acid-400">{phase.phase}</p>
                      <h3 className="mt-2 font-display text-3xl font-bold text-bone-100">
                        {phase.title}
                      </h3>
                    </div>
                    <Icon className="text-acid-400" size={26} aria-hidden="true" />
                  </div>
                  <p className={`mt-5 inline-flex border px-2 py-1 font-mono text-[11px] uppercase ${statusStyles[phase.status]}`}>
                    {phase.status}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-bone-500">{phase.summary}</p>
                  <Link
                    href={phase.href}
                    className="mt-5 inline-flex font-mono text-xs uppercase text-acid-400 hover:text-bone-100"
                  >
                    Related page →
                  </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="terminal-border p-5">
                    <p className="font-mono text-xs uppercase text-bone-500">Already shipped</p>
                    {phase.shipped.length > 0 ? (
                      <div className="mt-4 space-y-3">
                        {phase.shipped.map((item) => (
                          <div key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 bg-acid-400" />
                            <p className="text-sm leading-6 text-bone-200/85">{item}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 text-sm leading-6 text-bone-500">
                        Nothing shipped yet. This phase waits for earlier gates.
                      </p>
                    )}
                  </div>

                  <div className="border border-bone-200/10 bg-black/20 p-5">
                    <p className="font-mono text-xs uppercase text-bone-500">Next work</p>
                    <div className="mt-4 space-y-3">
                      {phase.next.map((item) => (
                        <div key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 bg-violet-400" />
                          <p className="text-sm leading-6 text-bone-200/85">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Current build focus</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The next practical milestone is the real request backend.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              Before wallets or watchers, the project needs a safe way to store beta requests,
              review them, and communicate status without exposing secrets or promising tax results.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/review-process"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ClipboardList size={18} aria-hidden="true" />
              Review process
            </Link>
            <Link
              href="/about#safety"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Safety rules
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerFooter variant="roadmap" />
    </main>
  );
}
