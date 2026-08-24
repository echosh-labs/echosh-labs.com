export interface MartialArtDiscipline {
  id: string;
  name: string;
  hanzi: string;
  category: 'external' | 'internal' | 'weapons';
  accentColor: 'amber' | 'emerald' | 'violet' | 'cyan' | 'rose';
  summary: string;
  philosophy: string;
  coreTechniques: string[];
  signatureForms: string[];
  weapons?: string[];
  beltTracks: {
    rank: string;
    focus: string;
    requirement: string;
  }[];
}

export interface SQLMigrationTier {
  step: string;
  filename: string;
  tablesCreated: string[];
  domain: 'auth' | 'scheduling' | 'ledger' | 'commerce' | 'grading' | 'community';
  description: string;
}

export interface TestPersona {
  id: string;
  name: string;
  role: 'student' | 'instructor' | 'admin';
  email: string;
  currentRank: string;
  tokenBalance: number;
  capabilities: string[];
  jwtClaim: {
    sub: string;
    role: string;
    tier: string;
    iss: string;
  };
}

export const MARTIAL_ARTS_DISCIPLINES: MartialArtDiscipline[] = [
  {
    id: "kung-fu",
    name: "Traditional Kung Fu",
    hanzi: "功夫",
    category: "external",
    accentColor: "amber",
    summary: "Dynamic external martial art focusing on foundational five-stance transitions, explosive striking power, agile footwork, and animal forms.",
    philosophy: "Physical conditioning directly unifies with mental clarity. By enduring physical discipline (Ku) and perseverance (Nai), the body becomes a resilient instrument.",
    coreTechniques: [
      "Ma Bu (Horse Stance - 3 Min Hold)",
      "Gong Bu (Bow Stance & Thrust Punch)",
      "Pu Bu (Crouching Drop Stance)",
      "Xu Bu (Cat Stance Transition)",
      "Xie Bu (Resting Cross Stance)"
    ],
    signatureForms: [
      "Lian Huan Quan (Continuous Fist)",
      "Xiao Hong Quan (Little Red Fist)",
      "Da Hong Quan (Grand Red Fist)",
      "Tong Bi Quan (Through-the-Back Fist)"
    ],
    weapons: ["Yin Shou Gun (Northern Staff)", "Dan Dao (Broadsword)", "Qiang (Spear)"],
    beltTracks: [
      { rank: "White Belt (Level 1)", focus: "Stance Foundations & Flexibility", requirement: "30s Ma Bu, basic 5 kicks" },
      { rank: "Yellow Belt (Level 2)", focus: "Xiao Hong Quan & Power Mechanics", requirement: "Full form execution, 1 min Ma Bu" },
      { rank: "Orange Belt (Level 3)", focus: "Staff Routine & Qin Na Locks", requirement: "Yin Shou Gun sequence + 10 joint locks" },
      { rank: "Green Belt (Level 4)", focus: "Da Hong Quan & Controlled Sparring", requirement: "Endurance sparring & dynamic form" }
    ]
  },
  {
    id: "karate",
    name: "Traditional Karate",
    hanzi: "空手道",
    category: "external",
    accentColor: "rose",
    summary: "Linear striking art emphasizing explosive hip torque, crisp kihon fundamentals, structured kata sequences, and distance-controlled kumite.",
    philosophy: "Karate ni sente nashi (There is no first strike in karate). True mastery lies in non-aggression, precise focus (Kime), and resolute defense.",
    coreTechniques: [
      "Age-Uke (Rising High Block)",
      "Gedan-Barai (Low Sweeping Block)",
      "Gyaku-Zuki (Reverse Power Punch)",
      "Mae-Geri (Snapping Front Kick)",
      "Zenkutsu-Dachi (Forward Front Stance)"
    ],
    signatureForms: [
      "Heian Shodan (Peaceful Mind 1)",
      "Heian Nidan (Peaceful Mind 2)",
      "Tekki Shodan (Iron Horse 1)",
      "Bassai Dai (To Penetrate a Fortress)"
    ],
    beltTracks: [
      { rank: "White Belt (10th Kyu)", focus: "Kihon Fundamentals & Dojo Etiquette", requirement: "Basic stances and triple block drill" },
      { rank: "Yellow Belt (8th Kyu)", focus: "Heian Shodan & Distance Control", requirement: "Kata Heian Shodan + 5-step sparring" },
      { rank: "Green Belt (6th Kyu)", focus: "Heian Sandan & Gyaku-Zuki Timing", requirement: "Kata Heian Sandan + free Kumite" },
      { rank: "Brown Belt (3rd Kyu)", focus: "Bassai Dai & Pre-Black Evaluation", requirement: "Bassai Dai + pressure testing" }
    ]
  },
  {
    id: "kobudo",
    name: "Kobudo (Weapons)",
    hanzi: "古武道",
    category: "weapons",
    accentColor: "cyan",
    summary: "Traditional weapons system mastering the Rokushaku Bo Staff, Twin Sai, Tonfa shields, Nunchaku speed flow, and Kama sickle routines.",
    philosophy: "A weapon is an unbroken extension of the spine and hips. The practitioner learns spatial mastery, rotational torque, and environmental awareness.",
    coreTechniques: [
      "Bo Furiko (Staff Figure-Eight Rotation)",
      "Sai Yoko-Uchi (Twin Fork Hook & Block)",
      "Tonfa Kaeten (Forearm Shield Spin)",
      "Nunchaku Furi-Komi (Double Strike Flow)",
      "Kama Kake-Waza (Sickle Trapping Sequence)"
    ],
    signatureForms: [
      "Shuji no Kun (Staff Kata)",
      "Tsukenshitahaku no Sai (Sai Form)",
      "Hamahiga no Tonfa (Tonfa Routine)",
      "Maezato no Nunchaku (Nunchaku Kata)"
    ],
    weapons: ["Rokushaku Bo (6ft Staff)", "Twin Sai", "Tonfa (Side-Handle Batons)", "Nunchaku", "Dual Kama"],
    beltTracks: [
      { rank: "Novice Weapon (Level 1)", focus: "Bo Staff Grip & 8-Direction Strikes", requirement: "Basic bo striking grid + safety protocol" },
      { rank: "Intermediate (Level 2)", focus: "Shuji no Kun & Twin Sai Trapping", requirement: "Complete staff kata + sai deflection" },
      { rank: "Advanced (Level 3)", focus: "Tonfa Shields & Dual Kama Flow", requirement: "Tonfa kata + dynamic partner flow" }
    ]
  },
  {
    id: "tai-chi",
    name: "Chen & Yang Tai Chi",
    hanzi: "太極拳",
    category: "internal",
    accentColor: "emerald",
    summary: "Internal martial art uniting diaphragmatic breath with Silk Reeling (Chan Si Gong), spiral momentum, and structural joint decompression.",
    philosophy: "Yin and Yang in perpetual harmony. Overcome hardness with softness, yield to oncoming force, and ground incoming kinetic momentum through the earth.",
    coreTechniques: [
      "Chan Si Gong (Silk Reeling Spirals)",
      "Peng (Upward Buoyant Ward-Off)",
      "Lu (Yielding Roll-Back)",
      "Ji (Focused Press)",
      "An (Rooted Downward Push)"
    ],
    signatureForms: [
      "Chen Style 18 Essentials Form",
      "Yang Style 24 Simplified Form",
      "Chen Style Lao Jia Yi Lu (Old Frame 1)",
      "Tai Chi Straight Sword (Jian 32)"
    ],
    weapons: ["Tai Chi Jian (Straight Double-Edged Sword)", "Tai Chi Fan (Tie Shan)"],
    beltTracks: [
      { rank: "Harmonizer (Level 1)", focus: "Silk Reeling Basics & 18 Form (Part 1)", requirement: "Chan Si Gong 1-4 + single whip" },
      { rank: "Adept (Level 2)", focus: "Complete 18 Form & Zhan Zhuang", requirement: "15 min Zhan Zhuang standing meditation" },
      { rank: "Internal Master (Level 3)", focus: "Lao Jia Yi Lu & Push Hands (Tui Shou)", requirement: "Partner sensitivity drills & sword form" }
    ]
  },
  {
    id: "qigong",
    name: "Baduanjin & Yi Jin Jing Qigong",
    hanzi: "氣功",
    category: "internal",
    accentColor: "violet",
    summary: "Ancient breathwork and tendon metamorphosis routines cultivated to decompress the nervous system and circulate cellular bio-energy (Qi).",
    philosophy: "The mind leads the intent (Yi), the intent leads the breath (Qi), and the breath nourishes the blood and tendon elasticity.",
    coreTechniques: [
      "Two Hands Hold up the Heavens (Triple Warmer)",
      "Drawing the Bow to Shoot the Hawk (Lung Meridian)",
      "Separating Heaven and Earth (Spleen/Stomach)",
      "Wise Owl Looks Backward (Spinal Release)",
      "Bouncing on Toes Seven Times (Vitality Restoration)"
    ],
    signatureForms: [
      "Ba Duan Jin (Eight Section Brocade)",
      "Yi Jin Jing (Muscle-Tendon Metamorphosis)",
      "Xi Sui Jing (Marrow Cleansing Classic)",
      "Six Healing Sounds (Liu Zi Jue)"
    ],
    beltTracks: [
      { rank: "Cultivator (Level 1)", focus: "Ba Duan Jin Sequence & Dan Tian Breathing", requirement: "8 movements synchronized with breath" },
      { rank: "Practitioner (Level 2)", focus: "Yi Jin Jing 12 Postures & Tendon Stretches", requirement: "Full tendon tension-release sequence" },
      { rank: "Senior Alchemist (Level 3)", focus: "Microcosmic Orbit & Standing Stillness", requirement: "30 min guided breath meditation" }
    ]
  }
];

