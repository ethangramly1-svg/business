import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { HeroSvg } from "./hero-svg";

export function Hero() {
  return (
    <header id="top" className="relative isolate overflow-hidden">
      <div className="mesh-emerald absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-36 text-center sm:pt-44">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-brand-darker">
            <span className="text-[0.95rem]">🎮</span> The Duolingo of Personal Finance
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-[18ch] text-balance text-[clamp(2.5rem,6.5vw,4.25rem)] font-black leading-[1.05]">
            Money skills in{" "}
            <span className="text-gradient-emerald">5 minutes a day.</span>{" "}
            Finally fun.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-[34rem] text-[clamp(1.05rem,2.4vw,1.25rem)] font-semibold text-gray-500">
            Budgeting, credit, investing, and home buying — learned through
            streaks, XP, and bite-sized quizzes you&apos;ll actually want to
            finish.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-center gap-3.5">
            <CtaButton action="demo" leading="🚀">
              Start your first lesson — free
            </CtaButton>
            <p className="text-[0.82rem] font-bold text-gray-400">
              No signup required.{" "}
              <span className="text-brand">No jargon. No shame.</span>
            </p>
          </div>
        </Reveal>

        {/* Hero visual — double-bezel frame around the animated SVG */}
        <Reveal delay={0.34}>
          <div className="mt-16 w-full max-w-3xl rounded-[2rem] border border-black/[0.05] bg-white/55 p-2 shadow-soft">
            <div className="bezel-inner-light overflow-hidden rounded-[calc(2rem-0.5rem)] bg-gradient-to-b from-white to-emerald-50/70 px-4 py-5">
              <HeroSvg />
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
