"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Retail & Online Shopping",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    id: 2,
    title: "Healthcare Management",
    category: "Healthcare & Wellness",
    image: "/healthcare-patient-portal.jpg",
  },
  {
    id: 3,
    title: "Financial Analytics",
    category: "Finance & Investment",
    image: "/financial-analytics-dashboard.png",
  },
]

export function PortfolioBento() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black tracking-tight">Latest Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer rounded-xl"
            >
              {/* Project Image with Device Mockup */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
                <div className="relative w-full h-full">
                  {/* Desktop Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-[90%] aspect-video bg-black rounded-md shadow-lg overflow-hidden border-[2px] border-gray-800">
                      <div className="absolute top-0 left-0 right-0 h-4 bg-gray-900 flex items-center px-2 gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      </div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top pt-4 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-black mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
            VIEW PROJECTS
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
