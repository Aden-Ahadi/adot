'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import TextType from "@/components/TextType"

export function HeroSection() {
  const [currentProjectType, setCurrentProjectType] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const projectTypes = ["web-app", "mobile-app", "e-commerce", "api-service", "saas-platform"]

  useEffect(() => {
    const currentType = projectTypes[currentProjectType]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentType.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentType.slice(0, displayText.length + 1))
        }, 100)
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        // Finished deleting, move to next project type
        setCurrentProjectType((prev) => (prev + 1) % projectTypes.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentProjectType, projectTypes])

  const handleCodeBlockClick = async () => {
    if (isLoading) return
    
    setIsLoading(true)
    
    try {
      // Add a small delay for visual feedback
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Navigate to contact page
      router.push('/contact')
    } catch (error) {
      console.error('Navigation error:', error)
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-14">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black dark:text-white leading-[1.1] sm:leading-[1.05] tracking-tight">
          <span className="block sm:inline">Get powerful digital</span>
          <span className="block sm:inline"> experiences</span>
          <span className="hidden sm:inline">
            <br />
          </span>
          <span className="block sm:inline">your customers</span>
          <span className="block sm:hidden min-h-[1.2em]">
            <TextType 
              text={["love ❤️", "trust 🤝", "remember 🧠", "share 📣", "choose ✅", "enjoy ✨", "prefer 🌟", "recommend 💬"]}
              as="span"
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
              className="inline !text-black dark:!text-white font-normal"
            />
          </span>
          <span className="hidden sm:inline">{" "}
            <TextType 
              text={["love ❤️", "trust 🤝", "remember 🧠", "share 📣", "choose ✅", "enjoy ✨", "prefer 🌟", "recommend 💬"]}
              as="span"
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
              className="inline !text-black dark:!text-white font-normal"
            />
          </span>
          <span className="hidden sm:inline">.</span>
          <span className="block sm:hidden">.</span>
        </h1>

        <div className="space-y-1 max-w-xl mx-auto px-2 sm:px-0">
          <p className="text-sm sm:text-base md:text-lg text-black/80 dark:text-white/80 font-normal">
            We craft innovative software, web, and mobile solutions,
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black/80 dark:text-white/80 font-normal">
            you focus on growing your business.
          </p>
        </div>

        <div className="pt-4 sm:pt-6 flex justify-center">
          <div
            onClick={handleCodeBlockClick}
            className={`bg-gray-900 dark:bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 max-w-xl lg:max-w-4xl xl:max-w-5xl w-full cursor-pointer group border border-gray-700 dark:border-gray-600 transition-all duration-300 ${
              isLoading 
                ? 'opacity-75 cursor-not-allowed scale-[0.98]' 
                : 'hover:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-600 dark:hover:border-gray-500 hover:scale-[1.01] active:scale-[0.99]'
            }`}
            aria-disabled={isLoading}
          >
            {/* Code editor header */}
            <div className="flex items-center gap-2 mb-2 pb-3 border-b border-gray-700 dark:border-gray-600">
              <div className="flex gap-2">
                <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-red-300' : 'bg-red-500'}`}></div>
                <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-yellow-300' : 'bg-yellow-500'}`}></div>
                <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-green-600' : 'bg-green-500'}`}></div>
              </div>
              <span className={`text-gray-400 text-sm ml-4 font-mono transition-colors duration-300 ${
                isLoading ? 'text-gray-500' : 'group-hover:text-gray-400'
              }`}>project.js</span>
            </div>

            {/* Code content */}
            <div className="text-left font-mono text-sm sm:text-base">
              <div className="text-gray-500 mb-2">// Let's build something amazing together</div>
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-purple-400">const</span>
                <span className="text-blue-300">project</span>
                <span className="text-white">=</span>
                <span className="text-yellow-300">{"{"}</span>
              </div>
              <div className="ml-4 sm:ml-6 my-2">
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-green-300">idea:</span>
                  <span className="text-orange-300">"</span>
                  <span className="text-orange-300">{displayText}</span>
                  <span className={`text-orange-300 ${isLoading ? 'animate-none opacity-50' : 'animate-pulse'}`}>|</span>
                  <span className="text-orange-300">",</span>
                </div>
                <div className="flex flex-wrap items-center gap-1 mt-1">
                  <span className="text-green-300">execution:</span>
                  <span className="text-orange-300">"ours"</span>
                </div>
              </div>
              <div className="text-yellow-300">{"}"}</div>

              {/* Interactive prompt */}
              <div className="mt-4 pt-4 border-t border-gray-700 dark:border-gray-600">
                <div className={`text-gray-400 text-xs sm:text-sm transition-all duration-300 ${
                  isLoading ? 'flex items-center gap-2' : 'group-hover:text-gray-300'
                }`}>
                  {isLoading ? (
                    <>
                      <div className="w-3 h-3 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Starting consultation...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-green-400 group-hover:text-green-300 transition-colors duration-300">→ </span> 
                      <span>Click to start your project consultation</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
