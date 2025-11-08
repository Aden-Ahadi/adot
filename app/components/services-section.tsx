"use client"

import { useState } from "react"

const techColors: Record<string, { bg: string; text: string; hoverBg: string; hoverText: string }> = {
  // Frontend
  React: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    hoverBg: "group-hover:bg-blue-500",
    hoverText: "group-hover:text-white",
  },
  "Next.js": {
    bg: "bg-gray-900",
    text: "text-white",
    hoverBg: "group-hover:bg-black",
    hoverText: "group-hover:text-white",
  },
  TypeScript: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    hoverText: "group-hover:text-white",
  },
  "Node.js": {
    bg: "bg-green-50",
    text: "text-green-700",
    hoverBg: "group-hover:bg-green-600",
    hoverText: "group-hover:text-white",
  },

  // Mobile
  "React Native": {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    hoverBg: "group-hover:bg-cyan-500",
    hoverText: "group-hover:text-white",
  },
  Flutter: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hoverBg: "group-hover:bg-blue-500",
    hoverText: "group-hover:text-white",
  },
  Swift: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    hoverBg: "group-hover:bg-orange-500",
    hoverText: "group-hover:text-white",
  },
  Kotlin: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    hoverBg: "group-hover:bg-purple-500",
    hoverText: "group-hover:text-white",
  },

  // Cloud
  AWS: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    hoverBg: "group-hover:bg-orange-500",
    hoverText: "group-hover:text-white",
  },
  Azure: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hoverBg: "group-hover:bg-blue-500",
    hoverText: "group-hover:text-white",
  },
  Docker: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hoverBg: "group-hover:bg-blue-500",
    hoverText: "group-hover:text-white",
  },
  Kubernetes: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    hoverBg: "group-hover:bg-blue-600",
    hoverText: "group-hover:text-white",
  },

  // Backend/API
  REST: {
    bg: "bg-green-50",
    text: "text-green-700",
    hoverBg: "group-hover:bg-green-600",
    hoverText: "group-hover:text-white",
  },
  GraphQL: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    hoverBg: "group-hover:bg-pink-500",
    hoverText: "group-hover:text-white",
  },
  PostgreSQL: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    hoverBg: "group-hover:bg-blue-600",
    hoverText: "group-hover:text-white",
  },
  MongoDB: {
    bg: "bg-green-50",
    text: "text-green-700",
    hoverBg: "group-hover:bg-green-600",
    hoverText: "group-hover:text-white",
  },

  // Design
  Figma: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    hoverBg: "group-hover:bg-purple-500",
    hoverText: "group-hover:text-white",
  },
  "Adobe XD": {
    bg: "bg-pink-50",
    text: "text-pink-600",
    hoverBg: "group-hover:bg-pink-500",
    hoverText: "group-hover:text-white",
  },
  Prototyping: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    hoverBg: "group-hover:bg-indigo-500",
    hoverText: "group-hover:text-white",
  },
  "User Research": {
    bg: "bg-teal-50",
    text: "text-teal-600",
    hoverBg: "group-hover:bg-teal-500",
    hoverText: "group-hover:text-white",
  },

  // DevOps
  "CI/CD": {
    bg: "bg-gray-100",
    text: "text-gray-700",
    hoverBg: "group-hover:bg-gray-600",
    hoverText: "group-hover:text-white",
  },
  Terraform: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    hoverBg: "group-hover:bg-purple-500",
    hoverText: "group-hover:text-white",
  },
  Monitoring: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    hoverBg: "group-hover:bg-yellow-500",
    hoverText: "group-hover:text-white",
  },
  Security: {
    bg: "bg-red-50",
    text: "text-red-600",
    hoverBg: "group-hover:bg-red-500",
    hoverText: "group-hover:text-white",
  },
}

const services = [
  {
    title: "Website Design",
    description: "A clean and responsive website that will suit your business need, from blog, portfolio, company, or organisation to online store we craft it for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    technologies: ["Responsive Design", "E-commerce", "Portfolio", "Business Sites"],
  },
  {
    title: "Branding",
    description: "We craft an eye catching designs and marketing products that will skyrocket your brand.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2-2-2M19 9l2 2-2 2" />
      </svg>
    ),
    technologies: ["Logo Design", "Brand Identity", "Marketing Materials", "Visual Strategy"],
  },
  {
    title: "Product Label",
    description: "Best label designs that will align with your products and captures peoples attention.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 6h.008v.008H6V6z"
        />
      </svg>
    ),
    technologies: ["Product Labels", "Packaging Design", "Print Design", "Brand Alignment"],
  },
  {
    title: "Social Media",
    description: "Yes, we make you visible, from all social media platforms, we design ads, posters, fliers, short clip videos to sell and promote your brand.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
        />
      </svg>
    ),
    technologies: ["Social Media Ads", "Video Content", "Poster Design", "Brand Promotion"],
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleServiceClick = () => {
    // Navigate to contact page
    window.location.href = '/contact'
  }

  const handleDiscussProject = () => {
    // Navigate to contact page
    window.location.href = '/contact'
  }

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black dark:text-white mb-3 sm:mb-4 text-balance">What we build</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-pretty">
            From concept to deployment, we craft digital solutions that drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleServiceClick}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 h-full border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10 hover:-translate-y-1 hover:border-white/30 dark:hover:border-gray-600/70">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="w-6 h-6">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-black dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">{service.description}</p>

                  {/* Technologies */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => {
                        const colors = techColors[tech] || {
                          bg: "bg-gray-100",
                          text: "text-gray-700",
                          hoverBg: "group-hover:bg-black",
                          hoverText: "group-hover:text-white",
                        }
                        return (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all duration-300 ${colors.bg} ${colors.text} ${colors.hoverBg} ${colors.hoverText} group-hover:scale-105 group-hover:shadow-sm`}
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">Don't see what you're looking for?</p>
          <button 
            onClick={handleDiscussProject}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg font-medium transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
          >
            Let's discuss your project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
