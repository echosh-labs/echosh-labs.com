// Echo SH Labs // Legacy Python Archive & Dossier Manifest
// Curated metadata, AST docstrings, and lineage mappings for historical Python codebases.

export interface ArchiveModule {
  id: string;
  name: string;
  filename: string;
  path: string;
  summary: string;
  docstring: string;
  language: string;
  lineCount: number;
  highlightSnippet: string;
  modernLineage: string;
}

export interface ArchiveProject {
  id: 'nitsujlabs' | 'emotions' | 'dandd' | 'dashtastic';
  title: string;
  subtitle: string;
  period: string;
  themeName: string;
  fontBadge: string;
  accentColor: string;
  bgGradient: string;
  iconName: string;
  description: string;
  provenance: string;
  modernConnection: string;
  modules: ArchiveModule[];
}

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: 'nitsujlabs',
    title: 'nitsujlabs.com',
    subtitle: 'The Flagship Python Innovation Laboratory',
    period: '2018 — 2020',
    themeName: 'Vintage 8-Bit & Phosphor CRT',
    fontBadge: 'PRESS START 2P / VT323',
    accentColor: '#22c55e',
    bgGradient: 'from-emerald-950/40 via-slate-950 to-emerald-950/20',
    iconName: 'Terminal',
    description: 'The foundational software sandbox powering early experiments in decentralized consensus ledgers, commodity market game theory, and 2D kinematic particle simulations.',
    provenance: 'Repository Root: /archive/nitsujlabs.com (Python 3.7, Flask, Django, Kivy)',
    modernConnection: 'Directly evolved into the double-entry accounting in Shaolin Dojo, the Vimshottari Mahadasha math engines in Compendium, and scale-to-zero microservices in amra-core.',
    modules: [
      {
        id: 'blockchain',
        name: 'Proof-of-Work Blockchain Node',
        filename: 'blockchain.py',
        path: '/archive/nitsujlabs.com/blockchain.py',
        summary: 'Full SHA-256 Proof-of-Work blockchain node implementation with consensus resolution, peer discovery, and JSON mining endpoints.',
        docstring: '"""\nBlockchain Genesis & Consensus Node\nAuthor: Justin Andrew Wood\nFeatures: SHA-256 Hashing, Proof-of-Work difficulty target, dynamic peer nodes, and Flask HTTP interface.\n"""',
        language: 'python',
        lineCount: 302,
        highlightSnippet: `class Blockchain:
    def __init__(self):
        self.current_transactions = []
        self.chain = []
        self.nodes = set()
        # Create genesis block
        self.new_block(previous_hash='1', proof=100)

    def new_block(self, proof, previous_hash=None):
        block = {
            'index': len(self.chain) + 1,
            'timestamp': time(),
            'transactions': self.current_transactions,
            'proof': proof,
            'previous_hash': previous_hash or self.hash(self.chain[-1]),
        }
        self.current_transactions = []
        self.chain.append(block)
        return block`,
        modernLineage: 'Direct precursor to cryptographic hash checking and double-entry transaction ledgers across Echo SH services.'
      },
      {
        id: 'beans',
        name: 'Bohnanza Market Economics Engine',
        filename: 'beans.py',
        path: '/archive/nitsujlabs.com/beans.py',
        summary: 'Mathematical economic model simulating commodity crop yields, non-linear harvest payout curves, and trading trade-offs.',
        docstring: '"""\nBohnanza Commodity Market Simulation\nAuthor: Justin Wood\nFeatures: Range-expanded payout dictionaries, crop scarcity distributions, and yield maximization curves.\n"""',
        language: 'python',
        lineCount: 165,
        highlightSnippet: `def expand(d):
    ret = {}
    for k in d:
        v = d[k]
        if isinstance(k, range):
            ret.update({i: v for i in k})
        else:
            ret[k] = v
    return ret

beans = {
    'Cocoa':  {'count': 4,  'payout': expand({range(0,2): 0, range(2,3): 1, range(3,4): 2, range(4,5): 4})},
    'Garden': {'count': 6,  'payout': expand({range(0,2): 0, range(2,5): 2, range(5,7): 3, range(7,11): 4})},
    'Red':    {'count': 8,  'payout': expand({range(0,2): 0, range(2,3): 1, range(3,4): 2, range(4,5): 3, range(5,9): 4})},
}`,
        modernLineage: 'Informed the tiered pass and token valuation algorithms currently implemented in shaolin/backend.'
      },
      {
        id: 'particles',
        name: 'Kinematic Particle Physics Engine',
        filename: 'z_class_particle.py',
        path: '/archive/nitsujlabs.com/z_class_particle.py',
        summary: '2D particle kinematics engine calculating vector velocities, mass resistance, coordinate clamping, and elastic boundary collisions.',
        docstring: '"""\n2D Vector Particle Dynamics Simulator\nFeatures: Coordinate vector math, elastic boundary bounce, mass-velocity friction, and render frames.\n"""',
        language: 'python',
        lineCount: 95,
        highlightSnippet: `class Particle:
    def __init__(self, x, y, dx, dy, mass=1.0):
        self.x = x
        self.y = y
        self.dx = dx
        self.dy = dy
        self.mass = mass

    def update(self, bounds_x, bounds_y):
        self.x += self.dx
        self.y += self.dy
        # Elastic collision with bounding box
        if self.x <= 0 or self.x >= bounds_x:
            self.dx *= -1
        if self.y <= 0 or self.y >= bounds_y:
            self.dy *= -1`,
        modernLineage: 'Ancestor of the quicksilver fluid dynamics and canvas animations rendered on the Compendium dossier.'
      },
      {
        id: 'blackjack',
        name: 'Casino Blackjack Engine',
        filename: 'blackjack.py',
        path: '/archive/nitsujlabs.com/blackjack game/blackjack.py',
        summary: 'Object-oriented card deck generator, dealer logic, hand value scoring, and betting state machine.',
        docstring: '"""\nObject-Oriented Blackjack & Dealer Simulator\nFeatures: 52-card shoe shuffling, soft Ace handling, split hands, and house rules.\n"""',
        language: 'python',
        lineCount: 140,
        highlightSnippet: `class Deck:
    def __init__(self):
        suits = ['♠', '♥', '♦', '♣']
        ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        self.cards = [Card(s, r) for s in suits for r in ranks]
        random.shuffle(self.cards)

    def draw(self):
        return self.cards.pop() if self.cards else None`,
        modernLineage: 'Established standard object-oriented domain modeling patterns across later gaming and simulation engines.'
      }
    ]
  },
  {
    id: 'emotions',
    title: 'emotions',
    subtitle: 'Affective Computing & The Junto Emotion Taxonomy',
    period: '2019 — 2021',
    themeName: 'Hierarchical Chromatic Spectrum',
    fontBadge: 'JETBRAINS MONO',
    accentColor: '#a855f7',
    bgGradient: 'from-violet-950/40 via-slate-950 to-fuchsia-950/20',
    iconName: 'Sparkles',
    description: 'A 3-tier hierarchical sentiment and affective mapping system translating core emotional roots into granular psychological states using the Junto Emotion Wheel.',
    provenance: 'Repository Root: /archive/emotions (emocore.py, junto wheel.csv)',
    modernConnection: 'Direct cognitive progenitor for dynamic synesthetic color shifts in echosh and the 432 Hz / 528 Hz chakra ambient frequencies in Foundations.',
    modules: [
      {
        id: 'emocore',
        name: 'Hierarchical Emotion Taxonomy Engine',
        filename: 'emocore.py',
        path: '/archive/emotions/emocore.py',
        summary: 'Recursive dictionary structure classifying 6 root emotions into secondary nuances and 40+ granular tertiary feelings.',
        docstring: '"""\nNatural Language Processing & Affective State Core\nAuthor: Justin Wood\nMapping: Primary (6) -> Secondary (24) -> Tertiary (48) emotional nodes based on the Junto Wheel.\n"""',
        language: 'python',
        lineCount: 43,
        highlightSnippet: `EMOTIONS = {
    'sadness': {
        'hurt': ['embarrassed', 'disappointed'],
        'depressed': ['inferior', 'empty'],
        'guilty': ['remorseful', 'ashamed'],
        'vulnerable': ['fragile', 'victimized'],
        'lonely': ['abandoned', 'isolated'],
    },
    'joy': {
        'playful': ['aroused', 'cheeky'],
        'content': ['free', 'satisfied'],
        'cheerful': ['jovial', 'blissful'],
        'elation': ['euphoric', 'jubilated'],
        'enthralled': ['enchanted', 'raptured'],
    },
    'surprise': {
        'startled': ['shocked', 'dismayed'],
        'confused': ['disillusioned', 'perplexed'],
        'amazed': ['astonished', 'awestruck'],
    },
    'love': {
        'affectionate': ['romantic', 'fond'],
        'tenderness': ['caring', 'passionate'],
        'peaceful': ['relieved', 'vigilant'],
    }
}`,
        modernLineage: 'Supplies the emotional semantic vocabulary powering synesthetic audio synthesis presets and narrative states.'
      }
    ]
  },
  {
    id: 'dandd',
    title: 'DandD',
    subtitle: 'Tabletop RPG Mechanics & Cellular Automata',
    period: '2018 — 2019',
    themeName: 'Dungeon Parchment & Dice Rolls',
    fontBadge: 'CINZEL / VT323',
    accentColor: '#f59e0b',
    bgGradient: 'from-amber-950/40 via-slate-950 to-red-950/20',
    iconName: 'Swords',
    description: 'An object-oriented tabletop roleplaying simulator featuring double-entry coin denomination conversions, 18 KB loot roll tables, and Conway’s Game of Life cellular automata.',
    provenance: 'Repository Root: /archive/DandD (Django 2.1, SQLite, game app)',
    modernConnection: 'Directly birthed the ledger math used in the Martial Arts Flex Pass token system and procedural rule generation in modern tooling.',
    modules: [
      {
        id: 'economy',
        name: '5-Tier Coin Currency Ledger',
        filename: 'game/economy.py',
        path: '/archive/DandD/game/economy.py',
        summary: 'Calculates base-10 copper conversions across Copper (CP), Silver (SP), Electrum (EP), Gold (GP), and Platinum (PP) with fractional weight constraints.',
        docstring: '"""\nTabletop Multi-Denomination Currency Engine\nConversion Ratios: 1 PP = 10 GP = 20 EP = 100 SP = 1000 CP\nWeight: 50 coins = 1 lb container capacity\n"""',
        language: 'python',
        lineCount: 110,
        highlightSnippet: `COIN_CONVERSIONS = {
    'cp': 1,
    'sp': 10,
    'ep': 50,
    'gp': 100,
    'pp': 1000,
}

def to_base_copper(wallet):
    return sum(wallet.get(coin, 0) * rate for coin, rate in COIN_CONVERSIONS.items())

def optimal_denominations(total_copper):
    result = {}
    remaining = total_copper
    for coin in ['pp', 'gp', 'ep', 'sp', 'cp']:
        rate = COIN_CONVERSIONS[coin]
        count = remaining // rate
        result[coin] = count
        remaining %= rate
    return result`,
        modernLineage: 'Provided the exact foundational double-entry ledger logic for the Shaolin Academy Flex Pass accounting engine.'
      },
      {
        id: 'conway',
        name: 'Conway’s Game of Life Simulator',
        filename: 'game/random/conway.py',
        path: '/archive/DandD/game/random/conway.py',
        summary: 'Grid-based cellular automata executing classic zero-player evolution rules (underpopulation, survival, reproduction, overpopulation).',
        docstring: '"""\nConway\'s Cellular Automata Grid\nCalculates toroidal 2D neighbor counts and step updates.\n"""',
        language: 'python',
        lineCount: 45,
        highlightSnippet: `def step_life(grid):
    height, width = len(grid), len(grid[0])
    next_grid = [[0] * width for _ in range(height)]
    for y in range(height):
        for x in range(width):
            live_neighbors = count_neighbors(grid, x, y, width, height)
            if grid[y][x] == 1 and live_neighbors in (2, 3):
                next_grid[y][x] = 1
            elif grid[y][x] == 0 and live_neighbors == 3:
                next_grid[y][x] = 1
    return next_grid`,
        modernLineage: 'Exemplifies emergent complex behavior from simple deterministic rules.'
      }
    ]
  },
  {
    id: 'dashtastic',
    title: 'dashtastic',
    subtitle: 'Aerodrome Stand Telemetry & Executive Reporting',
    period: '2018 — 2021',
    themeName: 'Avionics Radar & Flight Gate Ops',
    fontBadge: 'SILKSCREEN / JETBRAINS MONO',
    accentColor: '#06b6d4',
    bgGradient: 'from-cyan-950/40 via-slate-950 to-blue-950/20',
    iconName: 'Activity',
    description: 'An industrial aerodrome stand analytics platform tracking airport gate availability, flight utilization metrics, background clock workers, and automated executive PDF distribution.',
    provenance: 'Repository Root: /archive/dashtastic (Django, APScheduler, Heroku, PostgreSQL)',
    modernConnection: 'Direct architectural forerunner of real-time telemetry streaming, scheduled background tasks, and health probe engines in Mercury Dasha and Axis Mundi.',
    modules: [
      {
        id: 'performance',
        name: 'Aerodrome Stand Utilization Engine',
        filename: 'customer/performance.py',
        path: '/archive/dashtastic/customer/performance.py',
        summary: 'Ingests gate flight schedules, stand turnaround durations, and computes hourly utilization percentages and operational SLAs.',
        docstring: '"""\nAerodrome Stand Performance & Flight Turnaround Engine\nMetrics: Stand Occupancy (%), Turnaround Overruns, Airline SLA Compliance, and Gate Congestion Index.\n"""',
        language: 'python',
        lineCount: 480,
        highlightSnippet: `class StandPerformanceCalculator:
    def __init__(self, aerodrome_code, start_time, end_time):
        self.aerodrome_code = aerodrome_code
        self.window_hours = (end_time - start_time).total_seconds() / 3600

    def calculate_utilization(self, flight_events, total_stands):
        total_occupied_minutes = sum(e.occupied_duration_mins for e in flight_events)
        available_minutes = total_stands * self.window_hours * 60
        return (total_occupied_minutes / available_minutes) * 100 if available_minutes > 0 else 0.0`,
        modernLineage: 'Direct architectural forerunner of the real-time telemetry streaming and uptime health checks in Mercury Dasha.'
      },
      {
        id: 'clock',
        name: 'Background Worker & Nightly PDF Dispatcher',
        filename: 'clock.py',
        path: '/archive/dashtastic/clock.py',
        summary: 'APScheduler daemon running recurring cron jobs, compiling statistical metrics batches, and executing automated PDF report delivery.',
        docstring: '"""\nHeroku Background Clock Worker\nExecutes cron schedule for executive daily digest compilation and automated email dispatches.\n"""',
        language: 'python',
        lineCount: 50,
        highlightSnippet: `from apscheduler.schedulers.blocking import BlockingScheduler
sched = BlockingScheduler()

@sched.scheduled_job('cron', hour=6, minute=0, timezone='America/Toronto')
def daily_executive_dispatch():
    print("⏰ [Clock Worker] Compiling Aerodrome Daily Executive Summary...")
    call_command('Executive_PDF')
    call_command('Send_PDF_current')

sched.start()`,
        modernLineage: 'Informed the background process lifecycle and scheduled task orchestration in Antigravity agents.'
      }
    ]
  }
];

