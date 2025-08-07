'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Filter, ArrowUpRight, Star, Code, Brain, Palette, Database, Cloud, Shield, Smartphone, GraduationCap, ShoppingCart } from 'lucide-react'
import { demoUrls, githubUrls } from '@/components/project-links'

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Platform',
    description: 'Next.js e-commerce platform with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.',
    category: 'E-commerce',
    technologies: ['Next.js', 'AI/ML', 'Node.js', 'PostgreSQL', 'Stripe'],
    results: 'Increased conversion by 35%, reduced cart abandonment by 28%',
    metrics: {
      conversion: '+35%',
      speed: '2.1s',
      engagement: '+45%'
    },
    icon: ShoppingCart,
    color: 'from-blue-100 to-purple-100',
    iconBg: 'bg-blue-600',
    liveUrl: demoUrls['ai-ecommerce-platform'],
    githubUrl: githubUrls['ai-ecommerce-platform'],
    featured: true
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform built with Laravel and React for patient management, telemedicine, and medical records.',
    category: 'Healthcare',
    technologies: ['Laravel', 'React', 'MySQL', 'WebRTC', 'HIPAA'],
    results: 'Improved patient care efficiency by 50%, reduced paperwork by 80%',
    metrics: {
      satisfaction: '95%',
      efficiency: '+50%',
      response: '< 2min'
    },
    icon: Shield,
    color: 'from-green-100 to-teal-100',
    iconBg: 'bg-green-600',
    liveUrl: demoUrls['healthcare-management'],
    githubUrl: githubUrls['healthcare-management'],
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Advanced analytics platform with real-time data visualization, machine learning insights, and predictive analytics.',
    category: 'Analytics',
    technologies: ['Python', 'TensorFlow', 'React', 'MongoDB', 'D3.js'],
    results: 'Reduced data processing time by 60%, improved decision making speed',
    metrics: {
      processing: '+60%',
      accuracy: '98.5%',
      adoption: '+85%'
    },
    icon: Database,
    color: 'from-purple-100 to-pink-100',
    iconBg: 'bg-purple-600',
    liveUrl: demoUrls['analytics-dashboard'],
    githubUrl: githubUrls['analytics-dashboard'],
    featured: false
  },
  {
    id: 4,
    title: 'Fintech Mobile Application',
    description: 'Secure mobile banking application with biometric authentication, blockchain integration, and real-time transactions.',
    category: 'Fintech',
    technologies: ['React Native', 'Node.js', 'Blockchain', 'AWS', 'Biometrics'],
    results: 'Enhanced security by 99.9%, increased user adoption by 200%',
    metrics: {
      security: '99.9%',
      adoption: '+200%',
      speed: '< 3s'
    },
    icon: Smartphone,
    color: 'from-indigo-100 to-blue-100',
    iconBg: 'bg-indigo-600',
    liveUrl: demoUrls['fintech-mobile-app'],
    githubUrl: githubUrls['fintech-mobile-app'],
    featured: true
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Educational platform with interactive courses, progress tracking, and AI-powered personalized learning paths.',
    category: 'Education',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AI/ML', 'WebRTC'],
    results: 'Improved learning outcomes by 40%, increased engagement by 65%',
    metrics: {
      outcomes: '+40%',
      engagement: '+65%',
      completion: '87%'
    },
    icon: GraduationCap,
    color: 'from-orange-100 to-red-100',
    iconBg: 'bg-orange-600',
    liveUrl: demoUrls['learning-management-system'],
    githubUrl: githubUrls['learning-management-system'],
    featured: false
  },
  {
    id: 6,
    title: 'Restaurant Management Suite',
    description: 'Complete restaurant management solution with POS system, inventory tracking, and customer loyalty program.',
    category: 'Retail',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PWA'],
    results: 'Increased operational efficiency by 45%, improved customer satisfaction',
    metrics: {
      efficiency: '+45%',
      satisfaction: '92%',
      revenue: '+28%'
    },
    icon: Code,
    color: 'from-yellow-100 to-orange-100',
    iconBg: 'bg-yellow-600',
    liveUrl: demoUrls['restaurant-management'],
    githubUrl: githubUrls['restaurant-management'],
    featured: false
  },
  {
    id: 7,
    title: 'Social Media Analytics Tool',
    description: 'Comprehensive social media management platform with analytics, scheduling, and engagement tracking.',
    category: 'Analytics',
    technologies: ['React', 'Python', 'FastAPI', 'Redis', 'Chart.js'],
    results: 'Increased social engagement by 120%, saved 15 hours per week',
    metrics: {
      engagement: '+120%',
      timeSaved: '15h/week',
      reach: '+80%'
    },
    icon: Brain,
    color: 'from-cyan-100 to-blue-100',
    iconBg: 'bg-cyan-600',
    liveUrl: demoUrls['social-media-analytics'],
    githubUrl: githubUrls['social-media-analytics'],
    featured: false
  },
  {
    id: 8,
    title: 'Cryptocurrency Trading Platform',
    description: 'Advanced trading platform with real-time market data, portfolio management, and automated trading bots.',
    category: 'Fintech',
    technologies: ['Next.js', 'WebSocket', 'Node.js', 'MongoDB', 'TradingView'],
    results: 'Processed $50M+ in trades, 99.9% uptime achieved',
    metrics: {
      volume: '$50M+',
      uptime: '99.9%',
      users: '10K+'
    },
    icon: Database,
    color: 'from-emerald-100 to-green-100',
    iconBg: 'bg-emerald-600',
    liveUrl: demoUrls['crypto-trading-platform'],
    githubUrl: githubUrls['crypto-trading-platform'],
    featured: true
  },
  {
    id: 9,
    title: 'Virtual Reality Training Platform',
    description: 'Immersive VR training platform for corporate education with progress tracking and performance analytics.',
    category: 'Education',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    results: 'Reduced training time by 60%, improved retention by 75%',
    metrics: {
      timeReduction: '-60%',
      retention: '+75%',
      satisfaction: '94%'
    },
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  }
]

