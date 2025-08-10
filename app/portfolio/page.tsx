'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Filter, ArrowUpRight, Star, Code, Brain, Palette, Database, Cloud, Shield, Smartphone, GraduationCap, ShoppingCart, X } from 'lucide-react'
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
  },
  {
    id: 10,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMS53ZWJwIiwiaWF0IjoxNzU0ODQ3MzUyLCJleHAiOjQ5MDg0NDczNTJ9.D_FiZpaAKh-pRixL0Kxr2zm6PT0IFz00rA6GXxUT-gQ',
    title: 'Lahore Qalander - PSL Creicket Team',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 11,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/10.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMTAud2VicCIsImlhdCI6MTc1NDg0Nzc5MCwiZXhwIjoxNzg2MzgzNzkwfQ.JRnnS0GQBkV0S8lFTw65mTsnoz-HJJXaSfPvypDBPVY',
    title: 'LORRYZ - DISRUPTING THE FREIGHT INDUSTRY DIGITALLY',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 12,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/11.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMTEucG5nIiwiaWF0IjoxNzU0ODQ3ODIwLCJleHAiOjE3ODYzODM4MjB9.u7Gj-Yjc7qY8sXLOwYRsPneveyBvZkVKTPE3DTPE_KQ',
    title: 'PACHEM Global Pvt. Ltd',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 13,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/12.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMTIud2VicCIsImlhdCI6MTc1NDg0NzgzNiwiZXhwIjoxNzg2MzgzODM2fQ.JFYqeRGaYvqCuN6U6RqdFFjGpD8naWT1nJZe3Rdfngw',
    title: 'UkWild',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 14,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/13.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMTMucG5nIiwiaWF0IjoxNzU0ODQ3ODUwLCJleHAiOjE3ODYzODM4NTB9.L7cDEufv2lugPVUMjHTJYCudP2Vs8mwIknrLfp-H1HY',
    title: 'Harris Security Services - UK',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 15,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/14.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMTQud2VicCIsImlhdCI6MTc1NDg0Nzg2MiwiZXhwIjoxNzg2MzgzODYyfQ.DapUtCcpxruLf3d3DGtDICjtzLv_znJMQ-ef_izC8Bc',
    title: 'Shura Bridge',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 17,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvMy5wbmciLCJpYXQiOjE3NTQ4NDc4OTcsImV4cCI6MTc4NjM4Mzg5N30.0YWj9c1CYav1ai9XUMh1Aa2e5o9JS9ZHj13B8CGJf7A',
    title: 'Bislar',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 18,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/4.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvNC53ZWJwIiwiaWF0IjoxNzU0ODQ3OTA5LCJleHAiOjE3ODYzODM5MDl9.p5nN9Zyw2-pncECjTWCoZtKYeEX3Qccs2o_88aGGGsg',
    title: 'Tech Stuff',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 19,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvNS5wbmciLCJpYXQiOjE3NTQ4NDc5MjIsImV4cCI6MTc4NjM4MzkyMn0.LugipTJMLBBOCjBGJFl2x3Uyty72egEAWMjjaIF1K6k',
    title: 'Movenpick',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 21,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/7.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvNy53ZWJwIiwiaWF0IjoxNzU0ODQ3OTQ0LCJleHAiOjE3ODYzODM5NDR9.dVobUyxP38Y-32TAketOG9RHwQ0SG7VUbxFe3UuvYy4',
    title: 'Smart Workforce',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 22,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvOC5wbmciLCJpYXQiOjE3NTQ4NDc5NTUsImV4cCI6MTc4NjM4Mzk1NX0.e3-2o5N5omVtbZq-4BB8IF7CRhVO65TRywXV7b8nA2Y',
    title: 'Eagna Technologies ',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
  {
    id: 23,
    image: 'https://dincgyzuaahqhmyovwrm.supabase.co/storage/v1/object/sign/10silicon/projects/9.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcwOTZlZi04NGMyLTQ1MmUtYmY3MS1iNjE1ODZlZTUzMGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiIxMHNpbGljb24vcHJvamVjdHMvOS5wbmciLCJpYXQiOjE3NTQ4NDc5NjUsImV4cCI6MTc4NjM4Mzk2NX0.RWemZO_a8sV4VxDgOPuI_oK9PoAudg5aTKO4E6rDels',
    title: 'KingWood Services',
    category: 'Web Design',
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'Three.js'],
    icon: Cloud,
    color: 'from-violet-100 to-purple-100',
    iconBg: 'bg-violet-600',
    liveUrl: demoUrls['vr-training-platform'],
    githubUrl: githubUrls['vr-training-platform'],
    featured: false
  },
]

