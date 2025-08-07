import Link from 'next/link'

interface MinimalSectionProps {
  title: string
  description?: string
  linkText?: string
  linkHref?: string
  children?: React.ReactNode
}

export default function MinimalSection({ 
  title, 
  description, 
  linkText, 
  linkHref, 
  children 
}: MinimalSectionProps) {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-normal text-black dark:text-white mb-8 leading-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-xl text-black dark:text-white mb-12 font-normal leading-relaxed">
            {description}
          </p>
        )}
        
        {children}
        
        {linkText && linkHref && (
          <div className="mt-12">
            <Link 
              href={linkHref}
              className="inline-block text-lg text-black dark:text-white font-normal border-b-2 border-black dark:border-white pb-1 hover:opacity-60 transition-opacity"
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
