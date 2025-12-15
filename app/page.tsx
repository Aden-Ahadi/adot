'use client';

import Script from "next/script";
import ContactPage from "./components/contact-page";
import Footer2 from "./components/footer";
import { FloatingWhatsApp } from "./components/floating-whatsapp";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { PackagesSection } from "./components/packages-section";
import { ServicesSection } from "./components/services-section";
import TestimonialsSection from "./components/testimonials-section";
import { TrustedCompanies } from "./components/trusted-companies";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative z-10 space-y-12">
        <Script
          id="ld-json-home"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization.",
            name: "adotdevs",
            url: "https://adotdevs.com/",
            logo: "https://adotdevs.com/adot.logo.png",
            sameAs: [],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+255747583412",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
            ],
          })}
        </Script>

        <Navigation />

        <HeroSection />
        <TrustedCompanies />
        <ServicesSection />
        <PackagesSection />
        <TestimonialsSection />
        <ContactPage />
        <Footer2 />
        <FloatingWhatsApp />
      </div>
    </main>
  );
}
