import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  ClipboardCheck,
  ClipboardList,
  FileWarning,
  MailWarning,
  ShieldCheck,
  Skull,
  Sparkles,
  Trophy
} from "lucide-react";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Beta Request | Crypto Graveyard",
  description:
    "A preview of the manual beta request flow for future Crypto Graveyard burials."
};

const intakeFields = [
  {
    id: "alias",
    label: "Display name or pseudonym",
    placeholder: "MoonBagMike"
  },
  {
    id: "contact",
    label: "Contact method",
    placeholder: "Email, Discord, or X handle"
  },
  {
    id: "chain",
    label: "Chain",
    placeholder: "Base, Polygon, Ethereum, Solana..."
  },
  {
    id: "contract",
    label: "Token contract or mint address",
    placeholder: "0x... or token mint"
  },
  {
    id: "ticker",
    label: "Token name / ticker",
    placeholder: "MoonRocket Inu / MRI"
  },
  {
    id: "quantity",
    label: "Approximate quantity to bury",
    placeholder: "12,487,392"
  },
  {
    id: "wallet",
    label: "Sending wallet address",
    placeholder: "Public address only, never private keys"
  },
  {
    id: "story",
    label: "The epitaph",
    placeholder: "Promised orbit. Found basement."
  }
];

const proofOptions = [
  "Signed wallet message",
  "Tiny verification transaction",
  "Manual transaction-hash review",
  "Documentation review for large claims"
];

const consentItems = [
  "I understand no official wallet transfer happens until Crypto Graveyard approves the beta request.",
  "I will never share seed phrases, private keys, passwords, or recovery words.",
  "I understand public memorials may show pseudonym, token, chain, quantity, masked wallet, and transaction details.",
  "I understand Crypto Graveyard does not verify tax losses, charitable deductions, cost basis, or token value."
];

const reviewSteps = [
  {
    title: "Request received",
    copy: "The future system records token, chain, pseudonym, and consent choices without asking for secrets."
  },
  {
    title: "Safety review",
    copy: "Unsupported chains, suspicious token contracts, impersonation attempts, and confusing tax-language claims get filtered before any transfer."
  },
  {
    title: "Burial instructions",
    copy: "Only approved beta testers receive the exact official instructions for that controlled burial."
  },
  {
    title: "Memorial draft",
    copy: "After the transfer is confirmed, the site can generate a memorial draft with confidence labels and display choices."
  }
];

const neverAsk = [
  "Seed phrase",
  "Private key",
  "Wallet password",
  "Remote access",
  "Exchange login",
  "Guaranteed tax result"
];

