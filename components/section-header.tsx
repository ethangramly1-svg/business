import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeader({
  tag,
  title,
  sub,
  dark = false,
}: {
  tag: string;
  title: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <span
          className={`inline-block rounded-full px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] ${
            dark ? "bg-brand/20 text-brand" : "bg-brand/10 text-brand-darker"
          }`}
        >
          {tag}
        </span>
        <h2
          className={`mt-5 text-[clamp(1.9rem,4.5vw,3rem)] font-black leading-[1.1] ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        {sub ? (
          <p
            className={`mx-auto mt-4 max-w-xl text-[1.05rem] font-semibold ${
              dark ? "text-white/60" : "text-gray-500"
            }`}
          >
            {sub}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
