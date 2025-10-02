"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { TrustedCompanies } from "./trusted-companies"

export default function ContactPage() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const benefits = [
    "Transform your ideas into powerful digital solutions",
    "Accelerate time-to-market with proven development frameworks",
    "Scale your business with enterprise-grade architecture",
    "Seamlessly integrate modern technologies into your workflow",
    "Future-proof your applications with cutting-edge tech stacks"
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile: Contact Sales Header - First */}
        <div className="lg:hidden mb-8">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Contact sales
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            We can provide you with a custom demo, help you select the perfect development package, or offer technical consultation to ensure your project exceeds expectations and drives real business growth.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600">
            Need technical support? <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">click here</a>. Or, connect with our team of developers in the <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">ADOT Developer Account</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Desktop Left Column - Content (Hidden on mobile) */}
          <div className="hidden lg:block space-y-8">
            {/* Header Section */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
                Contact sales
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                We can provide you with a custom demo, help you select the perfect development package, or offer technical consultation to ensure your project exceeds expectations and drives real business growth.
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-6">
                Need technical support? <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">click here</a>. Or, connect with our team of developers in the <a href="https://www.instagram.com/adot_devs?igsh=dGp4dDlzYWN5emVj" className="text-indigo-600 hover:text-indigo-700 underline">ADOT Developer Account</a>.
              </p>
            </div>

            {/* ROI Statistics - Desktop */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                Drive Results with ADOT
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-1">3x</div>
                  <p className="text-xs text-gray-600">
                    faster development cycles with our proven frameworks
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-1">40%</div>
                  <p className="text-xs text-gray-600">
                    reduction in development costs through efficient processes
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-1">99.9%</div>
                  <p className="text-xs text-gray-600">
                    uptime achieved with our enterprise-grade infrastructure
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-1">50+</div>
                  <p className="text-xs text-gray-600">
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
            <div className="bg-gray-50 p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                />
              </div>

              {/* First and Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs font-medium text-gray-700 mb-1">
                  Company name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-xs font-medium text-gray-700 mb-1">
                  Project Type*
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
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
                <label htmlFor="budget" className="block text-xs font-medium text-gray-700 mb-1">
                  Budget Range*
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-plus">$250,000+</option>
                  <option value="discuss">Let's Discuss</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-xs font-medium text-gray-700 mb-1">
                  Expected Timeline*
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
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
                <label htmlFor="phoneNumber" className="block text-xs font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                />
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="projectDescription" className="block text-xs font-medium text-gray-700 mb-1">
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
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Terms and Privacy */}
              <div className="text-xs text-gray-600">
                ADOT values your privacy and will use the contact information you provide to discuss our software development services and solutions. You may unsubscribe from these communications at any time. By submitting your information, you agree to ADOT's{" "}
                <a href="/terms-of-service" className="text-indigo-600 hover:text-indigo-700 underline">Terms of Service</a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-indigo-600 hover:text-indigo-700 underline">Privacy Policy</a>.
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200"
              >
                Start Your Project
              </Button>
            </form>
            </div>
          </div>
        </div>

        {/* Mobile: ROI Statistics - Third */}
        <div className="lg:hidden mt-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Drive Results with ADOT
          </h2>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-1">3x</div>
              <p className="text-xs text-gray-600">
                faster development cycles with our proven frameworks
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-1">40%</div>
              <p className="text-xs text-gray-600">
                reduction in development costs through efficient processes
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-1">99.9%</div>
              <p className="text-xs text-gray-600">
                uptime achieved with our enterprise-grade infrastructure
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-1">50+</div>
              <p className="text-xs text-gray-600">
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