"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Retail & Online Shopping",
    image: "/ecommerce.jpg",
    description: "A comprehensive e-commerce platform with advanced features including inventory management, payment processing, and customer analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redux"],
    features: ["Multi-store support", "Advanced analytics", "Inventory management", "Customer reviews"],
    link: "#",
    github: "#",
    duration: "6 months",
    team: "5 developers"
  },
  {
    id: 2,
    title: "Healthcare Management",
    category: "Healthcare & Wellness",
    image: "/healthcare.webp",
    description: "A HIPAA-compliant healthcare management system for patient scheduling, medical records, and telemedicine capabilities.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "WebRTC", "Tailwind CSS"],
    features: ["Patient scheduling", "Medical records", "Telemedicine", "Prescription management"],
    link: "#",
    github: "#",
    duration: "8 months",
    team: "7 developers"
  },
  {
    id: 3,
    title: "Financial Analytics",
    category: "Finance & Investment",
    image: "/finance.webp",
    description: "Real-time financial analytics platform with advanced charting, reporting, and forecasting capabilities for investment firms.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    features: ["Real-time data", "Advanced charts", "Risk analysis", "Portfolio optimization"],
    link: "#",
    github: "#",
    duration: "10 months",
    team: "6 developers"
  },
]

export function PortfolioBento() {
  const handleViewProjects = () => {
    // Navigate to contact page
    window.location.href = '/contact'
  }

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black dark:text-white tracking-tight">Latest Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10 transition-all duration-300 rounded-xl hover:-translate-y-1"
            >
              {/* Project Image - Full Width */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.category}</p>
                
                {/* Additional Info */}
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{project.duration}</span>
                  <span>{project.team}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={handleViewProjects}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            VIEW PROJECTS
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
