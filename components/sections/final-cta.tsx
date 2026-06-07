import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-24 text-center text-white sm:py-32">
      {/* subtle radial light */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.08]">
            Your financial future
            <br />
            starts in 5 minutes.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-lg text-[1.05rem] font-semibold text-white/85">
            The average American loses{" "}
            <span className="font-black text-white">$1,819 a year</span> to
            financial illiteracy. Five minutes a day is how you stop being
            average.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center gap-3.5">
            <CtaButton variant="white" action="demo" leading="🚀">
              Start your first lesson — free
            </CtaButton>
            <p className="text-[0.82rem] font-semibold text-white/65">
              No signup required for your first lesson. No jargon. No shame.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
