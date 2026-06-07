/* ============================================================
   STACKWISE CONTENT
   Single source of truth for all marketing + lesson copy.
   Stats keep their cited sources from the project plan.
   Social proof uses honest early-access placeholders —
   no invented names, cities, or specific dollar claims.
   ============================================================ */

export const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#" },
] as const;

/* ---------- Demo lesson ---------- */
export type Option = { text: string; correct?: boolean };
export type Question = {
  q: string;
  options: Option[];
  explain: string;
};

export const questions: Question[] = [
  {
    q: "What does an emergency fund cover?",
    options: [
      { text: "Unexpected expenses like job loss or medical bills", correct: true },
      { text: "Your monthly streaming subscriptions" },
      { text: "A down payment on a car you want" },
      { text: "Holiday gifts and vacations" },
    ],
    explain:
      "An emergency fund is 3–6 months of living expenses set aside for genuine emergencies — job loss, medical costs, urgent repairs. Not wants, not plans. Emergencies.",
  },
  {
    q: "Your credit score drops after you close an old credit card. Why?",
    options: [
      { text: "Closing cards always hurts your score permanently" },
      { text: "Your credit utilization rose and your history shortened", correct: true },
      { text: "The bank reported you as a late payer" },
      { text: "Your income is too low for that card" },
    ],
    explain:
      "Two factors hit at once: your available credit drops (raising utilization %), and you lose the age of that account. Your oldest accounts are the most valuable — keep them open, even idle.",
  },
  {
    q: "The 50/30/20 budget rule splits your after-tax income into:",
    options: [
      { text: "Savings / Needs / Wants" },
      { text: "Needs / Wants / Savings", correct: true },
      { text: "Rent / Food / Entertainment" },
      { text: "Investing / Debt / Living" },
    ],
    explain:
      "50% needs (rent, groceries, utilities), 30% wants (dining, hobbies), 20% savings and debt payoff. Simple enough to remember, flexible enough to actually follow.",
  },
  {
    q: "What is APY on a savings account?",
    options: [
      { text: "The monthly fee your bank charges" },
      { text: "Annual Percentage Yield — your real return, compounding included", correct: true },
      { text: "How much you can withdraw per year" },
      { text: "The interest rate before taxes" },
    ],
    explain:
      "APY (Annual Percentage Yield) bakes in compound interest — it's what you actually earn, not just the advertised rate. Always compare APY, not APR, when shopping savings accounts.",
  },
  {
    q: "You have $500 in available credit and carry a $250 balance. Your utilization is:",
    options: [
      { text: "25%" },
      { text: "50%", correct: true },
      { text: "75%" },
      { text: "100%" },
    ],
    explain:
      "Utilization = balance ÷ limit. $250 ÷ $500 = 50%. Lenders prefer under 30%; under 10% is even better. High utilization is the #1 fixable credit-score killer.",
  },
];

/* ---------- Stats strip ---------- */
export const stats = [
  { num: "49%", label: "Avg. US financial literacy score — stuck near 50% for 8 years" },
  { num: "$246B", label: "Cost of financial illiteracy in the US in 2025" },
  { num: "38%", label: "Gen Z literacy score — lowest of any generation" },
  { num: "5 min", label: "Per day is all it takes to build real money skills" },
] as const;

/* ---------- How it works ---------- */
export const steps = [
  {
    n: "1",
    icon: "🎯",
    title: "Pick your goal",
    body: "Eliminate debt, build credit, prep to buy a home, or start investing. A 60-second placement quiz puts you exactly where you need to be — not back at the beginning.",
  },
  {
    n: "2",
    icon: "⚡",
    title: "Do a 5-minute lesson",
    body: "Tap through questions, get instant feedback, earn XP. Each lesson builds on the last. The “why” after every answer IS the teaching — no lectures, no walls of text.",
  },
  {
    n: "3",
    icon: "🔥",
    title: "Build your streak",
    body: "Come back tomorrow. Your flame grows, your XP climbs, and your money knowledge compounds — just like interest. Miss a day? A streak freeze has your back.",
  },
] as const;

