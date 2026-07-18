import {
  BadgeCheck,
  Coins,
  Flame,
  Ghost,
  Radio,
  Trophy,
  TvMinimalPlay,
  UsersRound
} from "lucide-react";
import Link from "next/link";
import { DisclaimerFooter } from "./components/DisclaimerFooter";
import { GothicScene } from "./components/GothicScene";
import { PixelHeadstone } from "./components/PixelHeadstone";
import { PrototypeFlow } from "./components/PrototypeFlow";
import { SectionIntro } from "./components/SectionIntro";
import { SiteNav } from "./components/SiteNav";

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
  { label: "Real wallets", value: "Closed", note: "Pre-MVP teaser" }
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
    copy: "See how the future always-on YouTube experience can run with sample scenes and burial alerts.",
    icon: Radio
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
              Pre-MVP teaser online
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl lg:text-8xl">
              Crypto Graveyard
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
              Every dead coin deserves a proper funeral.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
              A darkly funny memorial dashboard for abandoned bags, cursed tickers, pixel
              headstones, and the future hall of legendary losses. Real wallets are not open yet.
              No tax promises. Just a tasteful place to bury the chart.
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
                href="/cemetery"
              >
                <Coins size={18} aria-hidden="true" />
                Explore cemetery
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <GothicScene
              title="Founding Cemetery"
              subtitle="SBT-style overview / sample graveyard"
            />

            <div className="terminal-border pixel-corners p-4 shadow-card sm:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
                <span>Live cemetery console</span>
                <span className="text-acid-400">sample feed</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {statCards.map((stat) => (
                  <div key={stat.label} className="border border-bone-200/10 bg-grave-950/50 p-4">
                    <p className="font-mono text-[11px] uppercase text-bone-500">{stat.label}</p>
                    <p className="mt-2 font-display text-3xl font-bold text-bone-100">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-acid-400/80">{stat.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 border border-bone-200/10 bg-black/25 p-4 font-mono text-xs leading-6 text-bone-200/80">
                <p>
                  <span className="text-acid-400">&gt;</span> visual.theme = gothic_pixel
                </p>
                <p>
                  <span className="text-acid-400">&gt;</span> wallets.public = false
                </p>
                <p>
                  <span className="text-acid-400">&gt;</span> tax.loss.verified = false
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrototypeFlow className="border-y border-bone-200/10 bg-black/10" />

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Explore the cemetery"
            title="A teaser that feels like a product"
            copy="The public site now focuses on the world visitors should see: cemetery entries, leaderboards, profiles, awards, memorial artifacts, collectibles, media, FAQ, and safety."
          />

          <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {exploreCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="gothic-card group p-6 transition"
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
                className="gothic-card p-5"
              >
                <PixelHeadstone
                  accent={burial.color}
                  label={burial.symbol}
                  shape={burial.symbol === "SMC" ? "Broken angel" : "Tablet"}
                  size="sm"
                />
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-bone-100">
                      {burial.coin}
                    </h3>
                    <p className="font-mono text-xs uppercase text-bone-500">{burial.symbol}</p>
                  </div>
                  <span className="border border-blood-500/35 bg-blood-500/12 px-2 py-1 font-mono text-[11px] uppercase text-blood-500">
                    {burial.status}
                  </span>
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-bone-200/75">
                  {burial.inscription}
                </p>
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
                  Open coin profile →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DisclaimerFooter id="disclaimer" variant="home" mode="full" />
    </main>
  );
}
