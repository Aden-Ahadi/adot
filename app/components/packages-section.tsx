"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Timeline } from "@/components/ui/timeline"
import { PinContainer } from "@/components/ui/3d-pin"

type PackageTier = "basic" | "standard" | "premium"

interface Package {
  id: PackageTier
  name: string
  title: string
  price: string
  currency: string
  description: string
  features: string[]
  image: string
  imageAlt: string
}

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    title: "Basic Website",
    price: "From $180",
    currency: "(TZS 480K)",
    description:
      "Perfect for individuals, startups, or small businesses needing a simple online presence. Ideal for: Landing pages, portfolios, or single-service sites",
    features: [
      "1 to 3 Pages",
      "Mobile-Friendly Design",
      "Responsive Design",
      "Free Domain Name Registration",
      "3 Revisions",
      "Delivery: 4 Days",
    ],
    image: "/basic.png",
    imageAlt: "Basic website package preview",
  },
  {
    id: "standard",
    name: "Standard",
    title: "Standard Website",
    price: "From $450",
    currency: "(TZS 1.2M)",
    description:
      "Ideal for growing businesses that need more functionality and content. Perfect for: Multi-page websites, service businesses, or small e-commerce stores",
    features: [
      "5 to 8 Pages",
      "Custom Design & Branding",
      "Contact Forms & Integration",
      "SEO Optimization",
      "Content Management System",
      "5 Revisions",
      "Delivery: 10 Days",
    ],
    image: "/standard.png",
    imageAlt: "Standard website package preview",
  },
  {
    id: "premium",
    name: "Premium",
    title: "Premium Website",
    price: "From $1,200",
    currency: "(TZS 3.2M)",
    description:
      "Comprehensive solution for established businesses requiring advanced features and custom functionality. Best for: E-commerce platforms, membership sites, or complex business applications",
    features: [
      "Unlimited Pages",
      "Advanced Custom Features",
      "E-commerce Integration",
      "Advanced SEO & Analytics",
      "Priority Support & Maintenance",
      "Database Integration",
      "Unlimited Revisions",
      "Delivery: 21 Days",
    ],
    image: "/premium.png",
    imageAlt: "Premium website package preview",
  },
]

export function PackagesSection() {
  const handleGetStarted = (packageId: PackageTier, packageName: string) => {
    // Navigate to contact section and prefill package selection
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      // Dispatch a custom event to prefill the form
      const event = new CustomEvent('packageSelected', { 
        detail: { packageId, packageName } 
      })
      window.dispatchEvent(event)
    }
  }

  const timelineData = packages.map((pkg) => ({
    title: pkg.name,
    content: (
      <div className="w-full">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 dark:text-white mb-3">
            {pkg.title}
          </h3>
          
          <div className="mb-4">
            <span className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-white">
              {pkg.price}
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-400 ml-2">
              {pkg.currency}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            {pkg.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            {pkg.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-violet-600 dark:text-violet-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 dark:text-gray-200 text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <PinContainer
              title="I NEED THIS"
              href="#contact-section"
              containerClassName="h-[20rem] w-full flex items-center justify-center"
              className="relative w-[20rem] h-[16rem] rounded-xl overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            >
              <Image
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.imageAlt}
                fill
                className="object-cover"
              />
            </PinContainer>
          </div>
        </div>
      </div>
    ),
  }))

  return (
    <section id="packages" className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black dark:text-white mb-4 drop-shadow-lg">
            Website Design Packages
          </h2>
          <p className="text-gray-400 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Choose the perfect package for your business needs. From simple landing pages to comprehensive e-commerce solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full overflow-clip">
          <Timeline 
            data={timelineData} 
            showHeader={false}
            className="bg-transparent dark:bg-transparent"
          />
        </div>
      </div>
    </section>
  )
}
