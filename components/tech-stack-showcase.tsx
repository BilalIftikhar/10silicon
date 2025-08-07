'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const technologies = [
  {
    name: 'JavaScript',
    icon: '🟨',
    description: 'Modern ES6+ JavaScript for dynamic, interactive web applications',
    category: 'Frontend'
  },
  {
    name: 'React/Next.js',
    icon: '⚛️',
    description: 'Cutting-edge React framework for server-side rendering and optimal performance',
    category: 'Frontend'
  },
  {
    name: 'PHP/Laravel',
    icon: '🐘',
    description: 'Robust server-side development with Laravel for scalable web applications',
    category: 'Backend'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    description: 'High-performance server-side JavaScript for real-time applications',
    category: 'Backend'
  },
  {
    name: 'AI/ML',
    icon: '🤖',
    description: 'TensorFlow, PyTorch, and OpenAI integration for intelligent solutions',
    category: 'AI'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Data science, machine learning, and backend development',
    category: 'AI'
  },
  {
    name: 'Database',
    icon: '🗄️',
    description: 'MySQL, PostgreSQL, MongoDB for robust data management',
    category: 'Database'
  },
  {
    name: 'Cloud/DevOps',
    icon: '☁️',
    description: 'AWS, Vercel, Docker for scalable deployment and infrastructure',
    category: 'DevOps'
  }
]

export default function TechStackShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, performant, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-blue-500"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <div className="text-sm text-blue-600 font-medium mb-3">
                  {tech.category}
                </div>
                <p className={`text-gray-600 text-sm transition-all duration-300 ${
                  hoveredTech === tech.name ? 'opacity-100' : 'opacity-70'
                }`}>
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-100 rounded-full px-6 py-3">
            <span className="text-gray-700 font-medium">Trusted by industry leaders:</span>
            <div className="flex space-x-6 text-gray-500">
              <span className="font-semibold">Microsoft</span>
              <span className="font-semibold">Google</span>
              <span className="font-semibold">AWS</span>
              <span className="font-semibold">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
