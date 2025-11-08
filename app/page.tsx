'use client';

import Image from "next/image";
import Script from "next/script";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { TrustedCompanies } from "./components/trusted-companies";
import { ServicesSection } from "./components/services-section";
import { PackagesSection } from "./components/packages-section";
import TestimonialsSection from "./components/testimonials-section";
import ContactPage from "./components/contact-page";
import Footer2 from "./components/footer";
import { FloatingWhatsApp } from "./components/floating-whatsapp";
import LiquidEther from '../components/LiquidEther';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* LiquidEther Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
        />
      </div>
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">

      <Script id="ld-json-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization.",
          name: "adotdevs",
          url: "https://adotdevs.com/",
          logo: "https://adotdevs.com/adot.logo.png",
          sameAs: [
          ],
          contactPoint: [{
            "@type": "ContactPoint",
            telephone: "+255747583412",
            contactType: "customer service",
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          }],
        })}
      </Script>
      <Navigation/>
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection/>
      <PackagesSection />
      <TestimonialsSection />
      <ContactPage />
      <Footer2 />
      <FloatingWhatsApp />
      </div>
    </main>
  )

}
