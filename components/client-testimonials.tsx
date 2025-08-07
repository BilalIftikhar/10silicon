'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    image: '/professional-woman-ceo.png',
    rating: 5,
    text: 'Digital Excellence transformed our outdated system into a modern, AI-powered platform. Their expertise in both frontend and backend development is unmatched. The results exceeded our expectations.',
    logo: '/abstract-tech-logo.png'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO',
    company: 'InnovateLab',
    image: '/professional-man-cto.png',
    rating: 5,
    text: 'Working with this team was a game-changer. Their AI solutions helped us automate 70% of our processes. The Laravel backend they built is robust and scalable.',
    logo: '/innovation-lab-logo.png'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'GrowthCorp',
    image: '/professional-woman-product-manager.png',
    rating: 5,
    text: 'The Next.js application they delivered was not only beautiful but also incredibly fast. Our user engagement increased by 45% after the launch. Highly recommended!',
    logo: '/growth-company-logo.png'
  },
  {
    id: 4,
    name: 'David Kim',
    position: 'Founder',
    company: 'StartupVision',
    image: '/professional-man-founder.png',
    rating: 5,
    text: 'From concept to deployment, they handled everything professionally. The AI integration they implemented gave us a competitive edge in the market.',
    logo: '/startup-vision-logo.png'
  }
]

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Image
                  src={testimonials[currentTestimonial].logo || "/placeholder.svg"}
                  alt={`${testimonials[currentTestimonial].company} logo`}
                  width={120}
                  height={40}
                  className="opacity-60"
                />
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
