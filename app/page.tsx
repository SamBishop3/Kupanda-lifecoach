"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import { ChevronLeft, ChevronRight, Star, Menu, X, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Michele is an exceptional coach, and I feel incredibly fortunate to have her guidance and distinctive coaching approach. At a crucial juncture in my career, Michele took on the role of my coach when I was contemplating a transition from one company to another. Michele played a pivotal role in helping me navigate a challenging decision and provided me with actionable steps to facilitate the transition. The impact of Michele's influence on my career has been profound, leading to increased satisfaction and growth.",
    author: "Alexandra W.",
    role: "Healthcare Executive",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Michele has been an incredible experience. From our very first conversation, I felt completely at ease opening up about my business goals, challenges, and aspirations. She has a rare gift for truly understanding exactly where you are in your journey and gently guiding you toward the clarity you need to move forward. Her ability to listen deeply, ask the right questions, and help you come to your own realizations is remarkable. Not only is she an exceptional coach, but her warm and supportive demeanor makes every session feel both productive and inspiring - and quite honestly, lots of fun! I am beyond grateful for her insight and guidance; she has been instrumental in helping me push past barriers and take my business to the next level!",
    author: "Emili T.",
    role: "Real Estate Broker",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Michele is an outstanding career coach who helped me navigate challenges, improve communication with executive leadership, and gain confidence in my career path. With her guidance, I recently earned a promotion and feel more empowered than ever. I highly recommend Michele to anyone seeking clarity, confidence, and career success.",
    author: "Brandon W.",
    role: "IT Executive",
    rating: 5,
  },
]

