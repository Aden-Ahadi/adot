import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { TrustedCompanies } from "./components/trusted-companies";
import { ServicesSection } from "./components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection/>
    </main>
  )

}
