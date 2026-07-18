import Link from "next/link";
import {
  BadgeCheck,
  Coins,
  FileText,
  Gem,
  Ghost,
  HelpCircle,
  Radio,
  ShieldCheck,
  Trophy,
  UsersRound
} from "lucide-react";

type PublicRouteKey =
  | "cemetery"
  | "memorial"
  | "hall"
  | "awards"
  | "bagholders"
  | "headstones"
  | "certificates"
  | "livestream"
  | "faq"
  | "about";

const routes: Record<
  PublicRouteKey,
  {
    title: string;
    eyebrow: string;
    copy: string;
    href: string;
    cta: string;
    icon: typeof Coins;
  }
> = {
  cemetery: {
    title: "Coin Cemetery",
    eyebrow: "Catalog",
    copy: "Browse fictional dead coins, causes of death, and sample confidence labels.",
    href: "/cemetery",
    cta: "Open cemetery",
    icon: Coins
  },
  memorial: {
    title: "Sample Memorial",
    eyebrow: "Burial record",
    copy: "See the full sample artifact: eulogy, timeline, values, certificate hooks, and labels.",
    href: "/memorial/sample",
    cta: "Open memorial",
    icon: Ghost
  },
  hall: {
    title: "Hall of Fame",
    eyebrow: "Leaderboard",
    copy: "Compare fictional round trips, legendary bags, and community recognition metrics.",
    href: "/hall-of-fame",
    cta: "View rankings",
    icon: Trophy
  },
  awards: {
    title: "Awards & Plaques",
    eyebrow: "Recognition",
    copy: "Preview monthly awards, annual crowns, plaque language, and award guardrails.",
    href: "/awards",
    cta: "View awards",
    icon: BadgeCheck
  },
  bagholders: {
    title: "Bagholders",
    eyebrow: "Profiles",
    copy: "Meet fictional participants, badges, masked-wallet defaults, and future profile logic.",
    href: "/bagholders",
    cta: "View profiles",
    icon: UsersRound
  },
  headstones: {
    title: "Headstones",
    eyebrow: "Collectibles",
    copy: "Preview pixel trait language, rarity tiers, and the collectible art layer.",
    href: "/headstones",
    cta: "View headstones",
    icon: Gem
  },
  certificates: {
    title: "Certificates",
    eyebrow: "Share layer",
    copy: "Preview printable certificates, QR-linked memorials, and future on-chain references.",
    href: "/certificates",
    cta: "View certificates",
    icon: FileText
  },
  livestream: {
    title: "Livestream",
    eyebrow: "Media",
    copy: "See the future automated stream loop, burial alerts, and always-on cemetery programming.",
    href: "/livestream",
    cta: "View stream concept",
    icon: Radio
  },
  faq: {
    title: "FAQ",
    eyebrow: "Safety",
    copy: "Answer wallet, tax, privacy, collectibles, and pre-launch questions before they get weird.",
    href: "/faq",
    cta: "Read FAQ",
    icon: HelpCircle
  },
  about: {
    title: "About & Safety",
    eyebrow: "Trust",
    copy: "Read the mission, what is closed, and the bright-line promises the project should keep.",
    href: "/about",
    cta: "Read safety",
    icon: ShieldCheck
  }
};

const recommendations: Record<PublicRouteKey, PublicRouteKey[]> = {
  cemetery: ["memorial", "hall", "bagholders"],
  memorial: ["certificates", "awards", "headstones"],
  hall: ["awards", "bagholders", "certificates"],
  awards: ["hall", "headstones", "certificates"],
  bagholders: ["hall", "awards", "headstones"],
  headstones: ["awards", "certificates", "faq"],
  certificates: ["memorial", "headstones", "faq"],
  livestream: ["cemetery", "hall", "about"],
  faq: ["about", "cemetery", "certificates"],
  about: ["faq", "cemetery", "livestream"]
};

export function KeepExploring({
  current,
  title = "Keep exploring the graveyard",
  copy = "The public prototype works best as a loop: start with a coin, open the memorial, then follow the artifacts, profiles, awards, and media layers."
}: {
  current: PublicRouteKey;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl py-12">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase text-acid-400">Next paths</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-bone-500">{copy}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {recommendations[current].map((key) => {
          const route = routes[key];
          const Icon = route.icon;

          return (
            <Link
              key={route.href}
              href={route.href}
              className="gothic-card group p-5 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-acid-400">{route.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-bone-100">
                    {route.title}
                  </h3>
                </div>
                <Icon className="text-acid-400" size={22} aria-hidden="true" />
              </div>
              <p className="mt-4 min-h-16 text-sm leading-6 text-bone-500">{route.copy}</p>
              <p className="mt-5 font-mono text-xs uppercase text-acid-400 group-hover:text-bone-100">
                {route.cta} →
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