export default function KupandaCoaching() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Set the document title directly
    document.title = "Kupanda Coaching - Leadership & Performance Coaching"
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 30000) // Changed from 5000 to 30000 (30 seconds)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <Head>
        <title>Kupanda Coaching - Leadership & Performance Coaching</title>
        <meta
          name="description"
          content="Unlock your potential through executive leadership and performance coaching. Seeding Success, Growing Together."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header
          className={`px-4 sm:px-8 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100/50 transition-transform duration-300 ${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ borderBottomWidth: "1px" }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-end pr-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#78ae99] transition-colors text-sm font-medium">
                About
              </a>
              <a href="#approach" className="text-gray-700 hover:text-[#78ae99] transition-colors text-sm font-medium">
                Approach
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#78ae99] transition-colors text-sm font-medium"
              >
                Stories
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#78ae99] transition-colors text-sm font-medium">
                Contact
              </a>
              <Button className="bg-[#78ae99] hover:bg-[#78ae99]/90 text-white px-6 py-2 text-sm font-medium rounded-full ml-8">
                <a href="/contact-form">Book Consultation</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end w-full pr-4">
              <button className="text-gray-700 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pt-6 border-t border-gray-200 pr-4">
              <nav className="flex flex-col space-y-4 items-end">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-[#78ae99] transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#approach"
                  className="text-gray-700 hover:text-[#78ae99] transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Approach
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-[#78ae99] transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stories
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#78ae99] transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button
                  className="bg-[#78ae99] hover:bg-[#78ae99]/90 text-white px-6 py-3 text-base font-medium rounded-full mt-4 w-fit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href="/contact-form">Book Consultation</a>
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="px-4 sm:px-8 py-8 sm:py-12 lg:py-16 bg-[#78ae99]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 p-6 sm:p-8">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                    <span className="block">Seeding Success,</span>
                    <span className="block">Growing Together</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                    Unlock your potential through leadership and performance coaching.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-50 text-[#78ae99] px-8 py-4 text-base font-medium rounded-full shadow-sm"
                  >
                    <a href="/contact-form">Start Your Journey</a>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/logo-circle-clean.png"
                    alt="Kupanda Coaching"
                    width={500}
                    height={500}
                    className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 sm:px-8 py-8 sm:py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">About Kupanda</h2>
              <p className="text-lg text-gray-600 mb-8 italic">Kupanda ~ the act of ascending, climbing, planting</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                  <p>
                    At Kupanda Coaching, we believe that greatness lives in everyone—sometimes it just needs a little
                    cultivation. Through executive leadership and performance coaching, we empower individuals and teams
                    to unlock potential, elevate performance, and define success on their terms.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <Image
                    src="/about-workshop.jpg"
                    alt="Leadership Workshop - Coach presenting to engaged audience"
                    width={400}
                    height={400}
                    className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Approach Section */}
        <section id="approach" className="px-4 sm:px-8 py-8 sm:py-12" style={{ backgroundColor: "#fac0b5" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">Personalized Approach</h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                At Kupanda, our proven process helps clients elevate their leadership, grow their impact and translate
                passion into plans. Here's how it works:
              </p>
            </div>

            {/* Three Steps Process */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="w-20 h-20 bg-[#78ae99]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#78ae99]/40 transition-colors">
                    <div className="w-10 h-10 bg-[#78ae99] rounded-full flex items-center justify-center text-white font-semibold">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">Chemistry Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    During an initial call, share your goals and objectives, and discover how Kupanda can support you or
                    your team in reaching your desired outcomes.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="w-20 h-20 bg-[#78ae99]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#78ae99]/40 transition-colors">
                    <div className="w-10 h-10 bg-[#78ae99] rounded-full flex items-center justify-center text-white font-semibold">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">Commit to Coaching</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Partner with Kupanda, and your coach will develop a personalized program to support your journey to
                    realizing success.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="w-20 h-20 bg-[#78ae99]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#78ae99]/40 transition-colors">
                    <div className="w-10 h-10 bg-[#78ae99] rounded-full flex items-center justify-center text-white font-semibold">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">Cultivate Success</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Start your journey with foundational exercises to explore your motivations and goals, and work
                    together with your coach to take actionable steps toward personal greatness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Stories Section */}
        <section id="testimonials" className="px-4 sm:px-8 py-8 sm:py-12 bg-[#78ae99]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">Client Stories</h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Here's what people are saying about their Kupanda experience.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#ffc0b4] text-[#ffc0b4] mx-1" />
                    ))}
                  </div>

                  <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light max-w-4xl mx-auto">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div>
                    <p className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center mt-6">
                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white border border-gray-200 hover:border-[#78ae99] rounded-full shadow-sm flex items-center justify-center transition-all group"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-[#78ae99]" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white border border-gray-200 hover:border-[#78ae99] rounded-full shadow-sm flex items-center justify-center transition-all group"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#78ae99]" />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Growth Partner Section */}
        <section className="px-4 sm:px-8 py-8 sm:py-12" style={{ backgroundColor: "#fac0b5" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Meet Your Growth Partner
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: "#fac0b5" }}>
                <div className="text-gray-900 space-y-6 leading-relaxed">
                  <p>
                    With nearly three decades of experience spanning the nonprofit and corporate worlds, Michele brings
                    deep expertise and a gift for unlocking potential in others.
                  </p>
                  <p>
                    As the visionary behind Kupanda Coaching, she draws on a career rich in coaching and executive
                    leadership, most recently as the leader of a national nonprofit. Her foundation in communications
                    and marketing informs a thoughtful, strategic approach to helping individuals and organizations
                    elevate their purpose and presence.
                  </p>
                  <p>
                    Michele holds a certification in Leadership and Performance Coaching from Brown University School of
                    Professional Studies, an MBA and a certificate in nonprofit leadership, underscoring her commitment
                    to lifelong growth and excellence.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/michele-headshot.jpg"
                    alt="Michele - Kupanda Coaching Founder"
                    width={400}
                    height={400}
                    className="w-80 h-auto sm:w-96 rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Come Grow With Us Section */}
        <section id="contact" className="px-4 sm:px-8 py-8 sm:py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">Come Grow With Us</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/kupanda-plant-bulb.png"
                    alt="Kupanda Coaching - Growth from Roots to Leaves"
                    width={400}
                    height={600}
                    className="w-80 h-auto sm:w-96 rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Ready to start your growth journey?</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#78ae99]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#78ae99]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:Michelespore@gmail.com"
                        className="text-gray-600 hover:text-[#78ae99] transition-colors"
                      >
                        Michelespore@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#a7ddcbc]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#a7ddcbc]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+19197801081" className="text-gray-600 hover:text-[#78ae99] transition-colors">
                        (919) 780-1081
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-[#78ae99] hover:bg-[#78ae99]/90 text-white px-8 py-4 text-base font-medium rounded-full shadow-sm"
                >
                  <a href="/contact-form">Schedule Your Consultation</a>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-8 py-6 sm:py-8 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-center md:text-left">
                  <p className="text-gray-500 mb-2 text-sm">© 2025 Kupanda Coaching</p>
                  <p className="text-xs text-gray-400">Seed Success, Growth Together</p>
                </div>
              </div>
              <div>
                <Image
                  src="/logo-main.png"
                  alt="Kupanda Coaching"
                  width={1080}
                  height={792}
                  className="h-12 sm:h-16 w-auto mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
