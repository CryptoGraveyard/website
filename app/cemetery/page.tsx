import type { Metadata } from "next";
import Link from "next/link";
import { Coins, Ghost, Search, ShieldCheck, Skull, Trophy } from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SectionIntro } from "../components/SectionIntro";
import { SiteNav } from "../components/SiteNav";
import { cemeteryCoins, cemeteryStats, getCoinSlug } from "../content/sampleData";

export const metadata: Metadata = {
  title: "Coin Cemetery | Crypto Graveyard",
  description:
    "A sample-data catalog of fictional buried cryptocurrencies, confidence labels, causes of death, and memorial links."
};

const statusStyles: Record<string, string> = {
  Buried: "border-acid-400/35 bg-acid-400/12 text-acid-400",
  Haunting: "border-violet-400/35 bg-violet-400/12 text-violet-400",
  Forgotten: "border-bone-200/20 bg-bone-100/10 text-bone-100",
  Dust: "border-bone-200/15 bg-black/25 text-bone-500",
  Cursed: "border-blood-500/35 bg-blood-500/12 text-blood-500"
};

export default function CemeteryPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="cemetery" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.88fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <Skull size={14} aria-hidden="true" />
            Sample cemetery catalog
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Coin Cemetery
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Browse the fictional dead before the real ghosts arrive.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page previews the future searchable catalog of buried tokens. Every row is sample
            data for now, with deliberately loud confidence labels so nobody mistakes demo theater
            for blockchain evidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/memorial/sample"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Ghost size={18} aria-hidden="true" />
              View sample memorial
            </Link>
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Trophy size={18} aria-hidden="true" />
              Hall of Fame
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Cemetery index</span>
            <span className="text-acid-400">sample only</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cemeteryStats.map((stat) => (
              <div key={stat.label} className="border border-bone-200/10 bg-black/20 p-4">
                <p className="font-mono text-[11px] uppercase text-bone-500">{stat.label}</p>
                <p className="mt-2 font-display text-3xl font-bold text-bone-100">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] text-acid-400/80">{stat.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-bone-200/10 bg-black/20 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Prototype rule:</strong>{" "}
            Search, filters, chain watchers, and real token pages come later. This is the product
            shell with fake bones in the ground.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <SectionIntro
          eyebrow="Future catalog"
          title="Dead coins, sorted for storytelling"
          copy="The future version can filter by chain, cause of death, confidence tier, peak observed value, and burial status. This version shows the full layout with sample entries."
        />

        <div className="mb-5 flex flex-wrap gap-2 font-mono text-xs uppercase">
          {["All", "Buried", "Haunting", "Forgotten", "Dust", "Cursed"].map((filter) => (
            <span
              key={filter}
              className="inline-flex items-center gap-2 border border-bone-200/10 bg-grave-900/75 px-3 py-2 text-bone-400"
            >
              <Search size={13} aria-hidden="true" />
              {filter}
            </span>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {cemeteryCoins.map((coin) => (
            <Link
              key={coin.symbol}
              href={`/coins/${getCoinSlug(coin)}`}
              className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-bone-500">
                    {coin.chain} / {coin.symbol}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-bone-100">
                    {coin.coin}
                  </h2>
                </div>
                <span
                  className={`border px-2 py-1 font-mono text-[11px] uppercase ${
                    statusStyles[coin.status]
                  }`}
                >
                  {coin.status}
                </span>
              </div>
              <p className="mt-4 min-h-12 text-sm leading-6 text-bone-200/80">
                {coin.epitaph}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Peak</p>
                  <p className="mt-1 font-display text-xl font-bold text-bone-100">{coin.peak}</p>
                </div>
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Burial</p>
                  <p className="mt-1 font-display text-xl font-bold text-acid-400">
                    {coin.burialValue}
                  </p>
                </div>
                <div className="border border-bone-200/10 bg-black/20 p-3">
                  <p className="font-mono text-[11px] uppercase text-bone-500">Age</p>
                  <p className="mt-1 font-display text-xl font-bold text-violet-400">{coin.age}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-bone-200/10 pt-4">
                <div>
                  <p className="font-mono text-[11px] uppercase text-bone-500">Cause of death</p>
                  <p className="mt-1 font-mono text-xs uppercase text-bone-100">{coin.cause}</p>
                </div>
                <span className="inline-flex items-center gap-2 border border-violet-400/25 bg-violet-400/10 px-2 py-1 font-mono text-[11px] uppercase text-violet-400">
                  <ShieldCheck size={13} aria-hidden="true" />
                  {coin.confidence}
                </span>
              </div>
              <p className="mt-5 font-mono text-xs uppercase text-acid-400 hover:text-bone-100">
                Open coin profile →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Next evolution</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Later, this becomes the searchable archive of real memorials.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              Once burials are real, this page can pull from the memorial database and link each
              token to evidence, timelines, certificates, and confidence labels.
            </p>
          </div>
          <Link
            href="/bury-a-coin"
            className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
          >
            <Coins size={18} aria-hidden="true" />
            Future burial flow
          </Link>
        </div>
      </section>

      <DisclaimerFooter variant="demo" />
    </main>
  );
}
