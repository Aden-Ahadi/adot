"use client";
import React from "react";

function Footer2() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contacts", href: "/contact" },
    
  ];

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
    }
  }

  const socialIcons = [
    {
      name: "X",
      href: "#",
      svg: (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      svg: (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      svg: (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full relative py-8 px-4 sm:px-6 lg:px-8">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <a href="/" className="mb-4 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
         
          <img
            src="/adot.logo.png"
            alt="ADOT Logo"
            width={32}
            height={32}
            className="mr-2 rounded-md"
          />
          <div className="relative bg-black px-3 py-1.5 rounded-sm border border-gray-700">
            {/* Corner dots */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-400 rounded-full"></div>
            
            <span className="text-sm font-mono tracking-[0.2em] text-white uppercase font-medium">
              adot
            </span>
          </div>
        </a>

        <nav className="mb-4 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-4 flex justify-center gap-4">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              href={icon.href}
            >
              <div>
                {icon.svg}
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} ADOT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer2;