export const EMOTIONS_TAXONOMY_TREE = {
  sadness: {
    label: 'Sadness',
    color: '#3b82f6',
    subs: {
      hurt: ['embarrassed', 'disappointed'],
      depressed: ['inferior', 'empty'],
      guilty: ['remorseful', 'ashamed'],
      vulnerable: ['fragile', 'victimized'],
      lonely: ['abandoned', 'isolated'],
    }
  },
  joy: {
    label: 'Joy',
    color: '#10b981',
    subs: {
      playful: ['aroused', 'cheeky'],
      content: ['free', 'satisfied'],
      happy: ['amused', 'delighted'],
      cheerful: ['jovial', 'blissful'],
      elation: ['euphoric', 'jubilated'],
      enthralled: ['enchanted', 'raptured'],
    }
  },
  surprise: {
    label: 'Surprise',
    color: '#06b6d4',
    subs: {
      startled: ['shocked', 'dismayed'],
      confused: ['disillusioned', 'perplexed'],
      amazed: ['astonished', 'awestruck'],
      excited: ['eager', 'energized'],
    }
  },
  love: {
    label: 'Love',
    color: '#ec4899',
    subs: {
      affectionate: ['romantic', 'fond'],
      longing: ['sentimental', 'attracted'],
      desire: ['passioned', 'infatuated'],
      tenderness: ['caring', 'passionate'],
      peaceful: ['relieved', 'vigilant'],
    }
  },
  fear: {
    label: 'Fear',
    color: '#8b5cf6',
    subs: {
      scared: ['frightened', 'helpless'],
      terror: ['panicked', 'hysterical'],
      insecure: ['inferior', 'inadequate'],
      nervous: ['worried', 'anxious'],
      horror: ['mortified', 'dreaded'],
    }
  },
  anger: {
    label: 'Anger',
    color: '#ef4444',
    subs: {
      rage: ['hated', 'hostile'],
      exasperated: ['agitated', 'frustrated'],
      irritable: ['annoyed', 'aggravated'],
      envy: ['resentful', 'jealous'],
      disgust: ['contemptuous', 'revolted'],
    }
  }
};

