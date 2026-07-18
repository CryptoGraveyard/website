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
