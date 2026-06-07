import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { ThreeWorld } from "@/components/sections/three-world";
import { Stats } from "@/components/sections/stats";
import { DemoLesson } from "@/components/sections/demo-lesson";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Gamification } from "@/components/sections/gamification";
import { Curriculum } from "@/components/sections/curriculum";
import { Proof } from "@/components/sections/proof";
import { Opportunity } from "@/components/sections/opportunity";
import { Pricing } from "@/components/sections/pricing";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ThreeWorld />
        <Stats />
        <DemoLesson />
        <HowItWorks />
        <Gamification />
        <Curriculum />
        <Proof />
        <Opportunity />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
