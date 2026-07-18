export const cemeteryStats = [
  { label: "Sample coins cataloged", value: "12", note: "Fictional entries" },
  { label: "Sample peak notional", value: "$3.4M", note: "Entertainment metric" },
  { label: "Chains represented", value: "6", note: "Demo coverage" },
  { label: "Open gates", value: "0", note: "No live wallets yet" }
] as const;

export const cemeteryCoins = [
  {
    coin: "MoonRocket Inu",
    symbol: "MRI",
    chain: "Ethereum",
    status: "Buried",
    cause: "Roadmap Silence",
    peak: "$412,884",
    burialValue: "$3.17",
    roundTrip: "$412,880.83",
    age: "4y 8m",
    confidence: "Demo only",
    epitaph: "Promised orbit. Found basement."
  },
  {
    coin: "Yield Phantom",
    symbol: "YPH",
    chain: "Polygon",
    status: "Haunting",
    cause: "Impossible APY",
    peak: "$219,050",
    burialValue: "$12.09",
    roundTrip: "$219,037.91",
    age: "3y 2m",
    confidence: "Demo only",
    epitaph: "APY was the plot twist."
  },
  {
    coin: "SafeMars Classic",
    symbol: "SMC",
    chain: "BNB Chain",
    status: "Forgotten",
    cause: "Founder Vanishing",
    peak: "$88,210",
    burialValue: "$0.42",
    roundTrip: "$88,209.58",
    age: "5y 1m",
    confidence: "Demo only",
    epitaph: "Still waiting on the roadmap."
  },
  {
    coin: "ApeNebula DAO",
    symbol: "AND",
    chain: "Base",
    status: "Buried",
    cause: "Governance Collapse",
    peak: "$64,500",
    burialValue: "$0.09",
    roundTrip: "$64,499.91",
    age: "2y 6m",
    confidence: "Demo only",
    epitaph: "Governance arrived after the funeral."
  },
  {
    coin: "Diamond Pawz",
    symbol: "PAWZ",
    chain: "Solana",
    status: "Dust",
    cause: "Meme Fatigue",
    peak: "$31,404",
    burialValue: "$0.01",
    roundTrip: "$31,403.99",
    age: "1y 10m",
    confidence: "Demo only",
    epitaph: "The whitepaper was mostly vibes."
  },
  {
    coin: "MetaCoffin",
    symbol: "COFFIN",
    chain: "Ethereum",
    status: "Buried",
    cause: "Metaverse Nobody Entered",
    peak: "$18,777",
    burialValue: "$1.08",
    roundTrip: "$18,775.92",
    age: "4y 0m",
    confidence: "Demo only",
    epitaph: "A metaverse no one logged into."
  },
  {
    coin: "SquidRocket Finance",
    symbol: "SQRF",
    chain: "Arbitrum",
    status: "Cursed",
    cause: "Withdrawal Surprise",
    peak: "$722,910",
    burialValue: "$6.66",
    roundTrip: "$722,903.34",
    age: "3y 9m",
    confidence: "Demo only",
    epitaph: "The exit door was decorative."
  },
  {
    coin: "FrogYield Max",
    symbol: "FYMAX",
    chain: "Base",
    status: "Haunting",
    cause: "Token Inflation",
    peak: "$145,330",
    burialValue: "$18.40",
    roundTrip: "$145,311.60",
    age: "2y 1m",
    confidence: "Demo only",
    epitaph: "There were more tokens every time someone blinked."
  },
  {
    coin: "LaserLlama",
    symbol: "LLAMA",
    chain: "Solana",
    status: "Forgotten",
    cause: "Mascot Budget Exhaustion",
    peak: "$52,118",
    burialValue: "$0.73",
    roundTrip: "$52,117.27",
    age: "1y 4m",
    confidence: "Demo only",
    epitaph: "Great logo. Grim treasury."
  },
  {
    coin: "Treasury Goblin",
    symbol: "GOB",
    chain: "Polygon",
    status: "Cursed",
    cause: "Exploit",
    peak: "$961,002",
    burialValue: "$41.20",
    roundTrip: "$960,960.80",
    age: "2y 11m",
    confidence: "Demo only",
    epitaph: "The audit was a vibes-based document."
  },
  {
    coin: "Oracle Hamster",
    symbol: "HAM",
    chain: "Ethereum",
    status: "Dust",
    cause: "Bad Data Feed",
    peak: "$114,009",
    burialValue: "$2.03",
    roundTrip: "$114,006.97",
    age: "3y 5m",
    confidence: "Demo only",
    epitaph: "It trusted the wrong hamster."
  },
  {
    coin: "DragonCandle",
    symbol: "DGC",
    chain: "BNB Chain",
    status: "Buried",
    cause: "Liquidity Drain",
    peak: "$612,450",
    burialValue: "$9.99",
    roundTrip: "$612,440.01",
    age: "4y 3m",
    confidence: "Demo only",
    epitaph: "The candle was technically a flare."
  }
] as const;