export const SQL_MIGRATION_TIERS: SQLMigrationTier[] = [
  {
    step: "01",
    filename: "0001_initial_schema.up.sql",
    tablesCreated: ["users", "terms", "term_breaks", "token_transactions", "user_term_tokens", "event_types", "halls", "classes", "class_halls", "class_occurrences", "bookings", "user_class_notes"],
    domain: "auth",
    description: "Core relational foundation: user authentication, recurring class templates, multi-hall scheduling, and baseline token accounts."
  },
  {
    step: "02-04",
    filename: "0002_attendance_mode .. 0004_locations.sql",
    tablesCreated: ["locations", "token_packages"],
    domain: "scheduling",
    description: "Multi-location studio topology, in-person vs live-stream attendance modes, and term pricing charts."
  },
  {
    step: "05-12",
    filename: "0005_discounts .. 0012_uniform_packages.sql",
    tablesCreated: ["student_term_registrations", "membership_options", "ping_pong_packages", "uniform_packages"],
    domain: "commerce",
    description: "Term-span unlimited passes, family/returning student discounts, table tennis memberships, and apparel packages."
  },
  {
    step: "13-16",
    filename: "0013_store .. 0016_order_history.sql",
    tablesCreated: ["store_categories", "store_products", "cart_items", "promo_codes", "orders", "order_items", "waiver_agreements"],
    domain: "commerce",
    description: "E-Commerce store engine: categorical gear inventory, cart persistence, promo codes (MA10, SUMMER2026), and liability waivers."
  },
  {
    step: "17-18",
    filename: "0017_grading .. 0018_gamified_attendance.sql",
    tablesCreated: ["grading_curriculum_tracks", "grading_requirements", "belt_evaluations", "student_weekly_stats", "student_overall_stats"],
    domain: "grading",
    description: "Syllabus milestone grading evaluator, automated MACERT certificate generation, and martial points leaderboard stats."
  },
  {
    step: "19-21",
    filename: "0019_media .. 0021_guides.sql",
    tablesCreated: ["media_assets", "forum_boards", "forum_topics", "forum_posts", "student_parent_guides"],
    domain: "community",
    description: "Gated video vault, discussion message boards with RBAC posting rules, and student/parent training handbooks."
  }
];

