"use client"

import { useState } from "react"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "+255747583412"
  const message = "Hi! I'm interested in your services. Can we discuss my project?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-2 py-2 md:px-4 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
      >
        {/* Modern Chat Icon */}
        <div className="relative">
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.4 0-2.7-.3-3.9-.8L4 20l.8-4.1c-.5-1.2-.8-2.5-.8-3.9 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
            <circle cx="8.5" cy="12" r="1.5"/>
            <circle cx="12" cy="12" r="1.5"/>
            <circle cx="15.5" cy="12" r="1.5"/>
          </svg>
          {/* Online indicator dot */}
          <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Text that appears on hover - Desktop only */}
        <span 
          className={`hidden md:block whitespace-nowrap font-medium text-sm transition-all duration-300 overflow-hidden ${
            isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          Chat with us
        </span>
      </button>
    </div>
  )
}