import { Navigation } from "../components/navigation"
import Footer2 from "../components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read adotdevs' privacy practices and how we protect your data.",
  alternates: { canonical: "https://adotdevs.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | adotdevs",
    description: "Read adotdevs' privacy practices and how we protect your data.",
    url: "https://adotdevs.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you contact us through our forms, 
              request services, or communicate with us. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Name and contact information</li>
              <li>Company information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Provide and improve our software development services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical updates and service information</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">5. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:adotdevs@gmail.com" className="text-indigo-600 hover:text-indigo-700 underline">
                adotdevs@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer2 />
    </main>
  )
}