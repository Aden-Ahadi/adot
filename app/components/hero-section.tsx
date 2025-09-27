import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import TextType from "@/components/TextType"

export function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.1] sm:leading-[1.05] tracking-tight">
          Get powerful digital experiences
          <br />
          your customers{" "}
          <TextType 
            text={["love ❤️", "trust 🤝", "remember 🧠", "share 📣", "choose ✅", "enjoy ✨", "prefer 🌟", "recommend 💬"]}
            as="span"
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
            className="inline !text-black font-normal"
            style={{ color: '#000000' }}
          />.
        </h1>

        <div className="space-y-1 max-w-xl mx-auto px-2 sm:px-0">
          <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal">
            We craft innovative software, web, and mobile solutions,
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal">
            you focus on growing your business.
          </p>
        </div>

        <div className="pt-6 sm:pt-8">
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-normal inline-flex items-center gap-2 transition-all duration-300 ease-out border-0 hover:scale-105 hover:shadow-lg">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            Start your project
          </Button>
        </div>
      </div>
    </section>
  )
}
