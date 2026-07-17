import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  ClipboardCheck,
  ClipboardList,
  FileWarning,
  Ghost,
  Hourglass,
  Mail,
  ShieldCheck,
  Skull,
  Sparkles,
  Trophy,
  XCircle
} from "lucide-react";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { SiteNav } from "../components/SiteNav";
import { TerminalStatusPanel } from "../components/TerminalStatusPanel";

export const metadata: Metadata = {
  title: "Review Process | Crypto Graveyard",
  description:
    "A public blueprint for Crypto Graveyard's future manual beta review queue, request statuses, and safety checks."
};

const statusFlow = [
  {
    status: "Received",
    meaning: "The request exists, but no burial instructions have been sent.",
    icon: ClipboardList,
    accent: "text-acid-400"
  },
  {
    status: "Needs Info",
    meaning: "The request is missing token details, wallet proof preference, contact info, or display consent.",
    icon: Hourglass,
    accent: "text-violet-400"
  },
  {
    status: "Approved for Instructions",
    meaning: "The request passed manual review and can receive controlled beta burial instructions.",
    icon: BadgeCheck,
    accent: "text-acid-400"
  },
  {
    status: "Awaiting Transfer",
    meaning: "The participant has instructions, but the burial transaction has not been confirmed yet.",
    icon: BellRing,
    accent: "text-bone-100"
  },
  {
    status: "Memorial Drafting",
    meaning: "The transfer is confirmed and the memorial record, confidence labels, and eulogy are being prepared.",
    icon: Ghost,
    accent: "text-violet-400"
  },
  {
    status: "Published",
    meaning: "The memorial page is live and eligible for the relevant demo or beta leaderboards.",
    icon: Trophy,
    accent: "text-acid-400"
  },
  {
    status: "Declined",
    meaning: "The request is unsupported, unsafe, unverifiable, spammy, or too confusing to process.",
    icon: XCircle,
    accent: "text-blood-500"
  }
];

const reviewChecks = [
  "Token contract or mint address is present and matches the stated chain.",
  "User selected a safe wallet-control proof method.",
  "No private keys, seed phrases, passwords, or exchange logins were submitted.",
  "Display consent is clear before any wallet or transaction details appear publicly.",
  "The request avoids tax-loss guarantees, charitable-donation claims, and investment language.",
  "Large-value claims are labeled as unverified unless supporting documentation is reviewed.",
  "Unsupported chains or suspicious token contracts are paused before any instructions are sent."
];

const sampleQueue = [
  {
    id: "CG-BETA-0041",
    alias: "MoonBagMike",
    token: "MoonRocket Inu",
    chain: "Base",
    status: "Needs Info",
    note: "Missing wallet proof preference"
  },
  {
    id: "CG-BETA-0042",
    alias: "VaultWizard",
    token: "Yield Phantom",
    chain: "Polygon",
    status: "Approved",
    note: "Ready for controlled instructions"
  },
  {
    id: "CG-BETA-0043",
    alias: "RugHistorian",
    token: "SafeMars Classic",
    chain: "Ethereum",
    status: "Review",
    note: "High notional claim needs confidence label"
  },
  {
    id: "CG-BETA-0044",
    alias: "DustGoblin",
    token: "Unknown Reflection Token",
    chain: "BNB Chain",
    status: "Paused",
    note: "Unsupported chain in early beta"
  }
];

const requestRecord = [
  "Request ID",
  "Pseudonym",
  "Contact method",
  "Chain and token contract",
  "Stated quantity",
  "Sending wallet address",
  "Proof method",
  "Display consent flags",
  "Internal review notes",
  "Status history",
  "Reviewer",
  "Timestamps"
];

const userMessages = [
  {
    title: "Request received",
    copy: "We received your beta request. Do not send tokens yet. Crypto Graveyard will only provide instructions after manual review."
  },
  {
    title: "Need more information",
    copy: "We need one more detail before review can continue. Never send seed phrases, private keys, passwords, or recovery words."
  },
  {
    title: "Approved for instructions",
    copy: "Your request is approved for a controlled beta burial. Follow only the instructions shown on CryptoGraveyard.io."
  },
  {
    title: "Memorial ready",
    copy: "Your burial record is ready for review. Confirm the display choices before the public memorial page goes live."
  },
  {
    title: "Declined or paused",
    copy: "This request cannot be processed in the current beta because the chain, token, or claim is unsupported or unclear."
  }
];