export const TEST_PERSONAS: TestPersona[] = [
  {
    id: "student",
    name: "Justin Kowalski",
    role: "student",
    email: "student@martialartsacademy.com",
    currentRank: "Level 1 White Belt",
    tokenBalance: 14,
    capabilities: [
      "Browse recurring class occurrence calendar",
      "Book in-person or live-stream class slots with instant token deduction",
      "Cancel bookings with instant automated token refund",
      "Access student video training vault and syllabus progress",
      "Participate in student community lounge forums"
    ],
    jwtClaim: {
      sub: "u-justin-01",
      role: "student",
      tier: "active_flex_pass",
      iss: "martialartsacademy.com"
    }
  },
  {
    id: "senior",
    name: "Elena Rostova",
    role: "student",
    email: "elena@martialartsacademy.com",
    currentRank: "Level 2 Yellow Belt",
    tokenBalance: 28,
    capabilities: [
      "Access intermediate Xiao Hong Quan and Heian Kata tutorials",
      "Book advanced sparring and weapons workshops",
      "View completed belt grading exam certificates (MACERT-)",
      "High rank points on academy-wide leaderboard"
    ],
    jwtClaim: {
      sub: "u-elena-02",
      role: "student",
      tier: "dedicated_disciple",
      iss: "martialartsacademy.com"
    }
  },
  {
    id: "instructor",
    name: "Chief Instructor Kenji Sato",
    role: "instructor",
    email: "instructor@martialartsacademy.com",
    currentRank: "5th Dan Chief Instructor",
    tokenBalance: 999,
    capabilities: [
      "Live check-in roster attendance (Mark Attended, No-Show, Excused)",
      "Evaluate student belt promotion exams across 5 syllabus tracks",
      "Award points for attendance gamification",
      "Post official dojo schedule updates and technique critiques"
    ],
    jwtClaim: {
      sub: "u-kenji-sato",
      role: "instructor",
      tier: "faculty",
      iss: "martialartsacademy.com"
    }
  },
  {
    id: "admin",
    name: "Head Master Marcus Vance",
    role: "admin",
    email: "admin@martialartsacademy.com",
    currentRank: "Grandmaster / Academy Director",
    tokenBalance: 999,
    capabilities: [
      "Full CRUD control over terms, classes, occurrences, and dojo halls",
      "Store inventory management (prices, stock, promo codes)",
      "Admin user management and manual token adjustments",
      "Database explorer and SQL audit telemetry console"
    ],
    jwtClaim: {
      sub: "u-marcus-vance",
      role: "admin",
      tier: "superuser",
      iss: "martialartsacademy.com"
    }
  }
];

export const SYSTEM_TELEMETRY = {
  backend: "Go 1.25 REST API Server (net/http + sub-millisecond route dispatch)",
  database: "Pure Go CGO-Free SQLite (modernc.org/sqlite) + 21 Migration Tiers",
  frontend: "Next.js 16.3 + Turbopack + Tailwind CSS (28 Static & Proxy Routes)",
  verificationSuite: "11-Step Automated E2E Test Suite (scripts/verify_api.py)",
  latencyP95: "< 0.85 ms",
  memoryFootprint: "24 MB RSS (Zero-Token Local Execution)",
  tokenRefundSLA: "Instantaneous (< 15 ms transactional rollback)"
};
