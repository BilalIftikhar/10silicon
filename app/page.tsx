'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowDown, Code, Brain, Palette, Database, Cloud, Shield, Play, Star } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLSection>(null)
  const workRef = useRef<HTMLSection>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-element')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section with Massive Circle */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Massive Yellow Circle - Matching Creative Hut */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[150vw] h-[150vw] max-w-[1400px] max-h-[1400px] bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 rounded-full flex items-center justify-center relative">
            {/* Circular Text Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                <svg
                  className="w-full h-full animate-spin-very-slow"
                  viewBox="0 0 300 300"
                >
                  <defs>
                    <path
                      id="circle-text"
                      d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                    />
                  </defs>
                  <text className="text-sm font-bold fill-black tracking-[0.3em] uppercase">
                    <textPath href="#circle-text" startOffset="0%">
                      10SILICON • INNOVATION • CREATIVITY • TECHNOLOGY • DESIGN
                      • EXCELLENCE • DIGITAL • SOLUTIONS •
                    </textPath>
                  </text>
                </svg>

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center relative">
                    <span className="text-yellow-400 font-black text-3xl">
                      10
                    </span>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-black fill-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Text - Matching Creative Hut Style */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 fade-in-element opacity-0 animation-delay-600">
          <div className="writing-mode-vertical text-white/60 text-sm font-medium tracking-widest">
            10SILICON
          </div>
        </div>

        {/* Bottom Navigation Hint */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 fade-in-element opacity-0 animation-delay-800">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm font-medium mb-4 tracking-wider">
              EXPLORE
            </span>
            <div className="w-px h-12 bg-white/30"></div>
            <ArrowDown className="h-4 w-4 mt-2 animate-bounce-slow" />
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-20 fade-in-element opacity-0 animation-delay-1000">
          <Link
            href="/contact"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl group"
          >
            <ArrowUpRight className="h-8 w-8 text-black group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-32 bg-black relative overflow-hidden"
      >
        {/* Background Geometric Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/5 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/3 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/10 rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="fade-in-element opacity-0 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
                SERVICES
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                We create digital experiences that transform businesses and
                engage audiences
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {/* Service Card 1 */}
            <div className="fade-in-element opacity-0 animation-delay-200">
              <div className="group cursor-pointer h-96">
                <div className="relative bg-white rounded-3xl p-10 h-full overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                  {/* Large Number */}
                  <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">
                    01
                  </div>

                  {/* Geometric Background */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/30 rounded-full translate-y-12 -translate-x-12 group-hover:rotate-45 transition-transform duration-700"></div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                        <Code className="h-10 w-10 text-yellow-400" />
                      </div>
                      <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                        WEB
                        <br />
                        DEVELOPMENT
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Modern, responsive websites built with cutting-edge
                        technologies and frameworks.
                      </p>
                    </div>
                    {/* <div className="flex items-center text-black font-bold group-hover:translate-x-4 transition-transform duration-300">
                      <span className="text-lg">EXPLORE</span>
                      <ArrowUpRight className="ml-3 h-6 w-6" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="fade-in-element opacity-0 animation-delay-400">
              <div className="group cursor-pointer h-96">
                <div className="relative bg-yellow-400 rounded-3xl p-10 h-full overflow-hidden hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <div className="absolute top-6 right-6 text-8xl font-black text-black/10">
                    02
                  </div>

                  <div className="absolute top-0 right-0 w-40 h-40 bg-black/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-12 -translate-x-12 group-hover:rotate-45 transition-transform duration-700"></div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                        <Brain className="h-10 w-10 text-yellow-400" />
                      </div>
                      <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                        AI
                        <br />
                        SOLUTIONS
                      </h3>
                      <p className="text-black/80 leading-relaxed text-lg">
                        Intelligent applications powered by machine learning and
                        artificial intelligence.
                      </p>
                    </div>
                    {/* <div className="flex items-center text-black font-bold group-hover:translate-x-4 transition-transform duration-300">
                      <span className="text-lg">EXPLORE</span>
                      <ArrowUpRight className="ml-3 h-6 w-6" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="fade-in-element opacity-0 animation-delay-600">
              <div className="group cursor-pointer h-96">
                <div className="relative bg-white rounded-3xl p-10 h-full overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">
                    03
                  </div>

                  <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/30 rounded-full translate-y-12 -translate-x-12 group-hover:rotate-45 transition-transform duration-700"></div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                        <Palette className="h-10 w-10 text-yellow-400" />
                      </div>
                      <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                        UI/UX
                        <br />
                        DESIGN
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        User-centered design that creates engaging and memorable
                        experiences.
                      </p>
                    </div>
                    {/* <div className="flex items-center text-black font-bold group-hover:translate-x-4 transition-transform duration-300">
                      <span className="text-lg">EXPLORE</span>
                      <ArrowUpRight className="ml-3 h-6 w-6" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-element opacity-0 animation-delay-800 text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-yellow-400 text-black px-12 py-6 rounded-full font-black text-lg hover:scale-105 transition-transform duration-300 group tracking-wider"
            >
              ALL SERVICES
              <ArrowUpRight className="ml-4 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section
        ref={workRef}
        className="py-32 bg-black relative overflow-hidden"
      >
        {/* Large Background Circle */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-yellow-400/5 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="fade-in-element opacity-0 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
                PORTFOLIO
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Selected projects that showcase our expertise and creativity
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Project Card 1 */}
            <div className="fade-in-element opacity-0 animation-delay-200">
              <div className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <div className="h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/odyssey.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvb2R5c3NleS5wbmciLCJpYXQiOjE3NTQ5MDc3ODUsImV4cCI6MTc4NjQ0Mzc4NX0.aO9sYRyamnTxAk_nUj4L94H32zWb9wW7TLQerIwiVZ0"
                        alt="odyessy"
                        width={600}
                        height={400}
                        className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="p-10">
                    <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                      HOTELS & RESORTS BOOKING PLATFORM
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      This is a platform to book luxury
                      hotels, flights, cruises, and rental cars worldwide —
                      offering curated options.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
                          +35% CONVERSION
                        </span>
                        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
                          2.1S LOAD
                        </span>
                      </div>
                      <Link
                        href={"https://odysseytravelapp.com/"}
                        target="_blank"
                      >
                        <ArrowUpRight className="h-8 w-8 text-gray-400 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="fade-in-element opacity-0 animation-delay-400">
              <div className="group cursor-pointer">
                <div className="relative bg-yellow-400 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <div className="h-80 bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/littlemate.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvbGl0dGxlbWF0ZS5wbmciLCJpYXQiOjE3NTQ5MDc5NjgsImV4cCI6MTc4NjQ0Mzk2OH0.fwW_T6S4J8OqYpxvsbg_ClBw7rG2xI6xT_1hiqqTxlc"
                        alt="The Little Mate"
                        width={600}
                        height={400}
                        className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                      E-COMMERCE SHOPPING PLATFORM
                    </h3>
                    <p className="text-black/80 mb-8 leading-relaxed text-lg">
                      Charming selection of baby clothes, toys, and
                      essentials—crafted for comfort, quality, and joyful
                      parenting.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <span className="bg-black/10 px-4 py-2 rounded-full text-sm font-bold text-black">
                          SHOPIFY
                        </span>
                      </div>
                      <Link href={"https://thelittlemate.pk/"} target="_blank">
                        <ArrowUpRight className="h-8 w-8 text-black/60 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-element opacity-0 animation-delay-600 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-white text-black px-12 py-6 rounded-full font-black text-lg hover:scale-105 transition-transform duration-300 group tracking-wider"
            >
              VIEW ALL PROJECTS
              <ArrowUpRight className="ml-4 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section with Circle */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-4xl font-black text-black mb-4">
                LET'S CREATE
              </h3>
              <p className="text-black/80 font-bold text-lg">
                SOMETHING AMAZING
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="ml-auto max-w-2xl">
            <div className="fade-in-element opacity-0">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
                LET'S WORK
                <br />
                TOGETHER
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
            </div>

            <div className="fade-in-element opacity-0 animation-delay-200">
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Ready to transform your digital presence? Let's discuss how we
                can help bring your vision to life with cutting-edge technology.
              </p>
            </div>

            <div className="fade-in-element opacity-0 animation-delay-400 space-y-6">
              <Link
                href="/contact"
                className="block w-full bg-yellow-400 text-black px-10 py-8 rounded-2xl font-black text-xl hover:scale-105 transition-transform duration-300 text-center group tracking-wider"
              >
                <span className="flex items-center justify-center">
                  START A PROJECT
                  <ArrowUpRight className="ml-4 h-8 w-8 group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/services"
                className="block w-full border-2 border-white/20 text-white px-10 py-8 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all duration-300 text-center group tracking-wider"
              >
                <span className="flex items-center justify-center">
                  VIEW OUR SERVICES
                  <ArrowUpRight className="ml-4 h-8 w-8 group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
