"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/stateful-button"
import { Check, Mail } from "lucide-react"
import { TrustedCompanies } from "./trusted-companies"
import { toast } from "sonner"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    projectType: "",
    budget: "",
    timeline: "",
    phoneNumber: "",
    projectDescription: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Listen for package selection events from packages section
    const handlePackageSelection = (event: Event) => {
      const customEvent = event as CustomEvent
      const { packageId, packageName } = customEvent.detail
      
      // Pre-fill the project type based on package selection
      setFormData(prev => ({
        ...prev,
        projectType: packageId === 'basic' ? 'web-app' : 
                    packageId === 'standard' ? 'cms' : 
                    packageId === 'premium' ? 'ecommerce' : 'other'
      }))
      
      // Show a banner informing about package selection
      setSubmitStatus('idle')
    }

    window.addEventListener('packageSelected', handlePackageSelection)
    
    return () => {
      window.removeEventListener('packageSelected', handlePackageSelection)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form validation is handled by HTML5 required attributes
    // The actual submission is handled by handleButtonClick
  }

  const handleButtonClick = async (): Promise<void> => {
    // Validate form before submitting
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity()
      toast.error('Please fill in all required fields')
      return Promise.reject(new Error('Please fill in all required fields'))
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Call our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          companyName: "",
          projectType: "",
          budget: "",
          timeline: "",
          phoneNumber: "",
          projectDescription: ""
        })
      } else {
        setSubmitStatus('error')
        const errorMsg = result.error || 'Failed to send email'
        toast.error('Submission Failed', {
          description: errorMsg + '. Please try again or contact us directly at info@adotdevs.com',
        })
        throw new Error(errorMsg)
      }
      
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
      const errorMsg = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
      toast.error('Submission Failed', {
        description: errorMsg + '. Please try again or contact us directly at info@adotdevs.com',
      })
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    "Transform your ideas into powerful digital solutions",
    "Accelerate time-to-market with proven development frameworks",
    "Scale your business with enterprise-grade architecture",
    "Seamlessly integrate modern technologies into your workflow",
    "Future-proof your applications with cutting-edge tech stacks"
  ]

  return (
    <div id="contact-section" className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile: Contact Sales Header - First */}
        <div className="lg:hidden mb-8">
          <h1 className="text-3xl font-medium text-gray-900 dark:text-white mb-4">
            Contact sales
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            We can provide you with a custom demo, help you select the perfect development package, or offer technical consultation to ensure your project exceeds expectations and drives real business growth.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Need technical support? <a href="#" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline">click here</a>. Or, connect with our team of developers in the <a href="#" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline">ADOT Developer Account</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Desktop Left Column - Content (Hidden on mobile) */}
          <div className="hidden lg:block space-y-8">
            {/* Header Section */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Contact sales
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We can provide you with a custom demo, help you select the perfect development package, or offer technical consultation to ensure your project exceeds expectations and drives real business growth.
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
                Need technical support? <a href="#" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline">click here</a>. Or, connect with our team of developers in the <a href="https://www.instagram.com/adot_devs?igsh=dGp4dDlzYWN5emVj" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline">ADOT Developer Account</a>.
              </p>
            </div>

            {/* ROI Statistics - Desktop */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
                Drive Results with ADOT
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">3x</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    faster development cycles with our proven frameworks
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">40%</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    reduction in development costs through efficient processes
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">99.9%</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    uptime achieved with our enterprise-grade infrastructure
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">50+</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    successful projects delivered across various industries
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted Companies - Desktop */}
            <div>
              <TrustedCompanies />
            </div>
          </div>

          {/* Right Column - Form (Always visible, but full width on mobile) */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-gray-700/50">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 text-sm font-medium">Message sent successfully!</p>
                      <p className="text-green-700 text-sm mt-1">We've received your project inquiry and will get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* First and Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Type*
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select Project Type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="cms">Content Management System</option>
                  <option value="api">API Development</option>
                  <option value="database">Database Design</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Budget Range*
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-10k">Under $500</option>
                  <option value="10k-25k">$500 - $1,000</option>
                  <option value="25k-50k">$1,000 - $3,000</option>
                  <option value="50k-100k">$3,000 - $6,000</option>
                  <option value="100k-250k">$6,000 - $10,000</option>
                  <option value="250k-plus">$10,000+</option>
                  <option value="discuss">Let's Discuss</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Expected Timeline*
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="12months-plus">12+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="projectDescription" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tell us about your project*
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={3}
                  required
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Describe your project goals, key features, technical requirements, or any specific challenges you're facing..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              {/* Terms and Privacy */}
              <div className="text-xs text-gray-600 dark:text-gray-400">
                ADOT values your privacy and will use the contact information you provide to discuss our software development services and solutions. You may unsubscribe from these communications at any time. By submitting your information, you agree to ADOT's{" "}
                <a href="/terms-of-service" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline">Terms of Service</a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline">Privacy Policy</a>.
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleButtonClick}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200"
              >
                Start Your Project
              </Button>
            </form>
            </div>
          </div>
        </div>

        {/* Mobile: ROI Statistics - Third */}
        <div className="lg:hidden mt-12">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
            Drive Results with ADOT
          </h2>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">3x</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                faster development cycles with our proven frameworks
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">40%</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                reduction in development costs through efficient processes
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">99.9%</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                uptime achieved with our enterprise-grade infrastructure
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">50+</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                successful projects delivered across various industries
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Trusted Companies - Fourth */}
        <div className="lg:hidden mt-8">
          <TrustedCompanies />
        </div>
      </div>
    </div>
  )
}