/* ---------- Gamification ---------- */
export const gameCards = [
  {
    accent: "amber" as const,
    icon: "🔥",
    title: "Daily Streaks",
    body: "The most powerful retention mechanic ever built. Your flame grows fiercer every day you show up.",
  },
  {
    accent: "violet" as const,
    icon: "💎",
    title: "XP & Levels",
    body: "Every correct answer fills your XP bar. Every milestone unlocks the next chapter. Progress you can see.",
  },
  {
    accent: "green" as const,
    icon: "❤️",
    title: "Hearts System",
    body: "Make a mistake — that's how you learn. Hearts give you grace, a second try, and a reason to return tomorrow.",
  },
  {
    accent: "blue" as const,
    icon: "🏆",
    title: "Weekly Leagues",
    body: "Compete with learners at your level. Rise to the Diamond league. A solo habit becomes friendly competition.",
  },
] as const;

/* ---------- Curriculum ---------- */
export type UnitStatus = "available" | "soon" | "locked";
export const units: {
  icon: string;
  title: string;
  body: string;
  status: UnitStatus;
}[] = [
  { icon: "💰", title: "Money Foundations", body: "Budgeting, emergency funds, credit scores, debt basics", status: "available" },
  { icon: "🏦", title: "Banking & Saving", body: "Accounts, APY, fee traps, automation", status: "available" },
  { icon: "💳", title: "Credit Mastery", body: "Building credit, reports, disputes, card strategies", status: "available" },
  { icon: "📈", title: "Investing 101", body: "Compounding, index funds, 401(k)/IRA, DCA", status: "soon" },
  { icon: "🧾", title: "Taxes Basics", body: "Brackets, withholding, refunds, W-4 basics", status: "locked" },
  { icon: "🏠", title: "Buying Your First Home", body: "Rent vs buy, mortgages, rates, closing costs", status: "locked" },
  { icon: "🛡️", title: "Protect Yourself", body: "Insurance, scams, identity-theft prevention", status: "locked" },
];

/* ---------- Social proof (honest early-access placeholders) ---------- */
export const testimonials = [
  {
    quote:
      "The lessons are short enough that I actually finish them — and the “why” after each answer is where it finally clicks.",
    avatar: "🌱",
    bg: "#dcfce7",
  },
  {
    quote:
      "It explained credit utilization and APY without making me feel behind. Five minutes, and I learned something real.",
    avatar: "✨",
    bg: "#ede9fe",
  },
  {
    quote:
      "The streak got me to come back three days in a row. I've never done that with a finance app before.",
    avatar: "🔥",
    bg: "#fef3c7",
  },
] as const;

/* ---------- The opportunity ---------- */
export const opportunity = [
  {
    num: "52.7M",
    body: "Duolingo daily active users proving the habit-loop model works at massive scale. Same mechanics, different subject. Nobody's cracked it for money.",
    source: "Source: Duolingo Q3 FY2025, SEC filing",
  },
  {
    num: "$1,819",
    body: "Average annual cost per American from financial illiteracy — overpaid fees, bad rates, missed opportunities. Real, preventable money.",
    source: "Source: National Financial Educators Council, 2025",
  },
  {
    num: "38%",
    body: "Gen Z's average financial literacy score. The most app-native generation is hitting first-paycheck and first-card moments flying blind.",
    source: "Source: FINRA Foundation / WalletHub 2026",
  },
  {
    num: "0",
    body: "Competitors with Duolingo-grade product craft in personal finance. Modules exist — but none owns the consumer brand or the fun-first loop.",
    source: "Source: Stackwise market analysis",
  },
] as const;

/* ---------- Pricing ---------- */
export const pricing = {
  free: {
    name: "Free",
    price: "$0",
    cadence: "/ month",
    desc: "Everything you need to build a real money habit. No credit card required — ever.",
    features: [
      { label: "3 units (12 lessons)", on: true },
      { label: "Streaks & XP", on: true },
      { label: "Hearts system", on: true },
      { label: "Daily goals", on: true },
      { label: "Cloud progress sync", on: true },
      { label: "Unlimited hearts", on: false },
      { label: "All 7 units", on: false },
      { label: "Streak freezes", on: false },
      { label: "Practice mode", on: false },
    ],
    cta: "Start for free",
  },
  plus: {
    name: "Stackwise Plus",
    price: "$9.99",
    cadence: "/ month",
    desc: "No limits. The full curriculum, every protection, and tools that make the lessons real.",
    features: [
      { label: "Everything in Free", on: true },
      { label: "Unlimited hearts", on: true },
      { label: "All 7 units — full curriculum", on: true },
      { label: "Streak freeze protection", on: true },
      { label: "Practice mode & spaced repetition", on: true },
      { label: "Interactive calculators", on: true },
      { label: "Weekly leagues", on: true },
      { label: "Offline lessons (PWA)", on: true },
    ],
    cta: "Try Plus free for 7 days",
  },
} as const;
