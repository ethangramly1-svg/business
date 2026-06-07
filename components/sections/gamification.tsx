import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { gameCards } from "@/lib/content";

const accentMap: Record<string, string> = {
  amber: "bg-amber-50 border-amber-200/70",
  violet: "bg-violet-50 border-violet-200/70",
  green: "bg-emerald-50 border-emerald-200/70",
  blue: "bg-blue-50 border-blue-200/70",
};

function StreakStrip() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="mt-5 flex items-center gap-1.5" aria-label="5-day streak example">
      {days.map((d, i) => {
        const done = i < 4;
        const today = i === 4;
        return (
          <div
            key={i}
            className={`grid h-9 w-7 place-items-center rounded-lg text-[0.7rem] font-bold ${
              done || today ? "bg-amber-400 text-white" : "bg-gray-200 text-gray-400"
            } ${today ? "ring-2 ring-amber-300 ring-offset-1" : ""}`}
          >
            {done || today ? "🔥" : d}
          </div>
        );
      })}
    </div>
  );
}

function XpBar() {
  return (
    <div className="mt-5" aria-label="XP progress: 680 of 1000">
      <div className="h-2.5 overflow-hidden rounded-full bg-violet-200/70">
        <div className="h-full rounded-full bg-violet-500" style={{ width: "68%" }} />
      </div>
      <div className="mt-1.5 flex justify-between text-[0.72rem] font-bold text-violet-500">
        <span>680 XP</span>
        <span>Lvl 4 → 1000</span>
      </div>
    </div>
  );
}

export function Gamification() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="✨ Designed to stick"
          title={
            <>
              Every mechanic
              <br />
              earns its place.
            </>
          }
          sub="We borrowed the best ideas from Duolingo and built them around the topic that actually changes your life."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {gameCards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <div
                className={`h-full rounded-[1.75rem] border p-7 transition-transform duration-500 ease-fluid hover:-translate-y-1 ${accentMap[c.accent]}`}
              >
                <div className="text-4xl">{c.icon}</div>
                <h3 className="mt-3 text-lg font-extrabold">{c.title}</h3>
                <p className="mt-1.5 text-[0.9rem] font-semibold leading-relaxed text-gray-500">
                  {c.body}
                </p>
                {c.accent === "amber" ? <StreakStrip /> : null}
                {c.accent === "violet" ? <XpBar /> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
