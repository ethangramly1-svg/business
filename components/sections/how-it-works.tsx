import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="How it works"
          title={
            <>
              Three steps to
              <br />
              money confidence.
            </>
          }
          sub="Built on the same habit loop that made Duolingo addictive — applied to the thing that actually changes your life."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group h-full rounded-[2rem] border border-black/[0.05] bg-white p-2 shadow-soft transition-all duration-500 ease-fluid hover:-translate-y-1 hover:shadow-lift">
                <div className="bezel-inner-light flex h-full flex-col rounded-[calc(2rem-0.5rem)] bg-white p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-lg font-black text-brand-dark">
                    {s.n}
                  </div>
                  <div className="mt-5 text-3xl">{s.icon}</div>
                  <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-[0.92rem] font-semibold leading-relaxed text-gray-500">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
