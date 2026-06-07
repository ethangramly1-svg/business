"use client";

import type { ReactNode } from "react";
import { useUI } from "./ui-provider";

type Variant = "primary" | "white" | "soft" | "nav";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-extrabold " +
  "transition-all duration-500 ease-fluid active:scale-[0.98] select-none cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white pl-7 pr-2.5 py-2.5 text-[1.0625rem] shadow-glow " +
    "hover:bg-brand-dark hover:-translate-y-0.5",
  white:
    "bg-white text-brand-darker pl-7 pr-2.5 py-2.5 text-[1.0625rem] shadow-lift " +
    "hover:-translate-y-0.5",
  soft:
    "w-full bg-gray-100 text-gray-700 px-6 py-3.5 text-[0.95rem] hover:bg-gray-200",
  nav:
    "bg-brand text-white px-5 py-2 text-sm shadow-glow-soft hover:bg-brand-dark hover:-translate-y-px",
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CtaButton({
  children,
  action = "demo",
  href,
  variant = "primary",
  leading,
  arrow,
  className = "",
}: {
  children: ReactNode;
  action?: "demo" | "signup";
  href?: string;
  variant?: Variant;
  leading?: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  const ui = useUI();
  const showArrow = arrow ?? (variant === "primary" || variant === "white");
  const cls = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {leading ? (
        <span className="text-[1.15em] leading-none">{leading}</span>
      ) : null}
      <span>{children}</span>
      {showArrow ? (
        <span
          className={`ml-1 grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${
            variant === "white" ? "bg-brand/10" : "bg-white/20"
          }`}
        >
          <Arrow className={variant === "white" ? "text-brand-darker" : "text-white"} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={action === "signup" ? ui.openSignup : ui.scrollToDemo}
      className={cls}
    >
      {inner}
    </button>
  );
}
