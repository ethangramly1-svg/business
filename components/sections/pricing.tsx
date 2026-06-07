import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { pricing } from "@/lib/content";

type Plan = typeof pricing.free | typeof pricing.plus;

function FeatureList({ features }: { features: Plan["features"] }) {
  return (
    <ul className="mt-6 flex flex-col gap-2.5">
      {features.map((f) => (
        <li
          key={f.label}
          className={`flex items-center gap-2.5 text-[0.875rem] font-semibold ${
            f.on ? "text-gray-700" : "text-gray-400"
          }`}
        >
          <span
            className={`grid h-4 w-4 shrink-0 place-items-center ${
              f.on ? "text-brand" : "text-gray-300"
            }`}
            aria-hidden="true"
          >
            {f.on ? "✓" : "○"}
          </span>
          {f.label}
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  const { free, plus } = pricing;
  return (
    <section id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          tag="💳 Pricing"
          title={
            <>
              Free forever.
              <br />
              Plus for the serious.
            </>
          }
          sub="The free tier is genuinely good. Plus is for people who want to go deeper, faster."
        />

        <div className="mt-16 grid items-start gap-6 sm:grid-cols-2">
          {/* Free */}
          <Reveal>
            <div className="rounded-[2rem] border-2 border-gray-200/80 bg-white p-8">
              <div className="text-sm font-bold text-gray-500">{free.name}</div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-[2.75rem] font-black leading-none">
                  {free.price}
                </span>
                <span className="pb-1 text-base font-bold text-gray-400">
                  {free.cadence}
                </span>
              </div>
              <p className="mt-3 text-[0.875rem] font-semibold leading-relaxed text-gray-500">
                {free.desc}
              </p>
              <FeatureList features={free.features} />
              <div className="mt-7">
                <CtaButton variant="soft" action="demo">
                  {free.cta}
                </CtaButton>
              </div>
            </div>
          </Reveal>

          {/* Plus — featured */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[2rem] border-2 border-brand bg-white p-8 shadow-glow-soft ring-4 ring-brand/10">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-[0.7rem] font-extrabold text-white">
                Most popular
              </span>
              <div className="text-sm font-bold text-gray-500">{plus.name}</div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-[2.75rem] font-black leading-none">
                  {plus.price}
                </span>
                <span className="pb-1 text-base font-bold text-gray-400">
                  {plus.cadence}
                </span>
              </div>
              <p className="mt-3 text-[0.875rem] font-semibold leading-relaxed text-gray-500">
                {plus.desc}
              </p>
              <FeatureList features={plus.features} />
              <div className="mt-7">
                <CtaButton variant="primary" action="signup" className="w-full">
                  {plus.cta}
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-center text-[0.8rem] font-semibold text-gray-400">
          Annual plan: $59/yr (save 51%). Cancel anytime.
        </p>
      </div>
    </section>
  );
}
