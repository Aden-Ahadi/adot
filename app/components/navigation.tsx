"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            href="#"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-xs lg:text-sm font-normal text-black transition-all duration-300 ease-out hover:scale-105 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
      
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu dropdown */}
          <div className="md:hidden absolute top-full right-4 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-top-3 fade-in duration-300 ease-out">
            {/* Close button */}
            <div className="flex justify-end p-4 pb-2">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:rotate-90"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="px-6 pb-6 space-y-1">
              <a
                href="#"
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Home</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="#"
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Services</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="#"
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Portfolio</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="#"
                className="flex items-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-1 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">About</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
              <a
                href="#"
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
