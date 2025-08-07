import Link from 'next/link'
import { ArrowUpRight, CheckCircle, Code, Brain, Palette, Database, Cloud, Shield, Smartphone, Globe, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'WEB DEVELOPMENT',
    description: 'Full-stack web applications using modern frameworks like Next.js, React, and Laravel.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO-Friendly', 'Cross-browser Compatibility'],
    technologies: ['Next.js', 'React', 'Laravel', 'Node.js', 'TypeScript'],
    color: 'from-blue-100 to-purple-100',
    iconBg: 'bg-blue-600',
    number: '01'
  },
  {
    icon: Brain,
    title: 'AI SOLUTIONS',
    description: 'Intelligent applications powered by machine learning and artificial intelligence.',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Python', 'Scikit-learn'],
    color: 'from-purple-100 to-pink-100',
    iconBg: 'bg-purple-600',
    number: '02'
  },
  {
    icon: Palette,
    title: 'UI/UX DESIGN',
    description: 'User-centered design that creates engaging and intuitive digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
    color: 'from-green-100 to-teal-100',
    iconBg: 'bg-green-600',
    number: '03'
  },
  {
    icon: Database,
    title: 'DATABASE SOLUTIONS',
    description: 'Scalable database architecture and optimization for high-performance applications.',
    features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Strategies'],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    color: 'from-orange-100 to-red-100',
    iconBg: 'bg-orange-600',
    number: '04'
  },
  {
    icon: Cloud,
    title: 'CLOUD & DEVOPS',
    description: 'Cloud infrastructure setup, deployment automation, and continuous integration.',
    features: ['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    color: 'from-cyan-100 to-blue-100',
    iconBg: 'bg-cyan-600',
    number: '05'
  },
  {
    icon: Shield,
    title: 'SECURITY & CONSULTING',
    description: 'Comprehensive security audits and strategic technology consulting services.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Architecture Review'],
    technologies: ['OWASP', 'SSL/TLS', 'OAuth', 'JWT', 'Encryption'],
    color: 'from-red-100 to-pink-100',
    iconBg: 'bg-red-600',
    number: '06'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'DISCOVERY',
    description: 'We start by understanding your business goals, target audience, and technical requirements.',
    icon: Users
  },
  {
    step: '02',
    title: 'STRATEGY',
    description: 'We develop a comprehensive strategy and technical roadmap tailored to your needs.',
    icon: Brain
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Our designers create intuitive user experiences and stunning visual interfaces.',
    icon: Palette
  },
  {
    step: '04',
    title: 'DEVELOPMENT',
    description: 'Our developers bring the design to life with clean, scalable, and secure code.',
    icon: Code
  },
  {
    step: '05',
    title: 'TESTING',
    description: 'Rigorous testing ensures your application works flawlessly across all platforms.',
    icon: Shield
  },
  {
    step: '06',
    title: 'DEPLOYMENT',
    description: 'We deploy your application and provide ongoing support and maintenance.',
    icon: Zap
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-20 bg-black overflow-hidden">
      {/* Hero Section with Massive Circle */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-4xl font-black text-black mb-4">DIGITAL</h3>
              <p className="text-black/80 font-bold text-lg">SERVICES</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              OUR SERVICES
            </h1>
            <div className="w-32 h-2 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              From web development to AI solutions, we offer comprehensive digital services 
              to help your business thrive in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/3 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-10">
                        <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">{service.number}</div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                        
                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                            <IconComponent className="h-10 w-10 text-yellow-400" />
                          </div>
                          <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            {service.description}
                          </p>
                          
                          <div className="mb-8">
                            <h4 className="font-black text-black mb-4 text-lg">KEY FEATURES:</h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-600">
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                  <span className="font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mb-8">
                            <h4 className="font-black text-black mb-4 text-lg">TECHNOLOGIES:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-black font-black group-hover:translate-x-4 transition-transform duration-300">
                            <span className="text-lg">LEARN MORE</span>
                            <ArrowUpRight className="ml-3 h-6 w-6" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className={`h-full bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                          <div className={`w-32 h-32 ${service.iconBg} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                            <IconComponent className="h-16 w-16 text-white" />
                          </div>
                          <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
                          <div className="absolute bottom-8 left-8 w-16 h-16 bg-black/20 rounded-full group-hover:rotate-45 transition-transform duration-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-yellow-400/5 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
              OUR PROCESS
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure every project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative bg-white rounded-3xl p-10 h-80 overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                    <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">{step.step}</div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/30 rounded-full translate-y-12 -translate-x-12 group-hover:rotate-45 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                          <IconComponent className="h-10 w-10 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-black text-black mb-6 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-4xl font-black text-black mb-4">START YOUR</h3>
              <p className="text-black/80 font-bold text-lg">PROJECT TODAY</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="ml-auto max-w-2xl">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              READY TO<br />
              START YOUR<br />
              PROJECT?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Let's discuss how our services can help you achieve your business goals. 
              Get a free consultation and project estimate.
            </p>
            
            <div className="space-y-6">
              <Link 
                href="/contact"
                className="block w-full bg-yellow-400 text-black px-10 py-8 rounded-2xl font-black text-xl hover:scale-105 transition-transform duration-300 text-center group tracking-wider"
              >
                <span className="flex items-center justify-center">
                  GET FREE CONSULTATION
                  <ArrowUpRight className="ml-4 h-8 w-8 group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link 
                href="/portfolio"
                className="block w-full border-2 border-white/20 text-white px-10 py-8 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all duration-300 text-center group tracking-wider"
              >
                <span className="flex items-center justify-center">
                  VIEW OUR WORK
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
