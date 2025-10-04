"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, X, ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Retail & Online Shopping",
    image: "/modern-ecommerce-dashboard.png",
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
    image: "/healthcare-patient-portal.jpg",
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
    image: "/financial-analytics-dashboard.png",
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const handleViewProjects = () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact-section') || document.querySelector('main')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

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
              onClick={() => handleProjectClick(project)}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 cursor-pointer rounded-xl hover:-translate-y-1"
            >
              {/* Project Image - Full Width */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                    <ExternalLink className="w-4 h-4 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-black mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.category}</p>
                
                {/* Additional Info */}
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
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
            className="group inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            VIEW PROJECTS
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
                        <div className="text-sm font-semibold text-gray-900">{selectedProject.duration}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Team Size</div>
                        <div className="text-sm font-semibold text-gray-900">{selectedProject.team}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Actions</h3>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Project
                      </a>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-sm transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg font-medium text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