export interface BohnanzaBean {
  name: string;
  count: number;
  color: string;
  badgeBg: string;
  payoutRanges: Array<{ min: number; max: number; coins: number }>;
}

export const BOHNANZA_BEANS: BohnanzaBean[] = [
  {
    name: 'Cocoa',
    count: 4,
    color: '#854d0e',
    badgeBg: 'bg-amber-900/40 text-amber-200 border-amber-700/50',
    payoutRanges: [
      { min: 0, max: 1, coins: 0 },
      { min: 2, max: 2, coins: 1 },
      { min: 3, max: 3, coins: 2 },
      { min: 4, max: 4, coins: 4 },
    ]
  },
  {
    name: 'Garden',
    count: 6,
    color: '#15803d',
    badgeBg: 'bg-emerald-900/40 text-emerald-200 border-emerald-700/50',
    payoutRanges: [
      { min: 0, max: 1, coins: 0 },
      { min: 2, max: 4, coins: 2 },
      { min: 5, max: 6, coins: 3 },
      { min: 7, max: 10, coins: 4 },
    ]
  },
  {
    name: 'Red',
    count: 8,
    color: '#dc2626',
    badgeBg: 'bg-red-900/40 text-red-200 border-red-700/50',
    payoutRanges: [
      { min: 0, max: 1, coins: 0 },
      { min: 2, max: 2, coins: 1 },
      { min: 3, max: 3, coins: 2 },
      { min: 4, max: 4, coins: 3 },
      { min: 5, max: 8, coins: 4 },
    ]
  },
  {
    name: 'Black-Eyed',
    count: 10,
    color: '#475569',
    badgeBg: 'bg-slate-800/80 text-slate-200 border-slate-600/50',
    payoutRanges: [
      { min: 0, max: 1, coins: 0 },
      { min: 2, max: 3, coins: 1 },
      { min: 4, max: 4, coins: 2 },
      { min: 5, max: 5, coins: 3 },
      { min: 6, max: 10, coins: 4 },
    ]
  },
  {
    name: 'Soy',
    count: 12,
    color: '#ca8a04',
    badgeBg: 'bg-yellow-900/40 text-yellow-200 border-yellow-700/50',
    payoutRanges: [
      { min: 0, max: 1, coins: 0 },
      { min: 2, max: 3, coins: 1 },
      { min: 4, max: 5, coins: 2 },
      { min: 6, max: 6, coins: 3 },
      { min: 7, max: 12, coins: 4 },
    ]
  },
  {
    name: 'Green',
    count: 14,
    color: '#16a34a',
    badgeBg: 'bg-green-900/40 text-green-200 border-green-700/50',
    payoutRanges: [
      { min: 0, max: 2, coins: 0 },
      { min: 3, max: 4, coins: 1 },
      { min: 5, max: 5, coins: 2 },
      { min: 6, max: 6, coins: 3 },
      { min: 7, max: 14, coins: 4 },
    ]
  },
  {
    name: 'Stink',
    count: 16,
    color: '#a16207',
    badgeBg: 'bg-amber-950/60 text-amber-300 border-amber-800/50',
    payoutRanges: [
      { min: 0, max: 2, coins: 0 },
      { min: 3, max: 4, coins: 1 },
      { min: 5, max: 6, coins: 2 },
      { min: 7, max: 7, coins: 3 },
      { min: 8, max: 16, coins: 4 },
    ]
  },
  {
    name: 'Chili',
    count: 18,
    color: '#ea580c',
    badgeBg: 'bg-orange-900/40 text-orange-200 border-orange-700/50',
    payoutRanges: [
      { min: 0, max: 2, coins: 0 },
      { min: 3, max: 5, coins: 1 },
      { min: 6, max: 7, coins: 2 },
      { min: 8, max: 8, coins: 3 },
      { min: 9, max: 18, coins: 4 },
    ]
  },
  {
    name: 'Blue',
    count: 20,
    color: '#2563eb',
    badgeBg: 'bg-blue-900/40 text-blue-200 border-blue-700/50',
    payoutRanges: [
      { min: 0, max: 3, coins: 0 },
      { min: 4, max: 5, coins: 1 },
      { min: 6, max: 7, coins: 2 },
      { min: 8, max: 9, coins: 3 },
      { min: 10, max: 20, coins: 4 },
    ]
  },
  {
    name: 'Wax',
    count: 22,
    color: '#eab308',
    badgeBg: 'bg-yellow-950/60 text-yellow-300 border-yellow-800/50',
    payoutRanges: [
      { min: 0, max: 3, coins: 0 },
      { min: 4, max: 6, coins: 1 },
      { min: 7, max: 8, coins: 2 },
      { min: 9, max: 10, coins: 3 },
      { min: 11, max: 22, coins: 4 },
    ]
  },
  {
    name: 'Coffee',
    count: 24,
    color: '#78350f',
    badgeBg: 'bg-stone-900/80 text-amber-100 border-stone-700/50',
    payoutRanges: [
      { min: 0, max: 3, coins: 0 },
      { min: 4, max: 6, coins: 1 },
      { min: 7, max: 9, coins: 2 },
      { min: 10, max: 11, coins: 3 },
      { min: 12, max: 24, coins: 4 },
    ]
  },
];

export function calculateBeanPayout(beanName: string, quantity: number): { coins: number; nextGoal: string | null; efficiency: number } {
  const bean = BOHNANZA_BEANS.find(b => b.name.toLowerCase() === beanName.toLowerCase()) || BOHNANZA_BEANS[0];
  let coins = 0;
  for (const r of bean.payoutRanges) {
    if (quantity >= r.min && quantity <= r.max) {
      coins = r.coins;
      break;
    }
  }
  if (quantity > bean.payoutRanges[bean.payoutRanges.length - 1].max) {
    coins = bean.payoutRanges[bean.payoutRanges.length - 1].coins;
  }

  // Find next tier requirement
  let nextGoal: string | null = null;
  const higherTiers = bean.payoutRanges.filter(r => r.coins > coins);
  if (higherTiers.length > 0) {
    const nextTier = higherTiers[0];
    const diff = nextTier.min - quantity;
    nextGoal = `Plant ${diff} more ${bean.name} for ${nextTier.coins} Gold (${nextTier.min} cards total)`;
  } else {
    nextGoal = `Maximum Yield Achieved (${coins} Gold Coins)`;
  }

  const efficiency = quantity > 0 ? (coins / quantity) * 100 : 0;
  return { coins, nextGoal, efficiency };
}

