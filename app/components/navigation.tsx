"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('menu-open')
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.classList.remove('menu-open')
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 80 // Account for sticky navigation
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const elementId = href.substring(2) // Remove '/#'
      
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        window.location.href = href
        return
      }
      
      // If we're on the home page, smooth scroll to the section
      smoothScrollTo(elementId)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-lg bg-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center gap-3"
        >
          <Image 
            src="/adot.logo.png" 
            alt="Adot Logo" 
            width={40} 
            height={40} 
            className="h-8 w-auto sm:h-10"
            priority
          />
          <span className="text-lg sm:text-xl font-bold text-black tracking-tight">ADOTDEVS</span>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          <a
            href="/"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="/#services"
            onClick={(e) => handleNavClick(e, '/#services')}
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="/#portfolio"
            onClick={(e) => handleNavClick(e, '/#portfolio')}
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="/#packages"
            onClick={(e) => handleNavClick(e, '/#packages')}
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="/contact"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </div>

        <button
          className="md:hidden p-2 hover:bg-black/5 rounded-xl transition-all duration-300 ease-out group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <Menu className={`w-5 h-5 absolute transition-all duration-300 ease-out ${
              isMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
            }`} />
            <X className={`w-5 h-5 absolute transition-all duration-300 ease-out ${
              isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
            }`} />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu dropdown */}
          <div className="mobile-menu md:hidden absolute top-full right-4 mt-3 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-top-2 fade-in duration-200 ease-out">
            <div className="p-6 space-y-1">
              <a
                href="/"
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Home</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="/#services"
                onClick={(e) => handleNavClick(e, '/#services')}
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
              >
                <span className="text-sm font-medium">Services</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="/#portfolio"
                onClick={(e) => handleNavClick(e, '/#portfolio')}
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
              >
                <span className="text-sm font-medium">Portfolio</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="/#packages"
                onClick={(e) => handleNavClick(e, '/#packages')}
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
              >
                <span className="text-sm font-medium">Pricing</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="/contact"
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Contact</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              
              {/* Divider */}
              <div className="h-px bg-white/20 my-3" />
              
            
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
