import { Navigation } from "../components/navigation"
import Footer2 from "../components/footer"

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">1. Services</h2>
            <p className="text-gray-600 mb-4">
              ADOT provides software development services including but not limited to web applications, 
              mobile applications, e-commerce platforms, APIs, and technical consulting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">2. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Clients agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Provide accurate project requirements and specifications</li>
              <li>Make timely payments according to agreed terms</li>
              <li>Provide necessary access and resources for project completion</li>
              <li>Respond to requests for feedback within reasonable timeframes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">3. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms will be specified in individual project agreements. 
              Generally, payments are due according to project milestones or monthly billing cycles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              Upon full payment, clients receive ownership of custom-developed code. 
              ADOT retains rights to general methodologies, techniques, and pre-existing intellectual property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              ADOT's liability is limited to the amount paid for services. 
              We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, contact us at{" "}
              <a href="mailto:legal@adot.dev" className="text-indigo-600 hover:text-indigo-700 underline">
                legal@adot.dev
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer2 />
    </main>
  )
}