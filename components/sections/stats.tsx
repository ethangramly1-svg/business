import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section aria-label="Key statistics" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 px-6 py-16 sm:py-20 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08}>
            <div className="text-center">
              <div className="text-[2.5rem] font-black leading-none text-brand">
                {s.num}
              </div>
              <div className="mx-auto mt-2.5 max-w-[13rem] text-sm font-semibold leading-snug text-white/55">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
