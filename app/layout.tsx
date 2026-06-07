import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/components/ui-provider";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const SITE_URL = "https://stackwise.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stackwise — The Duolingo of Personal Finance",
    template: "%s · Stackwise",
  },
  description:
    "5 minutes a day to money mastery. Budgeting, credit, investing, and home buying — learned through streaks, XP, and bite-sized quizzes you'll actually want to finish.",
  keywords: [
    "personal finance",
    "financial literacy",
    "budgeting",
    "credit score",
    "investing",
    "money app",
    "gamified learning",
  ],
  authors: [{ name: "Stackwise" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Stackwise",
    title: "Stackwise — The Duolingo of Personal Finance",
    description:
      "5 minutes a day to money mastery. Money skills through streaks, XP, and bite-sized quizzes — finally fun.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackwise — The Duolingo of Personal Finance",
    description:
      "5 minutes a day to money mastery. Money skills through streaks, XP, and bite-sized quizzes — finally fun.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans">
        <div className="grain-overlay" aria-hidden="true" />
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
