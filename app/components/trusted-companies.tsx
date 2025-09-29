"use client"

import { useEffect, useState } from "react"

const companies = [
  { name: "MAT/CHAHITA", logo: "/companies/company1.png?height=40&width=120&text=MAT/CHAHITA"},
  { name: "WhyNot Furniture", logo: "/companies/company2.png?height=40&width=120&text=Google" },
]

export function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-1 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Trusted by companies & organizations
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-2 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={company.name} className="group transition-all duration-300 hover:scale-110">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + companies.length) % companies.length
              const company = companies[index]
              return (
                <div
                  key={`${company.name}-${offset}`}
                  className={`transition-all duration-500 ${
                    offset === 0 ? "scale-100 opacity-100" : "scale-75 opacity-40"
                  }`}
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="h-8 w-auto filter grayscale"
                  />
                </div>
              )
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
