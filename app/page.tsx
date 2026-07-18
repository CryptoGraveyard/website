import {
  BadgeCheck,
  BellRing,
  Coins,
  ClipboardList,
  Flame,
  Ghost,
  Radio,
  Trophy,
  TvMinimalPlay,
  UsersRound
} from "lucide-react";
import Link from "next/link";
import { DisclaimerFooter } from "./components/DisclaimerFooter";
import { SectionIntro } from "./components/SectionIntro";
import { SiteNav } from "./components/SiteNav";
import { roadmapPhases, roadmapStatusCopy } from "./content/roadmap";

const sampleBurials = [
  {
    coin: "MoonRocket Inu",
    symbol: "MRI",
    status: "Rugged",
    peak: "$412,884",
    burial: "$3.17",
    inscription: "Promised orbit. Found basement.",
    color: "acid",
    href: "/coins/moonrocket-inu"
  },
  {
    coin: "SafeMars Classic",
    symbol: "SMC",
    status: "Forgotten",
    peak: "$88,210",
    burial: "$0.42",
    inscription: "Still waiting on the roadmap.",
    color: "violet",
    href: "/coins/safemars-classic"
  },
  {
    coin: "Yield Phantom",
    symbol: "YPH",
    status: "Exploded",
    peak: "$219,050",
    burial: "$12.09",
    inscription: "APY was the plot twist.",
    color: "blood",
    href: "/coins/yield-phantom"
  }
];

const statCards = [
  { label: "Sample burials", value: "3", note: "Demo data only" },
  { label: "Peak value buried", value: "$720K", note: "Sample notional" },
  { label: "Burial value", value: "$15.68", note: "Sample estimate" },
  { label: "Headstones minted", value: "Soon", note: "Roadmap item" }
];

