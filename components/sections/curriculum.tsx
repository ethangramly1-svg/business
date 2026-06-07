import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { units, type UnitStatus } from "@/lib/content";

const badge: Record<UnitStatus, { cls: string; label: string }> = {
  available: { cls: "bg-emerald-100 text-emerald-700", label: "Available now" },
  soon: { cls: "bg-amber-100 text-amber-700", label: "Coming soon" },
  locked: { cls: "bg-gray-100 text-gray-400", label: "🔒 Locked" },
};

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="📚 Curriculum"
          title={
            <>
              7 units. Every money topic
              <br />
              you actually need.
            </>
          }
          sub="Written by finance educators, reviewed by a CFP. Shame-free, jargon-free, and sequenced so every lesson prepares the next."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u, i) => {
            const b = badge[u.status];
            return (
              <Reveal key={u.title} delay={(i % 3) * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border-2 border-gray-200/80 bg-white p-5 transition-all duration-500 ease-fluid hover:-translate-y-0.5 hover:border-brand">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-xl">
                    {u.icon}
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] font-extrabold">{u.title}</h3>
                    <p className="mt-1 text-[0.8rem] font-semibold leading-snug text-gray-500">
                      {u.body}
                    </p>
                    <span
                      className={`mt-2.5 inline-block rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${b.cls}`}
                    >
                      {b.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
