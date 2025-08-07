import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Let's discuss how we can help you leverage cutting-edge technology to achieve your business goals. 
          From AI-powered solutions to full-stack development, we're here to bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" asChild className="px-8 py-4 text-lg">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" /> Schedule a Call
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 text-blue-100">
          <p className="text-sm">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