export default function BetaRequestPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="beta" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <ClipboardList size={14} aria-hidden="true" />
            Manual beta preview
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Beta Request
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            Apply to bury a coin before the public cemetery gates open.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This is a product preview for the future manual beta flow. It shows what Crypto
            Graveyard may ask for before approving controlled test burials. The form is not live,
            does not submit data, and does not provide wallet addresses.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/review-process"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <ClipboardCheck size={18} aria-hidden="true" />
              Review process
            </Link>
            <Link
              href="/memorial/sample"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <Skull size={18} aria-hidden="true" />
              Sample memorial
            </Link>
          </div>
        </div>

        <div className="terminal-border pixel-corners p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between border-b border-acid-400/18 pb-3 font-mono text-xs uppercase text-bone-500">
            <span>Request terminal</span>
            <span className="text-acid-400">preview only</span>
          </div>
          <div className="space-y-3 font-mono text-xs leading-6 text-bone-200/80">
            <p>
              <span className="text-acid-400">&gt;</span> form.submissions = disabled
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> wallets.generated = false
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> beta.review_required = true
            </p>
            <p>
              <span className="text-acid-400">&gt;</span> secrets.requested = never
            </p>
          </div>
          <div className="mt-5 border border-blood-500/25 bg-blood-500/10 p-4 text-sm leading-6 text-bone-200/80">
            <strong className="font-mono text-xs uppercase text-blood-500">Not live:</strong>{" "}
            this page is a mockup. Nobody should send tokens until official instructions are
            published on CryptoGraveyard.io.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.02fr_0.98fr]">
        <form className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card" aria-label="Preview beta request form">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase text-acid-400">Future intake form</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
                Request packet
              </h2>
              <p className="mt-3 text-sm leading-6 text-bone-500">
                These fields shape the first review queue. They are disabled until the project has
                storage, moderation, and official beta rules.
              </p>
            </div>
            <MailWarning className="text-acid-400" size={28} aria-hidden="true" />
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {intakeFields.map((field) => (
              <label key={field.id} className="block">
                <span className="font-mono text-xs uppercase text-bone-500">{field.label}</span>
                {field.id === "story" ? (
                  <textarea
                    id={field.id}
                    disabled
                    placeholder={field.placeholder}
                    className="mt-2 min-h-28 w-full resize-none border border-bone-200/10 bg-black/25 p-3 text-sm text-bone-100 placeholder:text-bone-500/70 disabled:cursor-not-allowed disabled:opacity-75"
                  />
                ) : (
                  <input
                    id={field.id}
                    disabled
                    placeholder={field.placeholder}
                    className="mt-2 w-full border border-bone-200/10 bg-black/25 p-3 text-sm text-bone-100 placeholder:text-bone-500/70 disabled:cursor-not-allowed disabled:opacity-75"
                  />
                )}
              </label>
            ))}
          </div>

          <div className="mt-6 border border-acid-400/20 bg-acid-400/10 p-4">
            <p className="font-mono text-xs uppercase text-acid-400">Submission disabled</p>
            <p className="mt-2 text-sm leading-6 text-bone-500">
              When this becomes real, the submit button should create a review record instead of
              immediately showing any wallet address.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 inline-flex cursor-not-allowed items-center justify-center gap-2 border border-bone-200/20 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-500"
            >
              <BellRing size={18} aria-hidden="true" />
              Requests not open yet
            </button>
          </div>
        </form>

        <div className="space-y-5">
          <div className="terminal-border p-6">
            <ShieldCheck className="text-acid-400" size={24} aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
              Wallet proof options
            </h2>
            <p className="mt-3 text-sm leading-6 text-bone-500">
              The beta request can let users choose how they want to prove control without
              exposing secrets.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proofOptions.map((option) => (
                <div key={option} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-300">
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-blood-500/25 bg-blood-500/10 p-6 shadow-card">
            <FileWarning className="text-blood-500" size={24} aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
              Never ask for
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {neverAsk.map((item) => (
                <div key={item} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <Sparkles className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Consent checklist
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            These are the plain-language confirmations a real beta form should require before
            anyone receives burial instructions.
          </p>
          <div className="mt-6 space-y-3">
            {consentItems.map((item) => (
              <div key={item} className="flex gap-3 border border-bone-200/10 bg-black/20 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-acid-400" />
                <p className="text-sm leading-6 text-bone-200/85">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <BadgeCheck className="text-violet-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Review queue flow
          </h2>
          <div className="mt-6 space-y-4">
            {reviewSteps.map((step, index) => (
              <div key={step.title} className="grid gap-3 border-l border-acid-400/30 pl-4 sm:grid-cols-[0.18fr_0.82fr]">
                <p className="font-mono text-xs uppercase text-acid-400">Step {index + 1}</p>
                <div>
                  <h3 className="font-display text-xl font-bold text-bone-100">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone-500">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Next backend milestone</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              The real version needs storage, moderation, and email before submissions open.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              Once the intake fields are approved, the next technical step is deciding where beta
              requests live: database records, email notifications, admin review, and status pages.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/review-process"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ClipboardCheck size={18} aria-hidden="true" />
              Review process
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
          This beta request page is a non-submitting prototype. Crypto Graveyard is not accepting
          real transfers through this page and does not request private keys, seed phrases, wallet
          recovery words, exchange credentials, or tax-loss representations.
        </p>
      </footer>
    </main>
  );
}
