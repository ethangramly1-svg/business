export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Moola home"
      className={`flex items-center gap-2 text-[1.3rem] font-black tracking-tight ${
        dark ? "text-white" : "text-brand-dark"
      }`}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#22c55e" />
        <rect x="7" y="18" width="18" height="4" rx="2" fill="white" />
        <rect x="9" y="13" width="14" height="4" rx="2" fill="rgba(255,255,255,.8)" />
        <rect x="11" y="8" width="10" height="4" rx="2" fill="rgba(255,255,255,.6)" />
      </svg>
      Moola
    </a>
  );
}
