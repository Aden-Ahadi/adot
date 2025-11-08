"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
    price: "$180",
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
    price: "$450",
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
    price: "$1,200",
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
  const [activePackage, setActivePackage] = useState<PackageTier>("basic")

  const currentPackage = packages.find((pkg) => pkg.id === activePackage) || packages[0]

  const handlePackageSelection = (packageId: PackageTier) => {
    setActivePackage(packageId)
    // Could also store the selected package in localStorage for persistence
    localStorage.setItem('selectedPackage', packageId)
  }

  const handleGetStarted = () => {
    // Navigate to contact section and prefill package selection
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      // You could also dispatch a custom event to prefill the form
      const event = new CustomEvent('packageSelected', { 
        detail: { packageId: activePackage, packageName: currentPackage.name } 
      })
      window.dispatchEvent(event)
    }
  }

  return (
    <section id="packages" className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white dark:text-white text-center mb-4 sm:mb-6 drop-shadow-lg">
          Website Design Packages
        </h2>

        {/* Package Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePackageSelection(pkg.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activePackage === pkg.id
                  ? "bg-[#2d7a5f] dark:bg-green-600 text-white shadow-lg scale-105"
                  : "bg-[#4a4a4a] dark:bg-gray-700 text-gray-300 dark:text-gray-300 hover:bg-[#5a5a5a] dark:hover:bg-gray-600 hover:scale-102"
              }`}
            >
              {pkg.name}
            </button>
        ))}
      </div>

        {/* Package Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 dark:from-gray-900/90 to-[#0f0f0f]/90 dark:to-gray-950/90 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-[#333]/50 dark:border-gray-700/50 shadow-2xl">
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2d7a5f]/20 dark:from-green-600/20 via-transparent to-[#2d7a5f]/20 dark:to-green-600/20 opacity-50 blur-sm"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
                {/* Left Side - Package Details */}
                <div key={currentPackage.id} className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="bg-[#252525]/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 lg:p-5 border border-[#333]/50 dark:border-gray-700/50 h-full">
                    <h3 className="text-xl lg:text-2xl font-medium text-white mb-3">{currentPackage.title}</h3>

                    <div className="mb-4">
                      <span className="text-2xl lg:text-3xl font-semibold text-white">{currentPackage.price}</span>
                      <span className="text-sm text-gray-400 ml-2">{currentPackage.currency}</span>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed min-h-[2rem]">{currentPackage.description}</p>

                    <div className="mb-4 min-h-[6rem] lg:min-h-[7rem]">
                      <div className="space-y-1.5">
                        {currentPackage.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <Check className="w-4 h-4 text-[#2d7a5f] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        onClick={handleGetStarted}
                        className="bg-[#2d7a5f] hover:bg-[#236349] text-white text-sm font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        I NEED THIS
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Clean Image Display */}
                <div
                  key={`${currentPackage.id}-image`}
                  className="relative animate-in fade-in slide-in-from-right-4 duration-500 lg:sticky lg:top-8"
                >
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                    <Image
                      src={currentPackage.image || "/placeholder.svg"}
                      alt={currentPackage.imageAlt}
                      fill
                      className="object-contain p-4 transition-opacity duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
