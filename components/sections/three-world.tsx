"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy-load the WebGL island only on the client, after first paint.
const IslandScene = dynamic(
  () => import("../three/island-scene").then((m) => m.IslandScene),
  { ssr: false, loading: () => null }
);

export function ThreeWorld() {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMounted(true);
  }, []);

  return (
    <section
      aria-label="3D lesson-path world"
      className="relative h-[520px] overflow-hidden sm:h-[560px]"
      style={{ background: "linear-gradient(to bottom, #f0fdf4, #ecfdf5)" }}
    >
      {mounted ? <IslandScene reducedMotion={reduced} /> : null}

      <div className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center px-6 text-center">
        <span className="mb-3 rounded-full border border-gray-200 bg-white/85 px-4 py-1.5 text-[0.8rem] font-bold text-gray-500">
          Your lesson world
        </span>
        <h2
          className="text-[clamp(1.6rem,4vw,2.4rem)] font-black leading-tight text-gray-900"
          style={{ textShadow: "0 2px 16px rgba(255,255,255,0.85)" }}
        >
          An explorable 3D game world.
          <br />
          Not homework.
        </h2>
      </div>
    </section>
  );
}
