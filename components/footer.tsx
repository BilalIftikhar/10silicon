export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">10</span>
              </div>
              <span className="text-2xl font-bold text-white">
                10<span className="text-yellow-400">Silicon</span>
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              We create exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-white/70">
              <p>hello@10silicon.com</p>
              <p>+92 324 7203309</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Links
            </h3>
            <div className="space-y-3">
              <div><a href="/about" className="text-white/70 hover:text-yellow-400 transition-colors">About</a></div>
              <div><a href="/services" className="text-white/70 hover:text-yellow-400 transition-colors">Services</a></div>
              <div><a href="/portfolio" className="text-white/70 hover:text-yellow-400 transition-colors">Work</a></div>
              <div><a href="/contact" className="text-white/70 hover:text-yellow-400 transition-colors">Contact</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-white/50 text-sm">
            © 2025 10Silicon. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-yellow-400 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/50 hover:text-yellow-400 transition-colors text-sm">Terms</a>
            <a href="#" className="text-white/50 hover:text-yellow-400 transition-colors text-sm">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
