import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { testimonials } from "@/lib/content";

export function Proof() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="💬 Early access"
          title={
            <>
              What our first learners
              <br />
              are telling us.
            </>
          }
          sub="Moola is in early access. These reflect the kind of feedback we hear from beta learners — named stories arrive at public launch."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-black/[0.05] bg-gray-50 p-7 shadow-soft">
                <div className="text-base text-amber-400" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote className="mt-3 flex-1 text-[0.95rem] font-semibold leading-relaxed text-gray-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full text-lg"
                    style={{ background: t.bg }}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </span>
                  <span className="text-[0.8rem] font-bold text-gray-500">
                    Early access member
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