export type CemeteryCoin = (typeof cemeteryCoins)[number];

export function getCoinSlug(coin: Pick<CemeteryCoin, "coin">) {
  return coin.coin
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCoinBySlug(slug: string) {
  return cemeteryCoins.find((coin) => getCoinSlug(coin) === slug);
}

export const coinProfileTimeline = [
  {
    label: "Launch hype",
    copy: "The sample project enters the world with a roadmap, mascot, and confidence levels unsuitable for daylight."
  },
  {
    label: "Peak observed value",
    copy: "The fictional wallet reaches its maximum notional value during the observed sample holding period."
  },
  {
    label: "Cause of death",
    copy: "The project suffers the condition listed in the cemetery catalog: silence, exploit, inflation, fatigue, or other chart disease."
  },
  {
    label: "Burial record",
    copy: "The future real version would link the burial transaction, confidence labels, certificate, and memorial eulogy."
  }
] as const;

export const coinConfidenceLabels = [
  {
    label: "Token identity",
    status: "Sample",
    copy: "Future records should verify the token contract or mint address against the selected chain."
  },
  {
    label: "Wallet control",
    status: "Future proof",
    copy: "Real burials should require signed-message proof or a small verification transaction."
  },
  {
    label: "Peak value",
    status: "Estimated",
    copy: "Peak notional value should remain separate from estimated liquidation value and documented acquisition cost."
  },
  {
    label: "Tax treatment",
    status: "Not determined",
    copy: "Crypto Graveyard should never label a profile as a verified deductible tax loss."
  }
] as const;

export const bagholderProfiles = [
  {
    alias: "MoonBagMike",
    slug: "moonbagmike",
    rank: "#1",
    title: "Funeral of the Month",
    motto: "Never sold. Barely slept.",
    joined: "Founding sample class",
    totalBurials: "3",
    peakBuried: "$812,442",
    burialValue: "$4.22",
    biggestBurial: "MoonRocket Inu",
    favoriteCause: "Roadmap Silence",
    displayWallet: "0x91A3...72F8",
    profileStatus: "Sample profile",
    bio:
      "MoonBagMike represents the legendary bagholder archetype: optimistic at the top, philosophical at the bottom, and weirdly proud of the receipt.",
    badges: ["Funeral of the Month", "Founder Series", "Biggest Round Trip"],
    burials: [
      ["MoonRocket Inu", "$412,884", "$3.17"],
      ["DragonCandle", "$612,450", "$9.99"],
      ["LaserLlama", "$52,118", "$0.73"]
    ]
  },
  {
    alias: "VaultWizard",
    slug: "vaultwizard",
    rank: "#2",
    title: "Most Diamond Hands",
    motto: "The vault stayed closed. Unfortunately.",
    joined: "Founding sample class",
    totalBurials: "2",
    peakBuried: "$364,380",
    burialValue: "$30.49",
    biggestBurial: "Yield Phantom",
    favoriteCause: "Impossible APY",
    displayWallet: "0xA771...9C20",
    profileStatus: "Sample profile",
    bio:
      "VaultWizard is the cautionary patron saint of locked yields, delayed exits, and yield dashboards that looked better in screenshots.",
    badges: ["King Candidate", "Diamond Hands", "APY Survivor"],
    burials: [
      ["Yield Phantom", "$219,050", "$12.09"],
      ["FrogYield Max", "$145,330", "$18.40"]
    ]
  },
  {
    alias: "RugHistorian",
    slug: "rughistorian",
    rank: "#3",
    title: "Vintage Dust",
    motto: "Every rug deserves footnotes.",
    joined: "Founding sample class",
    totalBurials: "2",
    peakBuried: "$202,219",
    burialValue: "$2.45",
    biggestBurial: "Oracle Hamster",
    favoriteCause: "Founder Vanishing",
    displayWallet: "0xF00D...CAFE",
    profileStatus: "Sample profile",
    bio:
      "RugHistorian keeps meticulous notes on abandoned Discords, vanished founders, and the tiny moments before everyone pretended they were always bearish.",
    badges: ["Oldest Bag", "Vintage Dust", "Receipts Archivist"],
    burials: [
      ["SafeMars Classic", "$88,210", "$0.42"],
      ["Oracle Hamster", "$114,009", "$2.03"]
    ]
  },
  {
    alias: "ChartMortician",
    slug: "chartmortician",
    rank: "#4",
    title: "Token Avalanche",
    motto: "I pronounce this chart deceased.",
    joined: "Sample beta queue",
    totalBurials: "1",
    peakBuried: "$64,500",
    burialValue: "$0.09",
    biggestBurial: "ApeNebula DAO",
    favoriteCause: "Governance Collapse",
    displayWallet: "0xC0FF...1A7E",
    profileStatus: "Sample profile",
    bio:
      "ChartMortician specializes in post-mortems for governance tokens that achieved decentralization mostly by dispersing blame.",
    badges: ["Most Tokens Buried", "DAO Survivor", "Chart Coroner"],
    burials: [["ApeNebula DAO", "$64,500", "$0.09"]]
  },
  {
    alias: "ExitLiquidity",
    slug: "exitliquidity",
    rank: "#5",
    title: "Poet of Pain",
    motto: "Someone had to buy the top.",
    joined: "Sample beta queue",
    totalBurials: "1",
    peakBuried: "$31,404",
    burialValue: "$0.01",
    biggestBurial: "Diamond Pawz",
    favoriteCause: "Meme Fatigue",
    displayWallet: "0xBEEF...0420",
    profileStatus: "Sample profile",
    bio:
      "ExitLiquidity turns catastrophic entries into oddly elegant epitaphs. The losses are fictional; the emotional arc is, regrettably, plausible.",
    badges: ["Best Epitaph", "Meme Casualty", "Liquidity Provider"],
    burials: [["Diamond Pawz", "$31,404", "$0.01"]]
  },
  {
    alias: "NeverSoldActually",
    slug: "neversoldactually",
    rank: "#6",
    title: "Four-Year Hold",
    motto: "The exit was always tomorrow.",
    joined: "Sample beta queue",
    totalBurials: "1",
    peakBuried: "$18,777",
    burialValue: "$1.08",
    biggestBurial: "MetaCoffin",
    favoriteCause: "Metaverse Nobody Entered",
    displayWallet: "0xDEAD...BEEF",
    profileStatus: "Sample profile",
    bio:
      "NeverSoldActually is the patron of unopened portfolio trackers, tax lots in denial, and metaverse land nobody visited.",
    badges: ["Longest Hold", "Four-Year Hold", "Tab Still Open"],
    burials: [["MetaCoffin", "$18,777", "$1.08"]]
  }
] as const;

export type BagholderProfile = (typeof bagholderProfiles)[number];

export function getBagholderBySlug(slug: string) {
  return bagholderProfiles.find((profile) => profile.slug === slug);
}

export const bagholderProfileNotes = [
  {
    label: "Identity",
    copy: "Profiles are pseudonymous by default and should never require legal names for public display."
  },
  {
    label: "SBT fit",
    copy: "The profile is the right place for future non-transferable achievement credit."
  },
  {
    label: "Public proof",
    copy: "Future profiles can link to burials, certificates, confidence labels, and masked wallet evidence."
  },
  {
    label: "Safety line",
    copy: "A profile is community recognition, not tax verification, identity proof, or valuation evidence."
  }
] as const;

export const awardPrograms = [
  {
    slug: "funeral-of-the-month",
    title: "Funeral of the Month",
    cadence: "Monthly",
    status: "Sample winner",
    winner: "MoonBagMike",
    winnerHref: "/bagholders/moonbagmike",
    coin: "MoonRocket Inu",
    coinHref: "/coins/moonrocket-inu",
    headline: "The monthly spotlight for the burial with the best mix of scale, story, and cemetery theater.",
    awardValue: "$412,880.83",
    prize: "Physical plaque concept + Legendary headstone eligibility",
    plaqueTitle: "Funeral of the Month",
    plaqueSubtitle: "July 2026 sample class",
    plaqueLine: "Never sold. Barely slept.",
    plaqueFooter: "May the chart finally rest.",
    accent: "acid",
    criteria: [
      "Strong public story",
      "Clear sample confidence labels",
      "Memorable eulogy potential",
      "High entertainment value without tax claims"
    ],
    fulfillment: [
      "Select finalist from reviewed burial records",
      "Confirm display consent and pseudonym",
      "Publish award page and memorial link",
      "Offer plaque fulfillment only after winner confirms shipping details privately"
    ],
    publicFields: [
      ["Cadence", "Monthly"],
      ["Sample winner", "MoonBagMike"],
      ["Featured coin", "MoonRocket Inu"],
      ["Award metric", "Biggest round trip"],
      ["Prize layer", "Plaque + headstone eligibility"],
      ["Tax status", "Not determined"]
    ]
  },
  {
    slug: "king-of-the-graveyard",
    title: "King of the Graveyard",
    cadence: "Annual",
    status: "Reserved",
    winner: "Pending",
    winnerHref: "/hall-of-fame",
    coin: "To be decided",
    coinHref: "/cemetery",
    headline: "The crown for the most spectacular verified story of the year, once real burials exist.",
    awardValue: "Annual crown",
    prize: "One-of-one plaque concept + Mythic headstone eligibility",
    plaqueTitle: "King of the Graveyard",
    plaqueSubtitle: "Annual crown",
    plaqueLine: "A chart so dead it needed ceremony.",
    plaqueFooter: "Crowned by the cemetery.",
    accent: "violet",
    criteria: [
      "Year-defining burial story",
      "Strong evidence package",
      "Community reaction",
      "No unresolved safety or consent concerns"
    ],
    fulfillment: [
      "Close nominations after the final monthly award",
      "Review finalists against evidence and story criteria",
      "Publish annual award page",
      "Ship one physical plaque if the winner opts in"
    ],
    publicFields: [
      ["Cadence", "Annual"],
      ["Sample winner", "Pending"],
      ["Featured coin", "To be decided"],
      ["Award metric", "Best overall burial"],
      ["Prize layer", "One-of-one plaque + Mythic headstone"],
      ["Tax status", "Not determined"]
    ]
  },
  {
    slug: "most-diamond-hands",
    title: "Most Diamond Hands",
    cadence: "Monthly",
    status: "Sample winner",
    winner: "VaultWizard",
    winnerHref: "/bagholders/vaultwizard",
    coin: "Yield Phantom",
    coinHref: "/coins/yield-phantom",
    headline: "For the participant who held through every obvious exit sign and somehow kept clicking refresh.",
    awardValue: "Still held",
    prize: "Digital badge + Rare headstone eligibility",
    plaqueTitle: "Most Diamond Hands",
    plaqueSubtitle: "Sample endurance award",
    plaqueLine: "The vault stayed closed. Unfortunately.",
    plaqueFooter: "Hands: diamond. Outcome: educational.",
    accent: "blood",
    criteria: [
      "Long observed holding period",
      "Late burial relative to project decline",
      "Good chain-of-custody continuity",
      "Strong comedy-to-tragedy ratio"
    ],
    fulfillment: [
      "Calculate observed holding period",
      "Compare against other eligible burials",
      "Publish badge on bagholder profile",
      "Offer optional collectible headstone when minting exists"
    ],
    publicFields: [
      ["Cadence", "Monthly"],
      ["Sample winner", "VaultWizard"],
      ["Featured coin", "Yield Phantom"],
      ["Award metric", "Observed hold duration"],
      ["Prize layer", "Badge + Rare headstone eligibility"],
      ["Tax status", "Not determined"]
    ]
  },
  {
    slug: "state-funeral",
    title: "State Funeral",
    cadence: "Special event",
    status: "Demo concept",
    winner: "DragonCandle",
    winnerHref: "/coins/dragoncandle",
    coin: "DragonCandle",
    coinHref: "/coins/dragoncandle",
    headline: "A special ceremony for especially dramatic token collapses, exploits, drains, and cultural disasters.",
    awardValue: "$612,440.01",
    prize: "Featured livestream segment + Epic headstone eligibility",
    plaqueTitle: "State Funeral",
    plaqueSubtitle: "Special event ceremony",
    plaqueLine: "The candle was technically a flare.",
    plaqueFooter: "Flags at half-mast. Liquidity at none.",
    accent: "blood",
    criteria: [
      "High-profile cause of death",
      "A strong public explanation",
      "Stream-worthy visual narrative",
      "Clear separation between notional value and realizable value"
    ],
    fulfillment: [
      "Flag candidate during review or community nomination",
      "Prepare a featured obituary segment",
      "Attach confidence labels to the event page",
      "Archive the ceremony on the livestream page"
    ],
    publicFields: [
      ["Cadence", "Special event"],
      ["Sample feature", "DragonCandle"],
      ["Featured coin", "DragonCandle"],
      ["Award metric", "Story impact"],
      ["Prize layer", "Livestream feature + Epic headstone"],
      ["Tax status", "Not determined"]
    ]
  },
  {
    slug: "poet-of-pain",
    title: "Poet of Pain",
    cadence: "Monthly",
    status: "Sample winner",
    winner: "ExitLiquidity",
    winnerHref: "/bagholders/exitliquidity",
    coin: "Diamond Pawz",
    coinHref: "/coins/diamond-pawz",
    headline: "For the best epitaph, obituary line, or tragic one-liner submitted with a burial.",
    awardValue: "Best epitaph",
    prize: "Profile badge + plaque quote shortlist",
    plaqueTitle: "Poet of Pain",
    plaqueSubtitle: "Best epitaph award",
    plaqueLine: "Someone had to buy the top.",
    plaqueFooter: "The cemetery appreciates your service.",
    accent: "violet",
    criteria: [
      "Originality",
      "Shareability",
      "Fits the graveyard tone",
      "Does not harass real people or encourage harmful behavior"
    ],
    fulfillment: [
      "Collect opt-in epitaph submissions",
      "Moderate for safety and platform rules",
      "Feature the winning line on the award page",
      "Add the quote to the public bagholder profile"
    ],
    publicFields: [
      ["Cadence", "Monthly"],
      ["Sample winner", "ExitLiquidity"],
      ["Featured coin", "Diamond Pawz"],
      ["Award metric", "Best epitaph"],
      ["Prize layer", "Badge + quote feature"],
      ["Tax status", "Not determined"]
    ]
  },
  {
    slug: "rug-survivor",
    title: "Rug Survivor",
    cadence: "Monthly",
    status: "Demo concept",
    winner: "RugHistorian",
    winnerHref: "/bagholders/rughistorian",
    coin: "SafeMars Classic",
    coinHref: "/coins/safemars-classic",
    headline: "For the participant with the best receipts from the long, weird afterlife of an abandoned project.",
    awardValue: "Receipts archived",
    prize: "Archive badge + Rare headstone eligibility",
    plaqueTitle: "Rug Survivor",
    plaqueSubtitle: "Receipts archivist award",
    plaqueLine: "Every rug deserves footnotes.",
    plaqueFooter: "History is written by the bagholders.",
    accent: "bone",
    criteria: [
      "Useful public documentation",
      "Clear timeline of abandonment",
      "No doxxing or unsafe claims",
      "Helps explain the project history"
    ],
    fulfillment: [
      "Review submitted public links and screenshots",
      "Separate documented facts from commentary",
      "Credit the participant pseudonymously",
      "Attach archive notes to the coin profile"
    ],
    publicFields: [
      ["Cadence", "Monthly"],
      ["Sample winner", "RugHistorian"],
      ["Featured coin", "SafeMars Classic"],
      ["Award metric", "Best historical record"],
      ["Prize layer", "Archive badge + Rare headstone"],
      ["Tax status", "Not determined"]
    ]
  }
] as const;

export type AwardProgram = (typeof awardPrograms)[number];

export function getAwardBySlug(slug: string) {
  return awardPrograms.find((award) => award.slug === slug);
}

export const awardGuardrails = [
  {
    label: "No tax conclusion",
    copy: "Awards celebrate site activity and stories. They do not verify deductible losses, cost basis, charitable deductions, or legal ownership."
  },
  {
    label: "Consent before display",
    copy: "Real winners should approve pseudonym, masked wallet display, public links, and plaque fulfillment details before anything is published."
  },
  {
    label: "No value promise",
    copy: "Plaques, badges, SBTs, and headstones should be framed as recognition or art, not investments expected to appreciate."
  },
  {
    label: "Evidence-aware",
    copy: "Future award pages should label whether metrics are sample, on-chain observed, estimated, documented, reviewed, or unknown."
  }
] as const;

export const metricDefinitions = [
  {
    metric: "Peak observed value",
    formula: "Highest observed wallet balance × market reference price",
    publicLabel: "Entertainment metric",
    copy:
      "The largest notional value the observed wallet appears to have held during the selected period. This is not the same as what the person paid or what they could actually sell for."
  },
  {
    metric: "Estimated liquidation value",
    formula: "Modeled proceeds after liquidity, slippage, depth, and fees",
    publicLabel: "Harder estimate",
    copy:
      "A future advanced metric that asks what the position might realistically have sold for at a point in time. This needs historical liquidity data, not just a chart price."
  },
  {
    metric: "Burial value",
    formula: "Estimated value immediately before the burial transfer",
    publicLabel: "Event estimate",
    copy:
      "The estimated market or liquidation value when the token was sent to the cemetery. For truly illiquid tokens, this may be near-zero or indeterminable."
  },
  {
    metric: "Round trip",
    formula: "Peak observed value − burial value",
    publicLabel: "Story metric",
    copy:
      "A dramatic before-and-after number for leaderboards and storytelling. It is intentionally separate from documented acquisition cost and tax treatment."
  },
  {
    metric: "Documented acquisition cost",
    formula: "User-submitted records reviewed against chain history",
    publicLabel: "Private-review tier",
    copy:
      "A future evidence tier based on exchange statements, transaction exports, or other records. Even then, Crypto Graveyard should not call it a verified deductible tax loss."
  },
  {
    metric: "Tax loss",
    formula: "Outside Crypto Graveyard’s determination",
    publicLabel: "Not provided",
    copy:
      "Tax treatment depends on the taxpayer, facts, records, law, and professional advice. The site should never display a trophy or certificate as tax verification."
  }
] as const;

export const confidenceTiers = [
  {
    label: "Sample",
    status: "Prototype only",
    copy: "Fictional data used to design the site before real wallets, transfers, or market feeds are connected."
  },
  {
    label: "On-chain observed",
    status: "Public chain data",
    copy: "Token quantities, timestamps, and transfers that can be read from a blockchain explorer or indexer."
  },
  {
    label: "Market referenced",
    status: "Price source attached",
    copy: "Value estimates using a stated exchange, DEX pool, aggregator, block, timestamp, or price methodology."
  },
  {
    label: "User documented",
    status: "Private evidence",
    copy: "Participant-provided records that support acquisition cost or chain-of-custody, reviewed without publishing sensitive documents."
  },
  {
    label: "Indeterminable",
    status: "No reliable value",
    copy: "Used when liquidity, market data, ownership continuity, or token mechanics are too unclear for a responsible estimate."
  }
] as const;

export const valueMethodologySteps = [
  {
    step: "Identify the asset",
    copy: "Confirm chain, contract or mint address, token decimals, symbol, and whether migrations, wrappers, rebases, or reflection mechanics exist."
  },
  {
    step: "Rebuild the observed balance",
    copy: "Track incoming and outgoing transfers over time instead of multiplying the final donated quantity by the historic highest price."
  },
  {
    step: "Attach market references",
    copy: "Use a transparent hierarchy of reputable exchange trades, executable DEX liquidity, aggregators, and documented fallback estimates."
  },
  {
    step: "Separate notional from realizable",
    copy: "Label chart-price math separately from liquidation estimates that account for market depth, slippage, and fees."
  },
  {
    step: "Publish confidence labels",
    copy: "Show what is sample, on-chain observed, market referenced, user documented, estimated, unknown, or not determined."
  }
] as const;

export const methodologyExamples = [
  {
    title: "Gradual accumulation",
    mistake: "Using final token quantity × highest historic price",
    correction: "Reconstruct balance intervals so the wallet only gets credit for tokens it actually held at each price point."
  },
  {
    title: "Thin liquidity",
    mistake: "Treating a tiny DEX trade as proof the entire bag was worth millions",
    correction: "Display peak notional value separately from estimated liquidation value after modeled price impact."
  },
  {
    title: "Transferred wallet history",
    mistake: "Assuming the current signer owned the wallet through every historical transfer",
    correction: "Phrase public claims around the wallet unless separate documentation supports person-level continuity."
  },
  {
    title: "Worthless token",
    mistake: "Calling an illiquid token a verified zero-value tax loss",
    correction: "Label the burial value as near-zero, unavailable, or indeterminable without determining tax treatment."
  }
] as const;

export const headstoneSamples = [
  {
    id: "CG-HS-0001",
    title: "Obsidian Hellfire",
    rarity: "Mythic",
    stone: "Obsidian",
    flame: "Green hellfire",
    flowers: "Black roses",
    aura: "Cursed",
    origin: "Funeral of the Month",
    accent: "acid"
  },
  {
    id: "CG-HS-0002",
    title: "Moonlit Marble",
    rarity: "Legendary",
    stone: "Marble",
    flame: "Blue candle",
    flowers: "Moon lilies",
    aura: "Spectral",
    origin: "Founder series",
    accent: "violet"
  },
  {
    id: "CG-HS-0003",
    title: "Cracked Granite",
    rarity: "Rare",
    stone: "Granite",
    flame: "None",
    flowers: "Dead daisies",
    aura: "Dusty",
    origin: "Standard burial",
    accent: "bone"
  },
  {
    id: "CG-HS-0004",
    title: "Blood Moon Crypt",
    rarity: "Epic",
    stone: "Crimson crypt",
    flame: "Red flame",
    flowers: "Ash vines",
    aura: "Blood moon",
    origin: "Community choice",
    accent: "blood"
  }
] as const;

export const traitGroups = [
  {
    group: "Stone",
    examples: ["Granite", "Marble", "Obsidian", "Crystal", "Ancient bone"]
  },
  {
    group: "Shape",
    examples: ["Tablet", "Cross", "Crypt", "Monolith", "Broken angel"]
  },
  {
    group: "Weather",
    examples: ["Fog", "Storm", "Eclipse", "Blood moon", "Ashfall"]
  },
  {
    group: "Accent",
    examples: ["Green flame", "Purple ghost", "Raven", "Black roses", "Skull engraving"]
  }
] as const;

export const rarityTiers = [
  { tier: "Common", supply: "Open", treatment: "Clean stone, simple engraving, muted colors" },
  { tier: "Rare", supply: "Limited rolls", treatment: "Cracks, flowers, glowing accents" },
  { tier: "Epic", supply: "Award-gated", treatment: "Animated-style aura, special backgrounds" },
  { tier: "Legendary", supply: "Monthly winners", treatment: "Premium palette, rare emblem set" },
  { tier: "Mythic", supply: "Annual winners", treatment: "One-of-one trait combinations" }
] as const;

export const certificateFields = [
  ["Certificate ID", "CG-DEMO-0001"],
  ["Participant", "MoonBagMike"],
  ["Coin laid to rest", "12,487,392 MoonRocket Inu"],
  ["Burial date", "July 17, 2026"],
  ["Peak observed value", "$412,884"],
  ["Burial value", "$3.17"],
  ["Memorial URL", "cryptograveyard.io/memorial/sample"],
  ["Tax status", "Not determined"]
] as const;

export const liveSegments = [
  {
    segment: "Latest Burials",
    duration: "04:00",
    copy: "Scroll recent sample burials, new tombstones, and confidence labels."
  },
  {
    segment: "Hall of Fame",
    duration: "03:00",
    copy: "Rotate biggest round trips, most tokens buried, and monthly award candidates."
  },
  {
    segment: "Coin Obituary",
    duration: "02:30",
    copy: "Feature one dead coin with a short eulogy and fictional memorial card."
  },
  {
    segment: "Market Pulse",
    duration: "02:00",
    copy: "Show sample watcher status, chain queues, and supported-chain roadmap."
  },
  {
    segment: "Funeral Alert",
    duration: "Event",
    copy: "Interrupt the loop when a new burial eventually arrives from the real watcher."
  }
] as const;

export const faqItems = [
  {
    question: "Can I send tokens right now?",
    answer:
      "No. The current site is a sample-data prototype. Crypto Graveyard has not published official receiving wallets or opened real submissions."
  },
  {
    question: "Is this a tax-loss service?",
    answer:
      "No. Crypto Graveyard is an entertainment, memorial, and analytics project. It does not determine cost basis, deductible losses, charitable deductions, or legal ownership."
  },
  {
    question: "Why use sample data first?",
    answer:
      "Sample data lets the full user experience be designed safely before real wallets, real transfers, private review records, or automated blockchain watchers exist."
  },
  {
    question: "What does peak observed value mean?",
    answer:
      "It is an entertainment and analytics metric based on what a wallet appears to have held at a market reference price. It is not the same as purchase cost, realizable liquidation value, or a verified tax loss."
  },
  {
    question: "Will wallet addresses be public?",
    answer:
      "The plan is to start with manual beta review and masked display defaults. Public wallet addresses and transaction hashes should only be shown with clear rules and consent."
  },
  {
    question: "Will headstone NFTs be tradable?",
    answer:
      "The current concept separates non-transferable memorial profile credit from optional tradable headstone collectibles. That is a future feature, not part of the live prototype."
  },
  {
    question: "What should I never share?",
    answer:
      "Never share seed phrases, private keys, wallet recovery words, exchange logins, passwords, or remote-device access. Crypto Graveyard will never need them."
  }
] as const;
