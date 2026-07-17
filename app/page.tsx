import {
  BadgeCheck,
  BellRing,
  Coins,
  Flame,
  Ghost,
  Radio,
  Trophy,
  TvMinimalPlay
} from "lucide-react";
import Link from "next/link";
import { SiteNav } from "./components/SiteNav";

const sampleBurials = [
  {
    coin: "MoonRocket Inu",
    symbol: "MRI",
    status: "Rugged",
    peak: "$412,884",
    burial: "$3.17",
    inscription: "Promised orbit. Found basement.",
    color: "acid"
  },
  {
    coin: "SafeMars Classic",
    symbol: "SMC",
    status: "Forgotten",
    peak: "$88,210",
    burial: "$0.42",
    inscription: "Still waiting on the roadmap.",
    color: "violet"
  },
  {
    coin: "Yield Phantom",
    symbol: "YPH",
    status: "Exploded",
    peak: "$219,050",
    burial: "$12.09",
    inscription: "APY was the plot twist.",
    color: "blood"
  }
];

const statCards = [
  { label: "Sample burials", value: "3", note: "Demo data only" },
  { label: "Peak value buried", value: "$720K", note: "Sample notional" },
  { label: "Burial value", value: "$15.68", note: "Sample estimate" },
  { label: "Headstones minted", value: "Soon", note: "Roadmap item" }
];

const roadmap = [
  "Live wallet watcher",
  "AI eulogies",
  "SBT memorial profiles",
  "Randomized headstone NFTs"
];

const exploreCards = [
  {
    title: "Hall of Fame",
    href: "/hall-of-fame",
    eyebrow: "Demo leaderboard",
    copy: "Browse fictional awards, biggest round trips, and the leaderboard language that keeps entertainment metrics separate from tax facts."
  },
  {
    title: "Bury a Coin",
    href: "/bury-a-coin",
    eyebrow: "Coming soon flow",
    copy: "Preview the future user journey for wallet proof, official receiving wallets, memorial pages, and certificates."
  },
  {
    title: "Sample Memorial",
    href: "/memorial/sample",
    eyebrow: "Shareable artifact",
    copy: "See what a burial can become: a public record, eulogy, confidence labels, timeline, and certificate preview."
  }
];

