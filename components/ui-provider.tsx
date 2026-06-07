"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { SignupModal } from "./signup-modal";

type UIContext = {
  openSignup: () => void;
  scrollToDemo: () => void;
};

const Ctx = createContext<UIContext | null>(null);

export function useUI(): UIContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useUI must be used within <UIProvider>");
  return ctx;
}

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [signupOpen, setSignupOpen] = useState(false);

  const openSignup = useCallback(() => setSignupOpen(true), []);
  const scrollToDemo = useCallback(() => {
    document
      .getElementById("demo")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Ctx.Provider value={{ openSignup, scrollToDemo }}>
      {children}
      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </Ctx.Provider>
  );
}
