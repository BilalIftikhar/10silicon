import Link from 'next/link'
import { ArrowUpRight, Award, Users, Target, Lightbulb, Code, Brain, Palette, Database, Star } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Full-Stack Developer',
    bio: 'With 10+ years in web development and AI, Alex leads our technical vision and client relationships.',
    skills: ['Next.js', 'Laravel', 'AI/ML', 'Leadership'],
    icon: Code,
    color: 'from-blue-100 to-purple-100',
    iconBg: 'bg-blue-600'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead AI Engineer',
    bio: 'Sarah specializes in machine learning and AI integration, bringing cutting-edge solutions to our clients.',
    skills: ['TensorFlow', 'Python', 'PyTorch', 'Data Science'],
    icon: Brain,
    color: 'from-purple-100 to-pink-100',
    iconBg: 'bg-purple-600'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Senior Frontend Developer',
    bio: 'Michael creates stunning, responsive user interfaces with modern frameworks and design principles.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    icon: Palette,
    color: 'from-green-100 to-teal-100',
    iconBg: 'bg-green-600'
  },
  {
    name: 'Emily Davis',
    role: 'Backend Architect',
    bio: 'Emily designs scalable backend systems and APIs that power our most complex applications.',
    skills: ['Node.js', 'PHP', 'PostgreSQL', 'AWS'],
    icon: Database,
    color: 'from-orange-100 to-red-100',
    iconBg: 'bg-orange-600'
  }
]

const values = [
  {
    icon: <Target className="h-12 w-12 text-white" />,
    title: 'INNOVATION FIRST',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.',
    number: '01'
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    title: 'CLIENT-CENTRIC',
    description: 'Every project is tailored to our clients\' unique needs, ensuring maximum value and satisfaction.',
    number: '02'
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-white" />,
    title: 'CREATIVE EXCELLENCE',
    description: 'We combine technical expertise with creative thinking to solve complex problems elegantly.',
    number: '03'
  },
  {
    icon: <Award className="h-12 w-12 text-white" />,
    title: 'QUALITY COMMITMENT',
    description: 'We maintain the highest standards in code quality, security, and performance across all projects.',
    number: '04'
  }
]

const stats = [
  { number: '150+', label: 'PROJECTS COMPLETED' },
  { number: '50+', label: 'HAPPY CLIENTS' },
  { number: '5+', label: 'YEARS EXPERIENCE' },
  { number: '24/7', label: 'SUPPORT AVAILABLE' }
]

export default function AboutPage() {
  return (
    <main className="pt-20 bg-black overflow-hidden">
      {/* Hero Section with Massive Circle */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-yellow-400 font-black text-2xl">10</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-black fill-black" />
                </div>
              </div>
              <h3 className="text-4xl font-black text-black mb-4">10SILICON</h3>
              <p className="text-black/80 font-bold text-lg">INNOVATION</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              ABOUT<br />
              10SILICON
            </h1>
            <div className="w-32 h-2 bg-yellow-400 mb-8"></div>
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
              We're a passionate team of developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge technology and creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Mission & Vision Section */}
       <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative bg-white rounded-3xl p-12 hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">M</div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-black mb-8 leading-tight">OUR MISSION</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    To empower businesses worldwide with high-quality, cost-effective software solutions by leveraging our 
                    team of skilled professionals. We bridge the gap between ideas and execution, delivering reliable 
                    outsourced development services at competitive prices.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-white rounded-3xl p-12 hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">V</div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-black mb-8 leading-tight">OUR VISION</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    To become the most trusted outsourcing partner for startups and enterprises by combining technical 
                    excellence with transparent collaboration—helping clients scale without compromising on quality or budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-3xl p-12 hover:scale-105 transition-transform duration-500">
                <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">01</div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-black mb-8 leading-tight">OUR STORY</h2>
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Founded in 2025, 10Silicon emerged from a simple belief: that every business 
                      deserves access to world-class digital solutions. What started as a small team of 
                      passionate developers has grown into a full-service digital agency.
                    </p>
                    <p>
                      We've helped over 150 businesses transform their digital presence, from startups 
                      looking to make their mark to established enterprises seeking to innovate and stay 
                      competitive in the digital age.
                    </p>
                    <p>
                      Our expertise spans the full spectrum of modern web development, from AI-powered 
                      applications to scalable enterprise solutions, always with a focus on delivering 
                      exceptional user experiences and measurable business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
                OUR<br />
                JOURNEY
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-white/70 leading-relaxed">
                From humble beginnings to industry recognition, our journey has been driven by passion, 
                innovation, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
                WHY CHOOSE<br />
                OUR TEAM
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
              <ul className="space-y-6 text-xl text-white/70 leading-relaxed">
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <span>150+ projects delivered successfully</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <span>Rigorously vetted developers with 5+ years experience</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <span>Flexible engagement models (hourly, project-based, or dedicated teams)</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <span>Western-quality work at competitive rates</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative bg-white rounded-3xl p-12 hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">A</div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400 rounded-full translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-black mb-8 leading-tight">ABOUT 10SILICON</h2>
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      10Silicon is a dynamic software agency specializing in outsourced development for businesses globally. 
                      While we're a growing startup, our team comprises highly skilled designers and developers with expertise 
                      across modern technologies.
                    </p>
                    <p>
                      We partner with companies to handle their projects end-to-end—from concept to deployment—offering 
                      cost-effective solutions without sacrificing quality. Our dedicated professionals (UI/UX designers, 
                      full-stack developers, QA engineers) work with transparent workflows and regular updates.
                    </p>
                    <p>
                      Whether you're a startup seeking to build an MVP or an enterprise needing extra bandwidth, we provide 
                      reliable outsourcing with a focus on security, performance, and timely delivery at reasonable prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/3 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
              OUR VALUES
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-10 h-80 overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <div className="absolute top-6 right-6 text-8xl font-black text-yellow-400/20">{value.number}</div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/30 rounded-full translate-y-12 -translate-x-12 group-hover:rotate-45 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-black text-black mb-6 leading-tight">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-yellow-400/5 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
              MEET OUR TEAM
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts brings together years of experience in cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-700 hover:rotate-1">
                    <div className={`h-64 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-24 h-24 ${member.iconBg} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-6 left-6 w-12 h-12 bg-black/20 rounded-full group-hover:rotate-45 transition-transform duration-700"></div>
                      <div className="absolute top-4 left-4 text-5xl font-black text-black/5">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-black text-black mb-2 leading-tight">
                        {member.name.toUpperCase()}
                      </h3>
                      <p className="text-yellow-600 font-bold text-sm mb-4 uppercase tracking-wider">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-x-1/3 -translate-y-1/2">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-4xl font-black text-black mb-4">JOIN OUR</h3>
              <p className="text-black/80 font-bold text-lg">SUCCESS STORY</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="ml-auto max-w-2xl">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              READY TO<br />
              WORK WITH<br />
              US?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Let's discuss how our team can help you achieve your digital goals with innovative solutions and exceptional service.
            </p>
            
            <div className="space-y-6">
              <Link 
                href="/contact"
                className="block w-full bg-yellow-400 text-black px-10 py-8 rounded-2xl font-black text-xl hover:scale-105 transition-transform duration-300 text-center group tracking-wider"
              >
                <span className="flex items-center justify-center">
                  GET IN TOUCH
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