export default function ReviewProcessPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="graveyard-grid pointer-events-none fixed inset-0 opacity-35" />

      <SiteNav current="beta" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 border border-acid-400/25 bg-acid-400/10 px-3 py-2 font-mono text-xs uppercase text-acid-400">
            <ClipboardCheck size={14} aria-hidden="true" />
            Beta review blueprint
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-bone-100 sm:text-7xl">
            Review Process
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-acid-400 sm:text-3xl">
            No burial instructions until the request survives the gatekeeper.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bone-200/80 sm:text-lg">
            This page defines the future manual review queue: statuses, safety checks, admin notes,
            and user-facing messages. It keeps the beta request flow understandable before any
            database, email, or real wallet instructions go live.
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
              href="/wallet-policy"
              className="inline-flex items-center justify-center gap-2 border border-bone-200/25 bg-grave-800 px-5 py-3 font-mono text-sm font-semibold uppercase text-bone-100 transition hover:border-acid-400 hover:text-acid-400"
            >
              <ShieldCheck size={18} aria-hidden="true" />
              Wallet plan
            </Link>
          </div>
        </div>

        <TerminalStatusPanel
          title="Review terminal"
          status="planned"
          lines={[
            "request.storage = planned",
            "admin.queue = mockup",
            "auto_wallet_instructions = false",
            "reviewer.required = true"
          ]}
          warningLabel="Safety default"
        >
          Every new request starts closed. The cemetery does not hand out shovels automatically.
        </TerminalStatusPanel>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Status model</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
              Request lifecycle
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-bone-500">
            These are the states the backend should eventually support before any real user can
            complete a beta burial.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {statusFlow.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.status} className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
                <Icon className={item.accent} size={24} aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-bold text-bone-100">{item.status}</h3>
                <p className="mt-3 text-sm leading-6 text-bone-500">{item.meaning}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="terminal-border p-6">
          <ShieldCheck className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Manual review checks
          </h2>
          <div className="mt-6 space-y-3">
            {reviewChecks.map((check) => (
              <div key={check} className="flex gap-3 border border-bone-200/10 bg-black/20 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-acid-400" />
                <p className="text-sm leading-6 text-bone-200/85">{check}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-bone-200/10 bg-grave-900/75 p-6 shadow-card">
          <FileWarning className="text-blood-500" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            Request record shape
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            The real backend should store enough to review and audit requests without collecting
            dangerous secrets or pretending to verify tax outcomes.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {requestRecord.map((field) => (
              <div key={field} className="border border-bone-200/10 bg-black/20 p-3 font-mono text-xs uppercase text-bone-300">
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Admin queue preview</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100 sm:text-5xl">
              What the first review screen might show
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-bone-500">
            Sample rows only. This is the human-in-the-loop layer before wallet instructions,
            watcher automation, and public memorial generation.
          </p>
        </div>

        <div className="space-y-4">
          {sampleQueue.map((row) => (
            <article key={row.id} className="grid gap-4 border border-bone-200/10 bg-grave-900/75 p-5 shadow-card lg:grid-cols-[0.7fr_1fr_0.55fr_1fr]">
              <div>
                <p className="font-mono text-[11px] uppercase text-bone-500">Request</p>
                <p className="mt-1 font-mono text-sm text-acid-400">{row.id}</p>
                <p className="mt-2 font-display text-xl font-bold text-bone-100">{row.alias}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase text-bone-500">Token</p>
                <p className="mt-1 font-display text-xl font-bold text-bone-100">{row.token}</p>
                <p className="mt-2 font-mono text-xs uppercase text-bone-500">{row.chain}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase text-bone-500">Status</p>
                <p className="mt-1 inline-flex border border-acid-400/30 bg-acid-400/10 px-2 py-1 font-mono text-xs uppercase text-acid-400">
                  {row.status}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase text-bone-500">Reviewer note</p>
                <p className="mt-1 text-sm leading-6 text-bone-500">{row.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-border p-6">
          <Mail className="text-acid-400" size={24} aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold text-bone-100">
            User message templates
          </h2>
          <p className="mt-3 text-sm leading-6 text-bone-500">
            Status changes should be boringly clear. The fun belongs in the memorial, not in the
            operational instructions.
          </p>
        </div>

        <div className="grid gap-4">
          {userMessages.map((message) => (
            <article key={message.title} className="border border-bone-200/10 bg-grave-900/75 p-5 shadow-card">
              <p className="font-mono text-xs uppercase text-acid-400">{message.title}</p>
              <p className="mt-3 text-sm leading-6 text-bone-200/85">{message.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-10 max-w-7xl border border-acid-400/20 bg-acid-400/10 p-6 shadow-card">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase text-acid-400">Next technical milestone</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-bone-100">
              Turn the preview form into a stored request only after the review model is approved.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-bone-500">
              The next build can add a database-backed request model, admin review surface, and
              email/status notifications. Until then, this remains a blueprint.
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
              href="/memorial/sample"
              className="inline-flex items-center justify-center gap-2 border border-acid-400 bg-acid-400 px-5 py-3 font-mono text-sm font-semibold uppercase text-grave-950 shadow-glow transition hover:bg-bone-100"
            >
              <Skull size={18} aria-hidden="true" />
              Sample memorial
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerFooter variant="review" />
    </main>
  );
}
