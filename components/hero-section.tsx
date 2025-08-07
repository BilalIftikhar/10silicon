'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black dark:text-white mb-16 leading-tight tracking-tight">
          Digital Excellence
        </h1>
        
        <p className="text-xl sm:text-2xl text-black dark:text-white mb-16 font-normal leading-relaxed">
          We create exceptional digital experiences through innovative web development and AI solutions.
        </p>
        
        <div className="space-y-8">
          <Link 
            href="/portfolio" 
            className="inline-block text-xl text-black dark:text-white font-normal border-b-2 border-black dark:border-white pb-1 hover:opacity-60 transition-opacity"
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  )
}
