export type RoadmapStatus = "Live" | "Prototype" | "Planned" | "Later";

export const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Public Presence",
    status: "Live",
    summary:
      "Make Crypto Graveyard real enough to share: domain, core pages, safety language, and a coherent product story.",
    shipped: [
      "Production domain connected",
      "Homepage dashboard with sample data",
      "Sample cemetery catalog",
      "Hall of Fame demo",
      "Sample memorial page",
      "FAQ and visitor guidance",
      "About and safety page"
    ],
    next: ["Social preview artwork", "Logo polish", "Public launch checklist"],
    href: "/"
  },
  {
    phase: "Phase 2",
    title: "Controlled Beta Gate",
    status: "Prototype",
    summary:
      "Define how early burials should be requested, reviewed, approved, and safely displayed before any public wallets are published.",
    shipped: [
      "Wallet plan page",
      "Manual beta request preview",
      "Review process blueprint",
      "Consent and safety language",
      "No-secrets guardrails"
    ],
    next: ["Request storage model", "Admin review screen", "Status/email templates"],
    href: "/beta-request"
  },
  {
    phase: "Phase 3",
    title: "Real Request Backend",
    status: "Planned",
    summary:
      "Turn the preview request flow into a real, private review queue without opening public token transfers yet.",
    shipped: [],
    next: [
      "Database-backed beta requests",
      "Admin review statuses",
      "Private reviewer notes",
      "User confirmation messages",
      "Abuse/spam handling"
    ],
    href: "/review-process"
  },
  {
    phase: "Phase 4",
    title: "Wallet Watchers",
    status: "Planned",
    summary:
      "Monitor approved receiving wallets and reconcile real token transfers into memorial records.",
    shipped: [],
    next: [
      "Pick first supported chain",
      "Create official receiving wallet policy",
      "Watch transfer events",
      "Store transaction hashes",
      "Handle unsupported tokens"
    ],
    href: "/wallet-policy"
  },
  {
    phase: "Phase 5",
    title: "Memorial Engine",
    status: "Planned",
    summary:
      "Generate real memorial pages, eulogies, confidence labels, timelines, and certificates from reviewed burial records.",
    shipped: ["Sample memorial prototype", "Certificate preview page"],
    next: [
      "Memorial database schema",
      "AI eulogy workflow",
      "Certificate generator",
      "Value-confidence labels",
      "Public sharing controls"
    ],
    href: "/memorial/sample"
  },
  {
    phase: "Phase 6",
    title: "Live Media Layer",
    status: "Later",
    summary:
      "Turn burials into stream-ready moments: live feed, OBS overlay, animations, and YouTube companion content.",
    shipped: [],
    next: [
      "Live burial feed",
      "OBS overlay route",
      "Funeral animation states",
      "YouTube embed/automation",
      "Clip/highlight workflow"
    ],
    href: "/livestream"
  },
  {
    phase: "Phase 7",
    title: "Collectibles",
    status: "Later",
    summary:
      "Add non-transferable memorial profiles and optional tradable randomized headstone NFTs once the core burial loop works.",
    shipped: ["Headstone collectibles preview"],
    next: [
      "SBT profile design",
      "Headstone trait model",
      "Metadata storage plan",
      "Minting chain selection",
      "Rarity and provenance rules"
    ],
    href: "/headstones"
  }
] as const;

export const roadmapStatusCopy: Record<RoadmapStatus, string> = {
  Live: "Already deployed on the public site.",
  Prototype: "Designed as a non-live product preview.",
  Planned: "Defined enough to build next, but not implemented.",
  Later: "Useful direction, intentionally behind the core burial loop."
};
