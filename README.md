# Stackwise

**The Duolingo of personal finance.** 5 minutes a day to money mastery — budgeting,
credit, investing, and home buying, learned through streaks, XP, and bite-sized
quizzes. Premium marketing site with a playable demo lesson and a real-time 3D
lesson-path world.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
React Three Fiber · Framer Motion**.

---

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

```bash
pnpm build && pnpm start   # production build + serve
```

> Requires Node 18.18+ and pnpm. The `sharp` build approval lives in
> `pnpm-workspace.yaml` so installs don't error under pnpm 11.

---

## Deploy to Vercel

This repo is Vercel-native — no config needed. To connect it (one-time):

1. Go to **vercel.com → Add New → Project**.
2. **Import** the `ethangramly1-svg/business` GitHub repo.
3. Framework preset auto-detects as **Next.js**. Leave build/output settings at
   their defaults (`pnpm build`).
4. Click **Deploy**.

After that, **every `git push` to `main` auto-deploys to production**, and every
branch / PR gets its own preview URL. To point `stackwise.app` at it, add the
domain under **Project → Settings → Domains**.

---

## Project structure

```
app/
  layout.tsx          Root layout — Nunito font, SEO metadata, grain overlay, UIProvider
  page.tsx            Composes every section in order
  globals.css         Tailwind v4 @theme tokens, base styles, keyframes
components/
  nav.tsx             Floating glass-pill nav + morphing hamburger + mobile sheet
  ui-provider.tsx     Context for the global signup modal + scroll-to-demo
  cta-button.tsx      Premium CTA (button-in-button arrow, magnetic hover)
  reveal.tsx          Framer Motion scroll-entry wrapper
  section-header.tsx  Shared eyebrow + heading + subhead
  signup-modal.tsx    Animated signup modal
  sections/           Hero, ThreeWorld, Stats, DemoLesson, HowItWorks,
                      Gamification, Curriculum, Proof, Opportunity, Pricing,
                      FinalCta, Footer, HeroSvg
  three/
    island-scene.tsx  React Three Fiber low-poly island (lazy-loaded, ssr:false)
lib/
  content.ts          Single source of truth for all copy + the demo lesson Q&A
public/
  favicon.svg
```

## Editing content

All marketing copy, curriculum units, pricing, and the 5-question demo lesson live
in [`lib/content.ts`](lib/content.ts). Change text there and it flows through every
section — no component edits needed.

## Notes

- **Performance:** the 3D scene is lazy-loaded client-side via `next/dynamic`
  (`ssr: false`), so the marketing HTML paints instantly while the WebGL island
  fades in. First-load JS for the page is ~150 kB; three.js loads as a separate chunk.
- **Accessibility / reduced motion:** `prefers-reduced-motion` renders the 3D scene
  as a single static frame and disables decorative animation. Every CTA has a real
  DOM action; the 3D is purely decorative.
- **Social proof is honest placeholder.** The testimonials are framed as early-access
  feedback with no invented names, cities, or dollar claims — swap in real quotes in
  `lib/content.ts` before launch.
- **Not financial advice.** Content is educational only.

## Roadmap

This is the landing page (plan §10 steps 1–4) plus the deploy pipeline. Next up: the
logged-in `/learn` dashboard where the 3D island becomes the interactive lesson map.
