"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const coachingTypes = [
  "Personal Development",
  "Career Transition",
  "Life Integration",
  "Executive Leadership",
  "Performance Coaching",
  "Team Coaching",
  "Goal Setting & Achievement",
  "Personal Branding",
]

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coachingType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First, try sending directly to Michele's email
      const response = await fetch("https://formspree.io/f/xanbzbpo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          coachingType: formData.coachingType,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Consultation Request from ${formData.firstName} ${formData.lastName}`,
          _to: "Michelespore@gmail.com",
        }),
      })

      console.log("Form response:", response.status, response.statusText)

      if (response.ok) {
        setIsSubmitted(true)

        // Also send a backup email using a different method
        try {
          await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: "Michelespore@gmail.com",
              subject: `New Consultation Request from ${formData.firstName} ${formData.lastName}`,
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              coachingType: formData.coachingType,
              message: formData.message,
            }),
          })
        } catch (backupError) {
          console.log("Backup email failed, but main form succeeded")
        }
      } else {
        const errorText = await response.text()
        console.error("Form submission failed:", errorText)
        throw new Error(`Form submission failed: ${response.status}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(
        `There was an error submitting the form: ${error.message}. Please try again or contact Michele directly at Michelespore@gmail.com or (919) 780-1081.`,
      )
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-sm text-center">
          <div className="w-16 h-16 bg-[#78ae99]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-[#78ae99]" />
          </div>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your consultation request has been submitted successfully. Michele will get back to you within 24 hours to
            schedule your chemistry consultation.
          </p>
          <Link href="/">
            <Button className="bg-[#78ae99] hover:bg-[#78ae99]/90 text-white px-6 py-3 rounded-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 sm:px-8 py-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 text-gray-700 hover:text-[#78ae99] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <Image src="/logo-header.png" alt="Kupanda Coaching" width={1000} height={760} className="h-16 w-auto" />
        </div>
      </header>

      {/* Contact Form */}
      <section className="px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Schedule Your Consultation
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to start your growth journey? Fill out the form below and Michele will reach out to schedule your
              complimentary chemistry consultation.
            </p>
          </div>

          <div className="rounded-2xl p-8 sm:p-12 shadow-sm" style={{ backgroundColor: "#fac0b5" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#78ae99]/20 focus:border-[#78ae99] transition-colors bg-white"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#78ae99]/20 focus:border-[#78ae99] transition-colors bg-white"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#78ae99]/20 focus:border-[#78ae99] transition-colors bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#78ae99]/20 focus:border-[#78ae99] transition-colors bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Coaching Type Dropdown */}
              <div>
                <label htmlFor="coachingType" className="block text-sm font-medium text-gray-900 mb-2">
                  Type of Coaching Interest *
                </label>
                <select
                  id="coachingType"
                  name="coachingType"
                  required
                  value={formData.coachingType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#78ae99]/20 focus:border-[#78ae99] transition-colors bg-white"
                >
                  <option value="">Select coaching type...</option>
                  {coachingTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Tell us about your goals (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#78ae99]/20 focus:border-[#78ae99] transition-colors resize-none bg-white"
                  placeholder="Share what you'd like to achieve through coaching..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#78ae99] hover:bg-[#78ae99]/90 text-white px-8 py-4 text-base font-medium rounded-full shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Schedule My Consultation
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-gray-700 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