const categories = ['All', 'E-commerce', 'Healthcare', 'Analytics', 'Fintech', 'Education', 'Retail']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory
    const featuredMatch = !showFeaturedOnly || project.featured
    return categoryMatch && featuredMatch
  })

  return (
    <main className="pt-20 bg-black min-h-screen overflow-hidden">
      {/* Hero Section with Massive Circle */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Large Background Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-yellow-400/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              OUR WORK
            </h1>
            <div className="w-32 h-2 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successful projects across various industries. 
              Each project showcases our commitment to innovation, quality, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-bold text-sm tracking-wider transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-yellow-400 text-black scale-105' 
                      : 'border-2 border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={`flex items-center px-6 py-3 rounded-full font-bold text-sm tracking-wider transition-all duration-300 ${
                  showFeaturedOnly 
                    ? 'bg-yellow-400 text-black scale-105' 
                    : 'border-2 border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                FEATURED ONLY
              </button>
              <span className="text-white/60 font-bold tracking-wider">
                {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Geometric Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/3 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={project.id} className={`fade-in-element opacity-0 animation-delay-${Math.min((index + 1) * 200, 1000)}`}>
                  <div className="group cursor-pointer h-[600px]">
                    <div className="relative bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1 h-full">
                      {/* Project Visual */}
                      <div className={`h-80 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-32 h-32 ${project.iconBg} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 relative`}>
                            <IconComponent className="h-16 w-16 text-white" />
                            {project.featured && (
                              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                <Star className="h-4 w-4 text-black fill-black" />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute bottom-8 left-8 w-16 h-16 bg-black/20 rounded-full group-hover:rotate-45 transition-transform duration-700"></div>
                        <div className="absolute top-6 left-6 text-6xl font-black text-black/5">{String(project.id).padStart(2, '0')}</div>
                      </div>
                      
                      <div className="p-8 h-80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">{project.category}</span>
                            {project.featured && <Badge className="bg-yellow-400 text-black font-bold">FEATURED</Badge>}
                          </div>
                          <h3 className="text-2xl font-black text-black mb-4 leading-tight">
                            {project.title.toUpperCase()}
                          </h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-bold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-black text-black">{value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">{key}</div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex space-x-3">
                            <Link 
                              href={project.liveUrl}
                              className="flex-1 bg-black text-white px-4 py-3 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors flex items-center justify-center"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              LIVE
                            </Link>
                            <Link 
                              href={project.githubUrl}
                              className="flex-1 border-2 border-gray-200 text-black px-4 py-3 rounded-xl font-bold text-center hover:border-gray-400 transition-colors flex items-center justify-center"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              CODE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-4xl font-black text-white mb-6">
                NO PROJECTS FOUND
              </h3>
              <p className="text-white/70 mb-8 text-xl">
                Try adjusting your filters to see more projects.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('All')
                  setShowFeaturedOnly(false)
                }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-black tracking-wider hover:scale-105 transition-transform duration-300"
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-4xl font-black text-black mb-4">START YOUR</h3>
              <p className="text-black/80 font-bold text-lg">SUCCESS STORY</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              READY TO<br />
              START YOUR<br />
              PROJECT?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Join our growing list of satisfied clients. Let's discuss how we can help 
              you achieve similar results for your business.
            </p>
            
            <div className="space-y-6">
              <Link 
                href="/contact"
                className="block w-full bg-yellow-400 text-black px-10 py-8 rounded-2xl font-black text-xl hover:scale-105 transition-transform duration-300 text-center group tracking-wider"
              >
                <span className="flex items-center justify-center">
                  START YOUR PROJECT
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
