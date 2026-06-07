import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { opportunity } from "@/lib/content";

export function Opportunity() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="📊 The case for Moola"
          dark
          title={
            <>
              A $246 billion problem.
              <br />
              No great solution. Yet.
            </>
          }
          sub="The pain is universal, the mechanics are proven, and nobody has executed them well for personal finance."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {opportunity.map((o, i) => (
            <Reveal key={o.num} delay={(i % 2) * 0.1}>
              <div className="h-full rounded-[1.75rem] border border-white/[0.12] bg-white/[0.06] p-7">
                <div className="text-[2rem] font-black text-brand">{o.num}</div>
                <p className="mt-2 text-[0.9rem] font-semibold leading-relaxed text-white/60">
                  {o.body}
                </p>
                <p className="mt-3 text-[0.7rem] font-semibold text-white/30">
                  {o.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
