import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Try a lesson", href: "#demo" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Pricing", href: "#pricing" },
      { label: "Calculators", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-16 text-white/55">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10">
        <div className="max-w-[15rem]">
          <Logo dark />
          <p className="mt-4 text-[0.8rem] font-semibold leading-relaxed">
            The Duolingo of personal finance. 5 minutes a day to money mastery.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[0.875rem] font-extrabold text-white">
              {col.title}
            </h3>
            <ul className="mt-3.5 flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[0.8rem] font-semibold transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[0.75rem] font-semibold">
        <span>© 2026 Stackwise. Educational content only. Not financial advice.</span>
        <span>Built for the financially curious.</span>
      </div>
    </footer>
  );
}
