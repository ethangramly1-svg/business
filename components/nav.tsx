"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { CtaButton } from "./cta-button";
import { Logo } from "./logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet if we cross back to desktop.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        className={`mt-4 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-black/[0.06] py-2 pl-5 pr-2 transition-all duration-500 ease-fluid ${
          scrolled
            ? "bg-white/80 shadow-soft backdrop-blur-xl"
            : "bg-white/45 backdrop-blur-md"
        }`}
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-bold text-gray-500 transition-colors duration-300 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CtaButton variant="nav" action="demo" arrow={false}>
              Start for free
            </CtaButton>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative grid h-10 w-10 place-items-center rounded-full bg-white/70 ring-1 ring-black/[0.06] md:hidden"
          >
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-gray-900 transition-all duration-300 ease-fluid ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-gray-900 transition-all duration-300 ease-fluid ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 -z-[1] flex flex-col bg-white/85 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-3 px-9 pt-32">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[2rem] font-black text-gray-900"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
                onClick={() => setOpen(false)}
              >
                <CtaButton action="demo" leading="🚀">
                  Start your first lesson
                </CtaButton>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
