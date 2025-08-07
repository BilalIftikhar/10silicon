import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '10Silicon - Web Development, AI Solutions & Digital Innovation',
  description: 'Transform your ideas into digital excellence with 10Silicon. Specializing in PHP, JavaScript, AI, and cutting-edge web development solutions.',
  keywords: 'web development, AI solutions, PHP, JavaScript, React, Next.js, digital agency, 10Silicon',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
