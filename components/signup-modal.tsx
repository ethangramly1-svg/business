"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function SignupModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock scroll + wire Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Sign up for Stackwise"
        >
          <div className="absolute inset-0 bg-ink/55 backdrop-blur-md" />
          <motion.div
            className="relative w-full max-w-[420px] rounded-[2rem] bg-white p-2 shadow-lift ring-1 ring-black/5"
            initial={{ scale: 0.94, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 8, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bezel-inner-light rounded-[calc(2rem-0.5rem)] bg-white px-8 py-9">
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="mb-2 text-center text-4xl">🚀</div>
              <h3 className="text-center text-2xl font-black tracking-tight">
                You&apos;re on a roll!
              </h3>
              <p className="mx-auto mt-1.5 max-w-[18rem] text-center text-sm font-semibold text-gray-500">
                Create a free account to save your progress and start your streak.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <button className="flex items-center justify-center gap-2.5 rounded-2xl border-2 border-gray-200 bg-white py-3 text-[0.95rem] font-bold transition-colors hover:bg-gray-50">
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>

                <div className="my-1 flex items-center gap-3">
                  <span className="h-px flex-1 bg-gray-200" />
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400">
                    or
                  </span>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>

                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-2xl border-2 border-gray-200 px-4 py-3 text-[0.95rem] font-semibold outline-none transition-colors focus:border-brand"
                />
                <button className="rounded-2xl bg-brand py-3.5 text-[0.95rem] font-extrabold text-white shadow-glow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-dark">
                  Create free account →
                </button>
              </div>

              <p className="mt-4 text-center text-[0.7rem] font-semibold text-gray-400">
                By signing up you agree to our Terms &amp; Privacy Policy. No credit card ever.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