function PixelHeadstone({
  color,
  label
}: {
  color: "acid" | "violet" | "blood";
  label: string;
}) {
  const accent = {
    acid: "bg-acid-400 shadow-[0_0_22px_rgba(166,255,61,0.22)]",
    violet: "bg-violet-400 shadow-[0_0_22px_rgba(181,117,255,0.22)]",
    blood: "bg-blood-500 shadow-[0_0_22px_rgba(220,50,69,0.22)]"
  }[color];

  return (
    <div className="relative mx-auto h-40 w-32">
      <div className={`absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 ${accent}`} />
      <div className="absolute left-5 top-8 h-24 w-[88px] rounded-t-[42px] border border-bone-200/35 bg-gradient-to-b from-bone-200/90 to-bone-500/60 pixel-shadow" />
      <div className="absolute left-3 top-28 h-7 w-[104px] border border-bone-200/25 bg-grave-700 pixel-shadow" />
      <div className="absolute left-1/2 top-16 w-20 -translate-x-1/2 text-center font-mono text-[11px] font-semibold uppercase leading-tight text-grave-950">
        RIP
        <span className="mt-1 block text-[9px]">{label}</span>
      </div>
      <div className="absolute bottom-0 left-0 h-5 w-full bg-acid-500/15" />
      <div className="absolute bottom-1 left-3 h-2 w-2 bg-acid-400/50" />
      <div className="absolute bottom-2 right-5 h-2 w-2 bg-violet-400/50" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative min-h-[92vh] px-5 pb-10 pt-6 sm:px-8 lg:px-12">
        <div className="graveyard-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-grave-950 via-grave-950/80 to-transparent" />

        <SiteNav current="home" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 pb-8 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
              <Radio size={14} aria-hidden="true" />
              Demo dashboard online
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl lg:text-8xl">
              Crypto Graveyard
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
              Every dead coin deserves a proper funeral.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
              A darkly funny memorial dashboard for abandoned bags, cursed tickers, pixel
              headstones, and the future hall of legendary losses. No wallets yet. No tax promises.
              Just a tasteful place to bury the chart.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
                href="https://www.youtube.com/@CryptoGraveyard"
                target="_blank"
                rel="noreferrer"
              >
                <TvMinimalPlay size={18} aria-hidden="true" />
                Follow YouTube
              </a>
              <Link
                className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
                href="/bury-a-coin"
              >
                <BellRing size={18} aria-hidden="true" />
                Bury a coin soon
              </Link>
            </div>
          </div>

          <div className="terminal-border pixel-corners p-4 shadow-card sm:p-5">
            <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
              <span>Live cemetery console</span>
              <span className="text-acid-400">sample feed</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {statCards.map((stat) => (
                <div key={stat.label} className="border border-bone-200/10 bg-grave-950/50 p-4">
                  <p className="font-mono text-[11px] uppercase text-bone-500">{stat.label}</p>
                  <p className="mt-2 font-display text-3xl font-bold text-bone-100">{stat.value}</p>
                  <p className="mt-1 font-mono text-[11px] text-acid-400/80">{stat.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-bone-200/10 bg-black/25 p-4 font-mono text-xs leading-6 text-bone-200/80">
              <p>
                <span className="text-acid-400">&gt;</span> watcher.status = pending_wallets
              </p>
              <p>
                <span className="text-acid-400">&gt;</span> display.mode = sample_data_only
              </p>
              <p>
                <span className="text-acid-400">&gt;</span> tax.loss.verified = false
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-acid-400">Explore the cemetery</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
                A tiny product, not just a landing page
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-bone-500">
              The first version now has a demo dashboard, leaderboard, burial flow preview, and
              memorial artifact so visitors can understand the whole loop.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {exploreCards.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className="group border border-bone-200/10 bg-grave-900/75 p-6 shadow-card transition hover:border-acid-400/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase text-acid-400">{card.eyebrow}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold text-bone-100">
                      {card.title}
                    </h3>
                  </div>
                  {index === 0 ? (
                    <Trophy className="text-acid-400" size={24} aria-hidden="true" />
                  ) : index === 1 ? (
                    <BellRing className="text-violet-400" size={24} aria-hidden="true" />
                  ) : (
                    <Ghost className="text-blood-500" size={24} aria-hidden="true" />
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-bone-500">{card.copy}</p>
                <p className="mt-5 font-mono text-xs uppercase text-acid-400 group-hover:text-bone-100">
                  Open page →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="burials" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-acid-400">Sample data</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
                Recent burials from the demo cemetery
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-bone-500">
              These are fictional sample entries used to shape the product before wallets and
              verification systems are connected.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {sampleBurials.map((burial) => (
              <article
                key={burial.symbol}
                className="border border-bone-200/10 bg-grave-900/70 p-5 shadow-card"
              >
                <PixelHeadstone color={burial.color as "acid" | "violet" | "blood"} label={burial.symbol} />
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-bone-100">{burial.coin}</h3>
                    <p className="font-mono text-xs uppercase text-bone-500">{burial.symbol}</p>
                  </div>
                  <span className="border border-blood-500/35 bg-blood-500/12 px-2 py-1 font-mono text-[11px] uppercase text-blood-500">
                    {burial.status}
                  </span>
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-bone-200/75">{burial.inscription}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-bone-200/10 pt-4 font-mono text-xs">
                  <div>
                    <p className="uppercase text-bone-500">Peak observed</p>
                    <p className="mt-1 text-bone-100">{burial.peak}</p>
                  </div>
                  <div>
                    <p className="uppercase text-bone-500">Burial value</p>
                    <p className="mt-1 text-acid-400">{burial.burial}</p>
                  </div>
                </div>
                <Link
                  href="/memorial/sample"
                  className="mt-5 inline-flex font-mono text-xs uppercase text-acid-400 hover:text-bone-100"
                >
                  View sample memorial →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Roadmap</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
              Coming after the first funeral bell
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-bone-500">
              Wallets, watcher automation, AI eulogies, SBT memorial profiles, and collectible
              headstones are visible on the roadmap, but not required for this first public build.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roadmap.map((item, index) => (
              <div key={item} className="terminal-border p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-bone-500">
                    Phase {index + 1}
                  </span>
                  {index % 2 === 0 ? (
                    <Coins className="text-acid-400" size={18} aria-hidden="true" />
                  ) : (
                    <Ghost className="text-violet-400" size={18} aria-hidden="true" />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-bone-100">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-bone-500">
                  Logged on the project board and intentionally staged behind the dashboard MVP.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          <div className="border border-acid-400/20 bg-acid-400/10 p-6">
            <Trophy className="text-acid-400" size={24} aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-bold text-bone-100">
              Hall of legendary losses
            </h3>
            <p className="mt-3 text-sm leading-6 text-bone-500">
              Leaderboards will separate entertainment metrics from tax facts.
            </p>
            <Link
              href="/hall-of-fame"
              className="mt-5 inline-flex font-mono text-xs uppercase text-acid-400 hover:text-bone-100"
            >
              View demo leaderboard →
            </Link>
          </div>
          <div className="border border-violet-400/20 bg-violet-400/10 p-6">
            <Flame className="text-violet-400" size={24} aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-bold text-bone-100">
              Funeral ceremonies
            </h3>
            <p className="mt-3 text-sm leading-6 text-bone-500">
              Stream-ready scenes and eulogies come later, once burials are real.
            </p>
          </div>
          <div className="border border-bone-200/10 bg-bone-100/10 p-6">
            <BadgeCheck className="text-bone-100" size={24} aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-bold text-bone-100">
              Confidence labels
            </h3>
            <p className="mt-3 text-sm leading-6 text-bone-500">
              Values will be labeled as sample, observed, estimated, documented, or unknown.
            </p>
          </div>
        </div>
      </section>

      <footer id="disclaimer" className="border-t border-bone-200/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs leading-6 text-bone-500 md:flex-row">
          <p className="max-w-3xl">
            Crypto Graveyard is an entertainment, memorial, and analytics project. Sample data is
            fictional. Nothing here verifies tax losses, charitable deductions, cost basis, or
            investment outcomes.
          </p>
          <p className="font-mono uppercase text-bone-500">No wallets shown in v0</p>
        </div>
      </footer>
    </main>
  );
}