const exploreCards = [
  {
    title: "Coin Cemetery",
    href: "/cemetery",
    eyebrow: "Sample catalog",
    copy: "Browse a fictional catalog of dead coins, causes of death, confidence labels, and future searchable archive behavior.",
    icon: Coins
  },
  {
    title: "Hall of Fame",
    href: "/hall-of-fame",
    eyebrow: "Demo leaderboard",
    copy: "Browse fictional awards, biggest round trips, and the leaderboard language that keeps entertainment metrics separate from tax facts.",
    icon: Trophy
  },
  {
    title: "Awards",
    href: "/awards",
    eyebrow: "Plaque layer",
    copy: "Preview monthly trophies, annual crowns, physical plaque language, and future headstone eligibility rules.",
    icon: Trophy
  },
  {
    title: "Bagholders",
    href: "/bagholders",
    eyebrow: "Profile layer",
    copy: "Meet fictional participant profiles, sample badges, burial histories, and the future SBT-style identity concept.",
    icon: UsersRound
  },
  {
    title: "Bury a Coin",
    href: "/bury-a-coin",
    eyebrow: "Coming soon flow",
    copy: "Preview the future user journey for wallet proof, official receiving wallets, memorial pages, and certificates.",
    icon: BellRing
  },
  {
    title: "Wallet Plan",
    href: "/wallet-policy",
    eyebrow: "Pre-launch policy",
    copy: "See the recommended manual-review-first approach before any official receiving wallets are published.",
    icon: BadgeCheck
  },
  {
    title: "Beta Request",
    href: "/beta-request",
    eyebrow: "Intake preview",
    copy: "Preview the future manual beta request flow for early burials, wallet proof choices, and display consent.",
    icon: ClipboardList
  },
  {
    title: "Sample Memorial",
    href: "/memorial/sample",
    eyebrow: "Shareable artifact",
    copy: "See what a burial can become: a public record, eulogy, confidence labels, timeline, and certificate preview.",
    icon: Ghost
  },
  {
    title: "Headstones",
    href: "/headstones",
    eyebrow: "Collectibles preview",
    copy: "Explore randomized pixel headstone traits, rarity tiers, provenance, and the SBT-versus-NFT split.",
    icon: Flame
  },
  {
    title: "Certificates",
    href: "/certificates",
    eyebrow: "Share layer",
    copy: "Preview printable burial certificates, QR-linked memorials, and future on-chain certificate options.",
    icon: BadgeCheck
  },
  {
    title: "Livestream",
    href: "/livestream",
    eyebrow: "Media layer",
    copy: "See how the future always-on YouTube/overlay experience can run with sample scenes and burial alerts.",
    icon: Radio
  },
  {
    title: "Stream Overlay",
    href: "/overlay",
    eyebrow: "OBS preview",
    copy: "Preview the sample browser-source composition for burial alerts, ticker text, leaderboard rows, and stream safety labels.",
    icon: TvMinimalPlay
  },
  {
    title: "Methodology",
    href: "/methodology",
    eyebrow: "Metric rules",
    copy: "Separate peak observed value, burial value, round trip, documentation status, and tax treatment before real data arrives.",
    icon: ClipboardList
  },
  {
    title: "Launch Checklist",
    href: "/launch-checklist",
    eyebrow: "Readiness map",
    copy: "See what can launch now, what must stay closed, and which gates unlock beta requests, wallets, plaques, and collectibles.",
    icon: ClipboardList
  },
  {
    title: "FAQ",
    href: "/faq",
    eyebrow: "Visitor guidance",
    copy: "Answer the obvious safety, wallet, tax-positioning, and pre-launch questions before strangers ask them.",
    icon: BadgeCheck
  },
  {
    title: "About & Safety",
    href: "/about",
    eyebrow: "Trust layer",
    copy: "Read the mission, launch status, wallet safety rules, and the bright-line disclaimers before any real burial flow exists.",
    icon: BadgeCheck
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
          <SectionIntro
            eyebrow="Explore the cemetery"
            title="A tiny product, not just a landing page"
            copy="The first version now has a demo dashboard, leaderboard, burial flow preview, and memorial artifact so visitors can understand the whole loop."
          />

          <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {exploreCards.map((card) => {
              const Icon = card.icon;

              return (
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
                  <Icon className="text-acid-400" size={24} aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-6 text-bone-500">{card.copy}</p>
                <p className="mt-5 font-mono text-xs uppercase text-acid-400 group-hover:text-bone-100">
                  Open page →
                </p>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="burials" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Sample data"
            title="Recent burials from the demo cemetery"
            copy="These are fictional sample entries used to shape the product before wallets and verification systems are connected."
          />

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
                  href={burial.href}
                  className="mt-5 inline-flex font-mono text-xs uppercase text-acid-400 hover:text-bone-100"
                >
                  Open coin profile
                </Link>
                <Link
                  href={burial.href}
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  Open coin profile →
                </Link>
                <Link
                  href={burial.href}
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
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
              A staged path from concept to cemetery engine
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-bone-500">
              The project is deliberately moving from public presence to controlled beta, then
              storage, wallet watchers, memorial automation, media, and collectibles.
            </p>
            <Link
              href="/roadmap"
              className="mt-5 inline-flex font-mono text-xs uppercase text-acid-400 hover:text-bone-100"
            >
              Open full roadmap →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roadmapPhases.slice(0, 6).map((item, index) => (
              <Link key={item.title} href={item.href} className="terminal-border p-5 transition hover:border-acid-400/50">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-bone-500">
                    {item.phase}
                  </span>
                  {index % 2 === 0 ? (
                    <Coins className="text-acid-400" size={18} aria-hidden="true" />
                  ) : (
                    <Ghost className="text-violet-400" size={18} aria-hidden="true" />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-bone-100">{item.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase text-acid-400">{item.status}</p>
                <p className="mt-3 text-sm leading-6 text-bone-500">
                  {roadmapStatusCopy[item.status]}
                </p>
              </Link>
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

      <DisclaimerFooter id="disclaimer" variant="home" mode="full" />
    </main>
  );
}
