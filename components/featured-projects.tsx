'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Platform',
    description: 'Next.js e-commerce platform with AI-driven product recommendations and real-time inventory management.',
    image: '/modern-ecommerce-dashboard.png',
    technologies: ['Next.js', 'AI/ML', 'Node.js', 'PostgreSQL'],
    category: 'E-commerce',
    results: 'Increased conversion by 35%',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform built with Laravel and React for patient management and telemedicine.',
    image: '/healthcare-dashboard.png',
    technologies: ['Laravel', 'React', 'MySQL', 'WebRTC'],
    category: 'Healthcare',
    results: 'Improved patient care efficiency by 50%',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Advanced analytics platform with real-time data visualization and machine learning insights.',
    image: '/analytics-dashboard.png',
    technologies: ['Python', 'TensorFlow', 'React', 'MongoDB'],
    category: 'Analytics',
    results: 'Reduced data processing time by 60%',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Fintech Mobile Application',
    description: 'Secure mobile banking application with biometric authentication and blockchain integration.',
    image: '/mobile-banking-app.png',
    technologies: ['React Native', 'Node.js', 'Blockchain', 'AWS'],
    category: 'Fintech',
    results: 'Enhanced security by 99.9%',
    liveUrl: '#',
    githubUrl: '#'
  }
]

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">
                    {project.results}
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/portfolio/${project.id}`}>
                      View Case Study →
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
