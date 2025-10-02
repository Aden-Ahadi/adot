"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  testimonial: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Khamis Omari",
    role: "Business Owner | whynot furniture",
    company: "Whynot Furniture",
    avatar: "/avatars/avatar-1.jpg", // Local image path
    testimonial: "ADOT transformed our online presence completely. The website they built increased our conversions by 300% and looks absolutely stunning.",
    rating: 5
  },
  {
    id: "2",
    name: "Vivian David",
    role: "CEO",
    company: "StartupLab",
    avatar: "/avatars/avatar-2.jpg", // Local image path
    testimonial: "Working with ADOT was seamless. They understood our vision and delivered beyond expectations. Highly recommend their services!",
    rating: 5
  },
  {
    id: "3",
    name: "Keisha Davis",
    role: "Founder",
    company: "Digital Dreams",
    avatar: "/avatars/avatar-3.jpg", // Local image path
    testimonial: "The attention to detail and modern design approach made all the difference. Our users love the new interface.",
    rating: 5
  },
  {
    id: "4",
    name: "Jamal Thompson",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "/avatars/avatar-4.jpg", // Local image path
    testimonial: "ADOT's team delivered a pixel-perfect website that perfectly represents our brand. The user experience is exceptional.",
    rating: 5
  },
  {
    id: "5",
    name: "Zara Mitchell",
    role: "Creative Director",
    company: "BrandStudio",
    avatar: "/avatars/avatar-5.jpg", // Local image path
    testimonial: "From concept to launch, ADOT made the entire process smooth and enjoyable. The results speak for themselves.",
    rating: 5
  },
  {
    id: "6",
    name: "Damon Clarke",
    role: "Operations Head",
    company: "ScaleUp Solutions",
    avatar: "/avatars/avatar-6.jpg", // Local image path
    testimonial: "Our website traffic doubled after the redesign. ADOT knows how to create websites that convert visitors into customers.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Generate avatar grid with some empty spaces for irregularity
  const generateAvatarGrid = () => {
    const avatars = []
    const totalSlots = 150 // Reduced for better proportions
    const avatarCount = 90 // Fewer avatars for cleaner look
    
    // Local avatar collection - add your own images to /public/avatars/grid/
    const avatarPaths = [
      "/avatars/grid/grid-1.jpg",
      "/avatars/grid/grid-2.jpg", 
      "/avatars/grid/grid-3.jpg",
      "/avatars/grid/grid-4.jpg",
      "/avatars/grid/grid-5.jpg",
      "/avatars/grid/grid-6.jpg",
      "/avatars/grid/grid-7.jpg",
      "/avatars/grid/grid-8.jpg",
      "/avatars/grid/grid-9.jpg",
      "/avatars/grid/grid-10.jpg",
      "/avatars/grid/grid-11.jpg",
      "/avatars/grid/grid-12.jpg",
      "/avatars/grid/grid-13.jpg",
      "/avatars/grid/grid-14.jpg",
      "/avatars/grid/grid-15.jpg"
    ]
    
    // Use a deterministic pattern instead of Math.random() to avoid hydration issues
    const emptySlots = new Set([7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111, 119, 127, 135, 143]) // Predefined empty positions
    
    for (let i = 0; i < totalSlots; i++) {
      const shouldShowAvatar = i < avatarCount && !emptySlots.has(i)
      if (shouldShowAvatar) {
        const avatarPath = avatarPaths[i % avatarPaths.length]
        avatars.push(
          <div key={i} className="w-6 h-6 sm:w-8 sm:h-8">
            <Image
              src={avatarPath}
              alt="Customer avatar"
              width={32}
              height={32}
              className="w-full h-full rounded-lg object-cover filter grayscale opacity-70"
              loading="lazy"
              onError={(e) => {
                // Fallback to a solid color if image fails to load
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement!.style.backgroundColor = '#e5e7eb'
              }}
            />
          </div>
        )
      } else {
        avatars.push(<div key={i} className="w-6 h-6 sm:w-8 sm:h-8" />)
      }
    }
    return avatars
  }

  const handleMouseEnter = (testimonialId: string, event: React.MouseEvent) => {
    setHoveredTestimonial(testimonialId)
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleClick = (testimonialId: string) => {
    // Toggle popup on mobile click
    if (hoveredTestimonial === testimonialId) {
      setHoveredTestimonial(null)
    } else {
      setHoveredTestimonial(testimonialId)
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredTestimonial) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseLeave = () => {
    setHoveredTestimonial(null)
  }

  const currentTestimonial = testimonials.find(t => t.id === hoveredTestimonial)

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[900px] mx-auto relative">
        {/* Avatar Collage */}
        <div className="relative mb-12 overflow-hidden">
          {/* Static background grid - completely isolated */}
          <div 
            className="grid grid-cols-12 sm:grid-cols-15 md:grid-cols-18 gap-1.5 justify-items-center relative z-10"
            style={{
              maskImage: 'radial-gradient(ellipse 75% 55% at 50% 35%, black 35%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 35%, black 35%, transparent 75%)'
            }}
          >
            {generateAvatarGrid()}
          </div>
          
          {/* Interactive avatars overlay - visible on all devices */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {testimonials.map((testimonial, index) => {
              // Different positions for each avatar index
              const positionClasses = [
                'top-[20%] left-[15%] md:top-[22%] md:left-[16%]',
                'top-[30%] right-[15%] md:top-[32%] md:right-[24%]',
                'top-[40%] left-[10%] md:top-[48%] md:left-[26%]',
                'top-[50%] right-[10%] md:top-[58%] md:right-[16%]',
                'top-[35%] left-1/2 -translate-x-1/2 md:top-[38%] md:left-[46%] md:translate-x-0',
                'top-[60%] left-1/2 -translate-x-1/2 md:top-[68%] md:right-[36%] md:left-auto md:translate-x-0'
              ]
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute pointer-events-auto w-6 h-6 md:w-8 md:h-8 ${positionClasses[index]}`}
                  style={{
                    zIndex: hoveredTestimonial === testimonial.id ? 30 : 20
                  }}
                  onMouseEnter={(e) => handleMouseEnter(testimonial.id, e)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(testimonial.id)}
                >
                  <div className="relative w-full h-full cursor-pointer">
                    <div 
                      className="w-full h-full transition-transform duration-200 ease-out"
                      style={{
                        transform: hoveredTestimonial === testimonial.id ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="w-full h-full rounded-lg border border-white shadow-sm object-cover"
                      />
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 border border-white rounded-full" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black leading-tight">
            The Developers behind
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-gray-800 mt-1">
            thousands of companies.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border border-gray-300 bg-white text-gray-900 px-6 py-2.5 text-sm rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2 group"
          >
            Let's build yours
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Testimonial Popup - Responsive */}
        {hoveredTestimonial && currentTestimonial && (
          <>
            {/* Desktop Popup */}
            <div
              className="hidden md:block fixed z-[70] bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs transition-all duration-300 pointer-events-none"
              style={{
                left: `${Math.min(mousePosition.x + 15, typeof window !== 'undefined' ? window.innerWidth - 320 : 320)}px`,
                top: `${Math.max(mousePosition.y - 80, 20)}px`,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">{currentTestimonial.name}</p>
                  <p className="text-gray-500 text-xs truncate">{currentTestimonial.role}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-3 h-3 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-200'} fill-current`} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L0.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed line-clamp-2">
                "{currentTestimonial.testimonial.slice(0, 120)}..."
              </p>
            </div>

            {/* Mobile Popup */}
            <div className="md:hidden fixed inset-x-4 bottom-4 z-[70] bg-white rounded-lg shadow-lg border border-gray-200 p-4 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm">{currentTestimonial.name}</p>
                  <p className="text-gray-500 text-xs">{currentTestimonial.role}</p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-3 h-3 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-200'} fill-current`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L0.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setHoveredTestimonial(null)}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{currentTestimonial.testimonial}"
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}