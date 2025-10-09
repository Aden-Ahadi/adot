import { Navigation } from "../components/navigation"
import ContactPage from "../components/contact-page"
import Footer2 from "../components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with adotdevs for web and mobile development services.",
  alternates: { canonical: "https://adotdevs.com/contact" },
  openGraph: {
    title: "Contact | adotdevs",
    description: "Get in touch with adotdevs for web and mobile development services.",
    url: "https://adotdevs.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactPage />
      <Footer2 />
    </main>
  )
}