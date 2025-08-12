'use client'

import Link from 'next/link'
import { ArrowRight, Home} from 'lucide-react'

export default function NotFound() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Glowing 404 Text */}
        <div className="relative mb-16">
          <h1 className="text-[180px] md:text-[240px] font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-700 leading-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-700 rounded-full filter blur-2xl opacity-30 -z-10"></div>
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Lost in the Digital Void
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          The page you're looking for has vanished into the ether. Don't worry -
          we'll guide you back to civilization.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/"
            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 group"
          >
            <Home className="h-5 w-5 mr-2" />
            Return Home
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}