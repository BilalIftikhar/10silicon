'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'WORK', href: '/portfolio' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-black text-xl">10</span>
              </div>
              <span className="text-xl font-black text-white tracking-wider">
                10<span className="text-yellow-400">SILICON</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-bold text-sm tracking-widest"
              >
                {item.name}
              </Link>
            ))}
            
            <Link 
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-black text-sm tracking-wider hover:scale-105 transition-transform duration-300"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white block px-3 py-4 font-bold tracking-widest hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mx-3 mt-4 bg-yellow-400 text-black px-6 py-4 rounded-full font-black text-center hover:scale-105 transition-transform duration-300 tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                GET STARTED
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
