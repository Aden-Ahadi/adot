import Image from "next/image";
import type { Metadata } from "next";
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

export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  )

}
