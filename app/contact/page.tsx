'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight, MessageCircle, Calendar, Star } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL',
      value: 'hello@10silicon.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'PHONE',
      value: '+92 324 7203309',
      description: 'Call us for immediate support'
    },
    {
      icon: MapPin,
      title: 'LOCATION',
      value: 'Lahore, Pakistan',
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'RESPONSE TIME',
      value: 'Within 24 hours',
      description: 'We respond quickly'
    }
  ]

  const benefits = [
    'Free initial consultation',
    '24-hour response guarantee',
    'Transparent pricing',
    'Ongoing support & maintenance',
    '100% satisfaction guarantee'
  ]

  return (
    <main className="pt-20 bg-black overflow-hidden">
      {/* Hero Section with Massive Circle */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <MessageCircle className="h-12 w-12 text-yellow-400" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-black fill-black" />
                </div>
              </div>
              <h3 className="text-4xl font-black text-black mb-4">LET'S TALK</h3>
              <p className="text-black/80 font-bold text-lg">ABOUT YOUR PROJECT</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              GET IN<br />
              TOUCH
            </h1>
            <div className="w-32 h-2 bg-yellow-400 mb-8"></div>
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and 
              explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-3xl p-10 hover:scale-105 transition-transform duration-500">
                <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">01</div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-black mb-8 leading-tight">SEND US A MESSAGE</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-black text-black mb-3 uppercase tracking-wider">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          className="border-2 border-gray-200 rounded-xl px-4 py-4 text-black font-medium focus:border-yellow-400 focus:ring-0 bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-black text-black mb-3 uppercase tracking-wider">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@example.com"
                          className="border-2 border-gray-200 rounded-xl px-4 py-4 text-black font-medium focus:border-yellow-400 focus:ring-0 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-black text-black mb-3 uppercase tracking-wider">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company"
                        className="border-2 border-gray-200 rounded-xl px-4 py-4 text-black font-medium focus:border-yellow-400 focus:ring-0 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-black text-black mb-3 uppercase tracking-wider">
                        Inquiry Type
                      </label>
                      <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="border-2 border-gray-200 rounded-xl px-4 py-4 text-black font-medium focus:border-yellow-400 focus:ring-0 bg-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className='bg-gray-800 text-white '>
                          <SelectItem value="project">New Project</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-black text-black mb-3 uppercase tracking-wider">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="border-2 border-gray-200 rounded-xl px-4 py-4 text-black font-medium focus:border-yellow-400 focus:ring-0 bg-white resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-black text-white px-10 py-6 hover:bg-black hover:text-white rounded-xl font-black text-lg hover:scale-105 transition-transform duration-300 group tracking-wider"
                    >
                      <span className="flex items-center justify-center">
                        SEND MESSAGE
                        <Send className="ml-4 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative bg-white rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
                <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">02</div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-black mb-8 leading-tight">CONTACT INFO</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-yellow-400" />
                          </div>
                          <div>
                            <p className="font-black text-black text-sm uppercase tracking-wider">{info.title}</p>
                            <p className="text-black font-bold text-lg">{info.value}</p>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="relative bg-yellow-400 rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
                <div className="absolute top-6 right-6 text-8xl font-black text-black/10">03</div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/20 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-black mb-6 leading-tight">WHY WORK WITH US?</h4>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-black font-bold">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-yellow-400 text-xs font-black">✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <div className="text-center">
                <Link 
                  href="/services"
                  className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform duration-300 group tracking-wider border-2 border-white hover:bg-black hover:text-white"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  SCHEDULE A CALL
                  <ArrowUpRight className="ml-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400/5 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
            LET'S CREATE<br />
            SOMETHING<br />
            AMAZING
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge digital solutions? 
            Let's start the conversation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Link 
              href="/portfolio"
              className="flex-1 bg-yellow-400 text-black px-8 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform duration-300 text-center group tracking-wider"
            >
              <span className="flex items-center justify-center">
                VIEW OUR WORK
                <ArrowUpRight className="ml-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link 
              href="/about"
              className="flex-1 border-2 border-white/20 text-white px-8 py-6 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all duration-300 text-center group tracking-wider"
            >
              <span className="flex items-center justify-center">
                LEARN MORE
                <ArrowUpRight className="ml-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
