import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "10silicon - Innovative Software Solutions",
  description:
    "10silicon provides modern, scalable, and innovative software development solutions for global businesses.",
  keywords: [
    "10silicon",
    "software development",
    "web development",
    "Next.js",
    "AI solutions",
    "mobile apps"
  ],
  authors: [{name: "10silicon Team", url: "https://10silicon.com"}],
  creator: "10silicon",
  publisher: "10silicon",
  metadataBase: new URL("https://10silicon.com"),

  openGraph: {
    title: "10silicon - Innovative Software Solutions",
    description: "Providing cutting-edge software solutions globally.",
    url: "https://10silicon.com",
    siteName: "10silicon",
    images: [
      {
        url: "https://10silicon.com/web-app-manifest-512x512.png", // public folder me image
        width: 1200,
        height: 630,
        alt: "10silicon Software Solutions"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "10silicon - Innovative Software Solutions",
    description: "Providing cutting-edge software solutions globally.",
    images: ["https://10silicon.com/web-app-manifest-512x512.png"],
    creator: "@10silicon"
  },

  icons: {
    icon: "https://10silicon.com/favicon.ico",
    shortcut: "https://10silicon.com/favicon.ico",
    apple: "https://10silicon.com/apple-icon.png"
  },

  alternates: {
    canonical: "https://10silicon.com"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
