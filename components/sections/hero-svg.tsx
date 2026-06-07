/**
 * Instant-load animated SVG hero scene.
 * Path draws itself, the streak flame flickers, XP gems float, and the
 * home-buying "goal" house glows — all via CSS keyframes (globals.css),
 * so it paints before any JS or the 3D scene loads. Decorative only.
 */
export function HeroSvg() {
  return (
    <svg
      viewBox="0 0 800 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a lesson path with coins, XP gems, a streak flame, and a home-buying goal"
      className="h-auto w-full"
    >
      {/* Ground */}
      <rect x="0" y="190" width="800" height="70" fill="#f0fdf4" rx="14" />

      {/* Path line — draws on load */}
      <path
        d="M 80 180 Q 160 150 240 170 Q 320 190 400 155 Q 480 120 560 145 Q 640 170 720 130"
        stroke="#bbf7d0"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="1200"
        strokeDashoffset="1200"
        style={{ animation: "drawPath 2s var(--ease-out-quint) 0.4s forwards" }}
      />

      {/* Coin stack (left) */}
      <g>
        <ellipse cx="80" cy="182" rx="22" ry="7" fill="#f59e0b" />
        <rect x="58" y="157" width="44" height="25" rx="4" fill="#fbbf24" />
        <ellipse cx="80" cy="157" rx="22" ry="7" fill="#fcd34d" />
        <text x="80" y="162" textAnchor="middle" fontSize="10" fontWeight="900" fill="#78350f">
          $
        </text>
      </g>

      {/* Node 1: completed */}
      <circle cx="200" cy="168" r="22" fill="#22c55e" />
      <text x="200" y="174" textAnchor="middle" fontSize="16" fill="white">
        ✓
      </text>

      {/* XP gem near node 1 */}
      <g style={{ animation: "gemFloat 3s ease 1s infinite" }}>
        <polygon points="200,120 212,135 200,145 188,135" fill="#8b5cf6" opacity=".9" />
        <polygon points="200,125 208,135 200,140 192,135" fill="#a78bfa" />
      </g>

      {/* Node 2: active / pulsing */}
      <circle
        cx="370"
        cy="155"
        r="26"
        fill="#22c55e"
        opacity=".15"
        style={{ animation: "pulseRing 1.5s infinite" }}
      />
      <circle cx="370" cy="155" r="22" fill="#22c55e" />
      <text x="370" y="161" textAnchor="middle" fontSize="15" fontWeight="900" fill="white">
        5
      </text>

      {/* Streak flame above active node */}
      <g style={{ animation: "flicker 1.2s ease-in-out infinite", transformOrigin: "370px 130px" }}>
        <path d="M370 118 Q362 112 363 103 Q368 108 370 104 Q372 108 377 103 Q378 112 370 118Z" fill="#f59e0b" />
        <path d="M370 115 Q365 111 366 105 Q370 109 370 105 Q374 109 374 105 Q375 111 370 115Z" fill="#fbbf24" />
      </g>

      {/* Node 3: locked */}
      <circle cx="520" cy="148" r="22" fill="#e5e7eb" />
      <text x="520" y="154" textAnchor="middle" fontSize="15" fill="#9ca3af">
        🔒
      </text>

      {/* Node 4: locked */}
      <circle cx="660" cy="134" r="22" fill="#e5e7eb" />
      <text x="660" y="140" textAnchor="middle" fontSize="15" fill="#9ca3af">
        🔒
      </text>

      {/* House goal at the end */}
      <g style={{ animation: "housePulse 2.5s ease-in-out infinite" }}>
        <rect x="708" y="110" width="36" height="28" rx="3" fill="#16a34a" />
        <polygon points="704,112 726,92 748,112" fill="#15803d" />
        <rect x="719" y="124" width="12" height="14" rx="2" fill="#052e16" />
        <rect x="710" y="117" width="9" height="9" rx="1" fill="#86efac" />
        <text x="726" y="90" textAnchor="middle" fontSize="13">
          ⭐
        </text>
      </g>

      {/* XP gem near node 3 */}
      <g style={{ animation: "gemFloat 3s ease 2s infinite" }}>
        <polygon points="520,105 530,118 520,127 510,118" fill="#8b5cf6" opacity=".7" />
        <polygon points="520,109 526,118 520,123 514,118" fill="#a78bfa" />
      </g>

      {/* Progress pill */}
      <g>
        <rect x="295" y="185" width="170" height="28" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <text x="380" y="204" textAnchor="middle" fontSize="11" fontWeight="700" fill="#22c55e">
          🔥 4-day streak • 340 XP
        </text>
      </g>
    </svg>
  );
}
