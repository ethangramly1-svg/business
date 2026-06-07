"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { useUI } from "@/components/ui-provider";
import { questions } from "@/lib/content";

const letters = ["A", "B", "C", "D"];

export function DemoLesson() {
  const { openSignup } = useUI();
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [xp, setXp] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const actionRef = useRef<HTMLButtonElement>(null);

  const q = questions[qi];
  const isRight = selected !== null && q.options[selected]?.correct;
  const progress = done ? 100 : (qi / questions.length) * 100;

  function spawnCoin(x: number, y: number) {
    const el = document.createElement("div");
    el.className = "coin-burst";
    el.textContent = "🪙";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    window.setTimeout(() => el.remove(), 900);
  }

  function burstFrom(el: HTMLElement | null, count: number) {
    if (!el) return;
    const r = el.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      window.setTimeout(
        () =>
          spawnCoin(
            r.left + r.width / 2 + (Math.random() - 0.5) * 80,
            r.top + r.height / 2
          ),
        i * 70
      );
    }
  }

  function onCheck() {
    if (selected === null || answered) return;
    setAnswered(true);
    if (q.options[selected].correct) {
      setXp((x) => x + 20);
      setCorrect((c) => c + 1);
      burstFrom(actionRef.current, 5);
    }
  }

  function onNext() {
    if (qi + 1 >= questions.length) {
      setDone(true);
      window.setTimeout(() => burstFrom(actionRef.current, 8), 50);
      return;
    }
    setQi((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  }

  function optClass(i: number) {
    const isC = q.options[i].correct;
    if (!answered) {
      return selected === i
        ? "border-brand bg-emerald-50 text-brand-dark"
        : "border-gray-200 bg-white text-gray-700 hover:border-brand hover:bg-emerald-50/60 hover:text-brand-dark";
    }
    if (isC) return "border-brand bg-emerald-100 text-brand-dark";
    if (selected === i) return "border-red-400 bg-red-50 text-red-600";
    return "border-gray-200 bg-white text-gray-400 opacity-60";
  }

  return (
    <section id="demo" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          tag="🎮 Try it now — no signup"
          title={
            <>
              Play a real lesson.
              <br />
              Then decide.
            </>
          }
          sub="Experience the Moola loop before you commit to anything — ever. The product IS the pitch."
        />

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white p-1.5 shadow-lift">
            <div className="overflow-hidden rounded-[calc(2rem-0.375rem)]">
              {/* Header */}
              <div className="flex items-center justify-between bg-brand px-6 py-4 text-white">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full bg-white/25 px-2.5 py-1 text-[0.7rem] font-bold">
                    Unit 1
                  </span>
                  <span className="text-[0.95rem] font-extrabold">
                    Money Foundations
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1 text-sm font-bold">
                  <span>⭐</span> {xp} XP
                </div>
              </div>

              {/* Progress */}
              <div
                className="h-2 bg-gray-200"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
              >
                <div
                  className="h-full rounded-r-full bg-brand transition-all duration-500 ease-spring"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Body */}
              {!done ? (
                <div className="px-6 py-8 sm:px-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={qi}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <div className="text-[0.8rem] font-bold text-gray-400">
                        Question {qi + 1} of {questions.length}
                      </div>
                      <h3 className="mt-2 text-[1.2rem] font-extrabold leading-snug">
                        {q.q}
                      </h3>

                      <div className="mt-6 flex flex-col gap-2.5" role="group">
                        {q.options.map((opt, i) => (
                          <button
                            key={i}
                            type="button"
                            disabled={answered}
                            onClick={() => !answered && setSelected(i)}
                            className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left text-[0.92rem] font-bold transition-all duration-200 ${optClass(
                              i
                            )}`}
                          >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-current text-[0.7rem]">
                              {letters[i]}
                            </span>
                            {opt.text}
                          </button>
                        ))}
                      </div>

                      <AnimatePresence>
                        {answered ? (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mt-5 flex items-start gap-3 rounded-2xl px-4 py-3.5 ${
                              isRight
                                ? "bg-emerald-100 text-brand-dark"
                                : "bg-red-50 text-red-600"
                            }`}
                          >
                            <span className="text-xl leading-none">
                              {isRight ? "✅" : "❌"}
                            </span>
                            <div>
                              <div className="text-[0.92rem] font-extrabold">
                                {isRight
                                  ? "Correct! Nice work."
                                  : "Not quite — here's why:"}
                              </div>
                              <div className="mt-0.5 text-[0.82rem] font-semibold opacity-80">
                                {q.explain}
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <div className="mt-6">
                        {!answered ? (
                          <button
                            ref={actionRef}
                            type="button"
                            disabled={selected === null}
                            onClick={onCheck}
                            className="w-full rounded-2xl bg-brand py-3.5 text-[0.95rem] font-extrabold text-white transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                          >
                            Check answer
                          </button>
                        ) : (
                          <button
                            ref={actionRef}
                            type="button"
                            onClick={onNext}
                            className="w-full rounded-2xl bg-brand py-3.5 text-[0.95rem] font-extrabold text-white transition-all hover:bg-brand-dark"
                          >
                            Continue →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                /* Complete screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="px-6 py-12 text-center sm:px-8"
                >
                  <div className="text-6xl">🎉</div>
                  <h3 className="mt-3 text-2xl font-black">Lesson complete!</h3>
                  <p className="mx-auto mt-2 max-w-sm font-semibold text-gray-500">
                    You just learned how emergency funds, credit, and APY really
                    work. That&apos;s real money knowledge — and you earned it.
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    {[
                      { num: xp, label: "XP earned" },
                      { num: `${correct}/${questions.length}`, label: "Correct" },
                      { num: "🔥 1", label: "Day streak" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border-2 border-gray-200 bg-gray-50 px-5 py-3"
                      >
                        <div className="text-2xl font-black text-brand">
                          {s.num}
                        </div>
                        <div className="text-[0.72rem] font-semibold text-gray-500">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={openSignup}
                    className="mt-8 w-full rounded-2xl bg-brand py-4 text-[1.0625rem] font-extrabold text-white shadow-glow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Continue learning — it&apos;s free →
                  </button>
                  <p className="mt-3 text-[0.8rem] font-semibold text-gray-400">
                    No credit card. No jargon. Just progress.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
