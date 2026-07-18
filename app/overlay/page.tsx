import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  Clapperboard,
  Coins,
  Radio,
  ShieldCheck,
  Skull,
  Trophy,
  TvMinimalPlay,
  Zap
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import {
  overlayLeaderboardRows,
  overlaySafetyBadges,
  overlaySceneCards,
  overlayTickerItems
} from "../content/sampleData";

export const metadata: Metadata = {
  title: "Stream Overlay Preview | Crypto Graveyard",
  description:
    "A sample-data OBS-style overlay preview for Crypto Graveyard's future automated livestream scenes, ticker, leaderboard, and burial alerts."
};

function OverlayFrame() {
  return (
    <div className="border border-bone-200/15 bg-black p-3 shadow-card">
      <div className="relative overflow-hidden border border-acid-400/25 bg-grave-950 aspect-video">
        <div className="graveyard-grid pointer-events-none absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-acid-400/20 bg-black/70 px-5 py-3 font-mono text-[11px] uppercase text-bone-300">
          <span className="text-acid-400">Crypto Graveyard Live</span>
          <span>sample broadcast / no live wallets</span>
        </div>

        <div className="absolute left-5 top-16 w-[34%] border border-bone-200/10 bg-black/45 p-4">
          <p className="font-mono text-[10px] uppercase text-bone-500">Latest burial</p>
          <h2 className="mt-2 font-display text-3xl font-black leading-none text-bone-100">
            MoonRocket Inu
          </h2>
          <p className="mt-2 font-mono text-xs uppercase text-acid-400">MRI / Ethereum</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="border border-bone-200/10 bg-grave-900/80 p-2">
              <p className="font-mono text-[9px] uppercase text-bone-500">Peak</p>
              <p className="font-display text-xl font-bold text-bone-100">$412K</p>
            </div>
            <div className="border border-bone-200/10 bg-grave-900/80 p-2">
              <p className="font-mono text-[9px] uppercase text-bone-500">Burial</p>
              <p className="font-display text-xl font-bold text-acid-400">$3.17</p>
            </div>
          </div>
        </div>

        <div className="absolute right-5 top-16 w-[31%] border border-violet-400/20 bg-violet-400/10 p-4">
          <p className="font-mono text-[10px] uppercase text-violet-400">Hall of Fame</p>
          <div className="mt-3 space-y-2">
            {overlayLeaderboardRows.slice(0, 3).map(([rank, alias, coin, value]) => (
              <div key={rank} className="grid grid-cols-[0.16fr_0.42fr_0.42fr] gap-2 border border-bone-200/10 bg-black/35 p-2">
                <p className="font-mono text-[10px] text-acid-400">{rank}</p>
                <p className="truncate font-mono text-[10px] uppercase text-bone-200">{alias}</p>
                <p className="truncate text-right font-mono text-[10px] uppercase text-bone-500">
                  {coin} / {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 w-[34%] -translate-x-1/2 border border-acid-400/35 bg-acid-400/10 p-5 text-center shadow-glow">
          <BellRing className="mx-auto text-acid-400" size={28} aria-hidden="true" />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-acid-400">
            Funeral alert
          </p>
          <p className="mt-2 font-display text-3xl font-black uppercase text-bone-100">
            Sample ceremony
          </p>
          <p className="mt-2 text-xs leading-5 text-bone-500">
            Promised orbit. Found basement.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-acid-400/20 bg-black/75 px-4 py-3">
          <div className="flex min-w-max gap-6 font-mono text-[11px] uppercase text-bone-300">
            {overlayTickerItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-2 w-2 bg-acid-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OverlayPreviewPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="livestream" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[0.88fr_1.12fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Clapperboard size={14} aria-hidden="true" />
            OBS-style preview
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Stream Overlay
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            The future always-on cemetery broadcast, mocked with sample ghosts.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews what a browser-source overlay could show in OBS or a cloud encoder:
            latest burial, alert mode, ticker, leaderboard, and safety labels. It is not connected
            to live wallets yet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/livestream"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Radio size={18} aria-hidden="true" />
              Livestream plan
            </Link>
            <a
              href="https://www.youtube.com/@CryptoGraveyard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <TvMinimalPlay size={18} aria-hidden="true" />
              YouTube
            </a>
          </div>
        </div>

        <OverlayFrame />
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Scene deck"
          title="A broadcast loop instead of dead air"
          copy="The stream can rotate these scenes on autopilot, then interrupt the loop when a future wallet watcher confirms a reviewed burial."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {overlaySceneCards.map((card) => (
            <article key={card.scene} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
              <Zap className="text-violet-400" size={20} aria-hidden="true" />
              <p className="mt-4 font-mono text-xs uppercase text-acid-400">{card.runtime}</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-bone-100">{card.scene}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <Trophy className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Leaderboard feed
          </h2>
          <div className="mt-6 space-y-3">
            {overlayLeaderboardRows.map(([rank, alias, coin, value]) => (
              <div
                key={rank}
                className="grid gap-3 border border-bone-200/10 bg-black/20 p-4 sm:grid-cols-[0.14fr_0.24fr_0.36fr_0.26fr]"
              >
                <p className="font-mono text-xs uppercase text-acid-400">{rank}</p>
                <p className="font-mono text-xs uppercase text-bone-200">{alias}</p>
                <p className="font-mono text-xs uppercase text-bone-500">{coin}</p>
                <p className="font-mono text-xs uppercase text-blood-500">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-border p-6">
          <ShieldCheck className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Safety labels on-screen
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The stream should not depend on tiny disclaimers hidden in a footer. When the broadcast
            is sample-only, offline, or not tax-related, the overlay should say so.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {overlaySafetyBadges.map((badge) => (
              <span
                key={badge}
                className="border border-acid-400/30 bg-acid-400/10 px-2 py-1 font-mono text-[11px] uppercase text-acid-400"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <Coins className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Data source order
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Eventually, the overlay should read from the same approved burial records as the
            website. No separate hand-entered numbers, no accidental mismatch, no haunted
            spreadsheet goblin.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Database", "Approved burials, memorials, awards, and display consent."],
            ["Watcher", "Confirmed transfers from official receiving wallets only."],
            ["Renderer", "Browser route consumed by OBS or a cloud encoder."],
            ["Archive", "Clips, shorts, certificates, and social posts generated after review."]
          ].map(([title, copy]) => (
            <article key={title} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
              <BadgeCheck className="text-acid-400" size={20} aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-bone-100">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Future production route</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              This can become the browser source once real burial records exist.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              For now, it gives us the visual language. Later, it can become a stripped-down,
              full-screen route optimized for OBS, cloud rendering, and automated clips.
            </p>
          </div>
          <Link
            href="/launch-checklist"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Skull size={18} aria-hidden="true" />
            Launch checklist
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
