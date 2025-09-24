import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="relative bg-background rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-12 w-8 h-8 text-accent">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div className="absolute top-20 right-20 w-6 h-6 text-accent">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-8 w-4 h-4 text-accent">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Empowering Brands
            <br />
            Through Creative Solutions
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Left content - paragraph and button */}
          <div className="space-y-6 lg:justify-self-end lg:text-right">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm lg:ml-auto">
              Every brand deserves exceptional branding, web design, and digital experiences that connect with your
              audience and drive growth. Let's create something extraordinary together.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium border-2 hover:bg-muted bg-transparent"
            >
              Discover Your Brand
            </Button>
          </div>

          {/* Center - Professional woman image */}
          <div className="relative flex items-center justify-center order-first lg:order-none">
            <div className="relative">
              <img
                src="/professional-woman-in-business-attire-with-glasses.jpg"
                alt="Professional woman representing Creatix team"
                className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl"
              />

              {/* Decorative curved line */}
              <div className="absolute -bottom-8 -left-8">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-muted-foreground">
                  <path d="M2 38C20 20 40 20 58 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right content - Experience badge */}
          <div className="lg:justify-self-start">
            <div className="text-left lg:text-left">
              <div className="flex justify-center lg:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground text-center lg:text-left">10 Years</div>
              <div className="text-sm text-muted-foreground text-center lg:text-left">Experience</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium border-2 border-transparent">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-muted text-foreground rounded-full px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium border-2 border-muted-foreground/20"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
