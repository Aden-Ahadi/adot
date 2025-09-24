import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation/>
      <HeroSection />
    </main>
  )

}