const categories = ['All', 'E-commerce', 'Healthcare', 'Analytics', 'Fintech', 'Education', 'Retail', 'Web Design']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory
    const featuredMatch = !showFeaturedOnly || project.featured
    return categoryMatch && featuredMatch
  })

  const isImageOnlyCategory = selectedCategory === 'UI/UX' || selectedCategory === 'Web Design'

    // Lock/unlock scroll when modalImage changes
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setZoom(1)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalImage])

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
           {!isImageOnlyCategory ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={project.id} className={`animation-delay-${Math.min((index + 1) * 200, 1000)}`}>
                  <div className="group cursor-pointer h-[700px]">
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
                          {/* <div className="grid grid-cols-3 gap-4 mb-6">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-black text-black">{value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">{key}</div>
                              </div>
                            ))}
                          </div> */}
                          
                          <div className="flex space-x-3">
                            <Link 
                              href={project.liveUrl}
                              className="flex-1 bg-black text-white px-4 py-3 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors flex items-center justify-center"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              LIVE
                            </Link>
                            {/* <Link 
                              href={project.githubUrl}
                              className="flex-1 border-2 border-gray-200 text-black px-4 py-3 rounded-xl font-bold text-center hover:border-gray-400 transition-colors flex items-center justify-center"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              CODE
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="cursor-pointer group relative">
                  <Image
                    src={project.image ?? ''}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-3xl object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setModalImage(project.image ?? null)}
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modal for image preview */}
          
          
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
      {modalImage && (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-start justify-center overflow-y-auto">
      <div className="relative w-full h-full flex flex-col items-center justify-start select-none">
        <div
          style={{
            cursor: dragging ? 'grabbing' : zoom > 1 ? 'grab' : 'default',
            overflow: 'hidden',
            width: '100%',
            height: '90vh',
            position: 'relative',
          }}
          onMouseDown={e => {
            if (zoom > 1) {
              setDragging(true)
              dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
            }
          }}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onMouseMove={e => {
            if (dragging && zoom > 1) {
              setOffset({
                x: e.clientX - dragStart.current.x,
                y: e.clientY - dragStart.current.y,
              })
            }
          }}
        >
          <Image
            src={modalImage}
            alt="Preview"
            width={1200}
            height={900}
            style={{
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
              transition: dragging ? 'none' : 'transform 0.3s',
              cursor: dragging ? 'grabbing' : zoom > 1 ? 'grab' : 'default',
              maxWidth: '100%',
              maxHeight: '90vh',
              userSelect: 'none',
              pointerEvents: 'auto',
            }}
            className="rounded-2xl object-contain mx-auto"
            draggable={false}
          />
        </div>
        {/* Zoom Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={() => {
              setZoom(z => Math.max(1, z - 0.2))
              setOffset({ x: 0, y: 0 })
            }}
            className="bg-yellow-400 text-black rounded-full p-3 font-black text-xl shadow-lg"
            aria-label="Zoom Out"
          >
            -
          </button>
          <button
            onClick={() => setZoom(z => Math.min(3, z + 0.2))}
            className="bg-yellow-400 text-black rounded-full p-3 font-black text-xl shadow-lg"
            aria-label="Zoom In"
          >
            +
          </button>
        </div>
        {/* Close Button */}
        <button
          onClick={() => {
            setModalImage(null)
            setZoom(1)
            setOffset({ x: 0, y: 0 })
          }}
          className="absolute top-8 right-8 bg-yellow-400 text-black rounded-full p-3 shadow-lg"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  )}
    </main>
  )
}
