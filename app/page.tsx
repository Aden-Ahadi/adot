import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { TrustedCompanies } from "./components/trusted-companies";
import { ServicesSection } from "./components/services-section";
import { PortfolioBento } from "./components/portfolio-bento";
import { PackagesSection } from "./components/packages-section";
import TestimonialsSection from "./components/testimonials-section";
import Footer2 from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection/>
      <PortfolioBento /> 
      <PackagesSection />
      <TestimonialsSection />
      <Footer2 />
    </main>
  )

}
