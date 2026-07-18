import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, Clapperboard, Radio, TvMinimalPlay, Zap } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { liveSegments } from "../content/sampleData";

export const metadata: Metadata = {
  title: "Livestream | Crypto Graveyard",
  description:
    "A sample-data preview of Crypto Graveyard's future automated livestream, overlay states, and burial alert programming loop."
};

const overlayPanels = [
  ["Latest burial", "MoonRocket Inu / MRI", "Sample memorial queued"],
  ["Biggest round trip", "$960,960.80", "Treasury Goblin"],
  ["Watcher status", "Offline", "No live wallets yet"],
  ["Current scene", "Coin obituary", "Looping sample data"]
] as const;

const alertStates = [
  {
    title: "Quiet loop",
    copy: "The stream rotates leaderboards, obituaries, cemetery stats, and sample memorials."
  },
  {
    title: "Incoming burial",
    copy: "A future watcher detects a transfer and prepares a funeral alert for the overlay."
  },
  {
    title: "Ceremony mode",
    copy: "The stream interrupts with a bell, tombstone animation, eulogy, and leaderboard update."
  },
  {
    title: "Clip package",
    copy: "The same event can become a YouTube Short, X post, certificate card, or Discord embed."
  }
];

export default function LivestreamPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="livestream" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.92fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Radio size={14} aria-hidden="true" />
            Media layer preview
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Livestream
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Less dead air, more automated cemetery television.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            The future stream should behave like an always-on crypto graveyard channel: rotating
            sample-style scenes, live burial alerts, leaderboard updates, and eulogy moments without
            requiring you to sit there and narrate the void.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.youtube.com/@CryptoGraveyard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <TvMinimalPlay size={18} aria-hidden="true" />
              YouTube channel
            </a>
            <Link
              href="/cemetery"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <BellRing size={18} aria-hidden="true" />
              Sample cemetery
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Stream overlay mock</span>
            <span className="text-acid-400">offline</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {overlayPanels.map(([label, value, note]) => (
              <div key={label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-bone-100">{value}</p>
                <p className="mt-1 text-xs leading-5 text-bone-500">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-acid-400/25 bg-acid-400/10 p-4 font-mono text-xs leading-6 text-bone-200/80">
            <p>
              <span className="text-acid-400">&gt;</span> obs.scene = sample_dashboard
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> youtube.stream = future
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> home_pc_required = false_when_cloud_hosted
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Programming loop"
          title="What plays when nobody is talking?"
          copy="Instead of dead air, the stream can rotate a structured set of scenes and only interrupt when a real burial event eventually arrives."
        />

        <div className="space-y-4">
          {liveSegments.map((segment) => (
            <article key={segment.segment} className="grid gap-4 border border-bone-200/10 bg-grave-900/75 p-5 shadow-card md:grid-cols-[0.25fr_0.15fr_0.6fr]">
              <p className="font-display text-2xl font-bold text-bone-100">{segment.segment}</p>
              <p className="font-mono text-xs uppercase text-acid-400">{segment.duration}</p>
              <p className="text-sm leading-6 text-bone-500">{segment.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="terminal-border p-6">
          <Clapperboard className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Output surfaces
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The same event data can power the website, livestream overlay, YouTube Shorts, X posts,
            Discord embeds, and certificates. One burial, many little ghosts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {alertStates.map((state) => (
            <article key={state.title} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
              <Zap className="text-violet-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-bold text-bone-100">{state.title}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{state.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Launch order</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Build the website loop first; automate the stream later.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              The live stream should come after the burial data model works. For now, this page
              captures the content plan and future overlay states with sample data.
            </p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
          >
            <Radio size={18} aria-hidden="true" />
            Read FAQ
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="roadmap" />
    </main>
  );
}
